import { View } from "react-native";

export function Step({ step, index }: { step: number, index: number }) {
  const active = step >= index
  return (
    <View style={{ backgroundColor: active ? "#0B7E4D" : "#EEF2F3", height: 10, width: 24, borderRadius: 18 }} />
  )
}
