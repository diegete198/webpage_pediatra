import { Link } from 'react-router-dom';
import { ARTICLES } from '@/constants/data';

export default function Articles() {
    return (
        <section id="articulos-de-interes" style={{ padding: '80px 5%', background: 'linear-gradient(135deg, #f0e8f8 0%, #e8f0f8 100%)' }}>
            <h2 style={{ textAlign: 'center', color: '#4A235A', marginBottom: '10px', fontSize: '2.4rem' }}>
                Diario de a Bordo 📚
            </h2>
            <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 50px auto', color: '#666', fontSize: '1.05rem' }}>
                Consejos y guías para padres en su nueva aventura espacial.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                {ARTICLES.map((blog, idx) => (
                    <ArticleCard key={idx} blog={blog} />
                ))}
            </div>
        </section>
    );
}

function ArticleCard({ blog }) {
    return (
        <div className="card-hover" style={{ width: '300px', backgroundColor: '#FFFFFF', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(142,68,173,0.08)' }}>
            <div style={{ background: 'linear-gradient(135deg, #EDE1F5, #D7BDE2)', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4.5rem' }}>
                {blog.icon}
            </div>
            <div style={{ padding: '24px' }}>
                <span style={{ color: '#A569BD', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                    ⏱ {blog.readTime} lectura
                </span>
                <h4 style={{ color: '#2E2430', margin: '10px 0 14px 0', fontSize: '1.1rem', lineHeight: 1.4 }}>
                    {blog.title}
                </h4>
                <Link
                    to={`/articulos/${blog.slug}`}
                    style={{ color: '#8E44AD', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '4px', transition: 'gap 0.2s ease' }}
                    onMouseEnter={e => e.currentTarget.style.gap = '8px'}
                    onMouseLeave={e => e.currentTarget.style.gap = '4px'}
                >
                    Leer artículo →
                </Link>
            </div>
        </div>
    );
}
