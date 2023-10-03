import Svg, { Path } from 'react-native-svg';

export function ArrowRight() {
  return (
    <Svg width={20} height={21} viewBox="0 0 20 21" fill="none">
      <Path
        d="M7.5 4.25l6.25 6.25-6.25 6.25"
        stroke="#525252"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
