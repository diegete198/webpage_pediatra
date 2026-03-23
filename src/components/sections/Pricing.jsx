import { WA } from '@/constants/data';

const PLANS = [
    {
        icon: '🛸',
        title: 'Consulta de Primera Vez',
        subtitle: null,
        price: '$1,200',
        currency: 'MXN',
        features: [
            'Valoración completa del bebé',
            'Apertura de expediente clínico',
            'Resolución de dudas (~1 hora)',
        ],
        featured: false,
    },
    {
        icon: '🚀',
        title: 'Control Niño Sano',
        subtitle: 'Consulta subsecuente',
        price: '$900',
        currency: 'MXN',
        features: [
            'Medición de peso y talla',
            'Revisión de hitos de desarrollo',
            'Receta médica (si aplica)',
        ],
        featured: true,
    },
];

export default function Pricing() {
    return (
        <section id="costos" style={{ padding: '80px 5%', backgroundColor: '#FFFFFF' }}>
            <h2 style={{ textAlign: 'center', color: '#4A235A', marginBottom: '10px', fontSize: '2.4rem' }}>
                Planes de Vuelo 💳
            </h2>
            <p style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 50px auto', color: '#666', fontSize: '1.05rem' }}>
                Transparencia total para que te enfoques solo en la salud de tu bebé.<br />
                <span style={{ color: '#A569BD', fontWeight: 600 }}>Aceptamos tarjetas de crédito y seguros médicos de reembolso.</span>
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', alignItems: 'center' }}>
                {PLANS.map(plan => (
                    plan.featured
                        ? <FeaturedPlan key={plan.title} plan={plan} />
                        : <StandardPlan key={plan.title} plan={plan} />
                ))}
            </div>
        </section>
    );
}

function StandardPlan({ plan }) {
    return (
        <div className="card-hover" style={{ width: '300px', padding: '40px 30px', borderRadius: '22px', backgroundColor: '#F4F0F9', textAlign: 'center', border: '2px solid #E8DAEF' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{plan.icon}</div>
            <h3 style={{ color: '#4A235A', margin: '0 0 8px 0', fontSize: '1.15rem' }}>{plan.title}</h3>
            <div style={{ fontSize: '2.8rem', fontWeight: 800, color: '#8E44AD', margin: '20px 0 5px 0', lineHeight: 1 }}>{plan.price}</div>
            <span style={{ color: '#999', fontSize: '0.9rem' }}>{plan.currency}</span>
            <FeatureList features={plan.features} />
            <a href={WA} target="_blank" rel="noreferrer" className="btn-primary" style={{ width: '100%', textAlign: 'center', padding: '12px 20px', fontSize: '1rem' }}>
                Agendar
            </a>
        </div>
    );
}

function FeaturedPlan({ plan }) {
    return (
        <div className="card-hover" style={{ width: '320px', padding: '45px 30px', borderRadius: '22px', background: 'linear-gradient(145deg, #4A235A, #7D3C98)', color: 'white', textAlign: 'center', boxShadow: '0 20px 50px rgba(74,35,90,0.3)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#F7DC6F', color: '#4A235A', padding: '6px 18px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, whiteSpace: 'nowrap', letterSpacing: '0.5px' }}>
                ⭐ MÁS POPULAR
            </div>
            <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{plan.icon}</div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '1.15rem' }}>{plan.title}</h3>
            {plan.subtitle && <p style={{ opacity: 0.7, fontSize: '0.85rem', margin: '0 0 16px 0' }}>{plan.subtitle}</p>}
            <div style={{ fontSize: '2.8rem', fontWeight: 800, margin: '0 0 5px 0', lineHeight: 1 }}>{plan.price}</div>
            <span style={{ opacity: 0.7, fontSize: '0.9rem' }}>{plan.currency}</span>
            <FeatureList features={plan.features} dark />
            <a href={WA} target="_blank" rel="noreferrer" style={{ backgroundColor: '#F7DC6F', color: '#4A235A', padding: '12px 20px', width: '100%', textAlign: 'center', borderRadius: '25px', fontWeight: 800, textDecoration: 'none', display: 'block', fontSize: '1rem', transition: 'all 0.3s ease' }}>
                Agendar
            </a>
        </div>
    );
}

function FeatureList({ features, dark = false }) {
    return (
        <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', margin: '24px 0 30px 0', color: dark ? 'rgba(255,255,255,0.9)' : '#555' }}>
            {features.map((f, i) => (
                <li key={i} style={{ marginBottom: '10px' }}>✅ {f}</li>
            ))}
        </ul>
    );
}
