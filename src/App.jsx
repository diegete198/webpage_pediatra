import React from 'react';

function App() {
    return (
        <div style={{ backgroundColor: '#F4F0F9', fontFamily: 'system-ui, sans-serif', color: '#2E2430' }}>

            {/* Estilos CSS incrustados */}
            <style>
                {`
          .glass-header {
            position: sticky;
            top: 0;
            z-index: 1000;
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(165, 105, 189, 0.2);
            transition: all 0.3s ease;
          }
          .nav-link {
            text-decoration: none;
            color: #4A235A;
            font-weight: 600;
            padding: 8px 16px;
            border-radius: 20px;
            transition: all 0.3s ease;
          }
          .nav-link:hover {
            background-color: #A569BD;
            color: white;
            box-shadow: 0 4px 10px rgba(165, 105, 189, 0.3);
          }
          .card-hover:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(165, 105, 189, 0.15);
          }
        `}
            </style>

            {/* 1. HERO SECTION & MENÚ */}
            <header className="glass-header" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', padding: '15px 5%' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4A235A', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span>🚀</span> Dra. Cristina Pacheco
                </div>
                <nav>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '5px' }}>
                        {['Inicio', 'Sobre Mi', 'Servicios', 'Articulos de Interes', 'Costos', 'Contacto'].map(item => (
                            <li key={item}>
                                <a className="nav-link" href={`#${item.toLowerCase().replace(/ /g, '-')}`}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            {/* INICIO */}
            <div id="inicio" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', padding: '8vh 5%', backgroundColor: '#FFFFFF' }}>
                <div style={{ flex: '1', minWidth: '300px', padding: '20px' }}>
                    <h1 style={{ color: '#4A235A', fontSize: '3.5rem', margin: '0 0 15px 0', lineHeight: '1.1' }}>
                        Protegiendo el <span style={{ color: '#A569BD' }}>despegue</span> de tu bebé
                    </h1>
                    <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#555' }}>
                        Dra. Cristina Pacheco, Pediatra Neonatóloga. Cuidado especializado, cálido y experto para recién nacidos y bebés prematuros.
                    </p>
                    <a href="https://wa.me/525500000000" target="_blank" rel="noreferrer" style={btnStyle}>
                        Agendar Cita en WhatsApp 🚀
                    </a>
                </div>
                <div style={{ flex: '1', minWidth: '300px', textAlign: 'center' }}>
                    <div style={{ width: '350px', height: '350px', backgroundColor: '#E8DAEF', borderRadius: '50%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', boxShadow: '0 20px 40px rgba(165, 105, 189, 0.15)' }}>
                        👩‍⚕️✨
                    </div>
                </div>
            </div>

            {/* BARRA DE CONFIANZA */}
            <div style={{ backgroundColor: '#4A235A', color: 'white', display: 'flex', justifyContent: 'space-around', padding: '30px 10px', flexWrap: 'wrap', textAlign: 'center' }}>
                <div><h3 style={{margin:0}}>+10</h3><p style={{margin:0}}>Años de Experiencia</p></div>
                <div><h3 style={{margin:0}}>Certificada</h3><p style={{margin:0}}>Consejo Mexicano</p></div>
                <div><h3 style={{margin:0}}>Hospitales</h3><p style={{margin:0}}>Atención en los mejores</p></div>
            </div>

            {/* SOBRE MÍ */}
            <section id="sobre-mi" style={{ padding: '80px 5%', textAlign: 'center' }}>
                <h2 style={{ color: '#4A235A', fontSize: '2.5rem' }}>Conoce a la Dra. Cristina Pacheco</h2>
                <p style={{ maxWidth: '800px', margin: '20px auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
                    Soy una apasionada por el inicio de la vida. Mi misión es ser el "centro de control" que asegure que cada pequeño astronauta tenga las mejores herramientas para crecer sano y fuerte. Te acompaño a ti y a tu bebé con empatía, ciencia y mucho corazón.
                </p>
            </section>

            {/* SERVICIOS */}
            <section id="servicios" style={{ padding: '40px 5%', backgroundColor: '#FFFFFF' }}>
                <h2 style={{ textAlign: 'center', color: '#4A235A', marginBottom: '40px' }}>¿Cómo puedo ayudarte?</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                    {[
                        { icon: '👨‍🚀', title: 'Bebés Prematuros', desc: 'Cuidados intensivos y seguimiento de neurodesarrollo.' },
                        { icon: '🌙', title: 'Asesoría en Lactancia', desc: 'Acompañamiento técnico y emocional para un agarre perfecto.' },
                        { icon: '⭐', title: 'Control de Niño Sano', desc: 'Monitoreo de crecimiento, hitos del desarrollo y vacunas.' }
                    ].map((srv, idx) => (
                        <div key={idx} className="card-hover" style={{ width: '300px', padding: '30px', borderRadius: '15px', backgroundColor: '#F4F0F9', borderTop: '5px solid #A569BD', transition: 'all 0.3s ease' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{srv.icon}</div>
                            <h3 style={{ color: '#2E2430' }}>{srv.title}</h3>
                            <p style={{ color: '#666' }}>{srv.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ARTÍCULOS DE INTERÉS (Nueva Sección) */}
            <section id="articulos-de-interes" style={{ padding: '80px 5%', backgroundColor: '#F4F0F9' }}>
                <h2 style={{ textAlign: 'center', color: '#4A235A', marginBottom: '40px', fontSize: '2.5rem' }}>Diario de a Bordo 📚</h2>
                <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px auto', color: '#555' }}>Consejos y guías para padres en su nueva aventura espacial.</p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                    {[
                        { img: '🍼', title: '¿Cómo saber si mi bebé toma suficiente leche?', readTime: '3 min de lectura' },
                        { img: '💤', title: 'El sueño del recién nacido: Mitos y realidades', readTime: '5 min de lectura' },
                        { img: '🤒', title: 'Fiebre en los primeros 3 meses: ¿Qué hacer?', readTime: '4 min de lectura' }
                    ].map((blog, idx) => (
                        <div key={idx} className="card-hover" style={{ width: '300px', backgroundColor: '#FFFFFF', borderRadius: '15px', overflow: 'hidden', transition: 'all 0.3s ease' }}>
                            <div style={{ backgroundColor: '#E8DAEF', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>
                                {blog.img}
                            </div>
                            <div style={{ padding: '20px' }}>
                                <span style={{ color: '#A569BD', fontSize: '0.85rem', fontWeight: 'bold' }}>{blog.readTime}</span>
                                <h4 style={{ color: '#2E2430', margin: '10px 0', fontSize: '1.2rem' }}>{blog.title}</h4>
                                <a href="#" style={{ color: '#8E44AD', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }}>Leer artículo →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* COSTOS (Nueva Sección) */}
            <section id="costos" style={{ padding: '80px 5%', backgroundColor: '#FFFFFF' }}>
                <h2 style={{ textAlign: 'center', color: '#4A235A', marginBottom: '40px', fontSize: '2.5rem' }}>Planes de Vuelo y Costos 💳</h2>
                <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px auto', color: '#555' }}>Transparencia total para que te enfoques solo en la salud de tu bebé. Aceptamos tarjetas de crédito y seguros médicos de reembolso.</p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>

                    <div className="card-hover" style={{ width: '300px', padding: '40px 30px', borderRadius: '20px', backgroundColor: '#F4F0F9', textAlign: 'center', transition: 'all 0.3s ease', border: '1px solid #E8DAEF' }}>
                        <h3 style={{ color: '#4A235A', margin: '0 0 10px 0' }}>Consulta de Primera Vez</h3>
                        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#8E44AD', margin: '20px 0' }}>$1,200 <span style={{fontSize:'1rem', color:'#666'}}>MXN</span></div>
                        <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', color: '#555', marginBottom: '30px' }}>
                            <li style={{ marginBottom: '10px' }}>✅ Valoración completa del bebé</li>
                            <li style={{ marginBottom: '10px' }}>✅ Apertura de expediente clínico</li>
                            <li style={{ marginBottom: '10px' }}>✅ Resolución de dudas (1 hora)</li>
                        </ul>
                        <a href="https://wa.me/525500000000" style={{...btnStyle, padding: '10px 20px', fontSize: '1rem', width: '100%', boxSizing: 'border-box'}}>Agendar</a>
                    </div>

                    <div className="card-hover" style={{ width: '300px', padding: '40px 30px', borderRadius: '20px', backgroundColor: '#4A235A', color: 'white', textAlign: 'center', transition: 'all 0.3s ease', transform: 'scale(1.05)', boxShadow: '0 15px 30px rgba(74, 35, 90, 0.2)' }}>
                        <div style={{ backgroundColor: '#F7DC6F', color: '#4A235A', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', display: 'inline-block', marginBottom: '15px' }}>MÁS POPULAR</div>
                        <h3 style={{ margin: '0 0 10px 0' }}>Control Niño Sano (Subsecuente)</h3>
                        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '20px 0' }}>$900 <span style={{fontSize:'1rem', opacity: 0.8}}>MXN</span></div>
                        <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginBottom: '30px' }}>
                            <li style={{ marginBottom: '10px' }}>✅ Medición de peso y talla</li>
                            <li style={{ marginBottom: '10px' }}>✅ Revisión de hitos de desarrollo</li>
                            <li style={{ marginBottom: '10px' }}>✅ Receta médica (si aplica)</li>
                        </ul>
                        <a href="https://wa.me/525500000000" style={{...btnStyle, backgroundColor: 'white', color: '#4A235A', padding: '10px 20px', fontSize: '1rem', width: '100%', boxSizing: 'border-box'}}>Agendar</a>
                    </div>

                </div>
            </section>

            {/* UBICACIÓN Y CONTACTO */}
            <section id="contacto" style={{ padding: '80px 5%', backgroundColor: '#F4F0F9' }}>
                <h2 style={{ textAlign: 'center', color: '#4A235A', marginBottom: '40px', fontSize: '2.5rem' }}>Nuestra Base de Control 🌍</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center', alignItems: 'stretch', maxWidth: '1000px', margin: '0 auto' }}>

                    <div style={{ flex: '1', minWidth: '300px', backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(74, 35, 90, 0.08)' }}>
                        <h3 style={{ color: '#8E44AD', marginTop: 0, fontSize: '1.8rem' }}>Consultorio Pediátrico</h3>

                        <div style={{ margin: '20px 0', lineHeight: '1.6' }}>
                            {/* DIRECCIÓN ACTUALIZADA AQUÍ */}
                            <p>
                                <strong>📍 Dirección:</strong><br/>
                                Torre Torela, Blvd. Agua Caliente 9955 - Piso Mezanine,<br/>
                                Calete, 22044 Tijuana, B.C.<br/>
                                Consultorio 402.
                            </p>

                            <p>
                                <strong>🕒 Horarios de Atención:</strong><br/>
                                Lunes a Viernes: 9:00 AM - 2:00 PM y 4:00 PM - 7:00 PM<br/>
                                Sábados: 9:00 AM - 1:00 PM
                            </p>

                            <p>
                                <strong>📞 Teléfono:</strong><br/>
                                +52 33 4942 1060 {/* ¡Recuerda cambiar este teléfono también! */}
                            </p>
                        </div>
                    </div>

                    <div style={{ flex: '1', minWidth: '300px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(74, 35, 90, 0.08)' }}>
                        {/* MAPA DE GOOGLE */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.51268482451!2d-117.01736632368943!3d32.51243169742457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d948386b0dae71%3A0xc3bba30a84eef26b!2sTorre%20Torela!5e0!3m2!1ses-419!2smx!4v1711219600000!5m2!1ses-419!2smx"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '350px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa del consultorio en Torre Torela">
                        </iframe>
                    </div>

                </div>
            </section>

            {/* BOTÓN FLOTANTE DE WHATSAPP */}
            <a href="https://wa.me/525500000000" target="_blank" rel="noreferrer" style={{ position: 'fixed', bottom: '30px', right: '30px', backgroundColor: '#25D366', color: 'white', padding: '15px 25px', borderRadius: '50px', fontWeight: 'bold', textDecoration: 'none', boxShadow: '0 6px 15px rgba(37, 211, 102, 0.4)', zIndex: 1000, transition: 'transform 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                💬 Escríbeme
            </a>

            {/* 6. FOOTER (Pie de página) */}
            <footer style={{ backgroundColor: '#2E2430', color: '#E8DAEF', padding: '40px 5%', textAlign: 'center', borderTop: '4px solid #8E44AD' }}>
                <div style={{ marginBottom: '15px', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    🚀 Dra. Cristina Pacheco | Pediatría Neonatal
                </div>
                <p style={{ margin: '5px 0', fontSize: '1rem' }}>
                    Cuidando el futuro, un pequeño latido a la vez.
                </p>
                <div style={{ margin: '20px 0', display: 'flex', justifyContent: 'center', gap: '15px' }}>
                    {/* Enlaces a redes sociales (reemplaza los # con tus links) */}
                    <a href="#" style={{ color: '#F7DC6F', fontSize: '1.5rem', textDecoration: 'none' }}>📷</a>
                    <a href="#" style={{ color: '#F7DC6F', fontSize: '1.5rem', textDecoration: 'none' }}>📘</a>
                    <a href="#" style={{ color: '#F7DC6F', fontSize: '1.5rem', textDecoration: 'none' }}>💼</a>
                </div>
                <p style={{ margin: '15px 0 0 0', fontSize: '0.85rem', color: '#A569BD' }}>
                    © {new Date().getFullYear()} Todos los derechos reservados. | <a href="#aviso" style={{ color: '#E8DAEF', textDecoration: 'underline' }}>Aviso de Privacidad</a>
                </p>
            </footer>
        </div>
    );
}

const btnStyle = {
    backgroundColor: '#A569BD',
    color: 'white',
    padding: '15px 35px',
    fontSize: '1.2rem',
    textDecoration: 'none',
    borderRadius: '30px',
    display: 'inline-block',
    fontWeight: 'bold',
    boxShadow: '0 4px 15px rgba(165, 105, 189, 0.4)',
    transition: 'background-color 0.3s ease',
};

export default App;