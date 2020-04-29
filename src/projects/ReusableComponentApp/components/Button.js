import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'lodash.get';

const theme = {
  sizes: {
    sm: {
      minWidth: '80px',
      padding: '8px',
      fontSize: '14px',
      lineHeight: '20px',
    },
    md: {
      minWidth: '96px',
      padding: '8px 16px',
      fontSize: '16px',
      lineHeight: '24px',
    },
    lg: {
      minWidth: '125px',
      padding: '12px 24px',
      fontSize: '18px',
      lineHeight: '24px',
    }
  },
  variants: {
    contained: {
      primary: {
        bg: '#6436FF',
        color: '#FFFFFF',
        hoveredBg: '#8560FF',
        border: 'none',
        focusedShadow: 'rgba(103, 61, 244, 50%) 0 0 0 4px',
      },
      secondary: {
        bg: '#38B2FF',
        color: '#FFFFFF',
        hoveredBg: '#77CBFF',
        border: 'none',
        focusedShadow: 'rgba(56, 178, 255, 50%) 0 0 0 4px',
      }
    },
    outlined: {
      primary: {
        bg: 'transparent',
        color: '#6436FF',
        hoveredBg: 'rgba(133, 96, 255, 80%)',
        hoveredText: '#FFFFFF',
        border: '1px solid #6436FF',
        focusedShadow: 'rgba(103, 61, 244, 50%) 0 0 0 4px',
      },
      secondary: {
        bg: 'transparent',
        color: '#38B2FF',
        hoveredBg: 'rgba(119, 203, 255, 80%)',
        hoveredText: '#FFFFFF',
        border: '1px solid #38B2FF',
        focusedShadow: 'rgba(56, 178, 255, 50%) 0 0 0 4px',
      }
    }
  }
}

const getSizeProperty = (property) => (props) => get(theme, `sizes.${props.size}.${property}`);
const getVariantProperty = (property) => (props) => get(theme, `variants.${props.variant}.${props.color}.${property}`);

const InnerButton = styled.button`
  cursor: pointer;

  min-width: ${getSizeProperty('minWidth')};
  padding: ${getSizeProperty('padding')};
  font-size: ${getSizeProperty('fontSize')};
  font-weight: 700;
  line-height: ${getSizeProperty('lineHeight')};

  background: ${getVariantProperty('bg')};
  color: ${getVariantProperty('color')};
  border: ${getVariantProperty('border')};
  border-radius: 8px;

  transition: background-color 0.3s, color 0.3s;
  
  :hover {
    background: ${getVariantProperty('hoveredBg')};
    color: ${getVariantProperty('hoveredText')};
  }

  :focus {
    box-shadow: ${getVariantProperty('focusedShadow')};
    outline: 0;
  }
`;

const Button = ({ size, variant, color, children }) => {

  return (
    <InnerButton size={size} variant={variant} color={color}>
      {children}
    </InnerButton>
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['contained', 'outlined']),
  color: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  size: 'md',
  variant: 'contained',
  color: 'primary',
};

export default Button;