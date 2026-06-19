# Estrategia de Mitigación y Plan de Recuperación: FarmaSalud

## 1. Plan de Acción Inmediato (Remediación de Código)
Ante la criticidad de los hallazgos en el entorno de FarmaSalud, se define el siguiente orden de atención prioritaria para el equipo de desarrollo:

1. **Fase 1 (Bloqueo Crítico - Próximas 24 horas):** Parchear el fallo de *Command Injection* removiendo la invocación a la shell del sistema y el bug de *SQLi* reemplazando las consultas dinámicas por consultas parametrizadas.
2. **Fase 2 (Mitigación Web - Próximas 72 horas):** Sanitizar los formularios web propensos a *XSS* e inyectar las cabeceras HTTP de seguridad (`X-Frame-Options`, `Content-Security-Policy`, cookies `HttpOnly`).

---

## 2. Plan de Respuesta a Incidentes (En caso de Explotación Real)
Si se sospecha que estas vulnerabilidades han sido explotadas de forma maliciosa en el entorno de producción, se activará el siguiente protocolo:

### A. Contención
* **Aislamiento de Red:** Desconectar temporalmente el contenedor o servidor web afectado de la red principal para detener la extracción de datos o la ejecución de comandos.
* **Revocación de Credenciales:** Invalidar de inmediato todas las sesiones activas de usuarios en el portal y cambiar las contraseñas de conexión a las bases de datos.

### B. Erradicación y Recuperación
* **Despliegue de Línea Base Segura:** Reemplazar el código vulnerable de producción por la versión corregida y auditada desde el repositorio de control de versiones.
* **Restauración desde Respaldos:** Si la integridad del sistema operativo o de la base de datos fue comprometida por el *Command Injection*, se restaurará el último respaldo limpio (Backup) verificado.

### C. Post-Incidente (Lecciones Aprendidas)
* **Auditoría Forense:** Analizar los logs del servidor web y del WAF para determinar el alcance total del compromiso (qué datos exactos de recetas o clientes fueron comprometidos).
* **Notificación Legal:** En cumplimiento con la legislación vigente, notificar oportunamente a las entidades reguladoras y a los clientes afectados en caso de una filtración confirmada de fichas médicas.