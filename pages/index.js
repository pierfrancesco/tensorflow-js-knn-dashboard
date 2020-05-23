import React from 'react';

import Head from 'next/head'
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Body from '../components/Body';

import { connect } from 'react-redux';

//import {decrementCounter, incrementCounter} from '../redux/actions/counterActions';

class Home extends React.Component {

  static getInitialProps ({store}) {}

  constructor (props) {
    super(props);
  }

  render () {
    return <div>
      <Head>
        <title>TensorFlow | JS | KNN | Dash</title>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      </Head>
      <Layout>
        <Navbar/>
        <Body/>
      </Layout>
      <style jsx global>{`
        html,body,#__next {
          top: 0;
          left:0;
          width : 100%;
          height : 100%;
          margin: 0px !important;
          padding : 0 !important;
          background-color: grey;
        }
      `} </style>
    </div>
  }
}

const mapStateToProps = state => ({
  features: state.features,
  tensors: state.tensors,
});

export default connect(mapStateToProps, null)(Home);
