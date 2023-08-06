import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Theme } from "../../theme";

type Props = {
  onPress: () => void
  isSelected: boolean
  children: React.ReactNode
}

export function CheckBox({ onPress, isSelected, children, ...props }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.checkboxContainer}
      {...props}
    >
      <View style={styles.checkbox}>
        <View
          style={{
            backgroundColor: isSelected
              ? Theme.colors.primary
              : 'transparent',
            height: 10,
            width: 10,
            borderRadius: 50,
          }}
        />
      </View>
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textCheck: {
    fontSize: 15,
    fontFamily: Theme.fontsFamily.display.regular,
  },
  checkboxContainer: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  checkbox: {
    borderRadius: 50,
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.10)',
  },
});
