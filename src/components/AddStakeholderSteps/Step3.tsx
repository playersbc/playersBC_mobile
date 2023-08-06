import { Controller, useForm } from "react-hook-form";
import { View, Text, StyleSheet } from "react-native";
import { IStakeholderStep3 } from "../../interfaces";
import { useStepStore } from "../../stores";
import { Button, TextInput } from "../Form";
import { Theme } from "../../theme";
import { Stakeholder3Resolver } from "../../validations";

export function Step3() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IStakeholderStep3>({ resolver: Stakeholder3Resolver });
  const { dataStakeholder, setDataStakeholder, setStep } = useStepStore()

  async function onSubmit(values: IStakeholderStep3) {
    dataStakeholder.phone = values.phone
    dataStakeholder.photo = values.photo
    dataStakeholder.privateKey = values.privateKey
    setDataStakeholder(dataStakeholder)
    setStep(4)
  }

  return (
    <View style={styles.content}>
      <View style={{ gap: 4 }}>
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Telefone'} />
              <TextInput
                placeholder="Digite seu telefone"
                autoCapitalize="none"
                onChangeText={onChange}
                errors={errors}
                {...field}
              />
            </>
          )}
        />
        <Controller
          control={control}
          name="privateKey"
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Private Key'} />
              <TextInput
                placeholder="Digite sua private-key"
                autoCapitalize="none"
                onChangeText={onChange}
                errors={errors}
                {...field}
              />
            </>
          )}
        />
        <Controller
          control={control}
          name="photo"
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Foto'} />
              <TextInput
                placeholder="Coloque sua foto"
                autoCapitalize="none"
                onChangeText={onChange}
                errors={errors}
                {...field}
              />
            </>
          )}
        />
      </View>
      <Button style={{ marginTop: 30 }} label="Continuar" onPress={handleSubmit(onSubmit)} />
    </View>)
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  text: {
    fontSize: 14,
    fontFamily: Theme.fontsFamily.display.medium,
    color: "#525252",
    marginBottom: 4
  },
  anotherText: {
    fontSize: 14,
    fontFamily: Theme.fontsFamily.display.medium,
    color: "#525252",
  },
});