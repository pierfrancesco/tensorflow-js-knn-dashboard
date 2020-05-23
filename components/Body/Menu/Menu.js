import React from 'react';

const k = 10;
const tf = require('@tensorflow/tfjs');
import { knn, error } from '../../../controllers/TensorFlowManager';
import MenuCss from './Menu.module.css'
import { FormGroup, FormControl, Input, Select, ListItemText, InputLabel, Checkbox, MenuItem } from '@material-ui/core';
import ResetButton from '../../../elements/ResetButton'
import { connect } from 'react-redux'
import { removeTensors } from '../../../redux/actions/tensorsActions'
import {
  removeFeatures,
  removeSelectedFeatures,
  addSelectedFeatures,
  addLabels
} from '../../../redux/actions/featuresActions'
import { loadCSV } from '../../../controllers/CSVManager'

// TODO: table pagination
// TODO: features selection
// TODO: label selection
// TODO: k selection
// TODO: test training selection
// TODO: input tensor to predict

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Menu = ({
                features,
                removeTensors,
                removeFeatures,
                removeSelectedFeatures,
                addSelectedFeatures,
                addLabels
              }) => {
  let myFeatures = features.features;
  let mySelectedFeatures = features.selectedFeatures;
  let mySelectedLabels = features.labels;
  let myRawData = features.rawData;

  return <div className={MenuCss.appMenu}>
    <FormGroup>
      <FormControl>
        <ResetButton disabled={myFeatures.length === 0} onClick={() => {
          removeFeatures();
          removeTensors();
          removeSelectedFeatures();
        }}/>
      </FormControl>
      <FormControl>
        <InputLabel id="selectFeaturesLabel">Select one or more features</InputLabel>
        <Select
          labelId="selectFeaturesLabel"
          id="selectFeatures"
          multiple
          value={mySelectedFeatures}
          onChange={(event) => {
            addSelectedFeatures(event.target.value)
          }}
          input={<Input/>}
          renderValue={() => mySelectedFeatures.toString()}
          MenuProps={MenuProps}
        >
          {myFeatures.map((feature) => (
            <MenuItem key={feature} value={feature}>
              <Checkbox/>
              <ListItemText primary={feature}/>
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="selectLabelLabel">Select the Labels to Predict</InputLabel>
        <Select
          labelId="selectLabelLabel"
          id="selectLabel"
          value={myFeatures}
          onChange={(event) => {
            addLabels(event.target.value)
          }}
          input={<Input/>}
          renderValue={() => mySelectedLabels.toString()}
          MenuProps={MenuProps}
        >
          {myFeatures.map((feature) => (
            <MenuItem key={feature} value={feature}>
              <Checkbox/>
              <ListItemText primary={feature}/>
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <ResetButton disabled={false} onClick={() => {
        let {features, labels, testFeatures, testLabels} = loadCSV(myRawData, {
          shuffle: true,
          splitTest: 10,
          dataColumns: myFeatures,
          labelColumns: [...mySelectedLabels]
        });

        features = tf.tensor(features);
        labels = tf.tensor(labels);

        testFeatures.forEach((testPoint, index) => {
          const result = knn(features, labels, tf.tensor(testPoint), k);
          console.log(result, testLabels[index][0], error(testLabels[index][0], result));
        });
      }}/>
    </FormGroup>
  </div>
}

const mapStateToProps = state => ({
  features: state.features,
  labels: state.labels,
  tensors: state.tensors,
  rawData: state.rawData,
});

const mapDispatchToProps = {
  removeTensors: removeTensors,
  removeFeatures: removeFeatures,
  removeSelectedFeatures: removeSelectedFeatures,
  addSelectedFeatures: addSelectedFeatures,
  addLabels: addLabels
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
