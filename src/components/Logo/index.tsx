import { Image } from 'react-native';

export function Logo() {
  return (
    <Image
      source={require('../../../assets/Logo.png')}
      style={{ position: 'absolute', zIndex: 50, top: 120, left: 40 }}
    />
  );
}
