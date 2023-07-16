import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Theme } from '../../theme';

type Props = {
  name: string;
  email: string;
  cellphone: string;
  onPress?: VoidFunction;
};

export function CustomerCard({ name, email, cellphone, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.userName}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.cellphone}>{cellphone}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  userName: {
    fontFamily: Theme.fontsFamily.display.medium,
    fontSize: 16,
    color: '#000',
  },
  email: {
    fontFamily: Theme.fontsFamily.display.regular,
    fontSize: 14,
    color: '#000',
  },
  cellphone: {
    fontFamily: Theme.fontsFamily.display.regular,
    fontSize: 14,
    color: '#000',
  },
});
