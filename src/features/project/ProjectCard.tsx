import Image from 'next/image';
import { ProjectType } from '@/types/project.type';
import ProjectImagePreview from './ProjectImagePreview';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { getMainDomain } from '../../lib/utils';
import ProjectTech from './ProjectTech';
import ProjectSource from './ProjectSource';
import ProjectLink from './ProjectLink';

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
                    <ProjectLink project={project} />
                    <ProjectSource project={project} />
                </div>

                <div className="flex flex-col gap-8">
                    <h6 className="text-3xl font-semibold">Technologies</h6>
                    <ProjectTech project={project} />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
