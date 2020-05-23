require('@tensorflow/tfjs-node')
const tf = require('@tensorflow/tfjs')
const loadCSV = require('./load-csv');
const k = 10;

const error = (expectedValue, predictedValue) => {
    return ((expectedValue - predictedValue) / expectedValue) * 100 + '%';
}


function knn(features, lables, predictionPoint, k) {

    const { mean, variance } = tf.moments(features, 0);

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

let { features, labels, testFeatures, testLabels } = loadCSV('kc_house_data.csv', {
    shuffle: true,
    splitTest: k,
    dataColumns: ['lat', 'long', 'sqft_lot', 'sqft_living'],
    labelColumns: ['price']
});


features = tf.tensor(features);
labels = tf.tensor(labels);
testFeatures.forEach((testPoint, index) => {
    const result = knn(features, labels, tf.tensor(testPoint), k);
    console.log(result, testLabels[index][0], error(testLabels[index][0], result));
});









//console.log(testFeatures)
//console.log(testLabels);