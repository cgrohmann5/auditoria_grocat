# 08 // ESTRATEGIA Y PLAN DE RECUPERACIÓN ANTE DESASTRES
### FARMASALUD — AUDITORÍA DE SEGURIDAD WEB // AUDITORIA_GROCAT // INACAP 2026

---

## 1. ESCENARIO DEL INCIDENTE — FARMASALUD VULNERADA

El Portal de Clientes de FarmaSalud fue comprometido mediante la explotación exitosa de **tres vulnerabilidades críticas** identificadas en el ambiente de producción:

| ID | Vulnerabilidad | Payload Utilizado | Resultado |
|----|---------------|-------------------|-----------|
| R-02 | Command Injection | `127.0.0.1; cat /etc/passwd` | Exposición del sistema de archivos del servidor, usuarios root, www-data y mysql |
| R-01 | SQL Injection | `' OR '1'='1` | Extracción completa de la tabla de pacientes sin autenticación |
| R-03 | XSS Reflejado | `<script>alert('XSS')</script>` | Ejecución de scripts maliciosos para robo de cookies de sesión |

> **Nivel de criticidad global: CRÍTICO** — Los tres vectores de ataque fueron ejecutados exitosamente en el ambiente DVWA configurado en nivel "Low", representando el estado equivalente a un portal de producción sin controles de seguridad implementados.

---

## 2. PLAN DE ACCIÓN INMEDIATO — REMEDIACIÓN DE CÓDIGO

### 🔴 Fase 1 — Bloqueo Crítico (primeras 24 horas)

- Desconectar el Portal de Clientes de internet de forma inmediata
- Revocar **todos** los tokens de sesión activos en la base de datos
- Deshabilitar las funciones de ejecución de sistema operativo en el backend PHP: `exec()`, `shell_exec()`, `system()`, `passthru()`
- Reescribir todas las consultas SQL vulnerables a formato **Prepared Statements** con parámetros vinculados
- Bloquear las IPs de origen del ataque en el firewall perimetral
- Cambiar todas las credenciales del servidor: root, www-data, usuario MySQL y claves de API

### 🟠 Fase 2 — Mitigación Web (primeras 72 horas)

- Aplicar codificación de salida HTML (`htmlspecialchars()`) en **todos** los campos que reflejan input del usuario
- Implementar cabeceras HTTP de seguridad:
  - `Content-Security-Policy: default-src 'self'`
  - `X-XSS-Protection: 1; mode=block`
  - `X-Content-Type-Options: nosniff`
  - `Strict-Transport-Security: max-age=31536000`
- Rotar claves de API y secretos de sesión del portal
- Forzar cambio de contraseña para todos los usuarios registrados

### 🟡 Fase 3 — Revisión General (primeros 7 días)

- Auditoría completa de código fuente con herramienta **SAST** (Static Application Security Testing)
- Revisión de dependencias con `npm audit` / `composer audit`
- Análisis forense de logs del servidor para determinar qué datos fueron exfiltrados y desde cuándo
- Eliminar cualquier webshell o backdoor instalado durante el período de compromiso
- Escaneo completo del servidor con antimalware

---

## 3. PROTOCOLO DE RESPUESTA A INCIDENTES (IR)

| Etapa | Acción | Responsable | Plazo Máximo |
|-------|--------|-------------|--------------|
| **Detección** | Alerta WAF/SIEM activa ante patrones de inyección | Equipo de Seguridad | < 1 hora |
| **Contención** | Aislamiento de red del servidor + revocación de tokens | Infraestructura | < 2 horas |
| **Erradicación** | Deploy desde rama `hotfix/security-patch` en Git | Desarrollo | < 4 horas |
| **Recuperación** | Restauración de BD desde último backup íntegro | DBA | < 6 horas |
| **Post-Incidente** | Informe forense + notificación legal a afectados | Seguridad + Legal | < 72 horas |

### Detección y Análisis
Activar alertas del WAF y SIEM ante patrones de inyección. Clasificar el incidente según severidad (CRÍTICO / ALTO / MEDIO) y notificar al equipo de respuesta en un plazo máximo de **1 hora** tras la detección.

### Contención
Aislamiento de red inmediato del servidor comprometido para detener fugas de datos en curso. Revocación total de tokens de sesión activos en la base de datos. Bloqueo de IPs de origen en el firewall perimetral y activación del modo de mantenimiento del portal para usuarios.

### Erradicación
Reemplazar el backend web con la versión corregida desde el repositorio seguro de Git (rama `hotfix/security-patch`). Restaurar bases de datos a partir de respaldos íntegros y verificados. Escanear todos los archivos del servidor en busca de webshells o malware instalado durante el período de compromiso.

### Recuperación
Reincorporar el servidor a producción solo tras validación de los parches aplicados. Monitorear intensivamente durante **72 horas** post-restauración con alertas en tiempo real. Verificar la integridad de los datos de pacientes y recetas médicas contra los respaldos previos al incidente.

---

## 4. OBJETIVOS DE RECUPERACIÓN — RTO / RPO

### RTO — Recovery Time Objective: ≤ 4 horas
Tiempo máximo tolerable para restablecer el Portal de Clientes y el acceso a recetas médicas digitales tras un incidente crítico confirmado. Superado este umbral, FarmaSalud enfrenta riesgo operativo grave por imposibilidad de despacho de medicamentos.

### RPO — Recovery Point Objective: ≤ 1 hora
Pérdida máxima de datos aceptable. Los respaldos automáticos de la base de datos de pacientes y recetas deben ejecutarse cada **60 minutos** en ambiente de producción para garantizar este objetivo.

---

## 5. ESTRATEGIA DE RESPALDO Y CONTINUIDAD OPERATIVA

### Política de Backups
- Respaldos automáticos **diarios completos** de la base de datos de pacientes y recetas, cifrados con **AES-256**
- Almacenamiento en servidor externo geográficamente separado (offsite)
- Respaldos **incrementales cada hora** durante el horario de operación (08:00–22:00)
- Prueba mensual de restauración en entorno de staging para validar integridad

### Alta Disponibilidad
- Implementar arquitectura de servidor en espera (Standby/Failover)
- Ante caída del servidor primario, tráfico redirigido automáticamente al nodo secundario en máximo **5 minutos** mediante balanceo de carga
- Monitoreo 24/7 con alertas automáticas de disponibilidad

### Entorno de Recuperación
- Mantener entorno de staging permanentemente actualizado con la última versión de código seguro
- Listo para ser promovido a producción sin tiempo de desarrollo adicional ante incidente crítico

---

## 6. INVENTARIO DE DATOS COMPROMETIDOS EN FARMASALUD

Basado en la evidencia técnica de los ataques ejecutados y documentados:

### Vía SQL Injection
- Nombres y apellidos de todos los pacientes registrados
- Historial de recetas médicas digitales
- Datos del programa de fidelización (puntos, historial de compras)
- Credenciales de acceso al portal (usuarios y contraseñas hasheadas)

### Vía Command Injection
- Archivo `/etc/passwd` completo del servidor
- Listado de usuarios del sistema: `root`, `www-data`, `mysql`, `daemon`, entre otros
- Estructura del sistema operativo del servidor de producción
- Potencial acceso a archivos de configuración con credenciales de base de datos

### Vía XSS Reflejado
- Cookies de sesión de clientes activos en el portal
- Tokens de autenticación del programa de fidelización
- Datos de navegación y comportamiento de usuarios autenticados

---

## 7. OBLIGACIONES LEGALES — LEY N° 19.628 (CHILE)

FarmaSalud opera en el sector salud procesando **datos personales sensibles** (recetas médicas, patologías implícitas, datos financieros de pacientes), lo que eleva el estándar de obligación legal ante una filtración.

### Notificación a afectados
Informar a los titulares de datos comprometidos dentro de **72 horas** desde la confirmación del incidente, indicando:
- Qué datos fueron expuestos y por qué vector
- Qué medidas de contención se adoptaron
- Qué acciones debe tomar el afectado (cambio de contraseña, monitoreo de historial médico)

### Registro obligatorio del incidente
Documentar y conservar:
- Fecha y hora exacta del incidente y su detección
- Categoría y volumen estimado de datos comprometidos
- Medidas técnicas y organizativas adoptadas
- Identidad del responsable del tratamiento de datos

### Responsabilidad por omisión de controles
La ausencia de controles básicos como **Prepared Statements** y **sanitización de inputs** puede constituir incumplimiento del deber de seguridad exigido por la ley, exponiendo a FarmaSalud a:
- Sanciones administrativas por parte del organismo regulador
- Acciones civiles por parte de los pacientes afectados
- Daño reputacional grave en el sector farmacéutico

---

## 8. LECCIONES APRENDIDAS — REUNIÓN POST-MORTEM

Realizar reunión de retrospectiva dentro de las **2 semanas** posteriores al incidente con los equipos de Desarrollo, Seguridad e Infraestructura.

### Preguntas clave a responder
- ¿Por qué no existían **Prepared Statements** en las consultas SQL del módulo de login?
- ¿Por qué el backend tenía funciones de sistema operativo accesibles desde el formulario de red?
- ¿Por qué no existía un **WAF activo** filtrando peticiones maliciosas antes del incidente?
- ¿Por qué no se realizaban pruebas de seguridad (pentesting) periódicas sobre el portal?
- ¿Con qué anticipación se detectó el ataque? ¿Existen alertas tempranas implementadas?

### Acciones resultantes
- Actualizar este plan de recuperación con los hallazgos del post-mortem
- Ajustar y reforzar los controles técnicos implementados
- Capacitación **obligatoria** del equipo de desarrollo en **OWASP Top 10**
- Establecer calendario de pentesting semestral para el Portal de Clientes
- Implementar revisiones de seguridad de código (code review de seguridad) en el proceso de desarrollo

---

*Documento elaborado por: Catalina Grohmann (cgrohmann5) — AUDITORIA_GROCAT*  
*Asignatura: Fundamentos de Seguridad de la Información — INACAP 2026*  
*Clasificación: USO INTERNO // CONFIDENCIAL*