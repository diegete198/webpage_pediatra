import { Routes, Route } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import '@/styles/global.css';

import Header         from '@/components/layout/Header';
import Footer         from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import ScrollToTop    from '@/components/ui/ScrollToTop';
import HomePage       from '@/pages/HomePage';
import ArticlePage    from '@/pages/ArticlePage';

// ─── Static star data (avoid re-renders) ───────────────────────────────────
const STARS = Array.from({ length: 120 }, (_, i) => ({
    id: i,
    top:  `${(i * 17 + 3) % 100}%`,
    left: `${(i * 31 + 7) % 100}%`,
    size: (i % 3) + 1,
    delay: `${(i * 0.4) % 6}s`,
    dur:   `${2 + (i % 4)}s`,
}));

// ─── Floating debris (small emojis) ────────────────────────────────────────
const DEBRIS = [
    { id: 0, emoji: '🌙', top: '15%', left: '8%',  dur: '9s',  delay: '0s'   },
    { id: 1, emoji: '⭐', top: '72%', left: '88%', dur: '7s',  delay: '1.5s' },
    { id: 2, emoji: '🪐', top: '55%', left: '5%',  dur: '11s', delay: '3s'   },
    { id: 3, emoji: '✨', top: '28%', left: '92%', dur: '6s',  delay: '0.8s' },
    { id: 4, emoji: '💫', top: '85%', left: '20%', dur: '8s',  delay: '2s'   },
    { id: 5, emoji: '🌟', top: '10%', left: '60%', dur: '10s', delay: '4s'   },
];

// ─── Progress bar label cycle ───────────────────────────────────────────────
const LAUNCH_MSGS = [
    'Cargando combustible…',
    'Alineando órbita…',
    'Verificando sistemas…',
    'Preparando despegue…',
    '¡Casi en órbita!',
];

export default function App() {
    const [progress, setProgress]     = useState(0);
    const [msgIdx,   setMsgIdx]       = useState(0);
    const [explode,  setExplode]      = useState(false);
    const progressRef = useRef(0);

    // Animate progress bar 0 → ~78 % slowly
    useEffect(() => {
        const id = setInterval(() => {
            progressRef.current = Math.min(progressRef.current + 0.18, 78);
            setProgress(progressRef.current);
        }, 80);
        return () => clearInterval(id);
    }, []);

    // Cycle launch messages
    useEffect(() => {
        const id = setInterval(() => {
            setMsgIdx(p => (p + 1) % LAUNCH_MSGS.length);
        }, 2200);
        return () => clearInterval(id);
    }, []);

    // Rocket explode-pulse on hover
    const handleRocketEnter = () => setExplode(true);
    const handleRocketLeave = () => setExplode(false);

    // return (
    //     <div style={{ backgroundColor: '#F4F0F9', fontFamily: "'Nunito', system-ui, sans-serif", color: '#2E2430' }}>
    //         <ScrollToTop />
    //         <Header />
    //         <Routes>
    //             <Route path="/"                    element={<HomePage />} />
    //             <Route path="/articulos/:slug"     element={<ArticlePage />} />
    //         </Routes>
    //         <WhatsAppButton />
    //         <Footer />
    //     </div>
    // );

    return (
        <div style={{
            minHeight: '100vh',
            background: 'radial-gradient(ellipse at top, #1a0a2e 0%, #2E2430 40%, #0d0618 100%)',
            fontFamily: "'Nunito', system-ui, sans-serif",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative',
            padding: '20px',
        }}>

            <style>{`
                @keyframes twinkle {
                    0%, 100% { opacity: 0.2; transform: scale(1);   }
                    50%       { opacity: 1;   transform: scale(1.6); }
                }
                @keyframes floatDebris {
                    0%   { transform: translateY(0)   rotate(0deg);   }
                    33%  { transform: translateY(-18px) rotate(8deg);  }
                    66%  { transform: translateY(8px)  rotate(-5deg);  }
                    100% { transform: translateY(0)   rotate(0deg);   }
                }
                @keyframes rocketFloat {
                    0%   { transform: translateY(0px)   rotate(-8deg); }
                    50%  { transform: translateY(-22px) rotate(5deg);  }
                    100% { transform: translateY(0px)   rotate(-8deg); }
                }
                @keyframes rocketExplode {
                    0%   { transform: scale(1)    rotate(-8deg); filter: drop-shadow(0 0 0px #F7DC6F); }
                    50%  { transform: scale(1.35) rotate(10deg); filter: drop-shadow(0 0 28px #F7DC6F); }
                    100% { transform: scale(1)    rotate(-8deg); filter: drop-shadow(0 0 0px #F7DC6F); }
                }
                @keyframes orbit {
                    from { transform: rotate(0deg)   translateX(90px) rotate(0deg);   }
                    to   { transform: rotate(360deg) translateX(90px) rotate(-360deg); }
                }
                @keyframes orbitBaby {
                    from { transform: rotate(180deg) translateX(90px) rotate(-180deg); }
                    to   { transform: rotate(540deg) translateX(90px) rotate(-540deg); }
                }
                @keyframes shimmer {
                    0%   { background-position: -200% center; }
                    100% { background-position:  200% center; }
                }
                @keyframes slideMsg {
                    0%   { opacity: 0; transform: translateY(8px);  }
                    15%  { opacity: 1; transform: translateY(0);    }
                    85%  { opacity: 1; transform: translateY(0);    }
                    100% { opacity: 0; transform: translateY(-8px); }
                }
                @keyframes pulseGlow {
                    0%, 100% { box-shadow: 0 0 18px #8E44AD55, 0 0 40px #8E44AD22; }
                    50%      { box-shadow: 0 0 32px #A569BD99, 0 0 70px #8E44AD55; }
                }
                @keyframes scanLine {
                    0%   { top: 0%;   }
                    100% { top: 100%; }
                }
            `}</style>

            {/* ── Stars ── */}
            {STARS.map(s => (
                <span key={s.id} style={{
                    position: 'absolute',
                    top: s.top, left: s.left,
                    width:  `${s.size}px`,
                    height: `${s.size}px`,
                    borderRadius: '50%',
                    background: '#fff',
                    animation: `twinkle ${s.dur} ${s.delay} ease-in-out infinite`,
                    pointerEvents: 'none',
                }} />
            ))}

            {/* ── Floating debris ── */}
            {DEBRIS.map(d => (
                <span key={d.id} style={{
                    position: 'absolute',
                    top: d.top, left: d.left,
                    fontSize: '1.8rem',
                    animation: `floatDebris ${d.dur} ${d.delay} ease-in-out infinite`,
                    pointerEvents: 'none',
                    filter: 'drop-shadow(0 0 8px #C39BD3)',
                }}>{d.emoji}</span>
            ))}

            {/* ── Orbit ring + planets ── */}
            <div style={{ position: 'relative', width: '220px', height: '220px', marginBottom: '32px' }}>
                {/* ring */}
                <div style={{
                    position: 'absolute', inset: 0,
                    border: '1.5px dashed #C39BD366',
                    borderRadius: '50%',
                    animation: 'none',
                }} />
                {/* orbiting star */}
                <span style={{
                    position: 'absolute',
                    top: '50%', left: '50%',
                    marginTop: '-8px', marginLeft: '-8px',
                    fontSize: '1rem',
                    animation: 'orbit 6s linear infinite',
                    display: 'block',
                }}>⭐</span>
                {/* orbiting baby */}
                <span style={{
                    position: 'absolute',
                    top: '50%', left: '50%',
                    marginTop: '-10px', marginLeft: '-10px',
                    fontSize: '1.2rem',
                    animation: 'orbitBaby 6s linear infinite',
                    display: 'block',
                }}>👶</span>

                {/* ── Central rocket ── */}
                <div
                    onMouseEnter={handleRocketEnter}
                    onMouseLeave={handleRocketLeave}
                    style={{
                        position: 'absolute',
                        top: '50%', left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: '6rem',
                        cursor: 'default',
                        animation: explode
                            ? 'rocketExplode 0.5s ease-in-out infinite'
                            : 'rocketFloat 3.5s ease-in-out infinite',
                        filter: 'drop-shadow(0 0 16px #F7DC6F88)',
                        lineHeight: 1,
                    }}
                >🚀</div>
            </div>

            {/* ── Card ── */}
            <div style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(195,155,211,0.25)',
                borderRadius: '24px',
                padding: '40px 44px',
                maxWidth: '620px',
                width: '100%',
                backdropFilter: 'blur(14px)',
                animation: 'pulseGlow 4s ease-in-out infinite',
                position: 'relative',
                overflow: 'hidden',
            }}>
                {/* scan-line effect */}
                <div style={{
                    position: 'absolute',
                    left: 0, right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #C39BD355, transparent)',
                    animation: 'scanLine 3s linear infinite',
                    pointerEvents: 'none',
                }} />

                <p style={{
                    margin: '0 0 6px 0',
                    fontSize: '0.85rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: '#C39BD3',
                }}>Misión en progreso</p>

                <h1 style={{
                    margin: '0 0 12px 0',
                    fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
                    fontWeight: 900,
                    background: 'linear-gradient(90deg, #E8DAEF, #F7DC6F, #C39BD3, #E8DAEF)',
                    backgroundSize: '300% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'shimmer 4s linear infinite',
                    lineHeight: 1.15,
                }}>
                    ¡Base de Control<br/>casi lista!
                </h1>

                <p style={{
                    margin: '0 0 28px 0',
                    fontSize: '1.05rem',
                    color: '#E8DAEFCC',
                    lineHeight: 1.7,
                }}>
                    <strong style={{ color: '#F7DC6F' }}>Dra. Cristina Pacheco</strong>
                    {' '}· Pediatra Neonatóloga<br/>
                    Muy pronto podrás agendar tus citas y conocer todo sobre el cuidado de tu bebé.
                </p>

                {/* ── Progress bar ── */}
                <div style={{ marginBottom: '10px' }}>
                    <div style={{
                        height: '8px',
                        background: 'rgba(255,255,255,0.08)',
                        borderRadius: '99px',
                        overflow: 'hidden',
                    }}>
                        <div style={{
                            height: '100%',
                            width: `${progress}%`,
                            background: 'linear-gradient(90deg, #8E44AD, #F7DC6F)',
                            borderRadius: '99px',
                            transition: 'width 0.08s linear',
                            boxShadow: '0 0 12px #F7DC6F88',
                        }} />
                    </div>
                    <p key={msgIdx} style={{
                        margin: '10px 0 0 0',
                        fontSize: '0.82rem',
                        color: '#C39BD3',
                        letterSpacing: '0.05em',
                        animation: 'slideMsg 2.2s ease forwards',
                    }}>{LAUNCH_MSGS[msgIdx]}</p>
                </div>
            </div>

            {/* ── Footer mini ── */}
            <p style={{
                marginTop: '28px',
                fontSize: '0.8rem',
                color: '#8E44AD99',
                letterSpacing: '0.1em',
            }}>© 2026 Dra. Cristina Pacheco · Tijuana, B.C.</p>
        </div>
    );
}
