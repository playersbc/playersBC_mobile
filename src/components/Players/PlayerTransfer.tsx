import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { IPlayerStakeholder } from '../../interfaces';
import { Theme } from '../../theme';
import { PsgIcon } from '../Icons';
import { ArrowRight } from '../Icons/ArrowRight';
import { StatusIcon } from '../Icons/StatusIcon';
import { useEffect, useState } from 'react';
import { StakeHolderService } from '../../services';

type Props = {
  item: IPlayerStakeholder;
  onPress: () => void;
  index: number;
};

export function PlayerTransfer({ item, onPress, index }: Props) {
  const [player, setPlayer] = useState<IPlayerStakeholder>();

  useEffect(() => {
    StakeHolderService.getPlayerByOnChainId(item.onChainId)
      .then(({ data }) => setPlayer(data))
      .catch((err) => console.log(err));
  }, [item.address]);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.textTitle} children={index + 1} />
      <View style={styles.containerInfo}>
        <Image
          style={styles.playerImage}
          source={require('../../../assets/neymar.png')}
        />
        <View>
          <Text style={styles.hour} children={player?.name} />
          <View style={styles.playerInfo}>
            <Text style={styles.textTitle} children={'BR'} />
          </View>
        </View>
      </View>
      <View style={styles.clubs}>
        <View style={styles.club}>
          <PsgIcon size={30} />
          <Text style={styles.text} children={item.old_club} />
          <Text style={styles.hour} children={'PSG'} />
        </View>
      </View>
      <Text style={styles.textTitle} children={item.onChainId} />
      <StatusIcon status={item.status} />
      <ArrowRight />
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
    width: 35,
    height: 35,
    borderRadius: 99,
  },
  text: {
    color: '#525252',
    fontFamily: Theme.fontsFamily.display.regular,
  },
  hour: {
    fontFamily: Theme.fontsFamily.display.extraLight,
    fontSize: 12,
  },
  clubs: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 5,
  },
  club: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  textTitle: {
    color: '#525252',
    fontSize: 12,
    fontFamily: Theme.fontsFamily.display.regular,
  },
});
