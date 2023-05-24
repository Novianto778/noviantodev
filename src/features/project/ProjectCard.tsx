import Image from 'next/image';
import { ProjectType } from '@/types/project.type';
import ProjectImagePreview from './ProjectImagePreview';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hovercard';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Github } from '@/assets/icon';
import { getMainDomain } from '../../lib/utils';

type Props = {
    project: ProjectType;
};

const ProjectCard = ({ project }: Props) => {
    return (
        <div className="flex flex-col gap-4 bg-white shadow p-8 border rounded ">
            <div className="flex gap-4 items-center">
                <Image
                    src={project.icon}
                    width={48}
                    height={48}
                    alt="logo uajy"
                />
                <h6 className="text-3xl font-semibold">{project.name}</h6>
            </div>
            <p className="font-medium text-lg">{project.description}</p>
            <div className="flex flex-col gap-8">
                <h6 className="text-3xl font-semibold">
                    Preview{' '}
                    <span className="text-sm">(click to zoom + draggable)</span>
                </h6>

                <ProjectImagePreview images={project.images} />

                <div className="mt-6">
                    <div className="flex items-center gap-2 w-fit bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span>Live on Production</span>
                    </div>
                    <Link
                        href={project.website}
                        target="_blank"
                        className="flex items-center mt-2 w-max relative group before:content-[''] before:w-0 before:h-0.5 before:bg-primary hover:before:w-full before:absolute before:-bottom-2 before:duration-300"
                    >
                        <h6 className="text-4xl font-semibold">
                            {getMainDomain(project.website)}
                        </h6>
                        <ArrowUpRight className="group-hover:animate-bounce" />
                    </Link>
                    <div className="mt-4 flex flex-col">
                        <p className="text-2xl font-semibold">{project.name}</p>
                        <div className="flex gap-2 items-end mt-4">
                            <span className="text-xl leading-none">on</span>
                            <div className="flex items-end gap-2">
                                <Image
                                    src={Github.src}
                                    width={28}
                                    height={28}
                                    alt="github"
                                />
                                {project.github === 'private' ? (
                                    <span className="text-xl font-semibold leading-none">
                                        Private Repository
                                    </span>
                                ) : (
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className="text-xl font-semibold leading-none"
                                    >
                                        github.com
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    <h6 className="text-3xl font-semibold">Technologies</h6>
                    <div className="flex flex-wrap gap-8 overflow-hidden">
                        {project.tech.map((tech, index) => {
                            return (
                                <HoverCard key={index} openDelay={300}>
                                    <HoverCardTrigger>
                                        <Image
                                            src={tech?.src!}
                                            width={64}
                                            height={64}
                                            alt="project"
                                            className="cursor-pointer"
                                        />
                                    </HoverCardTrigger>
                                    <HoverCardContent className="w-fit">
                                        {tech?.name}
                                    </HoverCardContent>
                                </HoverCard>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
