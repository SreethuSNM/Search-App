// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   define: {
//     'process.env.VITE_NEXTJS_API_URL': JSON.stringify(process.env.VITE_NEXTJS_API_URL),
//     'process.env.DESIGNER_API_URL': JSON.stringify(process.env.DESIGNER_API_URL),
//   },
//   server: {
//     port: 3000, // You can set the port you want Vite's dev server to run on
//     open: true,  // Open the browser automatically when the server starts
//   },
//   build: {
//     outDir: 'dist', // Specify the output directory for production builds
//   },
//   resolve: {
//     alias: {
//       '@': '/src', // Set up an alias to easily reference the src directory
//     },
//   },
// });

import { defineConfig } from "vite";

export default defineConfig({
  define: {
    "import.meta.env": process.env, // Ensures environment variables are loaded
  },
});

