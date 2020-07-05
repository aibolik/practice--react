import styled from 'styled-components';

const Button = styled.div`
  background: #030306;
  border-radius: 50%;
  width: 94px;
  height: 94px;
  color: #FFF;
  font-size: 28px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background .3s;
  
  &:hover {
    background: #383a52;
  }
`;

export default Button;