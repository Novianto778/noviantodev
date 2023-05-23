import Hero from '@/features/landingpage/Hero';
import TechSlider from '@/features/landingpage/TechSlider';
import Project from '../features/landingpage/Project';

export default function Home() {
    return (
        <main className="pt-content">
            <Hero />
            <TechSlider />
            <Project />
        </main>
    );
}
