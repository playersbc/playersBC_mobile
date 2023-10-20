import { Image } from 'react-native';

export function FGVIcon({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <Image
      style={{ width, height }}
      source={require('../../../assets/fgvLogo.png')}
    />
  );
}
