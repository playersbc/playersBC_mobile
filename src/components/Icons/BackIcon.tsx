import Svg, { Path } from 'react-native-svg';

export function BackIcon({ fill = '#fff', size = 24 }: { fill?: string, size?: number }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
    >
      <Path
        d="M21.5 12a.75.75 0 01-.75.75H4.56l5.721 5.72a.75.75 0 01-1.06 1.061l-7-7a.75.75 0 010-1.061l7-7a.75.75 0 111.06 1.061l-5.719 5.72H20.75a.749.749 0 01.75.749z"
        fill={fill}
      />
    </Svg>
  );
}
