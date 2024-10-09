import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {

  const changeBackground = async () => {
    const WebApp = (await import("@twa-dev/sdk")).default
    WebApp.backgroundColor = '#f8ff00'
  }
  
  useEffect(() => {
    if (window) {
      changeBackground()
    }
  }, [])
  return <Component {...pageProps} />;
}
