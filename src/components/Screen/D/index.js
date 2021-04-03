import React from 'react';
import styled from 'styled-components';

import Box from '../../Box';
import { color } from '../../../styles';
import firstIcon from '../../../assets/icons/screen-D-first-icon.svg';
import secondIcon from '../../../assets/icons/screen-D-second-icon.svg';
import thirdIcon from '../../../assets/icons/screen-D-third-icon.svg';

const StyledWrapper = styled.div``;

const StyledTitle = styled.div`
  padding: 40px 30px 0 30px;
`;

const StyledBoxesWrapper = styled.div`
  padding: 40px 30px;

  & > *:not(:last-of-type) {
    margin-bottom: 60px;
  }
`;

const StyledBoxIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
`;

const StyledBoxIcon = styled.img`
  height: 80px;
  width: 80px;
`;

const StyledBoxTitle = styled.p`
  margin-bottom: 10px;
`;

const StyledBoxDescription = styled.p`
  line-height: 1.5;
`;

const StyledGraySquareWrapper = styled.div`
  position: relative;
`;

const StyledGraySquare = styled.div`
  background-color: ${color.almostWhite};
  height: 300px;
  left: 0;
  position: absolute;
  top: -250px;
  width: 100%;
  z-index: -2;
`;

const Screen = () => (
  <StyledWrapper>
    <StyledTitle className="center darkBlue regular size-1">
      Nuestros Servicios
    </StyledTitle>

    <StyledBoxesWrapper>
      <Box>
        <StyledBoxIconWrapper>
          <StyledBoxIcon alt="" src={firstIcon} />
        </StyledBoxIconWrapper>

        <StyledBoxTitle className="darkBlue medium size-3">
          Diseño web
        </StyledBoxTitle>

        <StyledBoxDescription className="darkBlue light size-5">
          Nuestros diseños web están pensados en siempre a ayudar a nuestros
          clientes a vender su producto o servicio, ofreciendo una imagen
          profesional de su negocio con un sitio web de alto impacto.
        </StyledBoxDescription>
      </Box>

      <Box>
        <StyledBoxIconWrapper>
          <StyledBoxIcon alt="" src={secondIcon} />
        </StyledBoxIconWrapper>

        <StyledBoxTitle className="darkBlue medium size-3">
          eCommerce
        </StyledBoxTitle>

        <StyledBoxDescription className="darkBlue light size-5">
          Somos una Agencia joven con basta experiencia en el desarrollo y
          mantenimiento de sitios web eCommerce. Nos especializamos en las
          plataformas más usadas en el mercado.
        </StyledBoxDescription>
      </Box>

      <Box>
        <StyledBoxIconWrapper>
          <StyledBoxIcon alt="" src={thirdIcon} />
        </StyledBoxIconWrapper>

        <StyledBoxTitle className="darkBlue medium size-3">
          Marketing online
        </StyledBoxTitle>

        <StyledBoxDescription className="darkBlue light size-5">
          Llega a nuevos potenciales clientes, con una inversión mínima y
          resultados a corto plazo. Serás visible para todas aquellas personas
          que realicen búsquedas relacionadas de tu sector, negocio, producto o
          servicio.
        </StyledBoxDescription>
      </Box>
    </StyledBoxesWrapper>

    <StyledGraySquareWrapper>
      <StyledGraySquare />
    </StyledGraySquareWrapper>
  </StyledWrapper>
);

export default Screen;
