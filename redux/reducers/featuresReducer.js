import {
  ADD_FEATURES,
  ADD_RAW_DATA,
  ADD_SELECTED_FEATURES,
  ADD_LABELS,
  REMOVE_FEATURES,
  REMOVE_SELECTED_FEATURES,
  REMOVE_LABELS
} from '../actions/featuresActions';

const featuresReducer = (state = {
  features: [], selectedFeatures: [], labels: [], rawData: undefined
}, action) => {
  switch (action.type) {
    case ADD_FEATURES:
      return {...state, features: action.payload.features};
    case ADD_LABELS:
      return {...state, labels: action.payload.labels};
    case ADD_RAW_DATA:
      return {...state, rawData: action.payload.rawData};
    case ADD_SELECTED_FEATURES:
      return {...state, selectedFeatures: [...action.payload.selectedFeatures]};
    case REMOVE_FEATURES:
      return {...state, features: []};
    case REMOVE_LABELS:
      return {...state, labels: []};
    case REMOVE_SELECTED_FEATURES:
      return {...state, selectedFeatures: []};
    default:
      return {...state};
  }
};

export default featuresReducer;
