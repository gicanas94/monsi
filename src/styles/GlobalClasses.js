import { createGlobalStyle } from 'styled-components';

import color from './color';
import device from './device';
import font from './font';

export default createGlobalStyle`
  // ------------------------------
  // Align classes
  // ------------------------------

  .left {
    text-align: left;
  }

  .center {
    text-align: center;
  }

  .right {
    text-align: right;
  }

  // ------------------------------
  // Color classes
  // ------------------------------

  .darkBlue {
    color: ${color.darkBlue};
  }

  .lightBlue {
    color: ${color.lightBlue};
  }

  .almostWhite {
    color: ${color.almostWhite};
  }

  // ------------------------------
  // Font family classes
  // ------------------------------

  .condensed {
    font-family: 'AG-Condensed';
  }

  .light {
    font-family: 'AG-Light';
  }

  .light-condensed {
    font-family: 'AG-Light-Condensed';
  }

  .regular {
    font-family: 'AG-Regular';
  }

  .medium {
    font-family: 'AG-Medium';
  }

  .medium-condensed {
    font-family: 'AG-Medium-Condensed';
  }

  .super {
    font-family: 'AG-Super';
  }

  // ------------------------------
  // Font size classes
  // ------------------------------

  .size-1 {
    font-size: ${font.size['2']};

    ${device.laptop} {
      font-size: ${font.size['1']};
    }
  }

  .size-2 {
    font-size: ${font.size['2']};
  }

  .size-3 {
    font-size: ${font.size['3']};
  }

  .size-4 {
    font-size: ${font.size['4']};
  }

  .size-5 {
    font-size: ${font.size['5']};
  }
`;
