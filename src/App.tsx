import Header from './components/header/Header';
import About from './components/sections/About';
import DownloadSvg from './assets/download.svg?react';
import PdfSvg from './assets/pdf.svg?react';
import Tooltiped from './components/ui/Tooltiped';
import List from './components/ui/List';
import { ANCHORS, CONTACTS, LANGUAGES, SKILLS } from './constants';
import WorkExperience from './components/sections/WorkExperience';
import PetProjects from './components/sections/PetProjects';
import Education from './components/sections/Education';

function App() {
   return (
      <>
         <Header />
         <div className="max-w-[1100px] mx-auto px-4">
            <main className="grid grid-cols-[1fr_3fr] grid-rows-auto my-7">
               <div className="w-fit row-start-1 col-start-1 col-span-2" id={ANCHORS.ABOUT.id}>
                  <h1 className="font-semibold text-7xl">Anton Zubkov</h1>
                  <p className="-mt-1 text-right font-medium text-3xl text-accent">
                     <span className="text-[12px] text-accent/60 mr-1">aka</span>backend developer
                  </p>
               </div>
               <div className="row-start-1 col-start-1 col-span-2 justify-self-end">
                  <Tooltiped
                     tooltip={
                        <span className="flex">
                           Get&nbsp;
                           <PdfSvg className="w-5" />
                           pdf
                        </span>
                     }
                  >
                     <DownloadSvg className="w-8 hover:fill-accent" />
                  </Tooltiped>
               </div>
               <aside className="mt-5 row-start-2 col-start-1">
                  <List title="Contacts" list={CONTACTS} isLink />
                  <List title="Languages" list={LANGUAGES} bullet />
                  <List title="Skills" list={SKILLS} />
               </aside>
               <div className="mt-5 row-start-2 col-start-2">
                  <About />
                  <WorkExperience className="mt-[3.2rem]" />
                  <PetProjects className="mt-[3.2rem]" />
                  <Education className="mt-[3.2rem]" />
               </div>
            </main>
         </div>
      </>
   );
}

export default App;
