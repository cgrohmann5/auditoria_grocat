# Inventario y Valoración de Activos Críticos: FarmaSalud

## 1. Identificación de Activos
Para asegurar la continuidad del negocio y el cumplimiento normativo de FarmaSalud, se han categorizado los activos de información críticos expuestos a través del Portal de Clientes.

### Activos de Datos (Información)
* **AD-01: Base de Datos de Registros de Salud (EHR):** Contiene fichas médicas, recetas digitales emitidas, tratamientos farmacológicos e historial clínico implícito de los pacientes.
* **AD-02: Base de Datos de Clientes y Fidelización:** Almacena identidades (RUT/DNI), credenciales de acceso (hashes de contraseñas), correos electrónicos y puntos acumulados.
* **AD-03: Datos de Tarjetas de Pago (PCI):** Tokens de pasarelas de pago y datos financieros de transacciones para despacho a domicilio.

### Activos de Software (Aplicaciones)
* **AS-01: Portal de Clientes (Frontend/Backend):** Aplicación web interactiva que expone los servicios al consumidor.
* **AS-02: API de Integración Farmacéutica:** Servicio interno que comunica el portal con el inventario físico de las sucursales y la validación de seguros médicos.

### Activos de Infraestructura (Hardware/Soporte)
* **AI-01: Servidor de Aplicaciones:** Servidor o contenedor (ej. Docker) donde se aloja el backend y el entorno de ejecución.
* **AI-02: Servidor de Base de Datos:** Motor relacional que procesa las consultas y almacena de forma persistente los datos.

---

## 2. Matriz de Valoración de Activos (C-I-D)
La escala de valoración se define como: **Alta (H), Media (M), Baja (L)**.

| ID Activo | Nombre del Activo | Confidencialidad | Integridad | Disponibilidad | Justificación Legal/Operativa |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **AD-01** | Base de Datos de Salud (EHR) | **H** | **H** | **H** | Ley de Protección de la Vida Privada (Datos Sensibles). Su filtración genera multas graves. |
| **AD-02** | Base de Datos de Clientes | **H** | **M** | **M** | Datos personales de contacto. Alto riesgo de phishing si se filtran. |
| **AD-03** | Datos de Tarjetas de Pago | **H** | **H** | **M** | Regulado por estándares PCI-DSS. |
| **AS-01** | Portal de Clientes | **M** | **H** | **H** | Canal de venta digital principal. Una caída detiene los despachos. |
| **AI-01** | Servidor de Aplicaciones | **M** | **H** | **H** | Aloja la lógica del negocio. Si es vulnerado, expone todo el entorno. |