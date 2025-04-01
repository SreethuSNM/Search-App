// env.d.ts

interface ImportMetaEnv {
    VITE_NEXTJS_API_URL: string;  // Add this line to declare the VITE_NEXTJS_API_URL variable
    // Add other environment variables if needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  