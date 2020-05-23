const saveFeaturesToState = (features) => {

}

const savePreviewTensorsToState = (previewTensors) => {

}

const saveRawDataToDB = async (rawData) => {
  if (!('indexedDB' in window)) {
    console.log('This browser doesn\'t support IndexedDB');

    // TODO: fallback to localStorage
    return;
  }

  let rawDataDB = window.indexedDB.open('TensorFlowRawDataDB', 1);
}

const getRawDataFromDB = () => {

}

export {
  saveFeaturesToState,
  savePreviewTensorsToState,
  saveRawDataToDB,
  getRawDataFromDB
}
