import React, { useContext } from 'react';
import T from 'prop-types';
import styled from 'styled-components';

import { renderWind } from '../../utils';

import { UnitsContext } from '../../App';

const Wrapper = styled.div`
  align-self: flex-end;
`;

const AdditionalData = ({ humidity, wind = 0, rain = 0 }) => {
  const { units } = useContext(UnitsContext);

  return (
    <Wrapper>
      <div>Rain: {rain} mm</div>
      <div>Humidity: {humidity}%</div>
      <div>Wind: {renderWind(wind, units)}</div>
    </Wrapper>
  )
};

AdditionalData.propTypes = {
  humidity: T.number.isRequired,
  wind: T.number,
  rain: T.number,
};

export default AdditionalData;