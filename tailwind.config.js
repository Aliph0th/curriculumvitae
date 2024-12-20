/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            accent: '#dc1515',
            tech: {
               express: '#4d4d4d',
               js: '#dbc61d',
               ts: '#377cc8',
               html: '#f16a30',
               react: '#66dbfb',
               nest: '#e12a54',
               docker: '#1072d8',
               rabbitmq: '#ff6b08',
               linux: '#636363',
               git: '#f05539',
               mongo: '#347d28',
               postgres: '#396c94'
            }
         }
      }
   },
   safelist: [
      {
         pattern: /fill-tech-.+/
      }
   ],
   plugins: []
};
