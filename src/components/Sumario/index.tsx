import { View, Text, StyleSheet, FlatList } from 'react-native';
import { data } from './data';
import { Theme } from '../../theme';

function Item({ item, index }) {
  return (
    <View key={index} style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.number}>{item.number}</Text>
    </View>
  );
}

export function Sumario() {
  return (
    <View style={styles.container}>
      <FlatList
        columnWrapperStyle={{ gap: 10 }}
        contentContainerStyle={{ gap: 10, padding: 14 }}
        data={data}
        renderItem={Item}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    color: '#525252',
    fontSize: 14,
    fontFamily: Theme.fontsFamily.display.regular,
  },
  number: {
    color: Theme.colors.primary,
    fontSize: 24,
    fontFamily: Theme.fontsFamily.display.regular,
  },
  item: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 20,
    elevation: 2,
    backgroundColor: '#fff',
    height: 150,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { height: 3, width: 2 },
    shadowOpacity: 1,
  },
});
