import React, { useState } from 'react';
import styled from 'styled-components';

import SelectableTiles from './SelectableTiles';
import RangeSelector from './RangeSelector';

import { getCurrentPoints } from '../utils';

const storageOptions = [
  { value: '2', text: '2 GB' },
  { value: '5', text: '5 GB' },
  { value: '10', text: '10 GB' },
  { value: '20', text: '20 GB' },
];

const repliceOpions = [
  { value: false, text: 'Single replica' },
  { value: true, text: 'Multiple replicas' },
]

const recordPoints = [
  5000, 25000, 50000, 100000
];

const PRICING = {
  storage: {
    '2': 4,
    '5': 8,
    '10': 14,
    '20': 22,
  },
  isMultiple: {
    'true': 10,
    'false': 0,
  },
  records: {
    5000: 1,
    25000: 7,
    50000: 13,
    100000: 22,
  }
}

const calculatePrice = (dbCapacity, isMulitpleReplica, recordsCount) => {
  const records = getCurrentPoints(recordPoints, recordsCount);

  return PRICING['storage'][dbCapacity] + PRICING['isMultiple'][isMulitpleReplica.toString()] + PRICING['records'][records];
}

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FinalPrice = styled.p`
  display: flex;
  font-size: 38px;
  font-weight: 600;
  color: #270295;
`;

const CurrencySign = styled.span`
  font-size: 22px;
  margin-right: 4px;
`;

const Period = styled.span`
  font-size: 18px;
  color: #808080;
  font-weight: 400;
  align-self: flex-end;
  position: relative;
  bottom: 6px;
  left: 6px;
`;

const Calculator = () => {
  const [storage, setStorage] = useState('2');
  const [isMulitpleReplica, setMultipleReplica] = useState(false);
  const [range, setRange] = useState(5000);

  const [price, setPrice] = useState(calculatePrice(storage, isMulitpleReplica, range));

  React.useEffect(() => {
    setPrice(
      calculatePrice(storage, isMulitpleReplica, range)
    );
  }, [storage, isMulitpleReplica, range]);

  return (
    <Wrapper>
      <Flex style={{ marginBottom: '16px' }}>
        <h3>1. Select storage capacity</h3>
        <SelectableTiles options={storageOptions} name="cpu-count" selectedValue={storage} handleChange={e => setStorage(e.target.value)} />
      </Flex>  
      <Flex style={{ marginBottom: '16px' }}>
        <h3>2. Would you like to have one or multiple replicas?</h3>
        <SelectableTiles options={repliceOpions} name="multiple-replicas" selectedValue={isMulitpleReplica} handleChange={e => setMultipleReplica(e.target.value === 'true' ? true : false)} />
      </Flex>  
      <h3>3. How many records you will have at the maxiumum capacity?</h3>
      <RangeSelector range={range} handleChange={e => setRange(e.target.value)} max={100000} min={5000} step={100} points={recordPoints} />
      <Flex style={{ marginTop: '72px', alignItems: 'center' }}>
        <h2>
          Your price: 
          
        </h2>
        <FinalPrice>
          <CurrencySign>$</CurrencySign>
          {price}
          <Period>
            / month
          </Period>
        </FinalPrice>
      </Flex>
    </Wrapper>
  );
}

export default Calculator;