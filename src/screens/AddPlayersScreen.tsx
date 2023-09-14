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
import { useStepStore } from '../stores';
import { useEffect } from 'react';
import { DisplaySteps } from '../components/DisplaySteps';
import { StepperPlayer } from '../components/AddPlayerSteps';

export function AddPlayersScreen({ navigation: { navigate } }) {
  const { step, setStep } = useStepStore()

  async function stepBack() {
    if (step > 1) setStep(step - 1)
  }

  useEffect(() => {
    setStep(1)
  }, [])

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.subheader}>
          <View style={{ flexDirection: "row", gap: 12 }}>
            <TouchableOpacity onPress={stepBack}>
              <BackIcon size={24} />
            </TouchableOpacity>
            <Text style={styles.subheaderText}>
              Adicionar Player
            </Text>
          </View>
          <DisplaySteps />
        </View>
        <StepperPlayer navigate={navigate} />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  subheader: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    backgroundColor: Theme.colors.primary,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  },
  subheaderText: {
    fontSize: 16,
    fontFamily: Theme.fontsFamily.display.medium,
    color: "#fff"
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
