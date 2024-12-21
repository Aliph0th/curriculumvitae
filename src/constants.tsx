import Github from './assets/github.svg?react';
import Mail from './assets/mail.svg?react';
import Telegram from './assets/telegram.svg?react';
import Javascript from './assets/javascript.svg?react';
import Typescript from './assets/typescript.svg?react';
import Html from './assets/html.svg?react';
import Express from './assets/express.svg?react';
import Git from './assets/git.svg?react';
import Linux from './assets/linux.svg?react';
import React from './assets/react.svg?react';
import Nest from './assets/nest.svg?react';
import Rabbitmq from './assets/rabbitmq.svg?react';
import Docker from './assets/docker.svg?react';
import Mongo from './assets/mongo.svg?react';
import Postgres from './assets/postgresql.svg?react';
import Elastic from './assets/elasticsearch.svg?react';
import Redis from './assets/redis.svg?react';
import { ListItem, PetProject } from './types';

export const ANCHORS = {
   ABOUT: {
      title: 'About me',
      id: 'about'
   },
   WORK_EXPERIENCE: {
      title: 'Work experience',
      id: 'word_exp'
   },
   PET_PROJECTS: {
      title: 'Pet projects',
      id: 'pet'
   },
   EDUCATION: {
      title: 'Education',
      id: 'education'
   }
};

export const CONTACTS: ListItem[] = [
   {
      svg: <Github className="w-6 fill-inherit" />,
      href: 'https://github.com/Aliph0th',
      title: 'Github',
      svgHover: 'hover:fill-accent'
   },
   {
      svg: <Telegram className="w-6 fill-inherit" />,
      href: 'https://t.me/aliph0th',
      title: 'Telegram',
      svgHover: 'hover:fill-accent'
   },
   {
      svg: <Mail className="w-6 fill-inherit" />,
      href: 'mailto:aliphnought@gmail.com',
      title: 'Email',
      svgHover: 'hover:fill-accent'
   }
];

export const SKILLS: ListItem[] = [
   {
      title: 'Javascript',
      svg: <Javascript className="w-[21px] fill-inherit" />,
      svgHover: 'hover:fill-tech-js'
   },
   {
      title: 'Typescript',
      svg: <Typescript className="w-[21px] fill-inherit" />,
      svgHover: 'hover:fill-tech-ts'
   },
   {
      title: 'Nest.js',
      svg: <Nest className="w-6 fill-inherit" />,
      svgHover: 'hover:fill-tech-nest'
   },
   {
      title: 'PostgreSQL',
      svg: <Postgres className="w-6 fill-inherit" />,
      svgHover: 'hover:fill-tech-postgres'
   },
   {
      title: 'MongoDB',
      svg: <Mongo className="w-[22px] fill-inherit" />,
      svgHover: 'hover:fill-tech-mongo'
   },
   {
      title: 'Express',
      svg: <Express className="w-5 fill-inherit" />,
      svgHover: 'hover:fill-tech-express'
   },
   {
      title: 'Docker',
      svg: <Docker className="w-6 fill-inherit" />,
      svgHover: 'hover:fill-tech-docker'
   },
   {
      title: 'RabbitMQ',
      svg: <Rabbitmq className="w-5 fill-inherit" />,
      svgHover: 'hover:fill-tech-rabbitmq'
   },
   {
      title: 'Redis',
      svg: <Redis className="w-6 fill-inherit" />,
      svgHover: 'hover:fill-tech-redis'
   },
   {
      title: 'ElasticSearch',
      svg: <Elastic className="w-5 brightness-0" />,
      svgHover: '[&>svg]:hover:brightness-100'
   },
   {
      title: 'HTML, CSS',
      svg: <Html className="w-[21px] fill-inherit" />,
      svgHover: 'hover:fill-tech-html'
   },
   {
      title: 'React',
      svg: <React className="w-[23px] fill-inherit" />,
      svgHover: 'hover:fill-tech-react'
   },
   {
      title: 'Linux',
      svg: <Linux className="w-6 fill-inherit" />,
      svgHover: 'hover:fill-tech-linux'
   },
   {
      title: 'Git',
      svg: <Git className="w-[23px] fill-inherit" />,
      svgHover: 'hover:fill-tech-git'
   }
];

export const LANGUAGES: ListItem[] = [
   { title: 'English — B2' },
   { title: 'German — A2' },
   { title: 'Russian — native' }
];

export const PET_PROJECTS: PetProject[] = [
   {
      title: 'Notion',
      link: 'https://github.com/Aliph0th/notion_clone',
      description: (
         <>
            This project is a mini clone of famous <i>Notion</i>. It involves <strong>frontend</strong> and{' '}
            <strong>backend</strong> parts. Last one provides a JWT authorization for users. Entire app containerized
            using Docker. Also there&apos;is advanced validation on both sides.
         </>
      ),
      keyTechnologies: ['Express.js', 'JWT auth', 'Docker', 'React', 'SQLite3', 'Prisma'],
      technologies: [
         'Tailwind CSS',
         'React context',
         'zod',
         'redux',
         'express-validator',
         'Tanstack Query',
         'React hook form',
         'Typescript'
      ]
   },
   {
      title: 'API & SPA',
      link: 'https://github.com/Aliph0th/api_spa',
      preview: 'https://aliph0th.github.io/api_spa/',
      description: (
         <>
            This project demonstrates <i>single page application</i> via react-router-dom and github-actions. All data
            for this application fetching from{' '}
            <a
               href="https://jsonplaceholder.typicode.com/"
               target="_blank"
               rel="noreferrer"
               className="underline underline-offset-2 hover:text-accent decoration-dashed"
            >
               JSONplaceholder
            </a>{' '}
            with aid of tanstack query
         </>
      ),
      keyTechnologies: ['React', 'react-router-dom', 'Tailwind CSS'],
      technologies: ['axios', 'Tanstack Query', 'Typescript', 'github actions']
   },
   {
      title: 'Lamoda',
      link: 'https://github.com/Aliph0th/lamoda',
      description: (
         <>
            This project is a mini clone of <i>Lamoda</i> online shop. The project consists of <strong>frontend</strong>{' '}
            and <strong>backend</strong> sides. Backend provides efficient filtration of products, enabling users to
            find any things they want
         </>
      ),
      keyTechnologies: ['Express.js', 'React', 'Tailwind CSS'],
      technologies: ['express-validator', 'Typescript']
   }
];
