# Resumen Ejecutivo de Auditoría: FarmaSalud

## 1. Contexto de la Empresa Auditada
FarmaSalud es una cadena de farmacias a nivel nacional enfocada en la venta de medicamentos, gestión de recetas médicas y programas de fidelización de clientes. Al operar en el sector de la salud, la infraestructura tecnológica de FarmaSalud procesa, almacena y transmite Datos Personales Sensibles de pacientes (fichas médicas, tratamientos, diagnósticos implícitos en recetas) y Datos Financieros/Personales de consumo a través de su Portal de Clientes.

## 2. El Portal de Clientes y Activos Críticos
El Portal de Clientes permite a los usuarios:
* Consultar y cargar recetas médicas digitales.
* Revisar el historial de compras y puntos de fidelización.
* Gestionar métodos de pago y despacho a domicilio.

Debido a la naturaleza de la información, el portal interactúa directamente con bases de datos críticas que contienen Registros de Salud Electrónicos y Datos de Tarjetas de Pago. La confidencialidad y la integridad de este sistema son vitales para la continuidad del negocio y el cumplimiento legal (Ley de Protección de la Vida Privada).

## 3. Alcance de la Auditoría
Esta evaluación de seguridad consistió en un análisis técnico de vulnerabilidades ejecutado sobre el ambiente controlado de pruebas del portal (basado en la plataforma de entrenamiento DVWA) configurado en un nivel de seguridad "Low". El objetivo fundamental es identificar el impacto que tendrían fallos críticos de inyección y scripting en el ecosistema real de FarmaSalud.