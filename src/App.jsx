import React, { useState } from 'react';
import './App.css'; // Asegúrate de importar el archivo CSS

export default function Matriz() {
  const [seccionActiva, setSeccionActiva] = useState('resumen');
  const [riesgoSeleccionado, setRiesgoSeleccionado] = useState(null);

  const riesgosData = {
    'R-01': { 
      id: 'R-01', 
      vuln: 'Inyección SQL (SQLi)', 
      amenaza: 'Filtración Masiva de Recetas y Datos: Un atacante extrae la base de datos completa de pacientes, exponiendo patologías y tratamientos.', 
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
          <span className="cod-title-sub">FUNDAMENTOS DE SEGURIDAD DE LA INFORMACIÓN // AUDITORIA_GROCAT</span>
        </div>
        <div className="cod-system-status">
          <span className="status-indicator online"></span> VULNERABILIDADES Y MATRIZ DE RIESGO: INACAP_2026
        </div>
      </header>

      <div className="cod-layout">
        {/* MENÚ DE SELECCIÓN LATERAL */}
        <aside className="cod-sidebar">
          <div className="sidebar-title">// SELECCIÓN DE MISIÓN</div>
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

        {/* ÁREA DE CONTENIDO */}
        <main className="cod-content-area">
          
          {/* 01 RESUMEN EJECUTIVO */}
          {seccionActiva === 'resumen' && (
            <div className="animate-fade">
              <h2>01 // RESUMEN EJECUTIVO</h2>
              
              <div className="cod-card">
                <h3>1. CONTEXTO DE LA EMPRESA AUDITADA</h3>
                <p>FarmaSalud es una cadena de farmacias a nivel nacional enfocada en la venta de medicamentos, gestión de recetas médicas y programas de fidelización de clientes. Al operar en el sector de la salud, la infraestructura tecnológica de FarmaSalud procesa, almacena y transmite Datos Personales Sensibles de pacientes (fichas médicas, tratamientos, diagnósticos implícitos en recetas) y Datos Financieros/Personales de consumo a través de su Portal de Clientes.</p>
              </div>

              <div className="cod-card">
                <h3>2. EL PORTAL DE CLIENTES Y ACTIVOS CRÍTICOS</h3>
                <p>El Portal de Clientes permite a los usuarios consultar y cargar recetas médicas digitales, revisar el historial de compras y puntos de fidelización, y gestionar métodos de pago y despacho a domicilio. Debido a la naturaleza de la información, el portal interactúa directamente con bases de datos críticas que contienen Registros de Salud Electrónicos y Datos de Tarjetas de Pago. La confidencialidad y la integridad de este sistema son vitales para la continuidad del negocio y el cumplimiento legal (Ley de Protección de la Vida Privada).</p>
              </div>

              <div className="cod-card">
                <h3>3. ALCANCE DE LA AUDITORÍA</h3>
                <p>Esta evaluación de seguridad consistió en un análisis técnico de vulnerabilidades ejecutado sobre el ambiente controlado de pruebas del portal (basado en la plataforma de entrenamiento DVWA) configurado en un nivel de seguridad "Low". El objetivo fundamental es identificar el impacto que tendrían fallos críticos de inyección y scripting en el ecosistema real de FarmaSalud.</p>
              </div>
            </div>
          )}

          {/* 02 SQLI */}
          {seccionActiva === 'sqli' && (
            <div className="animate-fade">
              <h2>02 // REPORTES TÉCNICOS: INYECCIÓN SQL</h2>
              
              <div className="cod-card border-high">
                <div className="cod-alert-tag high">AMENAZA CRÍTICA DETECTADA</div>
                <h3>1. EVIDENCIA DEL ATAQUE</h3>
                <p>El ataque se ejecutó explotando el formulario de consulta de ID del Portal de Clientes de FarmaSalud mediante la inyección de una compuerta lógica maliciosa.</p>
                <div className="cod-meta-list">
                  <div><strong>URL DE EXPLOTACIÓN:</strong> <span className="text-muted">https://dvwa-dnwe.onrender.com/vulnerabilities/sqli/?id=%27+OR+%271%27%3D%271&Submit=Submit#</span></div>
                  <div><strong>PAYLOAD UTILIZADO:</strong> <code>' OR '1'='1</code></div>
                </div>
              </div>

              <div className="cod-card">
                <h3>2. ANÁLISIS TÉCNICO (POR QUÉ FUNCIONA)</h3>
                <p>La vulnerabilidad ocurre porque el aplicativo web concatena directamente la entrada del usuario (<code>id</code>) de forma dinámica en la consulta SQL, sin sanitización ni parametrización previa. El código del servidor ejecuta una consulta estructurada de la siguiente manera:</p>
                <div className="cod-code-box">
                  <code>SELECT first_name, last_name FROM users WHERE user_id = '$id';</code>
                </div>
                <p>Al ingresar el payload, la consulta interna se transforma saltándose los filtros:</p>
                <div className="cod-code-box">
                  <code>SELECT first_name, last_name FROM users WHERE user_id = '' OR '1'='1';</code>
                </div>
                <p>Dado que la condición <code>'1'='1'</code> siempre es verdadera, el motor de la base de datos ignora la restricción del identificador y devuelve la totalidad de los registros de la tabla de usuarios.</p>
              </div>

              <div className="cod-card">
                <h3>3. PUNTUACIÓN Y SEVERIDAD CVSS V3.1</h3>
                <p><strong>VECTOR DE ATAQUE:</strong> <code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N</code></p>
                <div className="severity-banner text-high">PUNTAJE BASE: 7.5 [ALTA]</div>
                <p><em>Justificación:</em> El ataque se realiza de forma remota a través de internet (AV:N), con baja complejidad al no existir contramedidas (AC:L). No se requieren privilegios previos (PR:N) ni interacción de un usuario legítimo (UI:N). El impacto en la confidencialidad es crítico (C:H) ya que expone la base de datos completa de clientes, filtrando identidades y recetas médicas.</p>
              </div>

              <div className="cod-card">
                <h3>4. ESTRATEGIA DE DEFENSAS</h3>
                <p><strong>POLÍTICA DE PREVENCIÓN:</strong> Se prohíbe la construcción de consultas SQL mediante la concatenación de variables. Todo desarrollo debe implementar <strong>Consultas Parametrizadas (Prepared Statements)</strong>.</p>
                <div className="cod-code-box">
                  <code>{"// SEGURO: Parámetro aislado del código ejecutable\n$stmt = $conn->prepare(\"SELECT first_name, last_name FROM users WHERE user_id = ?\");\n$stmt->bind_param(\"i\", $id);"}</code>
                </div>
              </div>
            </div>
          )}

          {/* 03 XSS */}
          {seccionActiva === 'xss' && (
            <div className="animate-fade">
              <h2>03 // REPORTES TÉCNICOS: CROSS-SITE SCRIPTING REFLEJADO</h2>
              
              <div className="cod-card border-medium">
                <div className="cod-alert-tag medium">AMENAZA DE RIESGO MODERADO</div>
                <h3>1. EVIDENCIA DEL ATAQUE</h3>
                <p>El ataque se ejecutó inyectando código de JavaScript malicioso en el campo de entrada del formulario de saludo del portal de clientes.</p>
                <div className="cod-meta-list">
                  <div><strong>PAYLOAD UTILIZADO:</strong> <code>&lt;script&gt;alert('XSS')&lt;/script&gt;</code></div>
                </div>
              </div>

              <div className="cod-card">
                <h3>2. ANÁLISIS TÉCNICO (POR QUÉ FUNCIONA)</h3>
                <p>La aplicación web toma el string ingresado por el usuario, lo procesa en el servidor y lo incluye directamente dentro de la respuesta HTML sin codificar los caracteres especiales. Al no sanitizar los caracteres <code>&lt;</code> y <code>&gt;</code>, el navegador de la víctima interpreta que los datos suministrados son etiquetas HTML ejecutables, forzando la ejecución automática del script.</p>
              </div>

              <div className="cod-card">
                <h3>3. PUNTUACIÓN Y SEVERIDAD CVSS V3.1</h3>
                <p><strong>VECTOR DE ATAQUE:</strong> <code>CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N</code></p>
                <div className="severity-banner text-medium">PUNTAJE BASE: 6.1 [MEDIA]</div>
                <p><em>Justificación:</em> Requiere interacción del usuario (UI:R), ya que la víctima debe hacer clic en el link manipulado. El impacto permite robar cookies de sesión de los pacientes o redireccionarlos a portales falsos.</p>
              </div>

              <div className="cod-card">
                <h3>4. ESTRATEGIA DE DEFENSAS</h3>
                <p><strong>POLÍTICA DE PREVENCIÓN:</strong> Toda variable renderizada dinámicamente debe pasar por una capa de <strong>Codificación de Salida (Output Encoding)</strong> para convertirse en entidades HTML seguras. Se complementa con el uso de la bandera <code>HttpOnly</code> en las cookies.</p>
              </div>
            </div>
          )}

          {/* 04 COMANDOS */}
          {seccionActiva === 'comandos' && (
            <div className="animate-fade">
              <h2>04 // REPORTES TÉCNICOS: INYECCIÓN DE COMANDOS</h2>
              
              <div className="cod-card border-high">
                <div className="cod-alert-tag high">AMENAZA CRÍTICA DETECTADA</div>
                <h3>1. EVIDENCIA DEL ATAQUE</h3>
                <p>El ataque se realizó aprovechando un formulario de diagnóstico de red (herramienta de ping) integrado en el portal administrativo.</p>
                <div className="cod-meta-list">
                  <div><strong>PAYLOAD UTILIZADO:</strong> <code>127.0.0.1; cat /etc/passwd</code></div>
                </div>
              </div>

              <div className="cod-card">
                <h3>2. ANÁLISIS TÉCNICO (POR QUÉ FUNCIONA)</h3>
                <p>El aplicativo web llama internamente a una función de la shell (como <code>system()</code>) concatenando la entrada. Al utilizar el punto y coma <code>;</code> en Linux, el sistema operativo interpreta la línea de código como dos instrucciones independientes, ejecutando el comando de ping y acto seguido la lectura del archivo de usuarios y contraseñas (<code>/etc/passwd</code>) de manera no autorizada.</p>
              </div>

              <div className="cod-card">
                <h3>3. PUNTUACIÓN Y SEVERIDAD CVSS V3.1</h3>
                <p><strong>VECTOR DE ATAQUE:</strong> <code>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H</code></p>
                <div className="severity-banner text-high">PUNTAJE BASE: 8.8 [ALTA]</div>
                <p><em>Justificación:</em> Permite el control absoluto del sistema operativo del servidor (C:H/I:H/A:H), pudiendo alterar archivos, inyectar código persistente o botar el servidor web de la farmacia por completo.</p>
              </div>
            </div>
          )}

          {/* 05 VALORACIÓN DE ACTIVOS */}
          {seccionActiva === 'activos' && (
            <div className="animate-fade">
              <h2>05 // INVENTARIO Y VALORACIÓN DE ACTIVOS CRÍTICOS</h2>
              
              <div className="cod-card">
                <h3>1. IDENTIFICACIÓN DE ACTIVOS</h3>
                <div className="cod-tactical-list">
                  <div className="list-item"><span className="bullet">[▲]</span> <strong>AD-01 Base de Datos (EHR):</strong> Fichas médicas e historial clínico de pacientes.</div>
                  <div className="list-item"><span className="bullet">[▲]</span> <strong>AD-02 Base de Datos de Clientes:</strong> Identidades, RUT, hashes de contraseñas y correos.</div>
                  <div className="list-item"><span className="bullet">[▲]</span> <strong>AD-03 Datos de Tarjetas (PCI):</strong> Transacciones financieras y pasarela de pago.</div>
                  <div className="list-item"><span className="bullet">[▲]</span> <strong>AS-01 Portal de Clientes:</strong> Aplicación web frontend/backend principal de la empresa.</div>
                  <div className="list-item"><span className="bullet">[▲]</span> <strong>AI-01 Servidor de Aplicaciones:</strong> Entorno Docker que aloja la API y backend.</div>
                </div>
              </div>

              <div className="cod-card">
                <h3>2. MATRIZ DE VALORACIÓN CRÍTICA</h3>
                <div className="table-responsive">
                  <table className="cod-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>NOMBRE DEL ACTIVO</th>
                        <th>CONFIDENCIALIDAD</th>
                        <th>INTEGRIDAD</th>
                        <th>DISPONIBILIDAD</th>
                        <th>JUSTIFICACIÓN LEGAL / OPERATIVA</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>AD-01</strong></td>
                        <td>Base de Datos de Salud (EHR)</td>
                        <td className="table-cell-critica">ALTA (H)</td>
                        <td className="table-cell-critica">ALTA (H)</td>
                        <td className="table-cell-critica">ALTA (H)</td>
                        <td>Ley de Protección de la Vida Privada (Datos Sensibles).</td>
                      </tr>
                      <tr>
                        <td><strong>AD-02</strong></td>
                        <td>Base de Datos de Clientes</td>
                        <td className="table-cell-critica">ALTA (H)</td>
                        <td>MEDIA (M)</td>
                        <td>MEDIA (M)</td>
                        <td>Datos personales. Alto riesgo de phishing corporativo si se filtra.</td>
                      </tr>
                      <tr>
                        <td><strong>AD-03</strong></td>
                        <td>Datos de Tarjetas de Pago</td>
                        <td className="table-cell-critica">ALTA (H)</td>
                        <td className="table-cell-critica">ALTA (H)</td>
                        <td>MEDIA (M)</td>
                        <td>Regulado por estándares internacionales obligatorios PCI-DSS.</td>
                      </tr>
                      <tr>
                        <td><strong>AS-01</strong></td>
                        <td>Portal de Clientes</td>
                        <td>MEDIA (M)</td>
                        <td className="table-cell-critica">ALTA (H)</td>
                        <td className="table-cell-critica">ALTA (H)</td>
                        <td>Canal de venta digital principal. Su caída paraliza la operación.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* 06 MATRIZ DE RIESGO */}
          {seccionActiva === 'matriz_riesgo' && (
            <div className="animate-fade">
              <h2>06 // MATRIZ DE RIESGO DE CIBERSEGURIDAD</h2>
              
              <div className="cod-card">
                <h3>1. MAPA DE CALOR OPERATIVO (PROBABILIDAD X IMPACTO)</h3>
                <p className="instruction-text">Selecciona un código de threat en el radar interactivo para inspeccionar sus parámetros de intelligence:</p>
                
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
                    <div className="visor-header">// INTELIGENCIA DE AMENAZAS</div>
                    {riesgoSeleccionado ? (
                      <div className="visor-body animate-fade">
                        <div className="visor-row"><strong>AMENAZA:</strong> <span className="highlight-orange">{riesgosData[riesgoSeleccionado].id}</span></div>
                        <div className="visor-row"><strong>VULNERABILIDAD:</strong> {riesgosData[riesgoSeleccionado].vuln}</div>
                        <div className="visor-row"><strong>DAÑO ESTIMADO:</strong> {riesgosData[riesgoSeleccionado].amenaza}</div>
                        <div className="visor-row"><strong>VALOR RIESGO:</strong> {riesgosData[riesgoSeleccionado].nivel}</div>
                      </div>
                    ) : (
                      <div className="visor-placeholder">RADAR EN ESPERA: SELECCIONE UN CÓDIGO R-XX EN LA MATRIZ</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 07 CUADRO DE CONTROLES */}
          {seccionActiva === 'controles' && (
            <div className="animate-fade">
              <h2>07 // CUADRO DE MANDOS: CONTROLES DE SEGURIDAD</h2>
              
              <div className="cod-card">
                <h3>MATRIZ DE IMPLEMENTACIÓN (DEFENSA EN PROFUNDIDAD)</h3>
                <div className="table-responsive">
                  <table className="cod-table">
                    <thead>
                      <tr>
                        <th>ID CONTROL</th>
                        <th>TIPO</th>
                        <th>DESCRIPCIÓN TÉCNICA</th>
                        <th>ESTADO OPERATIVO</th>
                        <th>VULNERABILIDAD ASOCIADA</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>CTRL-01</strong></td>
                        <td>Preventivo</td>
                        <td>Implementación de <strong>Consultas Parametrizadas (Prepared Statements)</strong> en todo el backend.</td>
                        <td className="status-pending">PENDIENTE</td>
                        <td>Inyección SQL (SQLi)</td>
                      </tr>
                      <tr>
                        <td><strong>CTRL-02</strong></td>
                        <td>Preventivo</td>
                        <td>Activación de codificación de salida adaptativa al contexto (<strong>Output Encoding</strong>) en vistas.</td>
                        <td className="status-pending">PENDIENTE</td>
                        <td>XSS Reflejado</td>
                      </tr>
                      <tr>
                        <td><strong>CTRL-03</strong></td>
                        <td>Preventivo</td>
                        <td>Prohibición absoluta de funciones de shell (<code>system()</code>), usando APIs de red nativas.</td>
                        <td className="status-pending">PENDIENTE</td>
                        <td>Inyección de Comandos</td>
                      </tr>
                      <tr>
                        <td><strong>CTRL-04</strong></td>
                        <td>Detectivo</td>
                        <td>Despliegue de un <strong>Web Application Firewall (WAF)</strong> perimetral en producción.</td>
                        <td className="status-planned">PLANIFICADO</td>
                        <td>Transversal (SQLi, XSS, CmdInj)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* 08 PLAN DE RECUPERACIÓN */}
          {seccionActiva === 'recuperacion' && (
            <div className="animate-fade">
              <h2>08 // ESTRATEGIA Y PLAN DE RECUPERACIÓN ANTE DESASTRES</h2>
              
              <div className="cod-card">
                <h3>1. PLAN DE ACCIÓN INMEDIATO (REMEDIACIÓN DE CÓDIGO)</h3>
                <p><strong>Fase 1 [Bloqueo Crítico - Próximas 24 horas]:</strong> Parchear de forma prioritaria el fallo de Command Injection y reescribir las llamadas SQL de login a formato parametrizado.</p>
                <p><strong>Fase 2 [Mitigación Web - Próximas 72 horas]:</strong> Desplegar parches XSS e inyectar cabeceras HTTP de seguridad (<code>Content-Security-Policy</code>).</p>
              </div>

              <div className="cod-card">
                <h3>2. PROTOCOLO DE RESPUESTA A INCIDENTES</h3>
                <p><strong>Contención:</strong> Aislamiento de red inmediato del servidor comprometido para detener fugas de datos y revocación total de tokens activos en la base de datos.</p>
                <p><strong>Erradicación:</strong> Reemplazar el backend web por la versión corregida desde el repositorio seguro de Git y restaurar bases de datos a partir de respaldos probados.</p>
              </div>
            </div>
          )}

          {/* 09 BITÁCORA DE IA & REPO */}
          {seccionActiva === 'prompts' && (
            <div className="animate-fade">
              <h2>09 // BITÁCORA DE ASISTENCIA IA & DEPLOY-OPS</h2>
              
              <div className="cod-card">
                <h3>ANÁLISIS DE DESARROLLO ASISTIDO POR IA</h3>
                <p>En creacion..</p>
              </div>

              <div className="cod-card command-center-card">
                <h3>DATOS DEL OPERADOR</h3>
                <div className="visor-row"><strong>ID USUARIO:</strong> <span className="highlight-orange">cgrohmann5</span></div>
                <div className="visor-row"><strong>ESTADO DEL REPOSITORIO:</strong> <span className="status-planned">VERIFICADO</span></div>
                
                {/* INTERFAZ DEL BOTÓN TÁCTICO INTEGRADA */}
                <div className="github-action-wrapper">
                  <a 
                    href="https://github.com/cgrohmann5" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="cod-action-btn"
                  >
                    <span className="btn-main-text">CONECTAR REPOSITORIO GITHUB</span>
                    <span className="btn-sub-tag">// DEPLOY_OPS_FORGE</span>
                  </a>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}