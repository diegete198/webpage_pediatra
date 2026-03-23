import '@/styles/global.css';

import Header          from '@/components/layout/Header';
import Footer          from '@/components/layout/Footer';
import WhatsAppButton  from '@/components/ui/WhatsAppButton';
import Hero            from '@/components/sections/Hero';
import TrustBar        from '@/components/sections/TrustBar';
import About           from '@/components/sections/About';
import Services        from '@/components/sections/Services';
import Articles        from '@/components/sections/Articles';
import Pricing         from '@/components/sections/Pricing';
import Contact         from '@/components/sections/Contact';

export default function App() {
    return (
        <div style={{ backgroundColor: '#F4F0F9', fontFamily: "'Segoe UI', system-ui, sans-serif", color: '#2E2430' }}>
            <Header />
            <main>
                <Hero />
                <TrustBar />
                <About />
                <Services />
                <Articles />
                <Pricing />
                <Contact />
            </main>
            <WhatsAppButton />
            <Footer />
        </div>
    );
}
