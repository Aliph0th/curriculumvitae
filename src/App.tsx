import Header from './components/Header';
import About from './components/sections/About';
import DownloadSvg from './assets/download.svg?react';
import PdfSvg from './assets/pdf.svg?react';
import Tooltiped from './components/Tooltiped';
import List from './components/sidebar/Contacts';
import { CONTACTS, LANGUAGES, SKILLS } from './constants';

function App() {
   return (
      <>
         <Header />
         <div className="max-w-[1100px] mx-auto px-4">
            <main className="grid grid-cols-[1fr_3fr] grid-rows-auto my-7">
               <About className="row-start-1 col-start-1 col-span-2" />
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
               <div className="row-start-2 col-start-2"></div>
            </main>
         </div>
      </>
   );
}

export default App;
