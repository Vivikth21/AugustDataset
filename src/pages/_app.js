import "@/styles/globals.css";
import { DarkModeProvider } from "@/contexts/darkModeContext";

export default function App({ Component, pageProps }) {
  
  return (
    <DarkModeProvider>
      <Component {...pageProps}/>
    </DarkModeProvider>
  );
}

