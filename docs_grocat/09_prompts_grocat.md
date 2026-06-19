# Bitácora de Uso de Inteligencia Artificial

## 1. Registro de Consultas y Prompts
A lo largo del desarrollo de esta auditoría, se utilizó Inteligencia Artificial como un asistente consultor para acelerar la comprensión técnica de los fallos y el diseño de las arquitecturas de mitigación en React y Markdown.

### Consulta 1: Estructuración del Informe de Vulnerabilidades
* **Herramienta:** Gemini / ChatGPT
* **Sección:** Transversal (01_resumen, 02_sqli, 03_xss, 04_comandos)
* **Prompt Utilizado:** > "Actúa como un auditor de seguridad senior. Necesito redactar un informe técnico en Markdown basado en la explotación de DVWA en nivel Low para una cadena de farmacias llamada 'FarmaSalud' que maneja recetas médicas y fidelización. Entrégame la estructura de resumen, SQLi (usando el payload ' OR '1'='1), XSS y Command Injection. Incluye vectores CVSS v3.1 reales y defensas enfocadas en desarrollo seguro y mitigación."
* **Qué se aceptó:** Se adoptó por completo la narrativa orientada al negocio farmacéutico, las justificaciones de los vectores CVSS v3.1 y los bloques de código explicativos de cómo se rompe la lógica en el backend.
* **Qué se corrigió/modificó:** Se ajustaron los marcadores de posición de las imágenes para que coincidieran exactamente con la nomenclatura solicitada por la rúbrica (`img_<aaa><nnn>/`).

### Consulta 2: Diseño de los Componentes React (Ejemplo Conceptual)
* **Herramienta:** Gemini / Copilot
* **Sección:** src/components/Matriz.jsx
* **Prompt Utilizado:**
  > "Genera un componente funcional en React llamado Matriz.jsx que use Tailwind CSS. Debe representar un mapa de calor de 5x5 para una matriz de riesgo (Probabilidad x Impacto). Los ejes deben ir de 1 a 5. Las celdas críticas deben ser rojas, las medias amarillas y las bajas verdes. Agrega una tabla abajo que explique los riesgos de FarmaSalud (filtración de recetas, secuestro de servidor, robo de puntos)."
* **Qué se aceptó:** El código base del componente visual utilizando mapas de divs con clases dinámicas de Tailwind (`bg-red-500`, `bg-yellow-400`, etc.).
* **Qué se corrigió/modificó:** Se integró la lógica de estados para que, al hacer clic en una celda de la matriz, se resalte el riesgo asociado en la tabla inferior.

## 2. Reflexión Final sobre el uso de IA
La IA actuó como un multiplicador de eficiencia. El uso de prompts específicos y contextualizados ("FarmaSalud", "recetas médicas", "consultas parametrizadas") impidió la generación de respuestas genéricas e inútiles. La responsabilidad técnica final recayó en mí como auditor, validando que los puntajes CVSS y las lógicas de código propuestas fueran técnicamente correctas y no introdujeran nuevas vulnerabilidades al ecosistema de la empresa.


# Bitácora de Uso de Inteligencia Artificial

## 1. Registro de Consultas y Prompts
A lo largo de la ejecución de esta auditoría técnica para FarmaSalud, se utilizó Inteligencia Artificial (IA) como un asistente consultor estratégico orientado al diseño de estructuras eficientes de documentación y plantillas de código seguro.

### Consulta 1: Estructuración del Informe de Vulnerabilidades
* **Herramienta:** Gemini / ChatGPT
* **Sección:** Transversal (`01_resumen`, `02_sqli`, `03_xss`, `04_comandos`)
* **Prompt Utilizado:**
  > "Actúa como un auditor de seguridad senior. Necesito redactar un informe técnico en Markdown basado en la explotación de DVWA en nivel Low para una cadena de farmacias llamada 'FarmaSalud' que maneja recetas médicas y fidelización. Entrégame la estructura de resumen, SQLi (usando el payload ' OR '1'='1), XSS y Command Injection. Incluye vectores CVSS v3.1 reales y defensas enfocadas en desarrollo seguro y mitigación."
* **Qué se aceptó:** La narrativa formal contextualizada en el negocio farmacéutico, las justificaciones de los vectores bases de severidad CVSS v3.1 y las estructuras base de los bloques de código PHP vulnerables.
* **Qué se corrigió/modificó:** Se sustituyeron manualmente los marcadores genéricos de la rúbrica para fijar el sufijo de carpeta real de manera exacta a `img_grocat/` y los nombres de imagen correspondientes a la estructura del proyecto.

### Consulta 2: Diseño de la Lógica de Componentes React
* **Herramienta:** Gemini / Copilot
* **Sección:** `src/components/Matriz.jsx`
* **Prompt Utilizado:**
  > "Genera un componente funcional en React llamado Matriz.jsx que use Tailwind CSS. Debe representar un mapa de calor de 5x5 para una matriz de riesgo (Probabilidad x Impacto). Los ejes deben ir de 1 a 5. Las celdas críticas deben ser rojas, las medias amarillas y las bajas verdes. Agrega una tabla abajo que explique los riesgos de FarmaSalud (filtración de recetas, secuestro de servidor, robo de puntos)."
* **Qué se aceptó:** El código estructural base y el mapeo de divs dinámicos con estilos estilizados de Tailwind CSS.
* **Qué se corrigió/modificó:** Se reescribió de manera explícita la vinculación de estados internos en React para que, al presionar una coordenada del mapa de calor, se filtre la tabla inferior y se resalte el riesgo de negocio analizado.

---

* **OPERADOR PRINCIPAL:** `cgrohmann5`
* **FORGE URL (GITHUB):** [https://github.com/cgrohmann5](https://github.com/cgrohmann5)
* **ESTADO OPERATIVO:** `SECURE-OPS // REPO_VERIFIED`