import '../styles/learnIconsGrid.css';

import data from '../data/learnGridItems';
import Grid from './Grid';

export default function LearnIconsGrid(){

  return (
    <div id="learn-icons-div">
      <h2>What Do You Want To Learn ?</h2>
      <Grid
          data={data}
          id={'learn-grid'}
          classes={{items: 'learn-grid-item'}}
      />
    </div>
  )
}