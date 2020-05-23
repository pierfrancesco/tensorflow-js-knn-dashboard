import TableCss from './Table.module.css'

import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core/';
import { connect } from 'react-redux'

const TableApp = ({features, tensors}) => {
  let renderedTable = null;
  let newTensors = tensors.tensors.slice(0, 1000);
  if (features.features.length > 0) {
    renderedTable = <TableContainer>
      <Table aria-label="simple table" size="small">
        <TableHead>
          <TableRow>{
            features.features.map(feature => {
              return <TableCell align="right">{feature}</TableCell>
            })
          }</TableRow>
        </TableHead>
        <TableBody>
          {newTensors.map((tensor, index) => {
            return <TableRow key={"tens" + index}>
              {tensor.map(cell => {
                return <TableCell align="right">{cell}</TableCell>
              })}
            </TableRow>
          })}
        </TableBody>
      </Table>
    </TableContainer>
  }

  return <div className={TableCss.appTable}>
    {renderedTable}
  </div>
}

const mapStateToProps = state => ({
  features: state.features,
  tensors: state.tensors,
});

export default connect(mapStateToProps, null)(TableApp);
//export default TableApp;
