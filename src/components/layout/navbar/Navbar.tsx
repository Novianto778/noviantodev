'use client';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Container from '../Container';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type Props = {};

const Navbar = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
            <Container className="flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        className="h-8 aspect-[561/61]"
                        alt="NoviantoDev Logo"
                        width={140}
                        height={40}
                        priority
                    />
                </Link>
                <div className="flex md:order-2">
                    <Button>Get started</Button>

                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu size={24} />
                    </button>
                </div>
                <div
                    className={cn(
                        'items-center justify-between w-full md:flex md:w-auto md:order-1',
                        isOpen ? 'block' : 'hidden'
                    )}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <a
                                href="#"
                                className="block py-2 pl-3 pr-4 text-white bg-primary rounded md:bg-transparent md:text-primary md:p-0"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
