/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            accent: '#e80c0c',
            tech: {
               express: '#323885',
               js: '#dbc61d',
               ts: '#377cc8',
               html: '#f16a30',
               react: '#66dbfb',
               nest: '#e12a54',
               docker: '#1072d8',
               rabbitmq: '#ff6b08',
               linux: '#f8bf11',
               git: '#f05539',
               mongo: '#347d28',
               postgres: '#396c94',
               redis: '#d12d1f',
               nodejs: '#52b255',
               telegram: '#33a6de'
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
