import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { Theme } from '../../theme';

type Props = {
  label: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  loading?: boolean
};

export function Button({ label, onPress, disabled = false, loading, style }: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: !disabled ? Theme.colors.primary : '#C1C1C1' },
        style,
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.text}>{loading ? "Carregando..." : label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    fontFamily: Theme.fontsFamily.display.bold,
    fontSize: 16,
    color: '#fff',
  },
});
