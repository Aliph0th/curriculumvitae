import { FC } from 'react';
import { ANCHORS } from '../../constants';

interface PetProjectsProps {
   className?: string;
}

const PetProjects: FC<PetProjectsProps> = ({ className }) => {
   return (
      <div className={className} id={ANCHORS.PET_PROJECTS.id}>
         <h3 className="font-semibold text-3xl">Pet Projects</h3>
         <p></p>
      </div>
   );
};

export default PetProjects;
