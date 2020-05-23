const tf = require('@tensorflow/tfjs');

const error = (expectedValue, predictedValue) => {
  return ((expectedValue - predictedValue) / expectedValue) * 100 + '%';
}

const knn = (features, labels, predictionPoint, k) => {

  const {mean, variance} = tf.moments(features, 0);
  const scaledPrediction = predictionPoint.sub(mean).div(variance.pow(0.5))
  return features
    .sub(mean)
    .div(variance.pow(0.5))
    .sub(scaledPrediction)
    .pow(2)
    .sum(1, true)
    .pow(.5)
    .concat(labels, 1)
    .unstack()
    .sort((a, b) => a.arraySync()[0] > b.arraySync()[0] ? 1 : -1)
    .slice(0, k)
    .reduce((acc, pair) => acc + pair.arraySync()[1], 0) / k;
}

export {
  error, knn
}
