import App from 'next/app';
import { Provider } from 'react-redux';
import React from 'react';
import withRedux from "next-redux-wrapper";
import store from '../redux/store';

const tf = require('@tensorflow/tfjs');
// Add the WASM backend to the global backend registry.
require('@tensorflow/tfjs-backend-wasm');

class MyApp extends App {

  static async getInitialProps ({Component, ctx}) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    //Anything returned here can be accessed by the client
    return {pageProps: pageProps};
  }

  componentDidMount () {
    // Set the backend to WASM and wait for the module to be ready.
    tf.setBackend('wasm').then(() => {
      console.log('WASM SET UP')
    })
  }

  render () {
    //Page props that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const {Component, pageProps, store} = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps}/>
      </Provider>
    );
  }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);
