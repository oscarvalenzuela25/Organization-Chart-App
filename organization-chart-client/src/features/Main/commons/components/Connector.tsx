import { FC } from 'react';
import { ConnectorProps } from '../types/position';

const Connector: FC<ConnectorProps> = ({ start, end }) => {
  return (
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
      }}
    >
      <line
        x1={start.x}
        y1={start.y}
        x2={end.x}
        y2={end.y}
        stroke="black"
        strokeWidth="1"
      />
    </svg>
  );
};

export default Connector;
