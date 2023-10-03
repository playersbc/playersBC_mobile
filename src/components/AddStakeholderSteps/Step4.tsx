import { View, StyleSheet, FlatList, Text } from "react-native";
import { useStepStore } from "../../stores";
import { Button } from "../Form";
import { Theme } from "../../theme";
import { StakeHolderService } from "../../services";
import { useState } from "react";

export function Item({ item, index }) {
  return (
    <View key={index} style={styles.item}>
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.subText}>{item.info}</Text>
    </View>
  )
}

export function Step4() {
  const { dataStakeholder: values, setStep } = useStepStore()
  const [loading, setLoading]= useState(false)

  const primeiraPartePK = values.privateKey.slice(0, 4);
  const ultimaPartePK = values.privateKey.slice(-4);
  const privateKey = `${primeiraPartePK}...${ultimaPartePK}`

  const primeiraParte = values.address.slice(0, 4);
  const ultimaParte = values.address.slice(-4);
  const address = `${primeiraParte}...${ultimaParte}`

  async function onSubmit() {
    try {
      setLoading(true)
      await StakeHolderService.addStakeHolder(values)
      setLoading(false)
      setStep(5)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const data = [
    { title: 'Tipo', info: values.shareholderType },
    { title: 'Nome', info: values.name },
    { title: 'Pais', info: values.country },
    { title: 'Estado', info: values.state },
    { title: 'Email', info: values.email },
    { title: 'Ativo', info: values.active },
    { title: 'Status', info: values.status },
    { title: 'Telefone', info: values.phone },
    { title: 'Carteira', info: address },
    { title: 'Private-key', info: privateKey },
    { title: 'Foto', info: values.photo },
  ]

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
      <Button loading={loading} disabled={loading} label="Confirmar" onPress={onSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'column',
    gap: 20
  },
  text: {
    fontSize: 18,
    fontFamily: Theme.fontsFamily.display.medium,
    color: "#525252",
  },
  subText: {
    fontSize: 14,
    fontFamily: Theme.fontsFamily.display.regular,
    color: "#787878",
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
  }
});