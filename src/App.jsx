import { Routes, Route } from 'react-router-dom';
import '@/styles/global.css';

import Header         from '@/components/layout/Header';
import Footer         from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import ScrollToTop    from '@/components/ui/ScrollToTop';
import HomePage       from '@/pages/HomePage';
import ArticlePage    from '@/pages/ArticlePage';

export default function App() {
    return (
        <div style={{ backgroundColor: '#F4F0F9', fontFamily: "'Nunito', system-ui, sans-serif", color: '#2E2430' }}>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/"                    element={<HomePage />} />
                <Route path="/articulos/:slug"     element={<ArticlePage />} />
            </Routes>
            <WhatsAppButton />
            <Footer />
        </div>
    );
}
