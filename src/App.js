import React from 'react';
import styled from 'styled-components';

import { MobileHeader, Screen } from './components';

const StyledAppWrapper = styled.div``;
const StyledScreensWrapper = styled.div``;

const App = () => (
  <StyledAppWrapper>
    <MobileHeader />

    <StyledScreensWrapper>
      <Screen l="A" />
      <Screen l="B" />
      <Screen l="C" />
      <Screen l="D" />
      <Screen l="E" />
    </StyledScreensWrapper>
  </StyledAppWrapper>
);

export default App;
