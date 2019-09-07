import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 40px 60px;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Img = styled.img`
  width: 395px;
  height: 260px;
  object-fit: cover;
  margin-right: 30px;
`;

export const Price = styled.p`
  margin: 48px 0;
  font-size: 28px;
  font-weight: 600;
`;

export const Button = styled.button`
  padding: 12px 44px;
  border: none;
  border-radius: 8px;
  font-size: 24px;
  background: #346BAA;
  color: white;
  cursor: pointer;

  :hover {
    background: #15457d; 
  }
`;