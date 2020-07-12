import styled from 'styled-components';

const Button = styled.button`
  align-self: center;
  padding: 12px 24px;
  background: #F42057;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  box-shadow: 2px 2px 4px 0px rgba(0,0,0,.52);
  cursor: pointer;
  margin-top: 24px;

  transition: background .3s;
  outline: none;
  z-index: 1;

  &:hover {
    background: #ff4a79;
  }
`;

export default Button;