import React from 'react';
import styled from 'styled-components';

import { MobileHeader, Screen } from './components';

const StyledAppWrapper = styled.div``;
const StyledScreensWrapper = styled.div``;

const App = () => (
  <StyledAppWrapper>
    <MobileHeader />

    <StyledScreensWrapper>
      <Screen n={1} />
      <Screen n={2} />
      <Screen n={3} />
    </StyledScreensWrapper>
  </StyledAppWrapper>
);

export default App;
