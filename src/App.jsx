import { Routes, Route } from 'react-router-dom';
import '@/styles/global.css';

import Header         from '@/components/layout/Header';
import Footer         from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import ScrollToTop    from '@/components/ui/ScrollToTop';
import HomePage       from '@/pages/HomePage';
import ArticlePage    from '@/pages/ArticlePage';

export default function App() {
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
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F4F0F9', fontFamily: 'system-ui, sans-serif', textAlign: 'center', padding: '20px' }}>

            <div style={{ fontSize: '5rem', marginBottom: '20px', animation: 'float 3s ease-in-out infinite' }}>
                🚀👶
            </div>

            <h1 style={{ color: '#4A235A', fontSize: '3rem', margin: '0 0 15px 0' }}>
                ¡Nuestra Base de Control está casi lista!
            </h1>

            <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '600px', lineHeight: '1.6' }}>
                Dra. Cristina Pacheco • Pediatra Neonatóloga <br/><br/>
                Estamos afinando los últimos detalles de nuestra nave espacial. Muy pronto podrás agendar tus citas y conocer todo sobre el cuidado de tu bebé desde aquí.
            </p>

            <style>
                {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
        `}
            </style>
        </div>
    );
}
