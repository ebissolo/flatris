import { PLAYING } from '../../../constants/states';
import GamePanel from '../../GamePanel.jsx';

export default {
  component: GamePanel,

  props: {
    gameState: PLAYING,
    score: 10,
    lines: 0,
    nextTetromino: 'S',
    onStart: () => console.log('Start'),
    onPause: () => console.log('Pause'),
    onResume: () => console.log('Resume')
  },

  // Activate Redux layout
  reduxState: {}
};
