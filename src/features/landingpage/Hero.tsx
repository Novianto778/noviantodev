import Container from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Linkedin, Instagram, Github } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

type Props = {};

const Hero = (props: Props) => {
    return (
        <div className="h-content pt-8">
            <Container className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
                        Hi, <br />I am{' '}
                        <span className="text-primary">Novianto</span>
                    </h1>
                    <p className="mt-4 text-gray-600 font-medium">
                        I am a Front End Developer based in Yogyakarta,
                        Indonesia. I have experience in building web
                        applications using NextJS, TailwindCSS and TypeScript.
                    </p>
                    <div className="flex flex-wrap mt-8 space-x-4">
                        <Button variant="secondary" size="lg">
                            Resume
                        </Button>
                        <Button variant="ghost" size="lg" className="group">
                            Project
                            <ArrowUpRight
                                size={16}
                                className="text-accent-foreground ml-1 group-hover:animate-bounce"
                            />
                        </Button>
                    </div>
                    <div className="flex mt-8 gap-6">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                                    2+
                                </h2>
                                <p className="text-gray-600 font-medium">
                                    Years of Experience
                                </p>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                                    2
                                </h2>
                                <p className="text-gray-600 font-medium">
                                    Real Projects
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col place-content-end">
                            <h2 className="text-xl font-bold text-gray-900">
                                Contact
                            </h2>
                            <div className="flex gap-4">
                                <Link
                                    href="https://www.linkedin.com/in/noviantodev"
                                    target="_blank"
                                    className="text-gray-600"
                                >
                                    <Linkedin size={32} />
                                </Link>
                                <Link
                                    href="https://www.instagram.com/novianto.dev"
                                    target="_blank"
                                    className="text-gray-600"
                                >
                                    <Instagram size={32} />
                                </Link>
                                <Link
                                    href="https://www.github.com/novianto778"
                                    target="_blank"
                                    className="text-gray-600"
                                >
                                    <Github size={32} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center relative h-full">
                    <div className="w-80 h-80 rounded-full bg-gray-400"></div>
                    <Badge
                        className="absolute top-20 left-10 animate-bounce duration-[3000ms]"
                        size="lg"
                    >
                        Front End
                    </Badge>
                    <Badge
                        className="absolute bottom-20 right-10 animate-bounce delay-200 duration-[3000ms]"
                        size="lg"
                        variant="secondary"
                    >
                        Developer
                    </Badge>
                </div>
            </Container>
        </div>
    );
};

export default Hero;