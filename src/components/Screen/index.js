import PropTypes from 'proptypes';

import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';

const Screen = ({ n }) => {
  const screens = [FirstScreen, SecondScreen, ThirdScreen];

  return screens[n - 1]();
};

Screen.propTypes = {
  n: PropTypes.number.isRequired,
};

export default Screen;
