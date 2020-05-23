import { Button } from '@material-ui/core';
import ResetButtonCss from './ResetButton.module.css';

export default ({onClick, disabled = true}) => {
  return (
    <div className={ResetButtonCss.appResetButton}>
      <Button variant="contained" color="secondary" disabled={disabled} onClick={onClick}>
        Reset
      </Button>
    </div>
  )
}
