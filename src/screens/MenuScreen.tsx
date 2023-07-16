import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';

import { BackIcon, Button, Header, IconButton, Title } from '../components';
import { useAuthContext } from '../contexts';

type Props = {
  navigation: any;
};

export function MenuScreen({ navigation }: Props) {
  const { logout } = useAuthContext();
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.content}>
          <Header
            left={
              <IconButton onPress={() => navigation.goBack()}>
                <BackIcon height={18} />
              </IconButton>
            }
          />
          <Title>Configurações</Title>
          <Button label="Sair" onPress={logout} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
});
