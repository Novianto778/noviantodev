import Link from 'next/link';
import React from 'react';
import { buttonVariants } from '@/components/ui/button';

type Props = {};

const page = (props: Props) => {
    return (
        <section className="flex items-center h-content p-16 bg-gray-900 text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="flex flex-col gap-4 max-w-md text-center">
                    <h2 className="font-extrabold text-9xl text-gray-600">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">
                        Sorry, the current page is still under development.
                    </p>

                    <Link
                        href="/"
                        className={buttonVariants({ variant: 'default' })}
                    >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default page;
