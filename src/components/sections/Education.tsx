import { FC } from 'react';
import { ANCHORS } from '../../constants';
import MMF from '../../assets/mmf.svg?react';
import Codewars from '../../assets/codewars.svg?react';
import Tooltiped from '../ui/Tooltiped';

interface EducationProps {
   className?: string;
}

const Education: FC<EducationProps> = ({ className }) => {
   return (
      <div className={className} id={ANCHORS.EDUCATION.id}>
         <h3 className="font-semibold text-3xl mb-3">Education</h3>
         <div>
            <div className="flex gap-x-3">
               <Tooltiped tooltip="MMF">
                  <MMF className="w-6 hover:fill-mmf" />
               </Tooltiped>
               <a href="https://mmf.bsu.by/en/" target="_blank" rel="noreferrer" className="hover:text-accent text-xl">
                  Mechanics and Mathematics Faculty
               </a>
            </div>
            <p className="text-gray-500 ml-9">
               <span>
                  2023 — <Tooltiped tooltip="back to the future?">2027</Tooltiped>
               </span>
               &nbsp;&#x2022;&nbsp;Bachelor&nbsp;&#x2022;&nbsp;Belarusian State University
            </p>
            <p className="ml-9">
               <i>Specialization</i>:{' '}
               <a
                  href="https://mmf.bsu.by/en/bachelors-programs/mathematics-and-computer-science-web-programming-and-internet-technologies/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent"
               >
                  Web-Programming and Internet Technologies
               </a>
            </p>
         </div>
         <div className="mt-5">
            <div className="flex gap-x-3">
               <Tooltiped tooltip="Codewars">
                  <Codewars className="w-6 hover:fill-codewars" />
               </Tooltiped>
               <a href="https://codewars.com/" target="_blank" rel="noreferrer" className="hover:text-accent text-xl">
                  codewars.com
               </a>
            </div>
            <a
               href="https://www.codewars.com/users/Aliph0th"
               target="_blank"
               rel="noreferrer"
               className="block ml-9 mt-1"
            >
               <img src="https://www.codewars.com/users/Aliph0th/badges/small?theme=light" alt="codewars" />
            </a>
         </div>
      </div>
   );
};

export default Education;
