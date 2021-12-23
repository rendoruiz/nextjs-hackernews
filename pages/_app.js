import { useState } from 'react'
import Head from 'next/head';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { IdProvider } from '@radix-ui/react-id';
import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta property="og:url" content="https://hn.rendo.me/" />
        <meta property="og:image" content="https://hn.rendo.me/og-image.png"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <IdProvider>
            <Component {...pageProps} />
          </IdProvider>
        </Hydrate>

        {/* inline debug tool */}
        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    </>
  );
}

export default MyApp
