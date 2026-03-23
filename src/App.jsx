import React, { useState } from 'react';
import fotoDoctora from './assets/fotoprincipal.jpeg';
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './App.css';

/* ── Estrellas generadas con datos fijos (sin Math.random en render) ── */
const STARS = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    top:  `${(i * 137.5) % 100}%`,
    left: `${(i * 97.3)  % 100}%`,
    size: i % 4 === 0 ? 3 : i % 3 === 0 ? 2 : 1,
    dur:  `${2 + (i % 5)}s`,
    delay: `-${(i % 5) * 0.8}s`,
}));

const NAV_ITEMS = [
    { label: 'Inicio',              href: '#inicio' },
    { label: 'Sobre Mí',            href: '#sobre-mi' },
    { label: 'Servicios',           href: '#servicios' },
    { label: 'Artículos',           href: '#articulos-de-interes' },
    { label: 'Costos',              href: '#costos' },
    { label: 'Contacto',            href: '#contacto' },
];

const SERVICES = [
    { icon: '👨‍🚀', title: 'Bebés Prematuros',       desc: 'Cuidados intensivos y seguimiento de neurodesarrollo para los pequeños que llegaron antes.' },
    { icon: '🌙', title: 'Asesoría en Lactancia',   desc: 'Acompañamiento técnico y emocional para un agarre perfecto y una lactancia exitosa.' },
    { icon: '⭐', title: 'Control de Niño Sano',    desc: 'Monitoreo de crecimiento, hitos del desarrollo y calendario de vacunación.' },
];

const ARTICLES = [
    { icon: '🍼', title: '¿Cómo saber si mi bebé toma suficiente leche?',   readTime: '3 min' },
    { icon: '💤', title: 'El sueño del recién nacido: Mitos y realidades',  readTime: '5 min' },
    { icon: '🤒', title: 'Fiebre en los primeros 3 meses: ¿Qué hacer?',     readTime: '4 min' },
];

const WA = 'https://wa.me/523349421060';

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <div style={{ backgroundColor: '#F4F0F9', fontFamily: "'Segoe UI', system-ui, sans-serif", color: '#2E2430' }}>

            {/* ── HEADER ── */}
            <header className="glass-header">
                <div className="nav-logo">🚀 Dra. Cristina Pacheco</div>

                {/* Navegación escritorio */}
                <nav className="nav-links">
                    {NAV_ITEMS.map(item => (
                        <a key={item.label} href={item.href} className="nav-link">{item.label}</a>
                    ))}
                </nav>

                {/* Hamburger móvil */}
                <button
                    className={`hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(v => !v)}
                    aria-label="Menú"
                >
                    <span /><span /><span />
                </button>
            </header>

            {/* Menú móvil desplegable */}
            <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                {NAV_ITEMS.map(item => (
                    <a key={item.label} href={item.href} className="nav-link" onClick={closeMenu}>{item.label}</a>
                ))}
            </nav>

            {/* ── HERO ── */}
            <section id="inicio" className="hero-section">

                {/* Campo de estrellas */}
                <div className="stars" aria-hidden="true">
                    {STARS.map(s => (
                        <div
                            key={s.id}
                            className="star"
                            style={{
                                top: s.top,
                                left: s.left,
                                width: s.size,
                                height: s.size,
                                '--dur': s.dur,
                                '--delay': s.delay,
                            }}
                        />
                    ))}
                </div>

                {/* Texto hero */}
                <div style={{ flex: '1', minWidth: '300px', padding: '20px 30px', animation: 'fadeInUp 1.2s ease-out', position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'inline-block', backgroundColor: 'rgba(142,68,173,0.25)', border: '1px solid rgba(165,105,189,0.5)', borderRadius: '20px', padding: '6px 16px', marginBottom: '20px', fontSize: '0.85rem', color: '#E8DAEF', letterSpacing: '1px', fontWeight: 600 }}>
                        🌌 PEDIATRÍA NEONATAL · TIJUANA
                    </div>

                    <h1 style={{ color: '#FFFFFF', fontSize: '3.2rem', margin: '0 0 15px 0', lineHeight: '1.15', fontWeight: 800 }}>
                        Protegiendo el{' '}
                        <span style={{ background: 'linear-gradient(90deg, #C39BD3, #F7DC6F)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            despegue
                        </span>{' '}
                        de tu bebé
                    </h1>

                    <p style={{ fontSize: '1.15rem', marginBottom: '35px', color: '#D7BDE2', lineHeight: 1.7, maxWidth: '500px' }}>
                        Dra. Cristina Pacheco · Pediatra Neonatóloga. Cuidado especializado, cálido y experto para recién nacidos y bebés prematuros.
                    </p>

                    <a href={WA} target="_blank" rel="noreferrer" className="btn-primary">
                        <FaWhatsapp style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                        Agendar Cita por WhatsApp
                    </a>
                </div>

                {/* Foto con anillo orbital */}
                <div style={{ flex: '1', minWidth: '300px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <div className="orbit-ring">
                        <img
                            src={fotoDoctora}
                            alt="Dra. Cristina Pacheco - Pediatra Neonatóloga"
                            className="doctor-photo"
                            style={{ position: 'absolute', top: '20px', left: '20px' }}
                        />
                        <div className="orbit-planet">🌙</div>
                    </div>
                </div>

                {/* Cohete decorativo */}
                <div aria-hidden="true" style={{ position: 'absolute', bottom: '40px', right: '5%', fontSize: '3rem', opacity: 0.12, transform: 'rotate(-45deg)', pointerEvents: 'none' }}>
                    🚀
                </div>
            </section>

            {/* ── BARRA DE CONFIANZA ── */}
            <div className="trust-bar">
                {[
                    { num: '+10',        label: 'Años de Experiencia' },
                    { num: 'Certificada', label: 'Consejo Mexicano de Pediatría' },
                    { num: '🏥',          label: 'Atención en los mejores hospitales' },
                ].map((item, i) => (
                    <div key={i} className="trust-item">
                        <h3>{item.num}</h3>
                        <p>{item.label}</p>
                    </div>
                ))}
            </div>

            {/* ── SOBRE MÍ ── */}
            <section id="sobre-mi" style={{ padding: '90px 5%', textAlign: 'center', background: 'linear-gradient(180deg, #FFFFFF 0%, #F4F0F9 100%)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '10px' }}>👩‍⚕️</div>
                <h2 style={{ color: '#4A235A', fontSize: '2.4rem', margin: '0 0 10px 0' }}>Conoce a la Dra. Cristina Pacheco</h2>
                <p style={{ color: '#8E44AD', fontWeight: 600, marginBottom: '25px', fontSize: '1.05rem' }}>Pediatra Neonatóloga · Tijuana, B.C.</p>
                <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.8, color: '#444' }}>
                    Soy una apasionada por el inicio de la vida. Mi misión es ser el{' '}
                    <strong style={{ color: '#8E44AD' }}>"centro de control"</strong> que asegure que cada pequeño astronauta tenga las mejores herramientas para crecer sano y fuerte. Te acompaño a ti y a tu bebé con empatía, ciencia y mucho corazón.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px', flexWrap: 'wrap' }}>
                    {[
                        { icon: '🎓', text: 'Especialidad en Pediatría' },
                        { icon: '🏥', text: 'Sub-especialidad Neonatología' },
                        { icon: '📜', text: 'Certificada CNP' },
                    ].map((b, i) => (
                        <div key={i} style={{ backgroundColor: '#EDE1F5', borderRadius: '12px', padding: '14px 22px', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600, color: '#4A235A' }}>
                            <span style={{ fontSize: '1.4rem' }}>{b.icon}</span>
                            {b.text}
                        </div>
                    ))}
                </div>
            </section>

            {/* ── SERVICIOS ── */}
            <section id="servicios" style={{ padding: '80px 5%', backgroundColor: '#FFFFFF' }}>
                <h2 style={{ textAlign: 'center', color: '#4A235A', marginBottom: '12px', fontSize: '2.4rem' }}>¿Cómo puedo ayudarte?</h2>
                <p style={{ textAlign: 'center', color: '#888', marginBottom: '50px', fontSize: '1.05rem' }}>Servicios especializados para cada etapa del vuelo</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                    {SERVICES.map((srv, idx) => (
                        <div key={idx} className="card-hover" style={{ width: '300px', padding: '35px 28px', borderRadius: '20px', backgroundColor: '#F4F0F9', borderTop: '5px solid #A569BD' }}>
                            <div style={{ fontSize: '3.5rem', marginBottom: '18px' }}>{srv.icon}</div>
                            <h3 style={{ color: '#2E2430', margin: '0 0 12px 0', fontSize: '1.25rem' }}>{srv.title}</h3>
                            <p style={{ color: '#666', margin: 0, lineHeight: 1.6 }}>{srv.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── ARTÍCULOS ── */}
            <section id="articulos-de-interes" style={{ padding: '80px 5%', background: 'linear-gradient(135deg, #f0e8f8 0%, #e8f0f8 100%)' }}>
                <h2 style={{ textAlign: 'center', color: '#4A235A', marginBottom: '10px', fontSize: '2.4rem' }}>Diario de a Bordo 📚</h2>
                <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 50px auto', color: '#666', fontSize: '1.05rem' }}>
                    Consejos y guías para padres en su nueva aventura espacial.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                    {ARTICLES.map((blog, idx) => (
                        <div key={idx} className="card-hover" style={{ width: '300px', backgroundColor: '#FFFFFF', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(142,68,173,0.08)' }}>
                            <div style={{ background: 'linear-gradient(135deg, #EDE1F5, #D7BDE2)', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4.5rem' }}>
                                {blog.icon}
                            </div>
                            <div style={{ padding: '24px' }}>
                                <span style={{ color: '#A569BD', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    ⏱ {blog.readTime} lectura
                                </span>
                                <h4 style={{ color: '#2E2430', margin: '10px 0 14px 0', fontSize: '1.1rem', lineHeight: 1.4 }}>{blog.title}</h4>
                                <a href="#articulos-de-interes" style={{ color: '#8E44AD', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>
                                    Leer artículo →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── COSTOS ── */}
            <section id="costos" style={{ padding: '80px 5%', backgroundColor: '#FFFFFF' }}>
                <h2 style={{ textAlign: 'center', color: '#4A235A', marginBottom: '10px', fontSize: '2.4rem' }}>Planes de Vuelo 💳</h2>
                <p style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 50px auto', color: '#666', fontSize: '1.05rem' }}>
                    Transparencia total para que te enfoques solo en la salud de tu bebé.<br/>
                    <span style={{ color: '#A569BD', fontWeight: 600 }}>Aceptamos tarjetas de crédito y seguros médicos de reembolso.</span>
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', alignItems: 'center' }}>

                    {/* Consulta primera vez */}
                    <div className="card-hover" style={{ width: '300px', padding: '40px 30px', borderRadius: '22px', backgroundColor: '#F4F0F9', textAlign: 'center', border: '2px solid #E8DAEF' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🛸</div>
                        <h3 style={{ color: '#4A235A', margin: '0 0 8px 0', fontSize: '1.15rem' }}>Consulta de Primera Vez</h3>
                        <div style={{ fontSize: '2.8rem', fontWeight: 800, color: '#8E44AD', margin: '20px 0 5px 0', lineHeight: 1 }}>$1,200</div>
                        <span style={{ color: '#999', fontSize: '0.9rem' }}>MXN</span>
                        <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', color: '#555', margin: '24px 0 30px 0' }}>
                            <li style={{ marginBottom: '10px' }}>✅ Valoración completa del bebé</li>
                            <li style={{ marginBottom: '10px' }}>✅ Apertura de expediente clínico</li>
                            <li style={{ marginBottom: '10px' }}>✅ Resolución de dudas (~1 hora)</li>
                        </ul>
                        <a href={WA} target="_blank" rel="noreferrer" className="btn-primary" style={{ width: '100%', textAlign: 'center', padding: '12px 20px', fontSize: '1rem' }}>
                            Agendar
                        </a>
                    </div>

                    {/* Control niño sano - destacado */}
                    <div className="card-hover" style={{ width: '320px', padding: '45px 30px', borderRadius: '22px', background: 'linear-gradient(145deg, #4A235A, #7D3C98)', color: 'white', textAlign: 'center', boxShadow: '0 20px 50px rgba(74,35,90,0.3)', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#F7DC6F', color: '#4A235A', padding: '6px 18px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, whiteSpace: 'nowrap', letterSpacing: '0.5px' }}>
                            ⭐ MÁS POPULAR
                        </div>
                        <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🚀</div>
                        <h3 style={{ margin: '0 0 8px 0', fontSize: '1.15rem' }}>Control Niño Sano</h3>
                        <p style={{ opacity: 0.7, fontSize: '0.85rem', margin: '0 0 16px 0' }}>Consulta subsecuente</p>
                        <div style={{ fontSize: '2.8rem', fontWeight: 800, margin: '0 0 5px 0', lineHeight: 1 }}>$900</div>
                        <span style={{ opacity: 0.7, fontSize: '0.9rem' }}>MXN</span>
                        <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', margin: '24px 0 30px 0', opacity: 0.9 }}>
                            <li style={{ marginBottom: '10px' }}>✅ Medición de peso y talla</li>
                            <li style={{ marginBottom: '10px' }}>✅ Revisión de hitos de desarrollo</li>
                            <li style={{ marginBottom: '10px' }}>✅ Receta médica (si aplica)</li>
                        </ul>
                        <a href={WA} target="_blank" rel="noreferrer" style={{ backgroundColor: '#F7DC6F', color: '#4A235A', padding: '12px 20px', width: '100%', textAlign: 'center', borderRadius: '25px', fontWeight: 800, textDecoration: 'none', display: 'block', fontSize: '1rem', transition: 'all 0.3s ease' }}>
                            Agendar
                        </a>
                    </div>

                </div>
            </section>

            {/* ── CONTACTO ── */}
            <section id="contacto" style={{ padding: '80px 5%', background: 'linear-gradient(180deg, #F4F0F9 0%, #EDE1F5 100%)' }}>
                <h2 style={{ textAlign: 'center', color: '#4A235A', marginBottom: '10px', fontSize: '2.4rem' }}>Nuestra Base de Control 🌍</h2>
                <p style={{ textAlign: 'center', color: '#888', marginBottom: '50px', fontSize: '1.05rem' }}>Encuentra el consultorio y agenda tu visita</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', alignItems: 'stretch', maxWidth: '1000px', margin: '0 auto' }}>

                    <div style={{ flex: '1', minWidth: '280px', backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '22px', boxShadow: '0 10px 30px rgba(74,35,90,0.08)' }}>
                        <h3 style={{ color: '#8E44AD', marginTop: 0, fontSize: '1.5rem' }}>🏥 Consultorio Pediátrico</h3>
                        <div style={{ lineHeight: 1.8, color: '#444', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                            <p style={{ margin: 0 }}>
                                <strong style={{ color: '#4A235A' }}>📍 Dirección:</strong><br/>
                                Torre Torela, Blvd. Agua Caliente 9955<br/>
                                Piso Mezanine, Colonia Calete<br/>
                                Tijuana, B.C. 22044 · Consultorio 402
                            </p>
                            <p style={{ margin: 0 }}>
                                <strong style={{ color: '#4A235A' }}>🕒 Horarios:</strong><br/>
                                Lunes–Viernes: 9:00–14:00 y 16:00–19:00<br/>
                                Sábados: 9:00–13:00
                            </p>
                            <p style={{ margin: 0 }}>
                                <strong style={{ color: '#4A235A' }}>📞 Teléfono:</strong><br/>
                                +52 33 4942 1060
                            </p>
                        </div>
                        <a href={WA} target="_blank" rel="noreferrer" className="btn-primary" style={{ marginTop: '28px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 28px', fontSize: '1rem' }}>
                            <FaWhatsapp /> Escribir por WhatsApp
                        </a>
                    </div>

                    <div style={{ flex: '1', minWidth: '280px', borderRadius: '22px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(74,35,90,0.1)', minHeight: '350px' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.51268482451!2d-117.01736632368943!3d32.51243169742457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d948386b0dae71%3A0xc3bba30a84eef26b!2sTorre%20Torela!5e0!3m2!1ses-419!2smx!4v1711219600000!5m2!1ses-419!2smx"
                            width="100%"
                            height="100%"
                            style={{ border: 0, display: 'block', minHeight: '350px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa del consultorio en Torre Torela"
                        />
                    </div>

                </div>
            </section>

            {/* ── BOTÓN FLOTANTE WHATSAPP ── */}
            <a
                href={WA}
                target="_blank"
                rel="noreferrer"
                style={{ position: 'fixed', bottom: '28px', right: '28px', backgroundColor: '#25D366', color: 'white', padding: '14px 22px', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', boxShadow: '0 6px 20px rgba(37,211,102,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', transition: 'transform 0.3s ease' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
                <FaWhatsapp style={{ fontSize: '1.3rem' }} /> Escríbeme
            </a>

            {/* ── FOOTER ── */}
            <footer style={{ background: 'linear-gradient(135deg, #1a0a2e, #2E2430)', color: '#E8DAEF', padding: '50px 5% 30px', textAlign: 'center', borderTop: '4px solid #8E44AD' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '8px' }}>
                    🚀 Dra. Cristina Pacheco
                </div>
                <p style={{ margin: '0 0 6px 0', color: '#A569BD', fontWeight: 600, fontSize: '1rem' }}>
                    Pediatría Neonatal · Tijuana, B.C.
                </p>
                <p style={{ margin: '0 0 25px 0', fontStyle: 'italic', color: '#C39BD3', fontSize: '0.95rem' }}>
                    Guiando a tu pequeño astronauta en su viaje más importante.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginBottom: '25px' }}>
                    <a href="#" className="social-link" aria-label="Instagram"><FaInstagram /></a>
                    <a href="#" className="social-link" aria-label="Facebook"><FaFacebook /></a>
                    <a href="#" className="social-link" aria-label="LinkedIn"><FaLinkedin /></a>
                </div>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#7D6B82' }}>
                    © {new Date().getFullYear()} Todos los derechos reservados.{' '}
                    <a href="#aviso" style={{ color: '#A569BD', textDecoration: 'underline' }}>Aviso de Privacidad</a>
                </p>
            </footer>
        </div>
    );
}
