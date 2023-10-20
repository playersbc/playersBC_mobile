import { StyleSheet, Text, View } from 'react-native';
import { Theme } from '../../theme';
import type { IPlayerStakeholder, IStakeholder } from '../../interfaces';
import { PersonIcon } from '../Icons/PersonIcon';
import { StatusIcon } from '../Icons/StatusIcon';
import { AtackIcon } from '../Icons/AtackIcon';
import { ClubeIcon } from '../Icons/ClubeIcon';
import { useState, useEffect } from 'react';
import { StakeHolderService } from '../../services';

export function Details({ player }: { player: IPlayerStakeholder }) {
  const [baseOwner, setBaseOwner] = useState<IStakeholder>();

  useEffect(() => {
    async function getPlayer() {
      const { base_owner } = player;
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
  }, [player]);

  return (
    <View style={styles.content}>
      <View style={styles.left}>
        <View style={styles.card}>
          <Text style={styles.title}>Nome</Text>
          <View style={styles.descCard}>
            <PersonIcon />
            <Text style={styles.desc}>{player?.name}</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Time atual </Text>
          <View style={styles.descCard}>
            <ClubeIcon width={40} height={20} />
            <Text style={styles.desc}>{baseOwner?.name}</Text>
          </View>
        </View>
      </View>

      <View style={styles.right}>
        <View style={styles.card}>
          <Text style={styles.title}>Status</Text>
          <View style={styles.descCard}>
            <StatusIcon size={20} status={player?.status} />
            <Text style={styles.desc}>{player?.name}</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Posição</Text>
          <View style={styles.descCard}>
            <AtackIcon />
            <Text style={styles.desc}>Atacante</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    gap: 4,
    padding: 4,
  },
  left: {
    flexDirection: 'column',
    gap: 4,
    width: '60%',
  },
  right: {
    flexDirection: 'column',
    gap: 4,
    width: '40%',
  },
  title: {
    fontSize: 16,
    color: '#525252',
    fontFamily: Theme.fontsFamily.display.medium,
  },
  desc: {
    fontSize: 14,
    color: '#525252',
    fontFamily: Theme.fontsFamily.display.medium,
  },
  descCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  card: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    gap: 10,
    borderRadius: 5,
    padding: 10,
    paddingLeft: 10,
  },
});
