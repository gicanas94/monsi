import { createGlobalStyle } from 'styled-components';

import AkzidenzGroteskCondensed from '../assets/fonts/AkzidenzGrotesk-Condensed.ttf';
import AkzidenzGroteskLight from '../assets/fonts/AkzidenzGrotesk-Light.otf';
import AkzidenzGroteskLightCondensed from '../assets/fonts/AkzidenzGrotesk-Light-Condensed.ttf';
import AkzidenzGroteskRegular from '../assets/fonts/AkzidenzGrotesk-Regular.otf';
import AkzidenzGroteskMedium from '../assets/fonts/AkzidenzGrotesk-Medium.otf';
import AkzidenzGroteskMediumCondensed from '../assets/fonts/AkzidenzGrotesk-Medium-Condensed.ttf';
import AkzidenzGroteskSuper from '../assets/fonts/AkzidenzGrotesk-Super.otf';

export default createGlobalStyle`
  @font-face {
    font-family: 'AG-Condensed';
    src: url(${AkzidenzGroteskCondensed});
  }

  @font-face {
    font-family: 'AG-Light';
    src: url(${AkzidenzGroteskLight});
  }

  @font-face {
    font-family: 'AG-Light-Condensed';
    src: url(${AkzidenzGroteskLightCondensed});
  }

  @font-face {
    font-family: 'AG-Regular';
    src: url(${AkzidenzGroteskRegular});
  }

  @font-face {
    font-family: 'AG-Medium';
    src: url(${AkzidenzGroteskMedium});
  }

  @font-face {
    font-family: 'AG-Medium-Condensed';
    src: url(${AkzidenzGroteskMediumCondensed});
  }

  @font-face {
    font-family: 'AG-Super';
    src: url(${AkzidenzGroteskSuper});
  }
`;
