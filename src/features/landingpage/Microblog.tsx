'use client';
import Image from 'next/image';
import Container from '@/components/layout/Container';
import { Blog } from '../../assets/icon';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import InstagramPost from '../../components/InstagramPost';
import { InstagramEmbed } from '../../types/project.type';

const getInstagramPosts = async () => {
    const url =
        'https://instagram-scraper-20231.p.rapidapi.com/userposts/50122931546/3/%7Bend_cursor%7D';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key':
                '3ea13eb795mshdc23ce6925fc8e1p160395jsnf9a5f09e29e1',
            'X-RapidAPI-Host': 'instagram-scraper-20231.p.rapidapi.com',
        },
    };

    try {
        const response = await fetch(url, {
            next: {
                revalidate: 60 * 60 * 24 * 7,
            },
            ...options,
        });
        const result = await response.json();
        return result as InstagramEmbed;
    } catch (error) {
        console.error(error);
    }

    return null;
};

const Microblog = async () => {
    const posts = await getInstagramPosts();

    return (
        <div className="mt-12" id="project">
            <Container>
                <div className="flex items-center gap-4">
                    <Image
                        src={Blog.src}
                        alt="Blog icon"
                        width={72}
                        height={72}
                    />
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl md:text-5xl font-semibold">
                            Latest Microblog
                        </h2>
                        <p className="font-medium max-w-2xl">
                            Here are some of my recent posts. Want to
                            <Link
                                href="https://www.instagram.com/novianto.dev/"
                                target="_blank"
                                className={cn(
                                    buttonVariants({ variant: 'link' }),
                                    'px-0'
                                )}
                            >
                                see more
                            </Link>
                            ?
                        </p>
                    </div>
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts?.status !== 'success' ? (
                        <div className="col-span-3">
                            <p>Something went wrong</p>
                        </div>
                    ) : (
                        posts.data.edges
                            .slice(0, 3)
                            .map((post, index) => (
                                <InstagramPost
                                    key={index}
                                    postId={post.node.shortcode}
                                />
                            ))
                    )}
                </div>
            </Container>
        </div>
    );
};

export default Microblog;
