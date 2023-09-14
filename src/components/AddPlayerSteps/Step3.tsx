import { Controller, useForm } from "react-hook-form";
import { View, Text, StyleSheet } from "react-native";
import { IPlayerStep3 } from "../../interfaces";
import { useStepStore } from "../../stores";
import { Button, TextInput } from "../Form";
import { Theme } from "../../theme";
import { Player3Resolver } from "../../validations";

export function Step3() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IPlayerStep3>({ resolver: Player3Resolver });
  const { dataPlayer, setDataPlayer, setStep } = useStepStore()

  async function onSubmit(values: IPlayerStep3) {
    dataPlayer.birth_date = values.birth_date
    dataPlayer.birth_name = values.birth_name
    dataPlayer.family_name = values.family_name
    dataPlayer.first_name = values.first_name
    dataPlayer.international_id = values.international_id
    dataPlayer.language = values.language
    setDataPlayer(dataPlayer)
    setStep(4)
  }

  return (
    <View style={styles.content}>
      <View style={{ gap: 4 }}>
        <Controller
          control={control}
          name="international_id"
          defaultValue={dataPlayer.international_id}
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'FIFA ID'} />
              <TextInput
                placeholder="Ex: FF737373"
                defaultValue={dataPlayer.international_id}
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
          name="family_name"
          defaultValue={dataPlayer.family_name}
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Family Name'} />
              <TextInput
                placeholder="Insira o nome da família"
                autoCapitalize="none"
                onChangeText={onChange}
                defaultValue={dataPlayer.family_name}
                errors={errors}
                {...field}
              />
            </>
          )}
        />
        <Controller
          control={control}
          name="first_name"
          defaultValue={dataPlayer.first_name}
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'First Name'} />
              <TextInput
                placeholder="Insira o primeiro nome"
                defaultValue={dataPlayer.first_name}
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
          name="birth_name"
          defaultValue={dataPlayer.birth_name}
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Birth Name'} />
              <TextInput
                placeholder="Insira o nome de nascimento"
                defaultValue={dataPlayer.birth_name}
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
          name="language"
          defaultValue={dataPlayer.language}
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Language'} />
              <TextInput
                placeholder="Insira o idioma"
                defaultValue={dataPlayer.language}
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
          name="birth_date"
          defaultValue={dataPlayer.birth_date}
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Data of Birth'} />
              <TextInput
                placeholder="Insira a data de nascimento"
                defaultValue={dataPlayer.birth_date}
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