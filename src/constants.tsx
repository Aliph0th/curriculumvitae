import Github from './assets/github.svg?react';
import Mail from './assets/mail.svg?react';
import Telegram from './assets/telegram.svg?react';
import Javascript from './assets/javascript.svg?react';
import Typescript from './assets/typescript.svg?react';
import Html from './assets/html.svg?react';
import Express from './assets/express.svg?react';
import Git from './assets/git.svg?react';
import Linux from './assets/linux.svg?react';
import React from './assets/React.svg?react';
import Nest from './assets/nest.svg?react';
import Rabbitmq from './assets/rabbitmq.svg?react';
import Docker from './assets/docker.svg?react';
import Mongo from './assets/mongo.svg?react';
import Postgres from './assets/postgresql.svg?react';
import { ListItem } from './types';

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
      svgHoverFill: 'hover:fill-accent'
   },
   {
      svg: <Telegram className="w-6 fill-inherit" />,
      href: 'https://t.me/aliph0th',
      title: 'Telegram',
      svgHoverFill: 'hover:fill-accent'
   },
   {
      svg: <Mail className="w-6 fill-inherit" />,
      href: 'mailto:aliphnought@gmail.com',
      title: 'Email',
      svgHoverFill: 'hover:fill-accent'
   }
];

export const SKILLS: ListItem[] = [
   {
      title: 'Javascript',
      svg: <Javascript className="w-[21px] fill-inherit" />,
      svgHoverFill: 'hover:fill-tech-js'
   },
   {
      title: 'Typescript',
      svg: <Typescript className="w-[21px] fill-inherit" />,
      svgHoverFill: 'hover:fill-tech-ts'
   },
   {
      title: 'Nest.js',
      svg: <Nest className="w-6 fill-inherit" />,
      svgHoverFill: 'hover:fill-tech-nest'
   },
   {
      title: 'PostgreSQL',
      svg: <Postgres className="w-6 fill-inherit" />,
      svgHoverFill: 'hover:fill-tech-postgres'
   },
   {
      title: 'MongoDB',
      svg: <Mongo className="w-[22px] fill-inherit" />,
      svgHoverFill: 'hover:fill-tech-mongo'
   },
   {
      title: 'Express',
      svg: <Express className="w-5 fill-inherit" />,
      svgHoverFill: 'hover:fill-tech-express'
   },
   {
      title: 'Docker',
      svg: <Docker className="w-6 fill-inherit" />,
      svgHoverFill: 'hover:fill-tech-docker'
   },
   {
      title: 'RabbitMQ',
      svg: <Rabbitmq className="w-5 fill-inherit" />,
      svgHoverFill: 'hover:fill-tech-rabbitmq'
   },
   {
      title: 'HTML, CSS',
      svg: <Html className="w-[21px] fill-inherit" />,
      svgHoverFill: 'hover:fill-tech-html'
   },
   {
      title: 'React',
      svg: <React className="w-[23px] fill-inherit" />,
      svgHoverFill: 'hover:fill-tech-react'
   },
   {
      title: 'Linux',
      svg: <Linux className="w-6 fill-inherit" />,
      svgHoverFill: 'hover:fill-tech-linux'
   },
   {
      title: 'Git',
      svg: <Git className="w-[23px] fill-inherit" />,
      svgHoverFill: 'hover:fill-tech-git'
   }
];

export const LANGUAGES: ListItem[] = [
   { title: 'English — B2' },
   { title: 'German — A2' },
   { title: 'Russian — native' }
];
