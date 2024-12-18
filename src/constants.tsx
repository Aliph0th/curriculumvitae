import Github from './assets/github.svg?react';
import Mail from './assets/mail.svg?react';
import Telegram from './assets/telegram.svg?react';

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

export const CONTACTS = [
   {
      svg: <Github className="w-6 fill-inherit" />,
      href: 'https://github.com/Aliph0th',
      title: 'Github'
   },
   {
      svg: <Telegram className="w-6 fill-inherit" />,
      href: 'https://t.me/aliph0th',
      title: 'Telegram'
   },
   {
      svg: <Mail className="w-6 fill-inherit" />,
      href: 'mailto:aliphnought@gmail.com',
      title: 'Email'
   }
];
