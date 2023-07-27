import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export function JoinIcon(props) {
  return (
    <Svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.125 6h-8.25M5.25 2.625L1.875 6 5.25 9.375"
        stroke="#0EDA82"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
