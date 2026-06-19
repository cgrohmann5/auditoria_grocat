import React, { useState } from 'react';
import './App.css'; // Asegúrate de importar el archivo CSS

export default function Matriz() {
  const [seccionActiva, setSeccionActiva] = useState('resumen');
  const [riesgoSeleccionado, setRiesgoSeleccionado] = useState(null);

  // Base de datos interactiva basada exactamente en tus archivos de riesgo (.md)
  const riesgosData = {
    'R-01': { 
      id: 'R-01', 
      vuln: 'Inyección SQL (SQLi)', 
      amenaza: 'Filtración Masiva de Recetas y Datos: Un atacante extrae la base de datos completa de pacientes, exponiendo patologías y tratamientos farmacológicos.', 
      prob: 4, 
      imp: 5, 
      nivel: 'CRÍTICO (20)' 
    },
    'R-02': { 
      id: 'R-02', 
      vuln: 'Command Injection', 
      amenaza: 'Secuestro Total del Servidor: El atacante ejecuta comandos de sistema operativo, toma control del backend e instala malware o detiene los servicios de farmacia.', 
      prob: 3, 
      imp: 5, 
      nivel: 'CRÍTICO (15)' 
    },
    'R-03': { 
      id: 'R-03', 
      vuln: 'XSS Reflejado', 
      amenaza: 'Robo de Puntos y Sesiones: Robo de cookies de autenticación de clientes mediante enlaces maliciosos para realizar fraudes en el programa de fidelización.', 
      prob: 4, 
      imp: 3, 
      nivel: 'ALTO (12)' 
    }
  };

  return (
    <div className="cod-dashboard">
      {/* HEADER TÁCTICO */}
      <header className="cod-header">
        <div className="cod-logo-area">
          <span className="cod-title-main">FARMASALUD</span>
          <span className="cod-title-sub">SECURE-OPS // AUDIT_GROCAT</span>
        </div>
        <div className="cod-system-status">
          <span className="status-indicator online"></span> ENTORNO DE EVALUACIÓN: INACAP_V2026
        </div>
      </header>

      <div className="cod-layout">
        {/* MENÚ DE SELECCIÓN LATERAL (Abarca de la 01 a la 09) */}
        <aside className="cod-sidebar">
          <div className="sidebar-title">DOCUMENTACIÓN GENERAL</div>
          <nav className="cod-nav">
            <button className={`cod-nav-btn ${seccionActiva === 'resumen' ? 'active' : ''}`} onClick={() => setSeccionActiva('resumen')}>
              <span className="btn-id">01</span> RESUMEN EJECUTIVO
            </button>
            <button className={`cod-nav-btn ${seccionActiva === 'sqli' ? 'active' : ''}`} onClick={() => setSeccionActiva('sqli')}>
              <span className="btn-id">02</span> INYECCIÓN SQL (SQLi)
            </button>
            <button className={`cod-nav-btn ${seccionActiva === 'xss' ? 'active' : ''}`} onClick={() => setSeccionActiva('xss')}>
              <span className="btn-id">03</span> XSS REFLEJADO
            </button>
            <button className={`cod-nav-btn ${seccionActiva === 'comandos' ? 'active' : ''}`} onClick={() => setSeccionActiva('comandos')}>
              <span className="btn-id">04</span> INYECCIÓN DE COMANDOS
            </button>
            <button className={`cod-nav-btn ${seccionActiva === 'activos' ? 'active' : ''}`} onClick={() => setSeccionActiva('activos')}>
              <span className="btn-id">05</span> VALORACIÓN DE ACTIVOS
            </button>
            <button className={`cod-nav-btn ${seccionActiva === 'matriz_riesgo' ? 'active' : ''}`} onClick={() => setSeccionActiva('matriz_riesgo')}>
              <span className="btn-id">06</span> MATRIZ DE RIESGO
            </button>
            <button className={`cod-nav-btn ${seccionActiva === 'controles' ? 'active' : ''}`} onClick={() => setSeccionActiva('controles')}>
              <span className="btn-id">07</span> CUADRO DE CONTROLES
            </button>
            <button className={`cod-nav-btn ${seccionActiva === 'recuperacion' ? 'active' : ''}`} onClick={() => setSeccionActiva('recuperacion')}>
              <span className="btn-id">08</span> PLAN DE RECUPERACIÓN
            </button>
            <button className={`cod-nav-btn ${seccionActiva === 'prompts' ? 'active' : ''}`} onClick={() => setSeccionActiva('prompts')}>
              <span className="btn-id">09</span> BITÁCORA DE IA & REPO
            </button>
          </nav>
        </aside>

        {/* ÁREA DE CONTENIDO PRINCIPAL EXTENDIDA */}
        <main className="cod-content-area">
          
          {/* 01_RESUMEN_GROCAT */}
          {seccionActiva === 'resumen' && (
            <section className="cod-section animate-fade">
              <h2>01 // RESUMEN EJECUTIVO DE AUDITORÍA</h2>
              <div className="cod-card">
                <h3>1. Contexto de la Empresa Auditada</h3>
                <p>FarmaSalud es una cadena de farmacias a nivel nacional enfocada en la venta de medicamentos, gestión de recetas médicas y programas de fidelización de clientes. Al operar en el sector de la salud, la infraestructura tecnológica de FarmaSalud procesa, almacena y transmite Datos Personales Sensibles de pacientes (fichas médicas, tratamientos, diagnósticos implícitos en recetas) y Datos Financieros/Personales de consumo a través de su Portal de Clientes.</p>
                
                <h3>2. El Portal de Clientes y Activos Críticos</h3>
                <p>El Portal de Clientes permite a los usuarios consultar y cargar recetas médicas digitales, revisar el historial de compras y puntos de fidelización, y gestionar métodos de pago y despacho a domicilio. Debido a la naturaleza de la información, el portal interactúa directamente con bases de datos críticas que contienen Registros de Salud Electrónicos y Datos de Tarjetas de Pago. La confidencialidad y la integridad de este sistema son vitales para la continuidad del negocio y el cumplimiento legal (Ley de Protección de la Vida Privada).</p>
                
                <h3>3. Alcance de la Auditoría</h3>
                <p>Esta evaluación de seguridad consistió en un análisis técnico de vulnerabilidades ejecutado sobre el ambiente controlado de pruebas del portal (basado en la plataforma de entrenamiento DVWA) configurado en un nivel de seguridad "Low". El objetivo fundamental es identificar el impacto que tendrían fallos críticos de inyección y scripting en el ecosistema real de FarmaSalud.</p>
              </div>
            </section>
          )}

          {/* 02_SQLI_GROCAT */}
          {seccionActiva === 'sqli' && (
            <section className="cod-section animate-fade">
              <h2>02 // REPORTE DE VULNERABILIDAD: INYECCIÓN SQL (SQLi)</h2>
              <div className="cod-card">
                <div className="cod-alert-tag high">AMENAZA DETECTADA // SEVERIDAD ALTA</div>
                <h3>1. Evidencia del Ataque</h3>
                <p>El ataque se ejecutó explotando el formulario de consulta de ID del Portal de Clientes de FarmaSalud mediante la inyección de una compuerta lógica maliciosa.</p>
                <p><strong>URL de Explotación:</strong> <code>https://dvwa-dnwe.onrender.com/vulnerabilities/sqli/?id=%27+OR+%271%27%3D%271&Submit=Submit#</code></p>
                <p><strong>Payload Utilizado:</strong> <code>' OR '1'='1</code></p>

                <h3>2. Análisis Técnico (Por qué funciona)</h3>
                <p>La vulnerabilidad ocurre porque el aplicativo web concatena directamente la entrada del usuario (<code>id</code>) de forma dinámica en la consulta SQL, sin sanitización ni parametrización previa. El código del servidor ejecuta una consulta estructurada de la siguiente manera:</p>
                <div className="cod-code-box">
                  <code>SELECT first_name, last_name FROM users WHERE user_id = '$id';</code>
                </div>
                <p>Al ingresar el payload <code>' OR '1'='1</code>, la consulta se transforma en:</p>
                <div className="cod-code-box">
                  <code>SELECT first_name, last_name FROM users WHERE user_id = '' OR '1'='1';</code>
                </div>
                <p>Dado que la condición <code>'1'='1'</code> siempre es verdadera (True), el motor de la base de datos ignora la restricción del <code>user_id</code> y devuelve la totalidad de los registros de la tabla de usuarios, puenteando los mecanismos de autenticación y autorización.</p>

                <h3>3. Puntuación y Severidad CVSS v3.1</h3>
                <p><strong>Vector de Ataque:</strong> <code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N</code> // <strong>Puntaje Base:</strong> 7.5 (Alta / High)</p>
                <p><em>Justificación:</em> El ataque se realiza de forma remota a través de internet (AV:N), con baja complejidad al no existir contramedidas (AC:L). No se requieren privilegios previos (PR:N) ni interacción de un usuario legítimo (UI:N). El impacto en la confidencialidad es crítico (C:H) ya que expone la base de datos completa de clientes, filtrando identidades, hashes de contraseñas, correos y el historial confidencial de recetas médicas.</p>

                <h3>4. Estrategia de Defensas</h3>
                <p><strong>Política de Prevención (Desarrollo Seguro):</strong> Se prohíbe terminantemente la construcción de consultas SQL mediante la concatenación de variables de entrada. Todo desarrollo en FarmaSalud que interactúe con bases de datos debe implementar <strong>Consultas Parametrizadas (Prepared Statements)</strong> u Object-Relational Mapping (ORM) seguros que aíslen los datos del código ejecutable.</p>
                <p><strong>Control de Mitigación (Defensa en Profundidad):</strong></p>
                <p>1. <em>Validación de Entradas:</em> Implementar una lista blanca estricta en el backend que valide que el parámetro sea exclusivamente numérico (ej. usando expresiones regulares o forzando un casteo de tipo <code>int</code>).</p>
                <p>2. <em>Principio de Menor Privilegio:</em> Configurar el usuario de la base de datos con el que se conecta la aplicación web para que solo tenga permisos de lectura estrictamente necesarios (<code>SELECT</code>), revocando capacidades de modificación o acceso a tablas administrativas del sistema.</p>
              </div>
            </section>
          )}

          {/* 03_XSS_GROCAT */}
          {seccionActiva === 'xss' && (
            <section className="cod-section animate-fade">
              <h2>03 // REPORTE DE VULNERABILIDAD: CROSS-SITE SCRIPTING REFLEJADO (XSS)</h2>
              <div className="cod-card">
                <div className="cod-alert-tag medium">AMENAZA DETECTADA // SEVERIDAD MEDIA</div>
                <h3>1. Evidencia del Ataque</h3>
                <p>El ataque se ejecutó inyectando código de JavaScript malicioso en el campo de entrada del formulario de saludo del portal de clientes.</p>
                <p><strong>Payload Utilizado:</strong> <code>&lt;script&gt;alert('XSS')&lt;/script&gt;</code></p>

                <h3>2. Análisis Técnico (Por qué funciona)</h3>
                <p>La aplicación web toma el string ingresado por el usuario en el navegador, lo procesa en el servidor y lo incluye directamente dentro de la respuesta HTTP HTML sin codificar ni limpiar los caracteres especiales. Al no sanitizar los caracteres <code>&lt;</code> y <code>&gt;</code>, el navegador de la víctima interpreta que los datos suministrados no son texto plano, sino etiquetas HTML ejecutables (<code>&lt;script&gt;</code>). Esto permite forzar al navegador a ejecutar código JavaScript arbitrario en el contexto de la sesión de la víctima.</p>

                <h3>3. Puntuación y Severidad CVSS v3.1</h3>
                <p><strong>Vector de Ataque:</strong> <code>CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N</code> // <strong>Puntaje Base:</strong> 6.1 (Media / Medium)</p>
                <p><em>Justificación:</em> Puede ser explotado remotamente enviando un enlace malicioso a la víctima (AV:N), con baja complejidad (AC:L). No se necesitan credenciales (PR:N) pero sí requiere interacción del usuario (UI:R), ya que la víctima debe hacer clic en el link manipulado. El alcance cambia (S:C) porque vulnera el DOM de la sesión. El impacto permite robar cookies de sesión de los pacientes o redireccionarlos a portales de pago clonados (phishing) para robar datos bancarios de fidelización.</p>

                <h3>4. Estrategia de Defensas</h3>
                <p><strong>Política de Prevención (Desarrollo Seguro):</strong> Toda variable que se renderice dinámicamente en las vistas web debe pasar por una capa de <strong>Codificación de Salida (Context-Aware Output Encoding)</strong>. Caracteres como <code>&lt;</code>, <code>&gt;</code>, <code>&amp;</code>, <code>"</code>, y <code>'</code> deben convertirse a sus entidades HTML seguras correspondientes antes de ser impresas en pantalla.</p>
                <p><strong>Control de Mitigación (Defensa en Profundidad):</strong></p>
                <p>1. <em>Content Security Policy (CSP):</em> Configurar cabeceras HTTP de CSP estrictas en los servidores de FarmaSalud que prohíban la ejecución de scripts inline (<code>unsafe-inline</code>) y solo permitan scripts originados desde fuentes legítimas.</p>
                <p>2. <em>Atributos de Cookies Seguras:</em> Establecer la bandera <code>HttpOnly</code> en todas las cookies de autenticación de la plataforma, impidiendo que scripts maliciosos de JavaScript tengan acceso a los tokens de sesión mediante el DOM.</p>
              </div>
            </section>
          )}

          {/* 04_COMANDOS_GROCAT */}
          {seccionActiva === 'comandos' && (
            <section className="cod-section animate-fade">
              <h2>04 // REPORTE DE VULNERABILIDAD: INYECCIÓN DE COMANDOS (COMMAND INJECTION)</h2>
              <div className="cod-card">
                <div className="cod-alert-tag high">AMENAZA DETECTADA // SEVERIDAD ALTA</div>
                <h3>1. Evidencia del Ataque</h3>
                <p>El ataque se realizó aprovechando un formulario de diagnóstico de red (herramienta de ping) integrado en el portal administrativo/soporte de la aplicación.</p>
                <p><strong>Payload Utilizado:</strong> <code>127.0.0.1; cat /etc/passwd</code></p>

                <h3>2. Análisis Técnico (Por qué funciona)</h3>
                <p>El aplicativo web tiene como propósito realizar una prueba de conectividad llamando internamente a una función del sistema operativo subyacente (como <code>shell_exec()</code> o <code>system()</code>), concatenando la IP provista por el usuario. El código interno opera de forma similar a:</p>
                <div className="cod-code-box">
                  <code>system("ping -c 4 " + $target);</code>
                </div>
                <p>Al utilizar el punto y coma <code>;</code> como separador de secuencias de comandos en Linux, el sistema operativo interpreta la línea de código como dos instrucciones independientes. Por ende, ejecuta el comando de ping original y, de inmediato, ejecuta de forma no autorizada la lectura del archivo de usuarios del sistema (<code>cat /etc/passwd</code>), devolviendo los resultados directamente en la interfaz.</p>

                <h3>3. Puntuación y Severidad CVSS v3.1</h3>
                <p><strong>Vector de Ataque:</strong> <code>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H</code> // <strong>Puntaje Base:</strong> 8.8 (Alta / High)</p>
                <p><em>Justificación:</em> Es de acceso remoto por red (AV:N), complejidad baja (AC:L) y requiere privilegios mínimos de panel o soporte técnico (PR:L) sin interacción de usuarios adicionales (UI:N). El impacto es masivo en las tres dimensiones (C:H/I:H/A:H). Un atacante puede tomar control absoluto del servidor que aloja el software de FarmaSalud, permitiéndole extraer código fuente, instalar malware, alterar datos de recetas o causar una denegación de servicio (DoS).</p>

                <h3>4. Estrategia de Defensas</h3>
                <p><strong>Política de Prevención (Desarrollo Seguro):</strong> Queda estrictamente prohibido el uso de funciones que invoquen comandos directamente a la API de la Shell del Sistema Operativo basándose en entradas de usuarios. Si se requieren funciones de red o de sistema, se deben emplear las API e interfaces nativas del propio lenguaje de programación (ejemplo: librerías de red nativas de PHP o Node.js), las cuales no gatillan intérpretes de comandos.</p>
                <p><strong>Control de Mitigación (Defensa en Profundidad):</strong></p>
                <p>1. <em>Principio de Privilegio Mínimo en SO:</em> Asegurar que el servidor web se ejecute bajo un usuario del sistema operativo con nulos o limitados privilegios (como <code>www-data</code>), impidiendo que lea archivos raíces o ejecute comandos administrativos.</p>
                <p>2. <em>Sandboxing / Containerización:</em> Aislar el backend de la aplicación dentro de contenedores (Docker) con sistemas de archivos de solo lectura, minimizando la superficie de daño en caso de una intrusión exitosa.</p>
              </div>
            </section>
          )}

          {/* 05_ACTIVOS_GROCAT */}
          {seccionActiva === 'activos' && (
            <section className="cod-section animate-fade">
              <h2>05 // INVENTARIO Y VALORACIÓN DE ACTIVOS CRÍTICOS</h2>
              <div className="cod-card">
                <h3>1. Identificación de Activos</h3>
                <p>Para asegurar la continuidad del negocio y el cumplimiento normativo de FarmaSalud, se han categorizado los activos de información críticos expuestos a través del Portal de Clientes:</p>
                <ul>
                  <li><strong>AD-01: Base de Datos de Registros de Salud (EHR):</strong> Contiene fichas médicas, recetas digitales emitidas, tratamientos farmacológicos e historial clínico implícito de los pacientes.</li>
                  <li><strong>AD-02: Base de Datos de Clientes y Fidelización:</strong> Almacena identidades (RUT/DNI), credenciales de acceso (hashes de contraseñas), correos electrónicos y puntos acumulados.</li>
                  <li><strong>AD-03: Datos de Tarjetas de Pago (PCI):</strong> Tokens de pasarelas de pago y datos financieros de transacciones para despacho a domicilio.</li>
                  <li><strong>AS-01: Portal de Clientes (Frontend/Backend):</strong> Aplicación web interactiva que expone los servicios al consumidor.</li>
                  <li><strong>AS-02: API de Integración Farmacéutica:</strong> Servicio interno que comunica el portal con el inventario físico de las sucursales y la validación de seguros médicos.</li>
                  <li><strong>AI-01: Servidor de Aplicaciones:</strong> Servidor o contenedor (ej. Docker) donde se aloja el backend y el entorno de ejecución.</li>
                  <li><strong>AI-02: Servidor de Base de Datos:</strong> Motor relacional que procesa las consultas y almacena de forma persistente los datos.</li>
                </ul>

                <h3>2. Matriz de Valoración de Activos (C-I-D)</h3>
                <p>Escala de valoración: Alta (H), Media (M), Baja (L).</p>
                <div style={{overflowX: 'auto'}}>
                  <table className="cod-table">
                    <thead>
                      <tr>
                        <th>ID Activo</th>
                        <th>Nombre del Activo</th>
                        <th>Confidencialidad</th>
                        <th>Integridad</th>
                        <th>Disponibilidad</th>
                        <th>Justificación Legal/Operativa</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>AD-01</strong></td>
                        <td>Base de Datos de Salud (EHR)</td>
                        <td className="highlight-orange">H</td>
                        <td className="highlight-orange">H</td>
                        <td className="highlight-orange">H</td>
                        <td>Ley de Protección de la Vida Privada (Datos Sensibles). Su filtración genera multas graves.</td>
                      </tr>
                      <tr>
                        <td><strong>AD-02</strong></td>
                        <td>Base de Datos de Clientes</td>
                        <td className="highlight-orange">H</td>
                        <td>M</td>
                        <td>M</td>
                        <td>Datos personales de contacto. Alto riesgo de phishing si se filtran.</td>
                      </tr>
                      <tr>
                        <td><strong>AD-03</strong></td>
                        <td>Datos de Tarjetas de Pago</td>
                        <td className="highlight-orange">H</td>
                        <td className="highlight-orange">H</td>
                        <td>M</td>
                        <td>Regulado por estándares PCI-DSS.</td>
                      </tr>
                      <tr>
                        <td><strong>AS-01</strong></td>
                        <td>Portal de Clientes</td>
                        <td>M</td>
                        <td className="highlight-orange">H</td>
                        <td className="highlight-orange">H</td>
                        <td>Canal de venta digital principal. Una caída detiene los despachos.</td>
                      </tr>
                      <tr>
                        <td><strong>AI-01</strong></td>
                        <td>Servidor de Aplicaciones</td>
                        <td>M</td>
                        <td className="highlight-orange">H</td>
                        <td className="highlight-orange">H</td>
                        <td>Aloja la lógica del negocio. Si es vulnerado, expone todo el entorno.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          )}

          {/* 06_MATRIZ_GROCAT */}
          {seccionActiva === 'matriz_riesgo' && (
            <section className="cod-section animate-fade">
              <h2>06 // MATRIZ DE RIESGO DE CIBERSEGURIDAD</h2>
              <div className="cod-card">
                <h3>1. Mapa de Calor Táctil (Probabilidad x Impacto)</h3>
                <p className="instruction-text">Haz clic en los códigos <span className="highlight-orange">R-XX</span> de las celdas activas para abrir el panel de control lateral:</p>
                
                <div className="cod-grid-container">
                  <div className="cod-matrix-heat">
                    <div className="matrix-grid">
                      {[5, 4, 3, 2, 1].map((impacto) => (
                        <div key={impacto} className="matrix-row">
                          <span className="axis-label-y">{impacto}</span>
                          {[1, 2, 3, 4, 5].map((probabilidad) => {
                            let celdaClase = "cell-normal";
                            let textoCelda = "";
                            let idRiesgo = null;

                            if (probabilidad === 4 && impacto === 5) { celdaClase = "cell-critica"; textoCelda = "R-01"; idRiesgo = "R-01"; }
                            if (probabilidad === 3 && impacto === 5) { celdaClase = "cell-critica"; textoCelda = "R-02"; idRiesgo = "R-02"; }
                            if (probabilidad === 4 && impacto === 3) { celdaClase = "cell-alta"; textoCelda = "R-03"; idRiesgo = "R-03"; }

                            return (
                              <button 
                                key={probabilidad} 
                                className={`matrix-cell ${celdaClase} ${riesgoSeleccionado === idRiesgo && idRiesgo ? 'selected-cell' : ''}`}
                                onClick={() => idRiesgo && setRiesgoSeleccionado(idRiesgo)}
                                disabled={!idRiesgo}
                              >
                                {textoCelda}
                              </button>
                            );
                          })}
                        </div>
                      ))}
                      <div className="matrix-row axis-x-row">
                        <span></span>
                        {[1, 2, 3, 4, 5].map((p) => <span key={p} className="axis-label-x">{p}</span>)}
                      </div>
                    </div>
                  </div>

                  <div className="cod-threat-visor">
                    <div className="visor-header">INFORMACIÓN EN TIEMPO REAL DEL RIESGO</div>
                    {riesgoSeleccionado ? (
                      <div className="visor-body animate-fade">
                        <div className="visor-row"><strong>CÓDIGO OPERATIVO:</strong> <span className="highlight-orange">{riesgosData[riesgoSeleccionado].id}</span></div>
                        <div className="visor-row"><strong>Vulnerabilidad:</strong> {riesgosData[riesgoSeleccionado].vuln}</div>
                        <div className="visor-row"><strong>Impacto en Negocio:</strong> {riesgosData[riesgoSeleccionado].amenaza}</div>
                        <div className="visor-row"><strong>Métrica de Control:</strong> Probabilidad {riesgosData[riesgoSeleccionado].prob} x Impacto {riesgosData[riesgoSeleccionado].imp}</div>
                        <div className="visor-row"><strong>Nivel Prioritario:</strong> <span className="badge-severidad">{riesgosData[riesgoSeleccionado].nivel}</span></div>
                      </div>
                    ) : (
                      <div className="visor-placeholder">SELECCIONE UNA CELDA ACTIVA EN LA MATRIZ DE CALOR</div>
                    )}
                  </div>
                </div>

                <h3 style={{marginTop: '30px'}}>2. Clasificación de Escalas</h3>
                <ul>
                  <li><strong>Crítico (Rojo):</strong> Mitigación inmediata (menos de 24-48 horas).</li>
                  <li><strong>Alto/Medio (Amarillo):</strong> Mitigación a corto plazo.</li>
                  <li><strong>Bajo (Verde):</strong> Monitoreo y mejora continua.</li>
                </ul>
              </div>
            </section>
          )}

          {/* 07_CONTROLES_GROCAT */}
          {seccionActiva === 'controles' && (
            <section className="cod-section animate-fade">
              <h2>07 // CUADRO DE MANDOS DE CONTROLES DE SEGURIDAD</h2>
              <div className="cod-card">
                <h3>Estrategia de Defensa en Profundidad</h3>
                <p>Para mitigar los riesgos identificados en el Portal de Clientes de FarmaSalud de acuerdo con los estándares internacionales, se despliega el siguiente control de mandos:</p>
                <div style={{overflowX: 'auto'}}>
                  <table className="cod-table">
                    <thead>
                      <tr>
                        <th>ID Control</th>
                        <th>Tipo de Control</th>
                        <th>Descripción Técnica del Control</th>
                        <th>Estado Actual</th>
                        <th>Vulnerabilidad Asociada</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>CTRL-01</strong></td>
                        <td>Preventivo</td>
                        <td>Implementación de <strong>Consultas Parametrizadas (Prepared Statements)</strong> mediante ORM seguro en todo el backend.</td>
                        <td style={{color: 'var(--cod-alto)', fontWeight: 'bold'}}>PENDIENTE</td>
                        <td>Inyección SQL (SQLi)</td>
                      </tr>
                      <tr>
                        <td><strong>CTRL-02</strong></td>
                        <td>Preventivo</td>
                        <td>Activación de codificación de salida adaptativa al contexto (<strong>Context-Aware Output Encoding</strong>) en las vistas web.</td>
                        <td style={{color: 'var(--cod-alto)', fontWeight: 'bold'}}>PENDIENTE</td>
                        <td>XSS Reflejado</td>
                      </tr>
                      <tr>
                        <td><strong>CTRL-03</strong></td>
                        <td>Preventivo</td>
                        <td>Prohibición absoluta de funciones de shell (<code>system()</code>, <code>exec()</code>) sustituyéndolas por <strong>APIs de red nativas</strong>.</td>
                        <td style={{color: 'var(--cod-alto)', fontWeight: 'bold'}}>PENDIENTE</td>
                        <td>Inyección de Comandos</td>
                      </tr>
                      <tr>
                        <td><strong>CTRL-04</strong></td>
                        <td>Detectivo</td>
                        <td>Despliegue de un <strong>Web Application Firewall (WAF)</strong> para filtrar y bloquear payloads maliciosos (<code>'</code>, <code>&lt;script&gt;</code>, <code>;</code>) en tránsito.</td>
                        <td style={{color: 'var(--cod-safe)', fontWeight: 'bold'}}>PLANIFICADO</td>
                        <td>Transversal (SQLi, XSS, CmdInj)</td>
                      </tr>
                      <tr>
                        <td><strong>CTRL-05</strong></td>
                        <td>Correctivo</td>
                        <td>Configuración de directivas <strong>Content Security Policy (CSP)</strong> estrictas y atributos de cookies <code>HttpOnly</code> y <code>Secure</code>.</td>
                        <td style={{color: 'var(--cod-alto)', fontWeight: 'bold'}}>PENDIENTE</td>
                        <td>XSS Reflejado</td>
                      </tr>
                      <tr>
                        <td><strong>CTRL-06</strong></td>
                        <td>Administrativo</td>
                        <td>Configuración del principio de menor privilegio en las cuentas de servicio de la Base de Datos y Sistema Operativo.</td>
                        <td style={{color: 'var(--cod-safe)', fontWeight: 'bold'}}>PLANIFICADO</td>
                        <td>SQLi / Command Injection</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          )}

          {/* 08_RECUPERACION_GROCAT */}
          {seccionActiva === 'recuperacion' && (
            <section className="cod-section animate-fade">
              <h2>08 // ESTRATEGIA DE MITIGACIÓN Y PLAN DE RECUPERACIÓN</h2>
              <div className="cod-card">
                <h3>1. Plan de Acción Inmediato (Remediación de Código)</h3>
                <p>Ante la criticidad de los hallazgos en el entorno de FarmaSalud, se define el siguiente orden de atención prioritaria para el equipo de desarrollo:</p>
                <p><strong>Fase 1 (Bloqueo Crítico - Próximas 24 horas):</strong> Parchear el fallo de <em>Command Injection</em> removiendo la invocación a la shell del sistema y el bug de <em>SQLi</em> reemplazando las consultas dinámicas por consultas parametrizadas.</p>
                <p><strong>Fase 2 (Mitigación Web - Próximas 72 horas):</strong> Sanitizar los formularios web propensos a <em>XSS</em> e inyectar las cabeceras HTTP de seguridad (<code>X-Frame-Options</code>, <code>Content-Security-Policy</code>, cookies <code>HttpOnly</code>).</p>
                
                <h3>2. Plan de Respuesta a Incidentes (En caso de Explotación Real)</h3>
                <p>Si se sospecha que estas vulnerabilidades han sido explotadas de forma maliciosa en el entorno de producción, se activará el siguiente protocolo táctico:</p>
                <ul>
                  <li><strong>A. Contención:</strong> Desconectar temporalmente el contenedor o servidor web afectado de la red principal para detener la extracción de datos o la ejecución de comandos. Invalidar de inmediato todas las sesiones activas de usuarios en el portal y cambiar las contraseñas de conexión a las bases de datos.</li>
                  <li><strong>B. Erradicación y Recuperación:</strong> Reemplazar el código vulnerable de producción por la versión corregida y auditada desde el repositorio de control de versiones. Si la integridad del sistema operativo o de la base de datos fue comprometida por el <em>Command Injection</em>, se restaurará el último respaldo limpio (Backup) verificado.</li>
                  <li><strong>C. Post-Incidente (Lecciones Aprendidas):</strong> Analizar los logs del servidor web y del WAF para determinar el alcance del compromiso (qué datos de recetas o clientes fueron extraídos). En cumplimiento con la legislación vigente, notificar oportunamente a las entidades reguladoras y a los clientes afectados en caso de una filtración confirmada de fichas médicas.</li>
                </ul>
              </div>
            </section>
          )}

          {/* 09_PROMPTS_GROCAT */}
          {seccionActiva === 'prompts' && (
            <section className="cod-section animate-fade">
              <h2>09 // BITÁCORA DE USO DE INTELIGENCIA ARTIFICIAL & REPOSITORIO</h2>
              <div className="cod-card">
                <h3>1. Registro de Consultas y Prompts</h3>
                <p>Durante el desarrollo de esta auditoría, se utilizó Inteligencia Artificial como un asistente consultor para acelerar la comprensión técnica de los fallos y el diseño de las arquitecturas de mitigación en React y Markdown.</p>
                <p><strong>Consulta 1 (Estructuración del Informe):</strong> Se adoptó la narrativa orientada al negocio farmacéutico y las justificaciones CVSS v3.1. Se corrigieron manualmente los marcadores de las imágenes para que apuntaran a <code>img_grocat/</code>.</p>
                <p><strong>Consulta 2 (Diseño en React):</strong> Se integró la lógica de estados para enlazar dinámicamente las coordenadas del mapa de calor con el panel táctil lateral.</p>
                
                <h3>2. Reflexión Final sobre el uso de IA</h3>
                <p>La IA actuó como un multiplicador de eficiencia. Sin lo anterior, el código propuesto por defecto para backends suele recurrir a concatenaciones inseguras. La responsabilidad técnica final recayó en el auditor, validando las métricas de control técnico y asegurando que no se introdujeran nuevas vulnerabilidades al sistema.</p>
                
                <h3>3. CONTROL DE REPOSITORIO // DEPLOY-OPS</h3>
                <p>Para la inspección completa de los artefactos de código fuente, configuraciones de adaptabilidad responsiva CSS y el despliegue del sitio, acceda al enlace oficial:</p>
                <p><strong>OPERADOR PRINCIPAL:</strong> <code>cgrohmann5</code></p>
                <p><strong>URL DEL REPOSITORIO (GITHUB):</strong> <a href="https://github.com/cgrohmann5" target="_blank" rel="noreferrer" className="highlight-orange">https://github.com/cgrohmann5</a></p>
                <p><strong>ESTADO OPERATIVO:</strong> <span className="badge-severidad">SECURE-OPS // REPO_VERIFIED</span></p>
              </div>
            </section>
          )}

        </main>
      </div>
    </div>
  );
}