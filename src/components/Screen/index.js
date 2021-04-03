import PropTypes from 'proptypes';

import A from './A';
import B from './B';
import C from './C';
import D from './D';
import E from './E';

const Screen = ({ l }) => ({ A, B, C, D, E }[l]());

Screen.propTypes = {
  l: PropTypes.oneOf(['A', 'B', 'C', 'D', 'E']).isRequired,
};

export default Screen;
