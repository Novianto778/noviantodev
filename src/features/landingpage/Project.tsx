import { Stars } from '@/assets/icon';
import Container from '@/components/layout/Container';
import { buttonVariants } from '@/components/ui/button';
import PROJECTS from '@/data/project';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from '../project/ProjectCard';

type Props = {};

const Project = (props: Props) => {
    return (
        <div className="mt-12">
            <Container>
                <div className="flex items-center gap-4">
                    <Image
                        src={Stars.src}
                        alt="Picture of the author"
                        width={72}
                        height={72}
                    />
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl md:text-5xl font-semibold">
                            Highlighted Projects
                        </h2>
                        <p className="font-medium max-w-2xl">
                            Here are some of my projects that I have worked on
                            recently. Want to{' '}
                            <Link
                                href="/projects"
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
                <div className="mt-4 flex flex-col gap-8">
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Project;
