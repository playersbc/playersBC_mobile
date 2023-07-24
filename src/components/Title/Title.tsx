import { StyleSheet, Text } from 'react-native';
import { Theme } from '../../theme';

type Props = {
  children: string;
  color?: string;
};

export function Title({ children, color = '#525252' }: Props) {
  return <Text style={{ ...styles.title, color }}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: Theme.fontsFamily.display.bold,
    fontSize: 22,
    paddingVertical: 10,
  },
});
