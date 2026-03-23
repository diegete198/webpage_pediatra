import { useState } from 'react';
import { NAV_ITEMS } from '@/constants/data';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <header className="glass-header">
                <div className="nav-logo">🚀 Dra. Cristina Pacheco</div>

                <nav className="nav-links">
                    {NAV_ITEMS.map(item => (
                        <a key={item.label} href={item.href} className="nav-link">{item.label}</a>
                    ))}
                </nav>

                <button
                    className={`hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(v => !v)}
                    aria-label="Menú"
                >
                    <span /><span /><span />
                </button>
            </header>

            <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                {NAV_ITEMS.map(item => (
                    <a key={item.label} href={item.href} className="nav-link" onClick={closeMenu}>
                        {item.label}
                    </a>
                ))}
            </nav>
        </>
    );
}
