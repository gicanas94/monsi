import { lighten } from 'polished';
import PropTypes from 'proptypes';
import React from 'react';
import styled from 'styled-components';

import { transition } from '../../styles';

const StyledButton = styled.button`
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  line-height: 1;
  padding: 15px 20px;
  transition: all ${transition.speed['0.08']} ease-in-out;

  ${({ styleType, color }) =>
    styleType === 'bordered' &&
    `
    background-color: transparent;
    border-color: ${color};
    color: ${color};

    &:active {
      transform: translateY(1px);
    }

    &:focus {
      outline: none;
    }
  `};

  ${({ styleType, color }) =>
    styleType === 'filled' &&
    `
    color: ${lighten(0.8, color)};
    background-color: ${color};
    border-color: transparent;
    box-shadow: 0 3px 3px 1px rgba(0, 0, 0, 0.2);

    &:active {
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.4);
      transform: translateY(1px);
    }

    &:focus {
      outline: none;
    }
  `};

  ${({ styleType, color }) =>
    styleType === 'unbordered' &&
    `
    background-color: transparent;
    border-color: transparent;
    color: ${color};

    &:active {
      transform: translateY(1px);
    }

    &:focus {
      outline: none;
    }
  `};
`;

const Button = ({ children, className, color, styleType, ...rest }) => (
  <StyledButton
    className={`${className} regular`}
    color={color}
    styleType={styleType}
    {...rest}
  >
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
  color: PropTypes.string.isRequired,
  styleType: PropTypes.oneOf(['bordered', 'filled', 'unbordered']).isRequired,
};

Button.defaultProps = {
  className: '',
};

export default Button;
