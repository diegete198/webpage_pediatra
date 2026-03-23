import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const SOCIAL_LINKS = [
    {
        href: 'https://www.instagram.com/doctora_cristina_pacheco?igsh=c2NkdTBicjU5cWgz',
        className: 'planet-instagram',
        icon: <FaInstagram />,
        label: '🌸 Instagram',
        ariaLabel: 'Instagram',
    },
    {
        href: '#',
        className: 'planet-facebook',
        icon: <FaFacebook />,
        label: '🔵 Facebook',
        ariaLabel: 'Facebook',
    },
    {
        href: '#',
        className: 'planet-linkedin',
        icon: <FaLinkedin />,
        label: '🪐 LinkedIn',
        ariaLabel: 'LinkedIn',
    },
];

export default function Footer() {
    return (
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

            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '28px', flexWrap: 'wrap' }}>
                {SOCIAL_LINKS.map(link => (
                    <a
                        key={link.ariaLabel}
                        href={link.href}
                        className={`social-planet ${link.className}`}
                        aria-label={link.ariaLabel}
                        target={link.href !== '#' ? '_blank' : undefined}
                        rel={link.href !== '#' ? 'noreferrer' : undefined}
                    >
                        <div className="planet-orb">{link.icon}</div>
                        <span className="planet-label">{link.label}</span>
                    </a>
                ))}
            </div>

            <p style={{ margin: 0, fontSize: '0.8rem', color: '#7D6B82' }}>
                © {new Date().getFullYear()} Todos los derechos reservados.{' '}
                <a href="#aviso" style={{ color: '#A569BD', textDecoration: 'underline' }}>Aviso de Privacidad</a>
            </p>
        </footer>
    );
}
