import { SiWhatsapp } from 'react-icons/si';
import { WA } from '@/constants/data';

export default function WhatsAppButton() {
    return (
        <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            aria-label="Contactar por WhatsApp"
            style={{
                position: 'fixed',
                bottom: '28px',
                right: '28px',
                backgroundColor: '#25D366',
                color: 'white',
                padding: '14px 22px',
                borderRadius: '50px',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(37,211,102,0.5)',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '1rem',
                transition: 'transform 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
            <SiWhatsapp style={{ fontSize: '1.3rem' }} /> Escríbeme
        </a>
    );
}
