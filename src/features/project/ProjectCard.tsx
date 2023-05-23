import Image from 'next/image';
import { ProjectType } from '@/types/project.type';
import ProjectImagePreview from './ProjectImagePreview';

type Props = {
    project: ProjectType;
};

const ProjectCard = ({ project }: Props) => {
    return (
        <div className="flex flex-col gap-4">
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
                <h6 className="text-3xl font-semibold">Preview</h6>
                <div className="flex gap-8 overflow-hidden">
                    <ProjectImagePreview images={project.images} />
                </div>
                <div className="flex flex-col gap-8">
                    <h6 className="text-3xl font-semibold">Technologies</h6>
                    <div className="flex gap-8 overflow-hidden">
                        {project.tech.map((tech) => (
                            <Image
                                src={tech.src}
                                width={64}
                                height={64}
                                alt="project"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
