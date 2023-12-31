import { View, StyleSheet, FlatList, Text } from 'react-native';
import { useStepStore } from '../../stores';
import { Button } from '../Form';
import { Theme } from '../../theme';
import { StakeHolderService } from '../../services';
import { useState } from 'react';

export function Step5() {
  const { dataPlayer, setStep } = useStepStore();
  const [loading, setLoading] = useState(false);

  const primeiraPartePK = dataPlayer?.privateKey?.slice(0, 4);
  const ultimaPartePK = dataPlayer?.privateKey?.slice(-4);
  const privateKey = `${primeiraPartePK}...${ultimaPartePK}`;

  const primeiraParte = dataPlayer?.address?.slice(0, 4);
  const ultimaParte = dataPlayer?.address?.slice(-4);
  const address = `${primeiraParte}...${ultimaParte}`;

  async function onSubmit() {
    try {
      setLoading(true);
      console.log(dataPlayer)
      console.log("caiu");
      await StakeHolderService.addPlayer(dataPlayer);
      setLoading(false);
      setStep(6);
    } catch (error) {
      console.log("caiuError");
      setLoading(false);
      console.log(error);
    }
  }

  function Item({ item, index }) {
    return (
      <View key={index} style={styles.item}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.subText}>{item.info}</Text>
      </View>
    );
  }

  const data = [
    { title: 'Nome', info: dataPlayer?.name },
    { title: 'Pais', info: dataPlayer?.country },
    { title: 'Estado', info: dataPlayer?.state },
    { title: 'Email', info: dataPlayer?.email },
    { title: 'Ativo', info: dataPlayer?.active },
    { title: 'Status', info: dataPlayer?.status },
    { title: 'Telefone', info: dataPlayer?.phone },
    { title: 'Carteira', info: address },
    { title: 'Private-key', info: privateKey },
    { title: 'Foto', info: dataPlayer?.photo },
  ];

  return (
    <View style={styles.content}>
      <FlatList
        style={styles.card}
        columnWrapperStyle={{ gap: 50 }}
        contentContainerStyle={{ gap: 10 }}
        data={data}
        renderItem={Item}
        numColumns={3}
      />
      <Button
        loading={loading}
        disabled={loading}
        label="Confirmar"
        onPress={onSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'column',
    gap: 20,
  },
  text: {
    fontSize: 18,
    fontFamily: Theme.fontsFamily.display.medium,
    color: '#525252',
  },
  subText: {
    fontSize: 14,
    fontFamily: Theme.fontsFamily.display.regular,
    color: '#787878',
  },
  card: {
    flex: 1,
    backgroundColor: '#EEF2F3',
    borderRadius: 10,
    padding: 20,
  },
  item: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 5,
  },
});
