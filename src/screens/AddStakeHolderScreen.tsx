import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  ScrollView
} from 'react-native';
import { BackIcon } from '../components';
import { Theme } from '../theme';
import { StepperStakeholder } from '../components/AddStakeholderSteps';
import { useStepStore } from '../stores';

export function AddStakeHolderScreen({ navigation: { navigate } }) {
  const { step, setStep } = useStepStore()

  async function stepBack() {
    if (step > 1) setStep(step - 1)
  }

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.subheader}>
          <TouchableOpacity onPress={stepBack}>
            <BackIcon fill='#525252' size={30} />
          </TouchableOpacity>
          <Text style={styles.subheaderText}>
            Adicionar Stakeholder
          </Text>
          <View />
        </View>
        <StepperStakeholder navigate={navigate} />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subheader: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: '#C1C1C1'
  },
  subheaderText: {
    fontSize: 18,
    fontFamily: Theme.fontsFamily.display.medium,
  },
  safeArea: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  logoContainer: {
    width: '100%',
    paddingVertical: 20,
  },
  content: {
    padding: 30,
  },
  background: {
    flex: 0.5,
    paddingHorizontal: 20,
    paddingBottom: '50%'
  },
});
