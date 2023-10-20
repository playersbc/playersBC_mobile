import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Theme } from '../../theme';
import { useEffect, useState } from 'react';
import { StakeHolderService, TransferService } from '../../services';
import { useAuthContext } from '../../contexts';

function Item({ item, index }) {
  return (
    <View key={index} style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.number}>{item.number}</Text>
    </View>
  );
}

export function Sumario({ navigate }) {
  const [transfersLength, setTransfersLength] = useState<number>();
  const [balance, setBalance] = useState<number>();
  const { user } = useAuthContext();

  useEffect(() => {
    StakeHolderService.getStakeholderBalance(user.id)
      .then(({ data }) => setBalance(data))
      .catch((e) => console.log(e));
    TransferService.getTransfers()
      .then(({ data }) => setTransfersLength(data.length))
      .catch((e) => console.log(e));
  }, []);

  const data = [
    {
      title: 'Jogadores',
      number: 1000,
    },
    {
      title: 'Transferências',
      number: 1000,
    },
  ];

  const dataFederal = [
    {
      title: 'Fed. Nac.',
      number: 0,
    },
    {
      title: 'Agentes',
      number: 0,
    },
    {
      title: 'Jogadores',
      number: 1000,
    },
    {
      title: 'Clubes',
      number: 2,
    },
  ];

  if (user.shareholderType === 'federal') {
    return (
      <View style={styles.container}>
        <FlatList
          columnWrapperStyle={{ gap: 10 }}
          contentContainerStyle={{ gap: 10, padding: 14 }}
          data={dataFederal}
          renderItem={Item}
          numColumns={2}
        />
        <TouchableOpacity
          onPress={() => navigate('AllTransfers')}
          style={styles.item}
        >
          <Text style={styles.title}>Transferências:</Text>
          <Text style={styles.number}>{transfersLength}</Text>
        </TouchableOpacity>
        <View style={styles.lastItem}>
          <Text style={styles.title}>Balance:</Text>
          <Text style={styles.number}>${balance?.toFixed(4)}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        columnWrapperStyle={{ gap: 10 }}
        contentContainerStyle={{ gap: 10, padding: 14 }}
        data={data}
        renderItem={Item}
        numColumns={2}
      />
      <View style={styles.lastItem}>
        <Text style={styles.title}>Balance:</Text>
        <Text style={styles.number}>${balance?.toFixed(4)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
    elevation: 1,
    backgroundColor: '#fff',
    height: 150,
    borderRadius: 8,
    shadowColor: '#222',
    shadowOffset: { height: 3, width: 2 },
    shadowOpacity: 1,
  },
  lastItem: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 20,
    elevation: 1,
    backgroundColor: '#fff',
    height: 150,
    borderRadius: 8,
    shadowColor: '#222',
    shadowOffset: { height: 3, width: 2 },
    shadowOpacity: 1,
  },
});
