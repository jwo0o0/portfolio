import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Router from "next/router";
import changeRouteGtag from "@/lib/gtag";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const handleRouteChange = (url: URL) => {
    changeRouteGtag(url);
  };

  useEffect(() => {
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return <Component {...pageProps} />;
}
