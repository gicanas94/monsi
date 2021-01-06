import React from 'react';
import styled from 'styled-components';

import { color } from '../../../styles';
import twoPhonesImage from '../../../assets/images/two-phones.png';

const StyledWrapper = styled.div``;

const StyledTitleAndSubtitleWrapper = styled.div`
  padding: 40px 20px;
`;

const StyledText = styled.p`
  margin-bottom: 60px;
  padding: 0 20px;
`;

const StyledGraySquareAndTwoPhonesImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
`;

const StyledTwoPhonesImage = styled.img`
  left: -45%;
  position: relative;
  width: 165%;
  z-index: -1;
`;

const StyledGraySquare = styled.div`
  background-color: ${color.almostWhite};
  height: 600px;
  left: 0;
  position: absolute;
  top: 90px;
  width: 100%;
  z-index: -2;
`;

const ThirdScreen = () => (
  <StyledWrapper>
    <StyledTitleAndSubtitleWrapper>
      <p className="center super size-1">SOMOS MONSI</p>
      <p className="center">Nuestro trabajo es nuestra pasión</p>
    </StyledTitleAndSubtitleWrapper>

    <StyledText className="super size-1">
      Creemos que la tecnología debe entenderse para poder comercializarse de
      manera efectiva
    </StyledText>

    <StyledGraySquareAndTwoPhonesImageWrapper>
      <StyledGraySquare />
      <StyledTwoPhonesImage alt="" src={twoPhonesImage} />
    </StyledGraySquareAndTwoPhonesImageWrapper>
  </StyledWrapper>
);

export default ThirdScreen;
