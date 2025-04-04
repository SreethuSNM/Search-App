import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './app';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Prevent duplicate requests in development
      retry: false,
      // Deduplicate requests made within this time window
      staleTime: 1000 * 60 * 5, // 5 minutes
      // Don't refetch on window focus
      refetchOnWindowFocus: false,
      // Deduplicate identical requests made within 2 seconds
      gcTime: 2000,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


