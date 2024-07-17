import "@/styles/globals.css";
import { DarkModeProvider } from "@/contexts/darkModeContext";
import { EditProvider } from "@/contexts/editContext";

export default function App({ Component, pageProps }) {
  
  return (
    <DarkModeProvider>
    <EditProvider>
    

      <Component {...pageProps}/>

    </EditProvider>
    </DarkModeProvider>
  );
}

