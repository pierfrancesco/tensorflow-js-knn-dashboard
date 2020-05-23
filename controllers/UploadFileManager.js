export default (fileToUpload) => new Promise((resolve, reject) => {
    let regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
    if (typeof(FileReader) === "undefined") return reject("This browser does not support HTML5.")
    if (fileToUpload === undefined || !regex.test(fileToUpload.name.toLowerCase())) return reject("Please upload a valid CSV file.");
    let reader = new FileReader();
    reader.onload = function(e) {
        let features = [];
        let tensors = [];
        let rawData = e.target.result;
        let rows = e.target.result.split("\n");
        if (rows.length < 2) return reject("Please upload a valid CSV file.");

        for (let i = 0; i < rows.length; i++) {
            let cells = rows[i].split(",");
            if (cells.length > 1) {
                if (i === 0) {
                    features = cells;
                } else {
                    tensors[i - 1] = [];
                    for (let j = 0; j < cells.length; j++) {
                        tensors[i - 1].push(cells[j])
                    }
                }
            }
        }

        let TensorToReturn = {};
        TensorToReturn.features = features;
        TensorToReturn.tensors = tensors;
        TensorToReturn.rawData = rawData;
        return resolve(TensorToReturn)
    }
    reader.readAsText(fileToUpload);
})
