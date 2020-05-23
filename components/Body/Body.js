import React from 'react';
import BodyCss from './Body.module.css';
import Table from '../Table'
import Menu from '../Menu'
import DropFile from '../Dropfile'
import { connect } from 'react-redux'

const Body = ({features, tensors}) => {

  let myFeatures = features.features;
  let myTensors = tensors.tensors

  return <div className={BodyCss.appBody}>
    <div className={BodyCss.mainArea}>
      {myFeatures.length > 0 && myTensors.length > 0 ?
        <Table/>
        :
        <DropFile/>
      }
    </div>
    <Menu/>
  </div>
}

const mapStateToProps = state => ({
  features: state.features,
  tensors: state.tensors,
});

export default connect(mapStateToProps, null)(Body);
