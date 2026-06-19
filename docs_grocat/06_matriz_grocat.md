# Matriz de Riesgo de Ciberseguridad: FarmaSalud

## 1. Mapa de Calor (Probabilidad x Impacto)
Basado en los hallazgos técnicos del análisis de vulnerabilidades, se posicionan las amenazas identificadas en la siguiente escala (1-5):

* **Crítico (Rojo):** Mitigación inmediata (menos de 24-48 horas).
* **Alto/Medio (Amarillo):** Mitigación a corto plazo.
* **Bajo (Verde):** Monitoreo y mejora continua.

| Probabilidad / Impacto | 1 (Insignificante) | 2 (Menor) | 3 (Moderado) | 4 (Mayor) | 5 (Catastrófico) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **5 (Muy Alta)** | | | | | |
| **4 (Alta)** | | | **XSS Reflejado** | | **Inyección SQL** |
| **3 (Media)** | | | | | **Command Injection**|
| **2 (Baja)** | | | | | |
| **1 (Muy Baja)** | | | | | |

---

## 2. Tabla Detallada de Riesgos Identificados

| ID Riesgo | Vulnerabilidad Origen | Amenaza / Escenario de Impacto | Prob. | Imp. | Nivel de Riesgo |
| :---: | :--- | :--- | :---: | :---: | :---: |
| **R-01** | Inyección SQL (SQLi) | **Filtración Masiva de Recetas y Datos:** Un atacante extrae la base de datos completa de pacientes, exponiendo patologías y tratamientos. | 4 | 5 | **Crítico (20)** |
| **R-02** | Command Injection | **Secuestro Total del Servidor:** El atacante ejecuta comandos de sistema operativo, toma control del backend e instala malware o detiene los servicios de farmacia. | 3 | 5 | **Crítico (15)** |
| **R-03** | XSS Reflejado | **Robo de Puntos y Sesiones:** Robo de cookies de autenticación de clientes mediante enlaces maliciosos para realizar fraudes en el programa de fidelización. | 4 | 3 | **Alto (12)** |