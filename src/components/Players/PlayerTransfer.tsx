import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { IPlayerStakeholder, IStakeholder } from '../../interfaces';
import { Theme } from '../../theme';
import { ArrowRight } from '../Icons/ArrowRight';
import { StatusIcon } from '../Icons/StatusIcon';
import { useEffect, useState } from 'react';
import { StakeHolderService } from '../../services';
import { ClubeIcon } from '../Icons/ClubeIcon';

type Props = {
  item: IPlayerStakeholder;
  onPress: () => void;
  index: number;
};

export function PlayerTransfer({ item, onPress, index }: Props) {
  const [baseOwner, setBaseOwner] = useState<IStakeholder>();
  const { onChainId, name, base_owner, status } = item;

  useEffect(() => {
    async function getPlayer() {
      const { getStakeholderByAddress } = StakeHolderService;
      try {
        const { data } = await getStakeholderByAddress(base_owner);
        setBaseOwner(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getPlayer();
  }, [item]);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.textTitle} children={index + 1} />
      <View style={styles.containerInfo}>
        <Image
          style={styles.playerImage}
          source={require('../../../assets/jogador.png')}
        />
        <View>
          <Text style={styles.hour} children={name!} />
          <View style={styles.playerInfo}>
            <Text style={styles.textTitle} children={item?.name} />
            <Text style={styles.textTitle} children={'BR'} />
          </View>
        </View>
      </View>
      <View style={styles.clubs}>
        <View style={styles.club}>
          <ClubeIcon width={40} height={40} />
          <Text style={styles.hour} children={baseOwner?.name} />
        </View>
      </View>
      <Text style={styles.textTitle} children={onChainId!} />
      <StatusIcon status={status!} />
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
