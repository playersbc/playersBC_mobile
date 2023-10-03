import { Text, StyleSheet, ScrollView, TextInput, View } from 'react-native';
import { Player } from './Player';
import { IPlayerStakeholder, ITransfer } from '../../interfaces';
import { useEffect, useState } from 'react';
import { LupaFull } from '../Icons';
import { PlayerTransfer } from './PlayerTransfer';

type Props = {
  screen?: string;
  searchShow?: boolean;
  players: IPlayerStakeholder[] | ITransfer[];
  navigate?: (link: string, params?: any) => void;
  byName?: boolean;
  link?: string;
};

export function Players({
  screen,
  searchShow,
  players,
  navigate,
  link,
  byName = true,
}: Props) {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState(players);

  const searchFilterFunction = (text: string) => {
    if (text) {
      const newData: any = players.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const itemDataById = item.onChainId;
        const textData = text.toUpperCase();
        return itemData.indexOf(byName ? textData : itemDataById) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(players);
      setSearch(text);
    }
  };

  useEffect(() => {
    searchFilterFunction(undefined);
  }, [players]);

  return (
    <ScrollView style={styles.container}>
      {searchShow && (
        <View style={{ position: 'relative' }}>
          <TextInput
            onChangeText={(e) => searchFilterFunction(e)}
            value={search}
            placeholder="Pesquisar..."
            style={styles.search}
          />
          <LupaFull style={{ position: 'absolute', right: 6, top: 25 }} />
        </View>
      )}
      {filteredDataSource.length === 0 ? (
        <Text style={{ marginTop: 10 }}>Nenhum resultado!</Text>
      ) : (
        <>
          {filteredDataSource.map((item, index) =>
            screen === 'transfer' ? (
              <PlayerTransfer
                key={index}
                item={item}
                index={index}
                onPress={() => navigate(link, { _id: item.onChainId })}
              />
            ) : (
              <Player
                key={index}
                item={item}
                index={index}
                screen={screen}
                onPress={() => navigate(`User`, { _id: item.onChainId })}
              />
            )
          )}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 30,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  search: {
    marginBottom: 4,
    marginTop: 20,
    width: '100%',
    paddingVertical: 4,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#EEF2F3',
    borderRadius: 8,
  },
});
