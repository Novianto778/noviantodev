import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Project } from '@/types/project.type';
import { Github } from '@/assets/icon';

type Props = {
    project: Project;
};

const ProjectSource = ({ project }: Props) => {
    return (
        <div className="mt-4 flex flex-col">
            <p className="text-2xl font-semibold">{project.name}</p>
            <div className="flex gap-2 items-end mt-2">
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
    );
};

export default ProjectSource;
