import { Controller, useForm } from 'react-hook-form';
import { IPlayerPayload } from '../../interfaces';
import { useStepStore } from '../../stores';
import { Button, TextInput } from '../Form';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from '../../theme';

export function Step1() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IPlayerPayload>();
  const { setDataPlayer, setStep } = useStepStore();

  async function onSubmit(values: IPlayerPayload) {
    setDataPlayer(values);
    setStep(2);
  }

  return (
    <View style={styles.content}>
      <View style={{ gap: 4 }}>
        <Controller
          control={control}
          name="shareholderType"
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
      <Button
        style={{ marginTop: 30 }}
        label="Continuar"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  text: {
    fontSize: 14,
    fontFamily: Theme.fontsFamily.display.medium,
    color: '#525252',
    marginBottom: 4,
  },
});
