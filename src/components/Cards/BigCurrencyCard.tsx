import { View, StyleSheet, Text } from 'react-native';
import { NumberHelper } from '../../helpers';
import { Theme } from '../../theme';

type Props = {
  label: string;
  value: number;
};

export function BigCurrencyCard({ label, value }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{NumberHelper.toBRL(value)}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderTopWidth: 4,
    borderTopColor: Theme.colors.primary,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    marginBottom: 15,
  },
  value: {
    fontFamily: Theme.fontsFamily.display.bold,
    fontSize: 28,
  },
  label: {
    fontFamily: Theme.fontsFamily.display.medium,
    fontSize: 14,
  },
});
