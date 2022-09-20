import React from 'react';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import "../styles/globals.scss";
const queryClient = new QueryClient();

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Local New Business</title>
            </Head>
            <RecoilRoot>
                <QueryClientProvider client={queryClient}>
                    <Component {...pageProps} />
                </QueryClientProvider>
            </RecoilRoot>
        </>
    );
}

export default MyApp
