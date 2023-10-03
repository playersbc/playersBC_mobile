import { StyleSheet, Text, View } from 'react-native';
import { Theme } from '../../theme';
import type { ITransfer } from '../../interfaces';
import { PersonIcon } from '../Icons/PersonIcon';
import { PsgIcon } from '../Icons';
import { StatusIcon } from '../Icons/StatusIcon';
import { AtackIcon } from '../Icons/AtackIcon';
import { IDIcon } from '../Icons/IDIcon';

export function Details({ transfer }: { transfer: ITransfer }) {
  console.log(transfer)
  return (
    <View style={styles.content}>
      <View style={styles.cards}>
        <View style={styles.left}>
          <View style={styles.card}>
            <Text style={styles.title}>Clube solicitante</Text>
            <View style={styles.descCard}>
              <PersonIcon />
              <Text style={styles.desc}>{transfer?.name}</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.title}>Transferência</Text>
            <View style={styles.descCard}>
              <Text style={styles.desc}>Definitiva</Text>
            </View>
          </View>
        </View>

        <View style={styles.right}>
          <View style={styles.card}>
            <Text style={styles.title}>ID</Text>
            <View style={styles.descCard}>
              <IDIcon />
              <Text style={styles.desc}>{transfer?.onChainId}</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.title}>Data</Text>
            <Text style={styles.desc}>01/07/2023</Text>
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Valor</Text>
        <Text style={styles.desc}>R$ 20000.000,00</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Contrato anexado</Text>
        <Text style={styles.desc}>xxxx_xxxxx.pdf</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    gap: 8,
  },
  cards: {
    flexDirection: 'row',
    gap: 8,
  },
  left: {
    flexDirection: 'column',
    gap: 4,
    width: '50%',
  },
  right: {
    flexDirection: 'column',
    gap: 4,
    width: '50%',
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
