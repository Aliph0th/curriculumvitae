import { FC } from 'react';
import { ANCHORS } from '../../constants';
import Telegram from '../../assets/telegram.svg?react';
import Nest from '../../assets/nest.svg?react';
import Express from '../../assets/express.svg?react';
import Docker from '../../assets/docker.svg?react';
import React from '../../assets/react.svg?react';
import Linux from '../../assets/Linux.svg?react';
import Rabbit from '../../assets/rabbitmq.svg?react';
import Elastic from '../../assets/elasticsearch.svg?react';

interface WorkExperienceProps {
   className?: string;
}

const WorkExperience: FC<WorkExperienceProps> = ({ className }) => {
   return (
      <div className={className} id={ANCHORS.WORK_EXPERIENCE.id}>
         <h3 className="font-semibold text-3xl">Work Experience</h3>
         <p>During my experience, I tried myself in such things as</p>
         <ul className="list-disc ml-4">
            <li>
               <i className="block">Freelance</i>
               When I was doing freelance work, I was dealing with
               <ol className="list-decimal ml-7 marker:font-bold">
                  <li>
                     Creating various <Telegram className="w-6 inline-block mr-1 hover:fill-tech-telegram" />
                     Telegram Bots
                  </li>
                  <li>
                     Working on VDS via SSH using <Linux className="w-6 inline-block mr-1 hover:fill-tech-linux" />
                     Linux
                  </li>
                  <li>Setting up domains and hosting</li>
                  <li>Telegram Mini App implementation</li>
                  <li>Fixing errors & bugs in applications</li>
                  <li>Communicating with clients</li>
               </ol>
            </li>
            <li className="mt-8">
               <i className="block">Self-Employment</i>
               When I was writing my projects, I figured out how to:
               <ol className="list-decimal ml-7 marker:font-bold">
                  <li>
                     Write RESTful API on <Nest className="w-6 inline-block mr-1 hover:fill-tech-nest" />
                     Nest.js and <Express className="w-6 inline-block mr-1 hover:fill-tech-express" />
                     Express
                  </li>
                  <li>
                     Containerize an application with aid of{' '}
                     <Docker className="w-6 inline-block mr-1 hover:fill-tech-docker" />
                     Docker and Docker-compose
                  </li>
                  <li>
                     Create <React className="w-6 inline-block mr-1 hover:fill-tech-react" />
                     React applications
                  </li>
                  <li>Authorize an user via JWT</li>
                  <li>Deal with NoSQL, SQL databases and ORMs</li>
                  <li>
                     Enable communicating among services using{' '}
                     <Rabbit className="w-5 inline-block mr-1 hover:fill-tech-rabbitmq" />
                     RabbitMQ
                  </li>
                  <li>
                     Use full-text search in{' '}
                     <Elastic className="w-5 inline-block mr-1 brightness-0 hover:brightness-100" />
                     ElasticSearch
                  </li>
               </ol>
            </li>
         </ul>
      </div>
   );
};

export default WorkExperience;
