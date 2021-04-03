import PropTypes from 'proptypes';
import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  padding: 20px;
  width: 100%;
`;

const Box = ({ children, className }) => (
  <StyledBox className={className}>{children}</StyledBox>
);

Box.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Box.defaultProps = {
  className: '',
};

export default Box;
