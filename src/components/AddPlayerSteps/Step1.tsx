import { Controller, useForm } from "react-hook-form";
import { IStakeholderStep1 } from "../../interfaces";
import { Stakeholder1Resolver } from "../../validations";
import { useStepStore } from "../../stores";
import { Button, TextInput } from "../Form";
import { View, Text, StyleSheet } from "react-native";
import { Theme } from "../../theme";

export function Step1() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IStakeholderStep1>({ resolver: Stakeholder1Resolver });
  const { setDataStakeholder, setStep } = useStepStore()

  async function onSubmit(values: IStakeholderStep1) {
    const transformedData = {
      country: values.country,
      name: values.name,
      state: values.state,
      address: undefined,
      email: undefined,
      active: false,
      status: undefined,
      phone: undefined,
      photo: undefined,
      privateKey: undefined,
      shareholderType: values.type.toLowerCase(),
    }
    setDataStakeholder(transformedData)
    setStep(2)
  }

  return (
    <View style={styles.content}>
      <View style={{ gap: 4 }}>
        <Controller
          control={control}
          name="type"
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Tipo'} />
              <TextInput
                placeholder="Digite o tipo"
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
          name="name"
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Nome'} />
              <TextInput
                placeholder="Digite o nome"
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
          name="country"
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'País'} />
              <TextInput
                placeholder="Escolha o país"
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
          name="state"
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Estado'} />
              <TextInput
                placeholder="Escolha o estado"
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
    </View>
  )
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
});
