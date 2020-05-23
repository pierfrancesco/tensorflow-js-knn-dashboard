import React, { Component } from 'react'
import { DropzoneArea } from 'material-ui-dropzone'
import UploadFileManager from '../../../controllers/UploadFileManager';
import { connect } from 'react-redux'
import DropFileCss from './DropFile.module.css'
import { addTensors } from '../../../redux/actions/tensorsActions';
import { addFeatures, addRawData } from '../../../redux/actions/featuresActions';

class DropzoneAreaExample extends Component {
  constructor (props) {
    super(props);
  }

  async handleChange (files) {
    if (files.length > 0) {
      try {

        let {features, tensors, rawData} = await UploadFileManager(files[0]);

        this.props.addFeatures(features);
        this.props.addTensors(tensors);
        this.props.addRawData(rawData);
      } catch (e) {
        // TODO: manage errors
      }
    }
  }

  render () {
    return (
      <div className={DropFileCss.appDropFile}>
        <DropzoneArea
          showFileNames={true}
          showPreviewsInDropzone={false}
          acceptedFiles={["text/plain", "text/csv"]}
          maxFileSize={5000000}
          filesLimit={1}
          onChange={this.handleChange.bind(this)}
        />
      </div>

    )
  }
}

const mapStateToProps = state => ({
  features: state.features,
  tensors: state.tensors,
});

const mapDispatchToProps = {
  addTensors: addTensors,
  addFeatures: addFeatures,
  addRawData: addRawData
};

//export default DropzoneAreaExample

export default connect(mapStateToProps, mapDispatchToProps)(DropzoneAreaExample);
