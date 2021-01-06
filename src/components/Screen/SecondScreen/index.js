import React from 'react';
import styled from 'styled-components';

import cityImage from '../../../assets/images/city.png';
import { color } from '../../../styles';
import firstIcon from '../../../assets/icons/second-screen-first-icon.svg';
import secondIcon from '../../../assets/icons/second-screen-second-icon.svg';
import thirdIcon from '../../../assets/icons/second-screen-third-icon.svg';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -90px;
  overflow: hidden;
`;

const StyledCityImage = styled.img`
  left: -5%;
  position: relative;
  width: 120%;
  z-index: -1;
`;

const StyledIconsAndTextsWrapper = styled.div`
  background-color: ${color.lightBlue};
  padding: 40px;

  & > *:not(:last-of-type) {
    margin-bottom: 40px;
  }
`;

const StyledIconAndTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledIcon = styled.img`
  height: 50px;
  margin-bottom: 10px;
  width: 50px;
`;

const SecondScreen = () => (
  <StyledWrapper>
    <StyledCityImage alt="" src={cityImage} />

    <StyledIconsAndTextsWrapper>
      <StyledIconAndTextWrapper>
        <StyledIcon alt="" src={firstIcon} />

        <p className="darkBlue size-4">
          Diseñamos y desarrollamos sitios web desde cero
        </p>
      </StyledIconAndTextWrapper>

      <StyledIconAndTextWrapper>
        <StyledIcon alt="" src={secondIcon} />

        <p className="darkBlue size-4">
          Adaptamos tu sitio web para cumplir con tus objetivos comerciales
        </p>
      </StyledIconAndTextWrapper>

      <StyledIconAndTextWrapper>
        <StyledIcon alt="" src={thirdIcon} />

        <p className="darkBlue size-4">
          Nuestro objetivo es ayudarte a cumplir tu verdadero potencial online
        </p>
      </StyledIconAndTextWrapper>
    </StyledIconsAndTextsWrapper>
  </StyledWrapper>
);

export default SecondScreen;
