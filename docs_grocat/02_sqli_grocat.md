# Reporte de Vulnerabilidad: Inyección SQL (SQLi)

## 1. Evidencia del Ataque
El ataque se ejecutó explotando el formulario de consulta de ID del Portal de Clientes de FarmaSalud mediante la inyección de una compuerta lógica maliciosa.

* **URL de Explotación:** `https://dvwa-dnwe.onrender.com/vulnerabilities/sqli/?id=%27+OR+%271%27%3D%271&Submit=Submit#`
* **Payload Utilizado:** `' OR '1'='1`

![Evidencia de Inyección SQL](img_<aaa><nnn>/sqli_<aaa><nnn>.png)

## 2. Análisis Técnico (Por qué funciona)
La vulnerabilidad ocurre porque el aplicativo web concatena directamente la entrada del usuario (`id`) de forma dinámica en la consulta SQL, sin sanitización ni parametrización previa. El código del servidor ejecuta una consulta estructurada de la siguiente manera:

`SELECT first_name, last_name FROM users WHERE user_id = '$id';`

Al ingresar el payload `' OR '1'='1`, la consulta se transforma en:

`SELECT first_name, last_name FROM users WHERE user_id = '' OR '1'='1';`

Dado que la condición `'1'='1'` siempre es verdadera (True), el motor de la base de datos ignora la restricción del `user_id` y devuelve la totalidad de los registros de la tabla de usuarios, puenteando los mecanismos de autenticación y autorización.

## 3. Puntuación y Severidad CVSS v3.1
* **Vector de Ataque:** `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N`
* **Puntaje Base:** **7.5 (Alta / High)**

### Justificación:
* **AV:N (Network):** El ataque se realiza de forma remota a través de internet.
* **AC:L (Low):** No existen contramedidas ni condiciones especiales para explotarlo.
* **PR:N (None):** No se requieren privilegios previos ni haber iniciado sesión.
* **UI:N (None):** No se necesita la interacción de ningún usuario legítimo.
* **C:H (High):** El impacto en la confidencialidad es crítico; en el contexto de FarmaSalud, esto expone la base de datos completa de clientes, filtrando identidades, contraseñas hash, correos electrónicos y potencialmente el historial de recetas médicas.

## 4. Estrategia de Defensas

### Política de Prevención (Desarrollo Seguro)
Se prohíbe terminantemente la construcción de consultas SQL mediante la concatenación de variables de entrada. Todo desarrollo en FarmaSalud que interactúe con bases de datos debe implementar **Consultas Parametrizadas (Prepared Statements)** u Object-Relational Mapping (ORM) seguros que aíslen los datos del código ejecutable.

### Control de Mitigación (Defensa en Profundidad)
1. **Validación de Entradas:** Implementar una lista blanca estricta en el backend que valide que el parámetro `id` sea exclusivamente numérico (ej. usando expresiones regulares o forzando un casteo de tipo `int`).
2. **Principio de Menor Privilegio:** Configurar el usuario de la base de datos con el que se conecta la aplicación web para que solo tenga permisos de lectura estrictamente necesarios (`SELECT`), revocando capacidades de modificación o acceso a tablas administrativas del sistema.


