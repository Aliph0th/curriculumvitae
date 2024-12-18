import { CONTACTS } from '../../constants';

const Contacts = () => {
   return (
      <div>
         <h3 className="mb-4 font-medium underline text-xl">Contacts</h3>
         <ul>
            {CONTACTS.map(contact => (
               <li key={contact.title}>
                  <a
                     href={contact.href}
                     target="_blank"
                     rel="noreferrer"
                     className="inline-flex items-center hover:fill-accent hover:text-accent mb-2"
                  >
                     {contact.svg}&nbsp;<span className="hover:underline">{contact.title}</span>
                  </a>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Contacts;
