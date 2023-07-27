import { TouchableOpacity } from 'react-native-gesture-handler';
import { HomeEnum } from '../../interfaces';
import { useHomeStore } from '../../stores';
import { StyleSheet, Text, View } from 'react-native';
import { Theme } from '../../theme';

type Props = {
  label: string;
  active: boolean;
  onPress: () => void;
};

export function ButtonGroup() {
  const { homeState, setHomeState } = useHomeStore();

  const Button = ({ label, active, onPress }: Props) => {
    const style = active ? styles.textActive : styles.text;
    return (
      <TouchableOpacity style={{ alignItems: 'center' }} onPress={onPress}>
        <Text onPress={onPress} style={style}>
          {label}
        </Text>
        {active && <View style={styles.underline} />}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {Object.keys(HomeEnum).map((key, index) => {
        const keyof = key as keyof typeof HomeEnum;
        return (
          <Button
            key={index}
            label={keyof}
            active={homeState === HomeEnum[keyof]}
            onPress={() => setHomeState(HomeEnum[keyof])}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    textAlign: 'center',
    fontFamily: Theme.fontsFamily.display.medium,
    fontSize: 12,
    color: '#C1C1C1',
  },
  textActive: {
    textAlign: 'center',
    fontFamily: Theme.fontsFamily.display.medium,
    fontSize: 12,
    color: '#525252',
  },
  underline: {
    height: 3,
    marginTop: 6,
    backgroundColor: Theme.colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '70%',
  },
});
