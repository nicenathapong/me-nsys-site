import Head from "next/head";
import "../styles/globals.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Sarabun:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
