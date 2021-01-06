import React from 'react';
import styled from 'styled-components';

import Button from '../../Button';
import { color } from '../../../styles';
import phoneWithFlowersImage from '../../../assets/images/phone-with-flowers.png';

const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const StyledPhoneWithFlowersImage = styled.img`
  margin-right: 10px;
  max-width: 80%;
`;

const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  button:first-child {
    margin-right: 20px;
  }
`;

const FirstScreen = () => (
  <StyledWrapper>
    <h1 className="center super size-1">
      Construímos y desarrollamos Webs a medida
    </h1>

    <StyledPhoneWithFlowersImage alt="" src={phoneWithFlowersImage} />

    <h2 className="center size-4">
      Somos un estudio independiente de diseño y desarrollo para grandes y
      pequeñas empresas en Buenos Aires, Argentina.
    </h2>

    <StyledButtonsWrapper>
      <Button
        className="size-4"
        color={color.darkBlue}
        styleType="filled"
        type="button"
      >
        Hablemos
      </Button>

      <Button
        className="size-4"
        color={color.darkBlue}
        styleType="unbordered"
        type="button"
      >
        Explorar
      </Button>
    </StyledButtonsWrapper>
  </StyledWrapper>
);

export default FirstScreen;
