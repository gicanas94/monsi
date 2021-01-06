import React from 'react';
import styled from 'styled-components';

import leftImage from '../../assets/images/above-fixed-left-image.png';
import rightImage from '../../assets/images/above-fixed-right-image.png';

const StyledLeftImage = styled.img`
  left: 10px;
  position: fixed;
  top: 0;
  width: 125px;
  z-index: 96;
`;

const StyledRightImage = styled.img`
  position: fixed;
  right: -12px;
  top: 0;
  transform: scale(-1, 1);
  width: 200px;
  z-index: 95;
`;

const AboveFixedImages = () => (
  <>
    <StyledLeftImage src={leftImage} />
    <StyledRightImage src={rightImage} />
  </>
);

export default AboveFixedImages;
