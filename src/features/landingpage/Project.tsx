import { Stars } from '@/assets/icon';
import Image from 'next/image';
import Container from '@/components/layout/Container';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LogoUajy } from '@/assets/images';
import PROJECTS from '@/data/project';
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
                <div className="bg-white shadow p-8 border rounded mt-4">
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                    {/* <div className="flex gap-4 items-center">
                        <Image
                            src={LogoUajy}
                            width={48}
                            height={48}
                            alt="logo uajy"
                        />
                        <h6 className="text-3xl font-semibold">
                            {PROJECTS[0].name}
                        </h6>
                    </div>
                    <div className="mt-4">
                        <p className="font-medium text-lg">
                            {PROJECTS[0].description}
                        </p>
                    </div>
                    <div className="flex flex-col gap-8 mt-8">
                        <h6 className="text-3xl font-semibold">Preview</h6>
                        <div>
                            <Image
                                src={PROJECTS[0].images[0]}
                                width={300}
                                height={150}
                                alt="project"
                            />
                        </div>
                        <div>
                            <Image
                                src={PROJECTS[0].tech[0].src}
                                width={64}
                                height={64}
                                alt="project"
                            />
                        </div>
                    </div> */}
                </div>
            </Container>
        </div>
    );
};

export default Project;
