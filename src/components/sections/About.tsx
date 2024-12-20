import { FC } from 'react';
import Nodejs from '../../assets/nodejs.svg?react';
import Tooltiped from '../Tooltiped';

interface AboutProps {
   className?: string;
}

const About: FC<AboutProps> = ({ className }) => {
   return (
      <div className={className}>
         <p>
            I am a <strong>backend developer</strong> who has been writing code for 3 years now. I really like coding
            on&nbsp;
            <Tooltiped tooltip="Node.js">
               <Nodejs className="w-7 -mb-2 hover:fill-tech-nodejs" />
            </Tooltiped>
            .<br />
            I&apos;m inspired by the creation of different systems and their components that scale easily and are
            resistant to loads and failures or faults
         </p>
      </div>
   );
};

export default About;
