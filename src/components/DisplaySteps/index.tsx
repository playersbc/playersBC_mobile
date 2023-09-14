import { StyleSheet } from "react-native";
import { View } from "react-native";
import { useStepStore } from "../../stores";
import { Step } from "./Step";

export function DisplaySteps() {
  const { step } = useStepStore()
  return (
    <View style={styles.content}>
      <Step index={1} step={step} />
      <Step index={2} step={step} />
      <Step index={3} step={step} />
      <Step index={4} step={step} />
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: "flex-end",
    justifyContent: "flex-end",
    gap: 6
  },
});