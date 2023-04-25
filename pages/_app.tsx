import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { store } from '../myStore';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    {/* <Header /> */}
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
}
