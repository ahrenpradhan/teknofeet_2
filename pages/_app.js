import '../styles/globals.css';
import { StyleReset } from 'atomize';
import App from 'next/app'
import { Provider as StyletronProvider } from 'styletron-react'
import { styletron, debug } from '../styletron'

import ShopProvider from '../context/shopcontext';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ShopProvider>
        <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
          <StyleReset/>
          <Component {...pageProps} />
        </StyletronProvider>
      </ShopProvider>
    )
  }
}
