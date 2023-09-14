import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Title } from '../components';
import { AddIcon } from '../components/Icons';
import { Players } from '../components/Players';
import { useEffect, useState } from 'react';
import { StakeHolderService } from '../services';

export function StakeholdersScreen({ navigation: { navigate } }) {
  const [stakeholders, setStakeholders] = useState([]);

  useEffect(() => {
    StakeHolderService.getAllStakeholders()
      .then(({ data }) => setStakeholders(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Title fontSize={18} children={'Stakeholders'} />
          <TouchableOpacity
            children={<AddIcon />}
            onPress={() => navigate('AddStakeHolder')}
          />
        </View>
        <ScrollView style={styles.content}>
          <Players searchShow players={stakeholders} screen="stakeholders" />
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
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#C1C1C1',
    borderBottomWidth: 0.5,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
});
