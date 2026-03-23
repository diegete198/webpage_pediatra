import { SERVICES } from '@/constants/data';

export default function Services() {
    return (
        <section id="servicios" style={{ padding: '80px 5%', backgroundColor: '#FFFFFF' }}>
            <h2 style={{ textAlign: 'center', color: '#4A235A', marginBottom: '12px', fontSize: '2.4rem' }}>
                ¿Cómo puedo ayudarte?
            </h2>
            <p style={{ textAlign: 'center', color: '#888', marginBottom: '50px', fontSize: '1.05rem' }}>
                Servicios especializados para cada etapa del vuelo
            </p>
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
    );
}
