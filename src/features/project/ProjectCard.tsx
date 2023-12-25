import { Project } from '@/types/project.type';
import Image from 'next/image';
import ProjectImagePreview from './ProjectImagePreview';
import ProjectLink from './ProjectLink';
import ProjectSource from './ProjectSource';
import ProjectTech from './ProjectTech';
import ProjectTypeBadge from './ProjectTypeBadge';

type Props = {
    project: Project;
};

const ProjectCard = ({ project }: Props) => {
    return (
        <div className="flex flex-col gap-4 bg-white shadow p-8 border rounded ">
            <div className="flex flex-col gap-2">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <Image
                            src={project.icon}
                            width={48}
                            height={48}
                            alt="logo uajy"
                        />
                        <h6 className="text-3xl font-semibold">
                            {project.name}
                        </h6>
                    </div>
                    <ProjectTypeBadge type={project.projectType} />
                </div>
                <p className="font-semibold text-lg">{project.subtitle}</p>
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
