import { Controller, useForm } from "react-hook-form";
import { IPlayerStakeholder, IPlayerStep1 } from "../../interfaces";
import { useStepStore } from "../../stores";
import { Button, TextInput } from "../Form";
import { View, Text, StyleSheet } from "react-native";
import { Theme } from "../../theme";
import { Player1Resolver } from "../../validations";

export function Step1() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IPlayerStep1>({ resolver: Player1Resolver });
  const { setDataPlayer, setStep } = useStepStore()

  async function onSubmit(values: IPlayerStep1) {
    const transformedData: IPlayerStakeholder = {
      country: values.country,
      name: values.name,
      state: values.state,
      gender: values.gender,
      nationality: values.nationality,
      address: undefined,
      email: undefined,
      active: false,
      status: undefined,
      phone: undefined,
      photo: undefined,
      privateKey: undefined,
      birth_city: undefined,
      birth_state: undefined,
      birth_country: undefined,
      birth_date: undefined,
      birth_name: undefined,
      family_name: undefined,
      first_name: undefined,
      international_id: undefined,
      language: undefined,
      shareholderType: values.type.toLowerCase(),
    }
    setDataPlayer(transformedData)
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
          name="gender"
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Gender'} />
              <TextInput
                placeholder="Insira o gênero"
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
          name="nationality"
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Nationality'} />
              <TextInput
                placeholder="Insira a nacionalidade"
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
