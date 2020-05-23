import { Button } from '@material-ui/core';
import StartErrorButtonCss from './StartErrorButton.module.css';

export default ({onClick, disabled = true}) => {
  return (
    <div className={StartErrorButtonCss.appCheckErrorButton}>
      <Button variant="contained" color="secondary" disabled={disabled} onClick={onClick}>
        Check
      </Button>
    </div>
  )
}
