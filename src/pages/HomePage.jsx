import Hero      from '@/components/sections/Hero';
import TrustBar  from '@/components/sections/TrustBar';
import About     from '@/components/sections/About';
import Services  from '@/components/sections/Services';
import Articles  from '@/components/sections/Articles';
import Pricing   from '@/components/sections/Pricing';
import Contact   from '@/components/sections/Contact';

export default function HomePage() {
    return (
        <main>
            <Hero />
            <TrustBar />
            <About />
            <Services />
            <Articles />
            <Pricing />
            <Contact />
        </main>
    );
}
