//Action Types
export const ADD_TENSORS = "ADD_TENSORS";
export const REMOVE_TENSORS = "REMOVE_TENSORS";

//Action Creator
export const addTensors = (tensors) => ({
  type: ADD_TENSORS,
  payload: {
    tensors: tensors
  }
});

export const removeTensors = () => ({
  type: REMOVE_TENSORS
});
