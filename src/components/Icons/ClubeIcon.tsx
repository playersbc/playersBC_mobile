import { Image } from 'react-native';

export function ClubeIcon({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <Image
      style={{ width, height }}
      source={require('../../../assets/baseLogo.png')}
    />
  );
}
