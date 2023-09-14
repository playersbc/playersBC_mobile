import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { IPlayerStakeholder } from '../../interfaces';
import { Theme } from '../../theme';
import { PsgIcon, SantosIcon } from '../Icons';
import { ExitIcon } from '../Icons/ExitIcon';
import { JoinIcon } from '../Icons/JoinIcon';
import { StatusIcon } from '../Icons/StatusIcon';

type Props = {
  item: IPlayerStakeholder;
  screen: string;
  onPress: () => void;
  index: number;
};
export function Player({ item, screen = 'home', onPress, index }: Props) {
  const isPlayersScreen = screen === 'players';
  const isHomeScreen = screen === 'home';
  const isStakeholdersScreen = screen === 'stakeholders';
  const primeiraParte = item.address.slice(0, 4);
  const ultimaParte = item.address.slice(-4);
  const address = `${primeiraParte}...${ultimaParte}`;

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
      {isHomeScreen ? (
        <>
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
        </>
      ) : isPlayersScreen ? (
        <>
          <Text style={styles.email} children={item.email} />
          <Text style={styles.text} children={item.onChainId} />
        </>
      ) : isStakeholdersScreen ? (
        <>
          <Text style={styles.text} children={item.shareholderType} />
          <Text style={styles.text} children={address} />
        </>
      ) : null}
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
  email: {
    fontFamily: Theme.fontsFamily.display.extraLight,
    color: '#525252',
    fontSize: 12,
  },
});
