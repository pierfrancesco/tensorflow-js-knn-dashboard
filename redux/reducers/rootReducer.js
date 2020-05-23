import featureReducer from './featuresReducer';
import tensorsReducer from './tensorsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  features: featureReducer,
  tensors: tensorsReducer,
});

export default rootReducer;
