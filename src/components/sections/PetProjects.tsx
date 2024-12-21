import { FC } from 'react';
import { ANCHORS, PET_PROJECTS } from '../../constants';
import Badge from '../ui/Badge';
import Eye from '../../assets/preview.svg?react';
import Tooltiped from '../ui/Tooltiped';

interface PetProjectsProps {
   className?: string;
}

const PetProjects: FC<PetProjectsProps> = ({ className }) => {
   return (
      <div className={className} id={ANCHORS.PET_PROJECTS.id}>
         <h3 className="font-semibold text-3xl mb-3">Pet Projects</h3>
         <div>
            {PET_PROJECTS.map(project => (
               <div key={project.title} className="mb-8">
                  <a
                     href={project.link}
                     className="transition-all text-2xl underline decoration-dashed hover:text-accent hover:decoration-solid"
                     target="_blank"
                     rel="noreferrer"
                  >
                     {project.title}
                  </a>
                  {project.preview && (
                     <a href={project.preview} className="ml-2" target="_blank" rel="noreferrer">
                        <Tooltiped tooltip="View deployment">
                           <Eye className="w-6 mb-1 hover:fill-accent inline" />
                        </Tooltiped>
                     </a>
                  )}
                  <p className="text-sm w-11/12 my-2.5">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                     {project.keyTechnologies.map(tech => (
                        <Badge key={tech} emphasize>
                           {tech}
                        </Badge>
                     ))}
                     {project.technologies.map(tech => (
                        <Badge key={tech}>{tech}</Badge>
                     ))}
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default PetProjects;
