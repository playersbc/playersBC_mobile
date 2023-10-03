import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../Form';
import { Title } from '../Title';
import { Theme } from '../../theme';
import { useState } from 'react';
import { Players } from '../Players';

export function StartBtns({ transfer, setTransfer, navigate, players }) {
  const [name, setName] = useState(true);

  return (
    <>
      {!transfer ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
          }}
        >
          <Button
            style={{ width: '70%' }}
            onPress={() => setTransfer('search')}
            label={'Iniciar transferência'}
          />
          <Button
            style={{ width: '70%' }}
            label={'Transferências solicitadas'}
            onPress={() => navigate('AllTransfers')}
          />
        </View>
      ) : (
        <>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
            <Title fontSize={18} children={'Pesquisar '} />
            <TouchableOpacity
              onPress={() => setName(true)}
              style={[
                styles.filter,
                { backgroundColor: name ? Theme.colors.primary : '#EEF2F3' },
              ]}
              children={
                <Text
                  children={'Nome'}
                  style={[
                    styles.textFilter,
                    { color: !name ? '#525252' : '#fff' },
                  ]}
                />
              }
            />
            <TouchableOpacity
              onPress={() => setName(false)}
              style={[
                styles.filter,
                { backgroundColor: !name ? Theme.colors.primary : '#EEF2F3' },
              ]}
              children={
                <Text
                  children={'ID'}
                  style={[
                    styles.textFilter,
                    { color: name ? '#525252' : '#fff' },
                  ]}
                />
              }
            />
          </View>
          <Players
            navigate={navigate}
            screen="transfer"
            link="Player"
            byName={name}
            players={players}
            searchShow
          />
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  filter: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFilter: {
    fontSize: 12,
    fontFamily: Theme.fontsFamily.display.medium,
  },
});
