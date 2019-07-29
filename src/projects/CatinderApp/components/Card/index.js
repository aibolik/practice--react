import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';
import { useDrag, useGesture } from 'react-use-gesture';
import { useSpring, animated, interpolate } from 'react-spring';

import Credit from '../Credit';

const Wrapper = styled(animated.div)`
  position: relative;
  border-radius: 10px;
  display: flex;
  overflow: hidden;
  width: 60vh
  height: 85vh;
  background: white;
  background-size: cover;
  user-select: none;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, .5);

  position: absolute;

  z-index: ${props => -props.index};
`;

const Card = ({ imageUrl, author, authorUrl, index, submit }) => {

  const [props, set] = useSpring(() => ({
    x: 0,
    y: 0,
    rot: 0,
    opacity: 1,
    top: (index - 1) * 5,
    width: (index - 1) * 10,
    from: {
      top: index * 5,
      width: index * 10,
    },
    config: { friction: 200, tension: 500 },
  }));

  const bind = useDrag((props) => {
      const { direction: [xDir], delta: [xDelta], down, distance } = props;
      const dir = xDir < 0 ? -1 : 1;
      const trigger = dir * xDelta > 0;

      const isGone = trigger && !down;

      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;
      const rot = isGone ? 90 * Math.sign(dir) : down ? distance / 100 * Math.sign(xDelta) * 10 : 0;
      const opacity = isGone ? 0 : 1 - Math.abs(rot) / 90;

      set({
        x,
        rot,
        opacity,
        config: { friction: 50, tension: down ? 800 : 500 },
      });

      if (isGone) {
        setTimeout(submit, 150);
      }
    }
  );

  return (
    <Wrapper
      index={index}
      {...bind()}
      style={{
        transform: interpolate([props.x, props.rot], (x, r) => `
        translate3d(${x}px,0px,0)
        rotateZ(${r}deg)
        `),
        opacity: interpolate([props.opacity], o => `${o}`),
        backgroundImage: `url(${imageUrl})`,
        top: interpolate([props.top], top => `${top}px`),
        width: interpolate([props.width], w => `calc(60vh - ${w}px)`),
      }}>
      <Credit author={author} authorUrl={authorUrl} />
    </Wrapper>
  )
};

Card.propTypes = {
  imageUrl: T.string,
  author: T.string,
  authorUrl: T.string,
  index: T.number,
  submit: T.func,
};

export default Card;