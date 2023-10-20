import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Title } from '../components';
import React, { useEffect, useState } from 'react';
import { Lupa } from '../components/Icons';
import { ButtonGroup } from '../components/ButtonGroup';
import { SectionsHome } from '../components/SectionsHome';
import { useAuthContext } from '../contexts';
import { FGVIcon } from '../components/Icons/FGVIcon';

export function MenuScreen({ navigation: { navigate } }) {
  const { stakeHolder } = useAuthContext();
  const [showSearch, setShowSearch] = useState(false);

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
            <Title fontSize={18} children={'Fund. Getúlio Vargas'} />
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
            >
              <TouchableOpacity
                children={<Lupa />}
                onPress={() => setShowSearch(!showSearch)}
              />
              <FGVIcon width={70} height={50} />
            </View>
          </View>
          <ButtonGroup />
          <SectionsHome showSearch={showSearch} navigate={navigate} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
