'use client';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import { buttonVariants } from '@/components/ui/button';
import { LINKS } from '@/data/links';
import useScrollTo from '@/hooks/useScrollTo';
import { Github, Instagram, Linkedin } from 'lucide-react';

type Props = {};

const Footer = (props: Props) => {
    const { handleScroll } = useScrollTo();
    return (
        <footer className="bg-foreground py-16 mt-16">
            <Container className="grid grid-cols-12 justify-items-center  gap-y-8 text-white md:gap-x-12">
                <div className="col-span-12 flex flex-col gap-y-8 md:col-span-4">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/noviantodev.png"
                            className="h-4 aspect-[561/61] invert-[1] brightness-0"
                            alt="NoviantoDev Logo"
                            width={160}
                            height={40}
                            priority
                        />
                    </Link>
                </div>
                <div className="col-span-12 flex flex-col items-center gap-y-8 md:col-span-4">
                    <h4 className="text-3xl leading-none">Let's Collab</h4>
                    <div className="flex gap-x-4 text-white">
                        {LINKS.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url}
                                onClick={handleScroll}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="col-span-12 flex flex-col items-center gap-y-8 md:col-span-4">
                    <Link
                        onClick={handleScroll}
                        className={buttonVariants({ variant: 'outline' })}
                        href="/#contact"
                    >
                        Reach Me
                    </Link>
                    <div className="flex gap-4">
                        <Link
                            href="https://www.linkedin.com/in/noviantodev"
                            target="_blank"
                            className="text-gray-400"
                        >
                            <Linkedin size={32} />
                        </Link>
                        <Link
                            href="https://www.instagram.com/novianto.dev"
                            target="_blank"
                            className="text-gray-400"
                        >
                            <Instagram size={32} />
                        </Link>
                        <Link
                            href="https://www.github.com/novianto778"
                            target="_blank"
                            className="text-gray-400"
                        >
                            <Github size={32} />
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
