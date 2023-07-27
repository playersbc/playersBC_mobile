import { Text, StyleSheet, ScrollView } from 'react-native';
import { Player } from './Player';
import { IPlayer } from '../../interfaces';

export function Players() {
  const numberOfPlayers = 20;
  const players: IPlayer[] = [];

  for (let i = 0; i < numberOfPlayers; i++) {
    players.push({
      index: i,
      photo: '',
      name: 'Neymar',
      hour: '15h',
      date: '25/10',
      old_club: 'Santos',
      new_club: 'PSG',
      status: 'green',
    });
  }

  if (players.length < numberOfPlayers) return <Text>Loading...</Text>;

  return (
    <ScrollView style={styles.container}>
      {players.map((item) => (
        <Player key={item.index} item={item} />
      ))}
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
});
