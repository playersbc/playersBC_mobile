import { GestureResponderEvent } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
  onPress?: (event: GestureResponderEvent) => void;
};

export function UserIcon({
  width = 29,
  height = 29,
  fill = '#fff',
  onPress,
}: Props) {
  return (
    <Svg
      onPress={onPress}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M7 7.5c0-2.757 2.243-5 5-5 2.758 0 5 2.243 5 5s-2.242 5-5 5c-2.757 0-5-2.243-5-5zm9.117 6.07a2.3 2.3 0 00-1.67.219 5.046 5.046 0 01-4.894 0 2.315 2.315 0 00-1.67-.218c-1.992.503-3.383 2.31-3.383 4.396v1.01c0 .639.17 1.262.493 1.806.263.442.756.717 1.285.717h11.443c.53 0 1.023-.273 1.285-.718a3.53 3.53 0 00.494-1.805v-1.01c0-2.085-1.39-3.893-3.383-4.396z"
        fill={fill}
      />
    </Svg>
  );
}
