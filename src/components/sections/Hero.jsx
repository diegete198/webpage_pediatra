import { SiWhatsapp } from 'react-icons/si';
import fotoDoctora from '@/assets/fotoprincipal.jpeg';
import { STARS, WA } from '@/constants/data';

export default function Hero() {
    return (
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
                    🌌 PEDIATRA NEONATOLOGA · TIJUANA
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
                    <SiWhatsapp style={{ marginRight: '8px', verticalAlign: 'middle' }} />
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
    );
}
