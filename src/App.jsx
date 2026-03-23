import React from 'react';

function App() {
    return (
        <div style={{ backgroundColor: '#F4F0F9', fontFamily: 'system-ui, sans-serif', color: '#2E2430' }}>

            {/* Estilos CSS incrustados para los efectos de hover y menú cristal */}
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
        `}
            </style>

            {/* 1. HERO SECTION & MENÚ (Ahora es Sticky y con efecto Cristal) */}
            <header className="glass-header" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', padding: '15px 5%' }}>

                {/* Logo o Nombre */}
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4A235A', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span>🚀</span> Dra. Cristina Pacheco
                </div>

                {/* Menú de Navegación Novedoso */}
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

            {/* Contenido original del HERO */}
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
                    {/* Aquí irá una foto tuya profesional o una ilustración temática */}
                    <div style={{ width: '350px', height: '350px', backgroundColor: '#E8DAEF', borderRadius: '50%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', boxShadow: '0 20px 40px rgba(165, 105, 189, 0.15)' }}>
                        👩‍⚕️✨
                    </div>
                </div>
            </div>

            {/* 2. BARRA DE CONFIANZA */}
            <div style={{ backgroundColor: '#4A235A', color: 'white', display: 'flex', justifyContent: 'space-around', padding: '30px 10px', flexWrap: 'wrap', textAlign: 'center' }}>
                <div><h3 style={{margin:0}}>+10</h3><p style={{margin:0}}>Años de Experiencia</p></div>
                <div><h3 style={{margin:0}}>Certificada</h3><p style={{margin:0}}>Consejo Mexicano</p></div>
                <div><h3 style={{margin:0}}>Hospitales</h3><p style={{margin:0}}>Atención en los mejores</p></div>
            </div>

            {/* 3. SOBRE MÍ */}
            <section id="sobre-mi" style={{ padding: '80px 5%', textAlign: 'center' }}>
                <h2 style={{ color: '#4A235A', fontSize: '2.5rem' }}>Conoce a la Dra. Cristina Pacheco</h2>
                <p style={{ maxWidth: '800px', margin: '20px auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
                    Soy una apasionada por el inicio de la vida. Mi misión es ser el "centro de control" que asegure que cada pequeño astronauta tenga las mejores herramientas para crecer sano y fuerte. Te acompaño a ti y a tu bebé con empatía, ciencia y mucho corazón.
                </p>
            </section>

            {/* 4. SERVICIOS (Tarjetas) */}
            <section id="servicios" style={{ padding: '40px 5%', backgroundColor: '#FFFFFF' }}>
                <h2 style={{ textAlign: 'center', color: '#4A235A', marginBottom: '40px' }}>¿Cómo puedo ayudarte?</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                    {[
                        { icon: '👨‍🚀', title: 'Bebés Prematuros', desc: 'Cuidados intensivos y seguimiento de neurodesarrollo.' },
                        { icon: '🌙', title: 'Asesoría en Lactancia', desc: 'Acompañamiento técnico y emocional para un agarre perfecto.' },
                        { icon: '⭐', title: 'Control de Niño Sano', desc: 'Monitoreo de crecimiento, hitos del desarrollo y vacunas.' }
                    ].map((srv, idx) => (
                        <div key={idx} style={{ width: '300px', padding: '30px', borderRadius: '15px', backgroundColor: '#F4F0F9', borderTop: '5px solid #A569BD', boxShadow: '0 10px 20px rgba(0,0,0,0.05)', transition: 'transform 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{srv.icon}</div>
                            <h3 style={{ color: '#2E2430' }}>{srv.title}</h3>
                            <p style={{ color: '#666' }}>{srv.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. UBICACIÓN Y CONTACTO (¡Sección Nueva!) */}
            <section id="contacto" style={{ padding: '80px 5%', backgroundColor: '#F4F0F9' }}>
                <h2 style={{ textAlign: 'center', color: '#4A235A', marginBottom: '40px', fontSize: '2.5rem' }}>Nuestra Base de Control 🌍</h2>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center', alignItems: 'stretch', maxWidth: '1000px', margin: '0 auto' }}>

                    {/* Tarjeta de Información */}
                    <div style={{ flex: '1', minWidth: '300px', backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(74, 35, 90, 0.08)' }}>
                        <h3 style={{ color: '#8E44AD', marginTop: 0, fontSize: '1.8rem' }}>Consultorio Pediátrico</h3>

                        <div style={{ margin: '20px 0', lineHeight: '1.6' }}>
                            <p><strong>📍 Dirección:</strong><br/>
                                Torre Médica Principal, Piso 4, Consultorio 402.<br/>
                                Ciudad de México, CDMX.</p>

                            <p><strong>🕒 Horarios de Atención:</strong><br/>
                                Lunes a Viernes: 9:00 AM - 2:00 PM y 4:00 PM - 7:00 PM<br/>
                                Sábados: 9:00 AM - 1:00 PM</p>

                            <p><strong>📞 Teléfono:</strong><br/>
                                +52 55 0000 0000</p>
                        </div>

                        <a href="https://maps.google.com" target="_blank" rel="noreferrer" style={{...btnStyle, padding: '12px 25px', fontSize: '1rem'}}>
                            Abrir en Google Maps 🗺️
                        </a>
                    </div>

                    {/* Mapa Interactivo (Google Maps) */}
                    <div style={{ flex: '1', minWidth: '300px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(74, 35, 90, 0.08)' }}>
                        {/* Reemplaza el src con el link "Embed" real de tu dirección en Google Maps */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.662283083696!2d-99.1719652!3d19.4270245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sÁngel%20de%20la%20Independencia!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '350px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa del consultorio"
                        ></iframe>
                    </div>

                </div>
            </section>

            {/* BOTÓN FLOTANTE DE WHATSAPP */}
            <a href="https://wa.me/525500000000" target="_blank" rel="noreferrer" style={{ position: 'fixed', bottom: '30px', right: '30px', backgroundColor: '#25D366', color: 'white', padding: '15px 25px', borderRadius: '50px', fontWeight: 'bold', textDecoration: 'none', boxShadow: '0 6px 15px rgba(37, 211, 102, 0.4)', zIndex: 1000, transition: 'transform 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                💬 Escríbeme
            </a>

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