import {
  Close as CloseIcon,
  Menu as MenuIcon,
} from 'styled-icons/ionicons-outline';

import PropTypes from 'proptypes';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { color, device } from '../../../styles';
import manWithBinocularsImage from '../../../assets/images/man-with-binoculars.png';
import AboveFixedImages from '../../AboveFixedImages';

const StyledHeader = styled.header`
  align-items: flex-start;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.6) 5%,
    rgba(255, 255, 255, 0.8) 15%,
    rgba(255, 255, 255, 0.9) 30%,
    rgba(255, 255, 255, 1) 100%
  );
  display: flex;
  height: 80px;
  justify-content: space-between;
  left: 0;
  padding: 10px 20px 0 20px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
`;

const StyledTextLogo = styled.div`
  color: ${color.darkBlue};
  cursor: pointer;
  margin-top: 5px;
  z-index: 100;
`;

const StyledOpenNavIcon = styled(MenuIcon)`
  color: ${color.darkBlue};
  cursor: pointer;
  height: 40px;
  min-height: 40px;
  min-width: 40px;
  width: 40px;
  z-index: 100;
`;

const StyledCloseNavIcon = styled(CloseIcon)`
  color: ${color.darkBlue};
  cursor: pointer;
  height: 40px;
  min-height: 40px;
  min-width: 40px;
  width: 40px;
  z-index: 100;
`;

const StyledOverlay = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 90;

  @media ${device.laptop} {
    display: none;
  }
`;

const StyledNav = styled.nav`
  padding-top: 15vh;
`;

const StyledNavLink = styled.a`
  display: block;

  &:not(:last-of-type) {
    margin-bottom: 40px;
  }
`;

const StyledManWithBinocularsImage = styled.div`
  background-image: url(${manWithBinocularsImage});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
  height: 40%;
  width: 80%;
`;

const StyledCloserOnClick = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;
`;

const MobileHeader = ({ className }) => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  useEffect(() => {
    document.querySelector('body').style.overflow = navIsOpen
      ? 'hidden'
      : 'auto';
  }, [navIsOpen]);

  return (
    <StyledHeader className={className}>
      <AboveFixedImages />

      <StyledTextLogo className="size-3">
        <span className="medium-condensed">MONSI</span>
        <span className="light-condensed">DISEÑO</span>
      </StyledTextLogo>

      {navIsOpen ? (
        <StyledCloseNavIcon onClick={() => setNavIsOpen(false)} />
      ) : (
        <StyledOpenNavIcon onClick={() => setNavIsOpen(true)} />
      )}

      {navIsOpen && (
        <StyledOverlay>
          <StyledCloserOnClick onClick={() => setNavIsOpen(false)} />

          <StyledNav>
            <StyledNavLink className="center super size-1">
              Nosotros
            </StyledNavLink>

            <StyledNavLink className="center super size-1">
              Trabajos
            </StyledNavLink>

            <StyledNavLink className="center super size-1">
              Contacto
            </StyledNavLink>
          </StyledNav>

          <StyledManWithBinocularsImage />
        </StyledOverlay>
      )}
    </StyledHeader>
  );
};

MobileHeader.propTypes = {
  className: PropTypes.string,
};

MobileHeader.defaultProps = {
  className: '',
};

export default MobileHeader;
