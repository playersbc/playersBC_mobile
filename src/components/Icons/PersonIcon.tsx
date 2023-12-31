import Svg, { Path } from 'react-native-svg';

export function PersonIcon() {
  return (
    <Svg width={8} height={17} viewBox="0 0 8 17" fill="none">
      <Path
        d="M5.125 16.875h-2.25A1.125 1.125 0 011.75 15.75v-3.938a1.125 1.125 0 01-1.125-1.124V7.312a1.687 1.687 0 011.688-1.687h3.374a1.687 1.687 0 011.688 1.688v3.375a1.125 1.125 0 01-1.125 1.124v3.938a1.125 1.125 0 01-1.125 1.125zM2.312 6.75a.529.529 0 00-.562.563v3.375h1.125v5.062h2.25v-5.063H6.25V7.313a.529.529 0 00-.563-.563H2.313zM4 5.062a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zm0-3.375a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
        fill="#000"
      />
    </Svg>
  );
}
