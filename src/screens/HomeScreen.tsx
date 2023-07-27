import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Title } from '../components';
import React, { useEffect } from 'react';
import { Lupa, LogoBrasil } from '../components/Icons';
import { ButtonGroup } from '../components/ButtonGroup';
import { SectionsHome } from '../components/SectionsHome';
import { useAuthContext } from '../contexts';

export function MenuScreen({ navigation: { navigate } }) {
  const { stakeHolder } = useAuthContext();

  useEffect(() => {
    if (!stakeHolder) {
      navigate('LoginStakeHolder');
    }
  }, [stakeHolder]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.content}>
          <View style={styles.header}>
            <Title fontSize={18} children={'Conf. Brasileira de Futebol'} />
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
            >
              <TouchableOpacity children={<Lupa />} />
              <LogoBrasil />
            </View>
          </View>
          <ButtonGroup />
          <SectionsHome />
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
  },
  content: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
