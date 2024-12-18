import { FC } from 'react';
import { ANCHORS } from '../../constants';

interface AboutProps {
   className?: string;
}

const About: FC<AboutProps> = ({ className }) => {
   return (
      <div className={className} id={ANCHORS.ABOUT.id}>
         <div className="w-fit">
            <h1 className="font-semibold text-7xl">Anton Zubkov</h1>
            <p className="-mt-1 text-right font-medium text-3xl text-accent">
               <span className="text-[12px] text-accent/60 mr-1">aka</span>backend developer
            </p>
         </div>
      </div>
   );
};

export default About;
