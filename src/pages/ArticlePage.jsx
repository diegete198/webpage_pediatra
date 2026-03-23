import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaClock, FaCalendarAlt } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';
import { getArticleBySlug, ARTICLES_CONTENT } from '@/content/articles';
import { WA } from '@/constants/data';

export default function ArticlePage() {
    const { slug } = useParams();
    const article = getArticleBySlug(slug);

    if (!article) return <NotFound />;

    const related = ARTICLES_CONTENT.filter(a => a.slug !== slug);

    return (
        <div style={{ backgroundColor: '#F4F0F9', minHeight: '100vh' }}>
            <ArticleHero article={article} />
            <ArticleBody article={article} related={related} />
        </div>
    );
}

/* ── HERO DEL ARTÍCULO ── */
function ArticleHero({ article }) {
    return (
        <div style={{
            background: 'linear-gradient(135deg, #0a0015 0%, #1a0a2e 50%, #4A235A 100%)',
            padding: '60px 5% 80px',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Estrellas decorativas */}
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                {[...Array(30)].map((_, i) => (
                    <div key={i} style={{
                        position: 'absolute',
                        width: i % 3 === 0 ? 3 : 1.5,
                        height: i % 3 === 0 ? 3 : 1.5,
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        top:  `${(i * 137.5) % 100}%`,
                        left: `${(i * 97.3)  % 100}%`,
                        opacity: 0.4,
                    }} />
                ))}
            </div>

            <div style={{ maxWidth: '780px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <Link
                    to="/#articulos-de-interes"
                    style={{ color: '#C39BD3', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: 600, marginBottom: '28px', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#F7DC6F'}
                    onMouseLeave={e => e.currentTarget.style.color = '#C39BD3'}
                >
                    <FaArrowLeft /> Volver al Diario de a Bordo
                </Link>

                <div style={{ fontSize: '4rem', marginBottom: '16px' }}>{article.icon}</div>

                <div style={{ display: 'inline-flex', gap: '16px', marginBottom: '20px', flexWrap: 'wrap' }}>
                    <span style={{ backgroundColor: 'rgba(165,105,189,0.25)', border: '1px solid rgba(165,105,189,0.5)', borderRadius: '20px', padding: '5px 14px', fontSize: '0.8rem', color: '#E8DAEF', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
                        <FaClock style={{ fontSize: '0.75rem' }} /> {article.readTime} de lectura
                    </span>
                    <span style={{ backgroundColor: 'rgba(165,105,189,0.25)', border: '1px solid rgba(165,105,189,0.5)', borderRadius: '20px', padding: '5px 14px', fontSize: '0.8rem', color: '#E8DAEF', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
                        <FaCalendarAlt style={{ fontSize: '0.75rem' }} /> {article.date}
                    </span>
                </div>

                <h1 style={{ color: '#FFFFFF', fontSize: '2.4rem', margin: '0 0 20px 0', lineHeight: 1.25, fontWeight: 800 }}>
                    {article.title}
                </h1>

                <p style={{ color: '#D7BDE2', fontSize: '1.1rem', lineHeight: 1.7, margin: 0 }}>
                    {article.intro}
                </p>

                <div style={{ marginTop: '30px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: 46, height: 46, borderRadius: '50%', backgroundColor: '#4A235A', border: '2px solid #A569BD', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                        👩‍⚕️
                    </div>
                    <div>
                        <div style={{ color: '#E8DAEF', fontWeight: 700, fontSize: '0.95rem' }}>Dra. Cristina Pacheco</div>
                        <div style={{ color: '#A569BD', fontSize: '0.8rem' }}>Pediatra Neonatóloga</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ── CUERPO DEL ARTÍCULO ── */
function ArticleBody({ article, related }) {
    return (
        <div style={{ maxWidth: '780px', margin: '0 auto', padding: '60px 5%' }}>

            {/* Secciones del artículo */}
            {article.sections.map((section, idx) => (
                <ArticleSection key={idx} section={section} accentColor={article.accentColor} />
            ))}

            {/* Conclusión */}
            <div style={{ backgroundColor: '#EDE1F5', borderRadius: '16px', padding: '30px 32px', margin: '40px 0', borderLeft: `5px solid ${article.accentColor}` }}>
                <p style={{ color: '#2E2430', fontSize: '1.05rem', lineHeight: 1.8, margin: 0, fontStyle: 'italic' }}>
                    {article.conclusion}
                </p>
            </div>

            {/* CTA */}
            <div style={{ backgroundColor: '#2E2430', borderRadius: '20px', padding: '40px 32px', textAlign: 'center', margin: '50px 0' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🚀</div>
                <h3 style={{ color: '#E8DAEF', margin: '0 0 10px 0', fontSize: '1.4rem' }}>
                    {article.ctaText}
                </h3>
                <p style={{ color: '#A569BD', margin: '0 0 24px 0', fontSize: '0.95rem' }}>
                    Dra. Cristina Pacheco · Pediatra Neonatóloga · Tijuana, B.C.
                </p>
                <a
                    href={WA}
                    target="_blank"
                    rel="noreferrer"
                    style={{ backgroundColor: '#25D366', color: 'white', padding: '13px 28px', borderRadius: '30px', textDecoration: 'none', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '1rem', boxShadow: '0 6px 20px rgba(37,211,102,0.4)', transition: 'transform 0.2s ease' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                    <SiWhatsapp style={{ fontSize: '1.2rem' }} /> Agendar Cita por WhatsApp
                </a>
            </div>

            {/* Artículos relacionados */}
            <div style={{ marginTop: '60px' }}>
                <h2 style={{ color: '#4A235A', marginBottom: '8px', fontSize: '1.6rem' }}>Otros artículos del diario 📚</h2>
                <p style={{ color: '#888', marginBottom: '30px', fontSize: '0.95rem' }}>Sigue explorando el Diario de a Bordo</p>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    {related.map(rel => (
                        <Link
                            key={rel.slug}
                            to={`/articulos/${rel.slug}`}
                            style={{ flex: '1', minWidth: '220px', backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '24px', textDecoration: 'none', boxShadow: '0 4px 15px rgba(142,68,173,0.08)', transition: 'transform 0.3s ease, box-shadow 0.3s ease', display: 'block' }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(142,68,173,0.18)'; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(142,68,173,0.08)'; }}
                        >
                            <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{rel.icon}</div>
                            <div style={{ color: '#A569BD', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
                                ⏱ {rel.readTime} lectura
                            </div>
                            <h4 style={{ color: '#2E2430', margin: 0, fontSize: '1rem', lineHeight: 1.4 }}>{rel.title}</h4>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Volver */}
            <div style={{ textAlign: 'center', marginTop: '50px', paddingTop: '30px', borderTop: '1px solid #E8DAEF' }}>
                <Link
                    to="/"
                    style={{ color: '#8E44AD', textDecoration: 'none', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '1rem' }}
                >
                    <FaArrowLeft /> Volver al inicio
                </Link>
            </div>
        </div>
    );
}

/* ── SECCIÓN INDIVIDUAL ── */
function ArticleSection({ section, accentColor }) {
    return (
        <div style={{ marginBottom: '40px' }}>
            <h2 style={{ color: '#4A235A', fontSize: '1.5rem', margin: '0 0 14px 0', borderBottom: `3px solid ${accentColor}`, paddingBottom: '10px', display: 'inline-block' }}>
                {section.title}
            </h2>

            {section.content && (
                <p style={{ color: '#444', lineHeight: 1.8, margin: '0 0 16px 0', fontSize: '1.05rem' }}>
                    {section.content}
                </p>
            )}

            {section.list && (
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px 0' }}>
                    {section.list.map((item, i) => (
                        <li key={i} style={{ padding: '10px 0', borderBottom: '1px solid #EDE1F5', color: '#444', lineHeight: 1.6, fontSize: '0.98rem' }}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}

            {section.tip && (
                <div style={{ backgroundColor: '#FEF9E7', border: '1px solid #F7DC6F', borderRadius: '12px', padding: '18px 22px', display: 'flex', gap: '14px', alignItems: 'flex-start', marginTop: '16px' }}>
                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>💡</span>
                    <p style={{ margin: 0, color: '#555', lineHeight: 1.7, fontSize: '0.95rem' }}>
                        <strong style={{ color: '#4A235A' }}>Consejo de la Dra. Pacheco:</strong> {section.tip}
                    </p>
                </div>
            )}
        </div>
    );
}

/* ── 404 ── */
function NotFound() {
    return (
        <div style={{ textAlign: 'center', padding: '100px 5%', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: '5rem', marginBottom: '20px' }}>🛸</div>
            <h1 style={{ color: '#4A235A', marginBottom: '12px' }}>Artículo no encontrado</h1>
            <p style={{ color: '#888', marginBottom: '30px' }}>Esta misión no existe en nuestro diario de a bordo.</p>
            <Link to="/" style={{ color: '#8E44AD', textDecoration: 'none', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <FaArrowLeft /> Regresar al inicio
            </Link>
        </div>
    );
}
