import { StyleSheet, Text } from 'react-native';
import { Theme } from '../../theme';

type Props = {
  children: string;
  color?: string;
  fontSize?: number;
};

export function Title({ children, color = '#525252', fontSize = 22 }: Props) {
  return <Text style={{ ...styles.title, color, fontSize }}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: Theme.fontsFamily.display.bold,
    paddingVertical: 10,
  },
});
