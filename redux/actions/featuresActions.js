//Action Types
export const ADD_FEATURES = "ADD_FEATURES";
export const REMOVE_FEATURES = "REMOVE_FEATURES";
export const ADD_RAW_DATA = "ADD_RAW_DATA";

export const ADD_SELECTED_FEATURES = "ADD_SELECTED_FEATURES";
export const REMOVE_SELECTED_FEATURES = "REMOVE_SELECTED_FEATURES";

export const ADD_LABELS = "ADD_LABELS";
export const REMOVE_LABELS = "REMOVE_LABELS";

//Action Creator
export const addFeatures = (features) => ({
  type: ADD_FEATURES,
  payload: {
    features: features
  }
});

export const addSelectedFeatures = (selectedFeatures) => ({
  type: ADD_SELECTED_FEATURES,
  payload: {
    selectedFeatures: selectedFeatures
  }
});

export const addLabels = (labels) => ({
  type: ADD_LABELS,
  payload: {
    labels: labels
  }
});

export const addRawData = (rawData) => ({
  type: ADD_RAW_DATA,
  payload: {
    rawData: rawData
  }
});

export const removeSelectedFeatures = () => ({
  type: REMOVE_SELECTED_FEATURES
});

export const removeFeatures = () => ({
  type: REMOVE_FEATURES
});

export const removeLabels = () => ({
  type: REMOVE_LABELS
});
