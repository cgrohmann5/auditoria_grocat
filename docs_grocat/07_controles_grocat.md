# Cuadro de Mandos de Controles de Seguridad (Defensa en Profundidad)

Para mitigar los riesgos críticos identificados en el Portal de Clientes de FarmaSalud, se establece la siguiente matriz de controles basados en la estrategia de defensa en profundidad.

## Matriz de Implementación de Controles

| ID Control | Tipo de Control | Descripción Técnica del Control | Estado Actual | Vulnerabilidad Asociada |
| :---: | :---: | :--- | :---: | :--- |
| **CTRL-01** | Preventivo | Implementación de **Consultas Parametrizadas (Prepared Statements)** mediante ORM seguro en todo el backend. | PENDIENTE | Inyección SQL (SQLi) |
| **CTRL-02** | Preventivo | Activación de codificación de salida adaptativa al contexto (**Context-Aware Output Encoding**) en las vistas web. | PENDIENTE | XSS Reflejado |
| **CTRL-03** | Preventivo | Prohibición absoluta de funciones de shell (`system()`, `exec()`) sustituyéndolas por **APIs de red nativas**. | PENDIENTE | Inyección de Comandos |
| **CTRL-04** | Detectivo | Despliegue de un **Web Application Firewall (WAF)** para filtrar y bloquear payloads maliciosos (`'`, `<script>`, `;`) en tránsito. | PLANIFICADO | Transversal (SQLi, XSS, CmdInj) |
| **CTRL-05** | Correctivo | Configuración de directivas **Content Security Policy (CSP)** estrictas y atributos de cookies `HttpOnly` y `Secure`. | PENDIENTE | XSS Reflejado |
| **CTRL-06** | Administrativo | Configuración del principio de menor privilegio en las cuentas de servicio de la Base de Datos y Sistema Operativo. | PLANIFICADO | SQLi / Command Injection |