const tf = require('@tensorflow/tfjs');
// Add the WASM backend to the global backend registry.
require('@tensorflow/tfjs-backend-wasm');

const error = (expectedValue, predictedValue) => {
  return ((expectedValue - predictedValue) / expectedValue) * 100 + '%';
}

const knn = (features, lables, predictionPoint, k) => {

  const {mean, variance} = tf.moments(features, 0);

  console.log(mean.print(), variance.print());

  const scaledPrediction = predictionPoint.sub(mean).div(variance.pow(0.5))

  return features
    // 1 do the standarization
    .sub(mean)
    .div(variance.pow(0.5))
    .sub(scaledPrediction)
    .pow(2)
    .sum(1, true)
    .pow(.5)
    .concat(lables, 1)
    // 2. sort from lowest point to greates
    .unstack()
    .sort((a, b) => a.arraySync()[0] > b.arraySync()[0] ? 1 : -1)
    // 3. take top K record (now we have an array in pure js!!!)
    .slice(0, k)
    // 4. avg value of top K elements
    .reduce((acc, pair) => acc + pair.arraySync()[1], 0) / k;
}

export {
  error, knn
}
