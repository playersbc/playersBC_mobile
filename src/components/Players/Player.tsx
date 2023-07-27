import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { IPlayer } from '../../interfaces';
import { Theme } from '../../theme';
import { PsgIcon, SantosIcon } from '../Icons';
import { ExitIcon } from '../Icons/ExitIcon';
import { JoinIcon } from '../Icons/JoinIcon';
import { StatusIcon } from '../Icons/StatusIcon';

export function Player({ item }: { item: IPlayer }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text} children={item.index} />
      <View style={styles.containerInfo}>
        <Image
          style={styles.playerImage}
          source={require('../../../assets/neymar.png')}
        />
        <View>
          <Text style={styles.text} children={item.name} />
          <View style={styles.playerInfo}>
            <Text style={styles.hour} children={item.hour} />
            <View style={styles.point} />
            <Text style={styles.hour} children={item.date} />
          </View>
        </View>
      </View>
      <View style={styles.clubs}>
        <View style={styles.club}>
          <SantosIcon width={25} height={25} />
          <Text style={styles.text} children={item.old_club} />
          <ExitIcon />
        </View>
        <View style={styles.club}>
          <PsgIcon width={25} height={25} />
          <Text style={styles.text} children={item.new_club} />
          <JoinIcon />
        </View>
      </View>
      <StatusIcon status={item.status} />
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
    fontFamily: Theme.fontsFamily.display.medium,
  },
  hour: {
    fontFamily: Theme.fontsFamily.display.extraLight,
    fontSize: 10,
  },
  clubs: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 5,
  },
  club: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
