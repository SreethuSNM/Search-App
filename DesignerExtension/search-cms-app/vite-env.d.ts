/// <reference types="vite/client" />

// Custom environment variables
interface ImportMetaEnv {
    readonly VITE_NEXTJS_API_URL: string;  // Replace with your own environment variable names
    readonly VITE_OTHER_VARIABLE: string; // Example of another custom variable
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  