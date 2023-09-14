import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import { BackIcon, Button } from '../components';
import { Theme } from '../theme';
import { useStepStore } from '../stores';
import { useState } from 'react';
import { useAuthContext } from '../contexts';

export function ApproveUserScreen({ navigation: { navigate } }) {
  const [isLoading, setIsLoading] = useState(false);
  const { dataUser } = useStepStore();
  const { signUp } = useAuthContext();

  async function onSubmit() {
    setIsLoading(true);
    delete dataUser.name;
    await signUp(dataUser);
    setIsLoading(false);
    await navigate('Players');
  }

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.subheader}>
          <TouchableOpacity onPress={() => navigate('AddUsers')}>
            <BackIcon fill="#525252" size={30} />
          </TouchableOpacity>
          <Text style={styles.subheaderText}>Aprovar cadastro de usuário</Text>
          <View />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Dados</Text>
          <View style={{ marginVertical: 20 }}>
            <Text style={styles.text} children={'Nome'} />
            <Text
              style={{ fontSize: 14, color: '#787878' }}
              children={dataUser.name}
            />
          </View>
          <View>
            <Text style={styles.text} children={'Email'} />
            <Text
              style={{ fontSize: 14, color: '#787878' }}
              children={dataUser.email}
            />
          </View>
        </View>
        <View style={styles.contentList}>
          <Text style={styles.title}>Stakeholder</Text>
          <Text style={styles.text}>Players B.C.</Text>
          <Button
            loading={isLoading}
            style={{ marginTop: 40 }}
            label="Aprovar"
            onPress={onSubmit}
          />
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
  textCheck: {
    fontSize: 15,
    fontFamily: Theme.fontsFamily.display.regular,
  },
  checkboxContainer: {
    paddingVertical: 20,
    marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  checkbox: {
    borderRadius: 50,
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.10)',
  },
});
