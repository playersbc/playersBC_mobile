import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { Theme } from '../../theme';
import { Title } from '../Title';

export function PlayerInfo({ player, passport, setPassport }) {
  return (
    <View style={styles.content}>
      <Image
        style={styles.playerImage}
        source={require('../../../assets/neymar.png')}
      />
      <View style={{ flexDirection: 'column', gap: 4, marginTop: -20 }}>
        <Title fontSize={18} children={player?.name} />
        <View style={{ flexDirection: 'row', gap: 4, marginTop: -10 }}>
          <Text children={player?.nationality} />
          <Text children={'|'} />
          <Text children={`ID: ${player?.onChainId}`} />
        </View>
        <Text children={`Nasc: ${player?.birth_date}`} />
        <Text children={`Altura: 1,75 m`} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%',
          position: 'absolute',
          bottom: 10,
          paddingLeft: 40,
          gap: 80,
        }}
      >
        <TouchableOpacity
          onPress={() => setPassport(false)}
          style={{
            flexDirection: 'column',
            gap: 4,
          }}
        >
          <Text
            style={[
              styles.text,
              {
                color: passport ? '#525252' : Theme.colors.primary,
              },
            ]}
          >
            Visão Geral
          </Text>
          {!passport && <View style={styles.underline} />}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setPassport(true)}
          style={{
            flexDirection: 'column',
            gap: 4,
          }}
        >
          <Text
            style={[
              styles.text,
              {
                color: !passport ? '#525252' : Theme.colors.primary,
              },
            ]}
          >
            Passaporte
          </Text>
          {passport && <View style={styles.underline} />}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: -20,
    zIndex: -1,
    height: 215,
    gap: 10,
    position: 'relative',
    paddingHorizontal: 20,
    paddingTop: 60,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  playerImage: {
    width: 90,
    height: 90,
    borderRadius: 99,
  },
  text: {
    fontSize: 14,
    fontFamily: Theme.fontsFamily.display.medium,
  },
  underline: {
    width: '100%',
    height: 4,
    backgroundColor: Theme.colors.primary,
    borderRadius: 50,
  },
});
