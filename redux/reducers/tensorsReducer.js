import {
  ADD_TENSORS,
  REMOVE_TENSORS
} from '../actions/tensorsActions';

const tensorsReducer = (state = {tensors: []}, action) => {
  switch (action.type) {
    case ADD_TENSORS:
      return {...state, tensors: action.payload.tensors};
    case REMOVE_TENSORS:
      return {...state, tensors: []};
    default:
      return {...state};
  }
};

export default tensorsReducer;
