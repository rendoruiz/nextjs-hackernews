import { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { IdProvider } from '@radix-ui/react-id';
import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <IdProvider>
          <Component {...pageProps} />
        </IdProvider>
      </Hydrate>

      {/* inline debug tool */}
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
}

export default MyApp
