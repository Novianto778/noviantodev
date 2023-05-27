import Hero from '@/features/landingpage/Hero';
import TechSlider from '@/features/landingpage/TechSlider';
import Project from '@/features/landingpage/Project';
import Contact from '@/features/landingpage/Contact';
import Footer from '../features/landingpage/Footer';

export default function Home() {
    return (
        <main className="pt-content">
            <Hero />
            <TechSlider />
            <Project />
            <Contact />
            <Footer />
        </main>
    );
}
