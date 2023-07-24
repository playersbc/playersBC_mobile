import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function MenuIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={16}
      viewBox="0 0 20 16"
      fill="none"
      {...props}
    >
      <Path
        d="M0 1a1 1 0 011-1h13a1 1 0 110 2H1a1 1 0 01-1-1zm19 6H1a1 1 0 100 2h18a1 1 0 100-2zm-9 7H1a1 1 0 100 2h9a1 1 0 100-2z"
        fill="#fff"
      />
    </Svg>
  );
}

export default MenuIcon;
