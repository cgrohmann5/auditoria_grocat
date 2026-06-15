# Reporte de Vulnerabilidad: Cross-Site Scripting Reflejado (XSS)

## 1. Evidencia del Ataque
El ataque se ejecutó inyectando código de JavaScript malicioso en el campo de entrada del formulario de saludo del portal de clientes.

* **Payload Utilizado:** `<script>alert('XSS')</script>`

![Evidencia de XSS Reflejado](img_<aaa><nnn>/xss_<aaa><nnn>.png)

## 2. Análisis Técnico (Por qué funciona)
La aplicación web toma el string ingresado por el usuario en el navegador, lo procesa en el servidor y lo incluye directamente dentro de la respuesta HTTP HTML sin codificar ni limpiar los caracteres especiales. 

Al no sanitizar los caracteres `<` y `>`, el navegador de la víctima interpreta que los datos suministrados no son texto plano, sino etiquetas HTML ejecutables (`<script>`). Esto permite forzar al navegador a ejecutar código JavaScript arbitrario en el contexto de la sesión de la víctima.

## 3. Puntuación y Severidad CVSS v3.1
* **Vector de Ataque:** `CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N`
* **Puntaje Base:** **6.1 (Media / Medium)**

### Justificación:
* **AV:N (Network):** Puede ser explotado remotamente enviando un enlace malicioso a la víctima.
* **AC:L (Low):** El código vulnerable siempre procesará el payload si el usuario accede al link.
* **PR:N (None):** El atacante no necesita credenciales en la aplicación para armar el vector.
* **UI:R (Required):** Requiere interacción del usuario (la víctima debe hacer clic en un enlace manipulado).
* **S:C (Changed):** El alcance cambia debido a que el script se ejecuta en el navegador del cliente externo, pudiendo acceder al DOM de su sesión.
* **Impacto:** En FarmaSalud, un atacante podría usar XSS para robar las cookies de sesión de los pacientes (secuestro de sesión) o redireccionarlos a portales de pago clonados (phishing) para robar datos bancarios de fidelización.

## 4. Estrategia de Defensas

### Política de Prevención (Desarrollo Seguro)
Toda variable que se renderice dinámicamente en las vistas web debe pasar por una capa de **Codificación de Salida (Context-Aware Output Encoding)**. Caracteres como `<`, `>`, `&`, `"`, y `'` deben convertirse a sus entidades HTML seguras correspondientes antes de ser impresas en pantalla.

### Control de Mitigación (Defensa en Profundidad)
1. **Content Security Policy (CSP):** Configurar cabeceras HTTP de CSP estrictas en los servidores de FarmaSalud que prohíban la ejecución de scripts inline (`unsafe-inline`) y solo permitan scripts originados desde fuentes explícitamente autorizadas.
2. **Atributos de Cookies Seguras:** Establecer la bandera `HttpOnly` en todas las cookies de autenticación y sesión de la plataforma, impidiendo de forma radical que scripts maliciosos de JavaScript tengan acceso a los tokens de sesión.