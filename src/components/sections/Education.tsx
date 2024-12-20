import { FC } from 'react';
import { ANCHORS } from '../../constants';

interface EducationProps {
   className?: string;
}

const Education: FC<EducationProps> = ({ className }) => {
   return (
      <div className={className} id={ANCHORS.EDUCATION.id}>
         <h3 className="font-semibold text-3xl">Education</h3>
         <p></p>
      </div>
   );
};

export default Education;
