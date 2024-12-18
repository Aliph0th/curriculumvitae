import Header from './components/Header';
import About from './components/sections/About';
import DownloadSvg from './assets/download.svg?react';
import PdfSvg from './assets/pdf.svg?react';
import Tooltiped from './components/Tooltiped';
import Contacts from './components/sidebar/Contacts';

function App() {
   return (
      <div className="max-w-[1100px] mx-auto py-7 px-4">
         <Header />
         <main className="grid grid-cols-[1fr_3fr] grid-rows-2 my-7">
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
            <aside className="row-start-2 col-start-1">
               <Contacts />
            </aside>
            <div className="row-start-2 col-start-2"></div>
         </main>
      </div>
   );
}

export default App;
