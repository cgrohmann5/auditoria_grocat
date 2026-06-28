# Bitácora de Uso de Inteligencia Artificial
Este documento detalla el uso de herramientas de Inteligencia Artificial para la investigación, estructuración y redacción de los componentes clave de la auditoría de seguridad web de FarmaSalud.


## 1. Historial de Prompts y Uso de IA
## 01_resumen_grocat.md
### Prompt del usuario:
*"Hazme un resumen ejecutivo para una auditoría de seguridad web de FarmaSalud, una cadena de farmacias que opera un portal de clientes con recetas médicas digitales y programa de fidelización."*

### Resultado de la IA:
La IA ayudó a estructurar el contexto de la empresa, describir el alcance del portal de clientes y redactar una introducción clara orientada al negocio farmacéutico.

---
## 02_sqli_grocat.md
### Prompt del usuario:
*"Explícame por qué funciona la Inyección SQL con el payload ' OR '1'='1 en DVWA, cuál sería su impacto en FarmaSalud y cómo calcular su severidad CVSS v3.1."*

### Resultado de la IA:
La IA explicó el mecanismo de concatenación vulnerable, propuso el vector CVSS base y describió el impacto en términos de filtración de datos de pacientes y recetas médicas.

---
## 03_xss_grocat.md
### Prompt del usuario:
*"Explícame cómo funciona el XSS Reflejado con <script>alert('XSS')</script> en DVWA, qué riesgo representa para los clientes de FarmaSalud y cuál es su puntaje CVSS v3.1."*

### Resultado de la IA:
La IA colaboró en la explicación técnica del fallo de codificación de salida, el vector de ataque mediante enlace malicioso y el impacto en el robo de sesiones del programa de fidelización.

---
## 04_comandos_grocat.md
### Prompt del usuario:
*"Explícame la Inyección de Comandos con 127.0.0.1; cat /etc/passwd en DVWA, su impacto en el servidor de FarmaSalud y su vector CVSS v3.1."*

### Resultado de la IA:
La IA apoyó en la explicación del uso de separadores de shell, el riesgo de toma de control del servidor y la justificación de las métricas de confidencialidad, integridad y disponibilidad en el puntaje CVSS.

---
## 05_activos_grocat.md
### Prompt del usuario:
*"Genera un inventario de activos críticos para FarmaSalud con valoración de Confidencialidad, Integridad y Disponibilidad, considerando que opera un portal con recetas médicas y datos de pago."*

### Resultado de la IA:
La IA ayudó a identificar y clasificar los activos de datos, software e infraestructura, y a justificar su valoración C-I-D según el rubro farmacéutico y las normativas aplicables.

---
## 06_matriz_grocat.md
### Prompt del usuario:
*"Construye una matriz de riesgo probabilidad × impacto para las tres vulnerabilidades de FarmaSalud: SQLi, XSS y Command Injection. Ubícalas en la matriz y justifica su posición."*

### Resultado de la IA:
La IA colaboró en el diseño de la tabla de riesgos, la asignación de niveles de probabilidad e impacto y la redacción de los escenarios de amenaza para cada vulnerabilidad.

---
## 07_controles_grocat.md
### Prompt del usuario:
*"Propón controles de mitigación concretos para SQLi, XSS y Command Injection en FarmaSalud, referenciando OWASP Top 10 y NIST SP 800-53."*

### Resultado de la IA:
La IA apoyó en la estructuración del cuadro de controles, describiendo medidas preventivas, detectivas y correctivas, y asociándolas a los marcos de referencia solicitados.

---
## 08_recuperacion_grocat.md
### Prompt del usuario:
*"Genera un plan de recuperación ante desastres para FarmaSalud en caso de explotación de las vulnerabilidades encontradas, con fases de contención, erradicación y post-incidente."*

### Resultado de la IA:
La IA colaboró en la redacción del protocolo de respuesta a incidentes, incluyendo el aislamiento de red, restauración desde respaldos y notificación legal a los afectados.

---
# Diseño de componentes React y sitio web
### Prompt del usuario:
*"Genera un componente React con Tailwind CSS que represente un mapa de calor 5×5 de riesgo (Probabilidad × Impacto) con celdas rojas, amarillas y verdes según el nivel de riesgo. Agrega una tabla inferior que muestre el detalle del riesgo al hacer clic en cada marcador."*

### Resultado de la IA:
La IA apoyó en la generación del código base del componente visual, la estructura del sidebar de navegación y la organización del layout general del sitio en React.

---

* **OPERADOR PRINCIPAL:** `cgrohmann5`
* **FORGE URL (GITHUB):** [https://github.com/cgrohmann5](https://github.com/cgrohmann5)
* **ESTADO OPERATIVO:** `SECURE-OPS // REPO_VERIFIED`