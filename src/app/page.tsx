import Hero from '@/features/landingpage/Hero';
import TechSlider from '@/features/landingpage/TechSlider';
import Project from '@/features/landingpage/Project';
import Contact from '@/features/landingpage/Contact';
import Footer from '../features/landingpage/Footer';
import Microblog from '../features/landingpage/Microblog';
export const revalidate = 60 * 60 * 24 * 4; // 4 days

export default function Home() {
    return (
        <main className="pt-content">
            <Hero />
            <TechSlider />
            <Project />
            <Microblog />
            <Contact />
            <Footer />
        </main>
    );
}
