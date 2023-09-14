import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import { BackIcon, Button, TrashIcon } from '../components';
import { Theme } from '../theme';
import { useEffect, useState } from 'react';
import { StakeHolderService } from '../services';
import { IPlayerStakeholder } from '../interfaces';

export function UserScreen({ navigation: { navigate }, route }) {
  const [_id] = useState(route.params._id);
  const [user, setUser] = useState<IPlayerStakeholder>();

  useEffect(() => {
    StakeHolderService.getPlayerByOnChainId(_id?.toString())
      .then(({ data }) => setUser(data))
      .catch((err) => console.log(err));
  }, [_id]);

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.subheader}>
          <TouchableOpacity onPress={() => navigate('Players')}>
            <BackIcon fill="#525252" size={30} />
          </TouchableOpacity>
          <Text style={styles.subheaderText}>Detalhes de usuário</Text>
          <View />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Dados</Text>
          <View style={{ marginVertical: 20 }}>
            <Text style={styles.text} children={'Nome'} />
            <Text
              style={{ fontSize: 14, color: '#787878' }}
              children={user?.name}
            />
          </View>
          <View>
            <Text style={styles.text} children={'Email'} />
            <Text
              style={{ fontSize: 14, color: '#787878' }}
              children={user?.email}
            />
          </View>
          <Image
            style={styles.image}
            src="https://tntsports.com.br/__export/1584729308991/sites/esporteinterativo/img/2020/03/20/gettyimages-1158969134_widelg.jpg_423682103.jpg"
          />
        </View>
        <View style={styles.contentList}>
          <Text style={styles.title}>Stakeholders Cadastrados</Text>
          <View style={styles.stakeholder}>
            <Text style={styles.text}>Players B.C.</Text>
            <TouchableOpacity>
              <TrashIcon />
            </TouchableOpacity>
          </View>
          <Button style={{ marginTop: 40 }} label="Aprovar" />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subheader: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  subheaderText: {
    fontSize: 16,
    fontFamily: Theme.fontsFamily.display.medium,
    color: '#000',
  },
  safeArea: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderColor: '#C1C1C1',
  },
  contentList: {
    padding: 20,
    flexDirection: 'column',
    gap: 20,
  },
  text: {
    fontSize: 14,
    fontFamily: Theme.fontsFamily.display.medium,
    color: '#525252',
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontFamily: Theme.fontsFamily.display.medium,
    color: '#525252',
  },
  image: {
    position: 'absolute',
    right: 20,
    top: 20,
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  stakeholder: {
    height: 40,
    backgroundColor: '#EEF2F3',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});
