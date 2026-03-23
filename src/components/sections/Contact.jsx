import { FaWhatsapp } from 'react-icons/fa';
import { WA } from '@/constants/data';

const MAP_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.51268482451!2d-117.01736632368943!3d32.51243169742457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d948386b0dae71%3A0xc3bba30a84eef26b!2sTorre%20Torela!5e0!3m2!1ses-419!2smx!4v1711219600000!5m2!1ses-419!2smx';

export default function Contact() {
    return (
        <section id="contacto" style={{ padding: '80px 5%', background: 'linear-gradient(180deg, #F4F0F9 0%, #EDE1F5 100%)' }}>
            <h2 style={{ textAlign: 'center', color: '#4A235A', marginBottom: '10px', fontSize: '2.4rem' }}>
                Nuestra Base de Control 🌍
            </h2>
            <p style={{ textAlign: 'center', color: '#888', marginBottom: '50px', fontSize: '1.05rem' }}>
                Encuentra el consultorio y agenda tu visita
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', alignItems: 'stretch', maxWidth: '1000px', margin: '0 auto' }}>

                <div style={{ flex: '1', minWidth: '280px', backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '22px', boxShadow: '0 10px 30px rgba(74,35,90,0.08)' }}>
                    <h3 style={{ color: '#8E44AD', marginTop: 0, fontSize: '1.5rem' }}>🏥 Consultorio Pediátrico</h3>
                    <div style={{ lineHeight: 1.8, color: '#444', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                        <p style={{ margin: 0 }}>
                            <strong style={{ color: '#4A235A' }}>📍 Dirección:</strong><br />
                            Torre Torela, Blvd. Agua Caliente 9955<br />
                            Piso Mezanine, Colonia Calete<br />
                            Tijuana, B.C. 22044 · Consultorio 402
                        </p>
                        <p style={{ margin: 0 }}>
                            <strong style={{ color: '#4A235A' }}>🕒 Horarios:</strong><br />
                            Lunes–Viernes: 9:00–14:00 y 16:00–19:00<br />
                            Sábados: 9:00–13:00
                        </p>
                        <p style={{ margin: 0 }}>
                            <strong style={{ color: '#4A235A' }}>📞 Teléfono:</strong><br />
                            +52 33 4942 1060
                        </p>
                    </div>
                    <a href={WA} target="_blank" rel="noreferrer" className="btn-primary" style={{ marginTop: '28px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 28px', fontSize: '1rem' }}>
                        <FaWhatsapp /> Escribir por WhatsApp
                    </a>
                </div>

                <div style={{ flex: '1', minWidth: '280px', borderRadius: '22px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(74,35,90,0.1)', minHeight: '350px' }}>
                    <iframe
                        src={MAP_SRC}
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
    );
}
