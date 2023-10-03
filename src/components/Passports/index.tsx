import { Text, StyleSheet, ScrollView, TextInput, View } from 'react-native';
import { Passport } from './Passport';
import { IPassport } from '../../interfaces';
import { Theme } from '../../theme';

type Props = {
  navigate?: (link: string, params?: any) => void;
};

export function Passports({ navigate }: Props) {
  const data: IPassport[] = [
    {
      amateur: false,
      club: 'PSG',
      date: '12/13',
      year: '2022-23',
      definitiv: true,
      period: '01/01 to 03/06',
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginTop: 8,
        }}
      >
        <Text style={styles.text}>Clube</Text>
        <Text style={styles.text}>Ano/temp.</Text>
        <Text style={styles.text}>Período</Text>
        <Text style={styles.text}>Status</Text>
      </View>
      {data.map((item, index) => (
        <Passport key={index} item={item} index={index} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 30,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    marginBottom: 30,
    borderRadius: 20,
    marginTop: 8,
  },
  search: {
    marginBottom: 4,
    marginTop: 20,
    width: '100%',
    paddingVertical: 4,
    paddingHorizontal: 20,
    fontSize: 14,
    color: '#000',
    backgroundColor: '#EEF2F3',
    borderRadius: 8,
  },
  text: {
    fontSize: 14,
    color: '#525252',
    fontFamily: Theme.fontsFamily.display.medium,
  },
});
