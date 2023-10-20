import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import type { IPassport } from '../../interfaces';
import { Theme } from '../../theme';
import { ClubeIcon } from '../Icons/ClubeIcon';

type Props = {
  item: IPassport;
  onPress?: () => void;
  index: number;
};
export function Passport({ item, onPress, index }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text
        style={{
          color: '#525252',
          width: 20,
          fontFamily: Theme.fontsFamily.display.regular,
        }}
        children={index + 1}
      />
      <View style={styles.containerInfo}>
        <ClubeIcon width={40} height={40} />
        <Text style={styles.text} children={"base1"} />
      </View>
      <View style={styles.year}>
        <Text style={styles.text}>{item.year}</Text>
        <Text style={styles.text}>{item.date}</Text>
      </View>
      <View style={styles.year}>
        <Text style={styles.text}>{item.period}</Text>
        <Text style={styles.text}>
          {item.definitiv ? 'Definitivo' : 'Periodo'}
        </Text>
      </View>
      <View style={styles.year}>
        <Text style={styles.text}>
          {item.amateur ? 'Amador' : 'Profissional'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  point: {
    height: 4,
    width: 4,
    borderRadius: 99,
    backgroundColor: '#000',
  },
  containerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  playerInfo: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  playerImage: {
    width: 30,
    height: 30,
    borderRadius: 99,
  },
  text: {
    color: '#525252',
    fontFamily: Theme.fontsFamily.display.regular,
  },
  year: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});
