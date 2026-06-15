# Reporte de Vulnerabilidad: Inyección de Comandos (Command Injection)

## 1. Evidencia del Ataque
El ataque se realizó aprovechando un formulario de diagnóstico de red (herramienta de ping) integrado en el portal administrativo/soporte de la aplicación.

* **Payload Utilizado:** `127.0.0.1; cat /etc/passwd`

![Evidencia de Inyección de Comandos](img_<aaa><nnn>/comandos_<aaa><nnn>.png)

## 2. Análisis Técnico (Por qué funciona)
El aplicativo web tiene como propósito realizar una prueba de conectividad llamando internamente a una función del sistema operativo subyacente (como `shell_exec()` o `system()`), concatenando la IP provista por el usuario.

El código interno opera de forma similar a: `system("ping -c 4 " + $target);`

Al utilizar el punto y coma `;` como separador de secuencias de comandos en Linux, el sistema operativo interpreta la línea de código como dos instrucciones independientes. Por ende, ejecuta el comando de ping original y, de inmediato, ejecuta de forma no autorizada la lectura del archivo de usuarios del sistema (`cat /etc/passwd`), devolviendo los resultados en la interfaz de la web.

## 3. Puntuación y Severidad CVSS v3.1
* **Vector de Ataque:** `CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H`
* **Puntaje Base:** **8.8 (Alta / High)** *(Nota: Si la aplicación corre con privilegios de root, la severidad escala a 9.8 Crítica).*

### Justificación:
* **AV:N (Network):** Ataque perpetrable de manera remota a través del formulario expuesto en la web.
* **PR:L (Low):** Si bien suele estar en paneles internos, cualquier usuario con mínimos privilegios (o mediante bypass) puede alcanzarlo.
* **C:H / I:H / A:H (High):** Máximo impacto en las tres dimensiones. Un atacante puede tomar control absoluto del servidor que aloja el software de FarmaSalud, permitiéndole extraer código fuente, instalar malware, alterar datos de recetas o causar la denegación total de los servicios farmacéuticos.

## 4. Estrategia de Defensas

### Política de Prevención (Desarrollo Seguro)
Queda estrictamente prohibido el uso de funciones que invoquen comandos directamente a la API de la Shell del Sistema Operativo basándose en entradas de usuarios. Si se requieren funciones de red o de sistema, se deben emplear las API e interfaces nativas del propio lenguaje de programación (ejemplo: librerías de red nativas de PHP o Node.js), las cuales no gatillan intérpretes de comandos.

### Control de Mitigación (Defensa en Profundidad)
1. **Principio de Privilegio Mínimo en SO:** Asegurar que el servidor web (Apache/Nginx/Node) se ejecute bajo un usuario del sistema operativo con nulos o limitados privilegios (como `www-data`), impidiendo que lea archivos del sistema raíz o ejecute comandos administrativos.
2. **Sandboxing / Containerización:** Aislar el backend de la aplicación dentro de contenedores (Docker) con sistemas de archivos de solo lectura, minimizando la superficie de daño en caso de una intrusión exitosa.