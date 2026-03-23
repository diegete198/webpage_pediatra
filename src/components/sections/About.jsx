import { CREDENTIALS } from '@/constants/data';

export default function About() {
    return (
        <section id="sobre-mi" style={{ padding: '90px 5%', textAlign: 'center', background: 'linear-gradient(180deg, #FFFFFF 0%, #F4F0F9 100%)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>👩‍⚕️</div>
            <h2 style={{ color: '#4A235A', fontSize: '2.4rem', margin: '0 0 10px 0' }}>
                Conoce a la Dra. Cristina Pacheco
            </h2>
            <p style={{ color: '#8E44AD', fontWeight: 600, marginBottom: '25px', fontSize: '1.05rem' }}>
                Pediatra Neonatóloga · Tijuana, B.C.
            </p>
            <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.8, color: '#444' }}>
                Soy una apasionada por el inicio de la vida. Mi misión es ser el{' '}
                <strong style={{ color: '#8E44AD' }}>"centro de control"</strong> que asegure que cada pequeño astronauta tenga las mejores herramientas para crecer sano y fuerte. Te acompaño a ti y a tu bebé con empatía, ciencia y mucho corazón.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px', flexWrap: 'wrap' }}>
                {CREDENTIALS.map((b, i) => (
                    <div key={i} style={{ backgroundColor: '#EDE1F5', borderRadius: '12px', padding: '14px 22px', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600, color: '#4A235A' }}>
                        <span style={{ fontSize: '1.4rem' }}>{b.icon}</span>
                        {b.text}
                    </div>
                ))}
            </div>
        </section>
    );
}
