import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export function ExitIcon(props) {
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
        d="M1.875 6h8.25M6.75 2.625L10.125 6 6.75 9.375"
        stroke="#E21111"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
