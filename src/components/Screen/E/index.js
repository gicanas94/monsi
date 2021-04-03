import React from 'react';
import styled from 'styled-components';

import Box from '../../Box';
import { color } from '../../../styles';
import firstIcon from '../../../assets/icons/screen-E-first-icon.svg';
import founderGroupPhone from '../../../assets/images/founder-group-phone.png';
import secondIcon from '../../../assets/icons/screen-E-second-icon.svg';

const StyledWrapper = styled.div`
  background-color: ${color.almostWhite};
  padding: 40px 0;
`;

const StyledTitleAndSubtitleWrapper = styled.div`
  padding: 0 60px;
`;

const StyledTitle = styled.p`
  margin-bottom: 20px;
`;

const StyledSubtitle = styled.p`
  line-height: 1.5;
  margin-bottom: 40px;
`;

const StyledFounderGroupPhoneImageWrapper = styled.div`
  overflow: hidden;
`;

const StyledFounderGroupPhoneImage = styled.img`
  margin-bottom: 40px;
  position: relative;
  right: 80%;
  width: 170%;
`;

const StyledBoxWrapper = styled.div`
  margin-bottom: 40px;
  padding: 0 10%;
`;

const StyledBoxContentWrapper = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 65% 35%;
`;

const StyledBoxContentTitle = styled.p`
  margin-bottom: 20px;
`;

const StyledCircleIconAndTextWrapper = styled.div`
  align-items: center;
  display: flex;

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

const StyledCircleIcon = styled.div`
  background-color: #bdd5fd;
  border-radius: 50%;
  height: 35px;
  margin-right: 5px;
  padding: 2px;
  width: 35px;

  img {
    height: 100%;
    width: 100%;
  }
`;

const StyledLastText = styled.p`
  line-height: 1.5;
  padding: 0 60px;
`;

const Screen = () => (
  <StyledWrapper>
    <StyledTitleAndSubtitleWrapper>
      <StyledTitle className="darkBlue medium size-3">
        De una idea, a la realidad.
      </StyledTitle>

      <StyledSubtitle className="darkBlue light size-5">
        Founder Group Inc es un equipo especialista en consultoría y asesoría
        para el impulso, distribución y venta de productos. Cuentan con más de
        15 años de experiencia en el mercado.
      </StyledSubtitle>
    </StyledTitleAndSubtitleWrapper>

    <StyledFounderGroupPhoneImageWrapper>
      <StyledFounderGroupPhoneImage alt="" src={founderGroupPhone} />
    </StyledFounderGroupPhoneImageWrapper>

    <StyledBoxWrapper>
      <Box>
        <StyledBoxContentWrapper>
          <div>
            <StyledBoxContentTitle className="darkBlue medium size-4">
              Contenido
            </StyledBoxContentTitle>

            <StyledCircleIconAndTextWrapper>
              <StyledCircleIcon>
                <img alt="" src={firstIcon} />
              </StyledCircleIcon>

              <p className="darkBlue light size-5">Desarrollo web</p>
            </StyledCircleIconAndTextWrapper>

            <StyledCircleIconAndTextWrapper>
              <StyledCircleIcon>
                <img alt="" src={secondIcon} />
              </StyledCircleIcon>

              <p className="darkBlue light size-5">Diseño UX/UI</p>
            </StyledCircleIconAndTextWrapper>
          </div>

          <div>
            <StyledBoxContentTitle className="darkBlue medium size-4">
              Duración
            </StyledBoxContentTitle>

            <p className="darkBlue light size-5">3 semanas</p>
          </div>
        </StyledBoxContentWrapper>
      </Box>
    </StyledBoxWrapper>

    <StyledLastText className="darkBlue light size-5">
      Gracias a su presencia en la web, ganaron más clientes, mayor
      reconocimiento y un mayor número de conversiones.
    </StyledLastText>
  </StyledWrapper>
);

export default Screen;
