import type { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "../components/Layout";
import "@fontsource/archivo-narrow";
import "@fontsource/archivo-narrow/700.css";
import "@fontsource/source-sans-pro";
import "@fontsource/source-sans-pro/700.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
