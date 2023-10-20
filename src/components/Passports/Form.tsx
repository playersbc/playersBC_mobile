import { Controller, useForm } from 'react-hook-form';
import { ITransferPayload } from '../../interfaces';
import { useStepStore } from '../../stores';
import { Button, TextInput } from '../Form';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from '../../theme';
import { TransferResolver } from '../../validations';
import { useAuthContext } from '../../contexts';

export function Form({ player }) {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: TransferResolver });
  const { setDataTransfer, setStep, dataTransfer } = useStepStore();
  const { user } = useAuthContext();

  async function onSubmit(values: ITransferPayload) {
    setDataTransfer({
      ...values,
      player_address: player.address,
      privateKey: user.privateKey,
      privateKeyFederal:
        '1df85bf1c3f2d4b1bf84eab2c41179df1f43ca902b946707240ad6c60c702965',
      isPending: true,
    });
    setStep(2);
  }

  return (
    <View style={styles.content}>
      <View style={{ gap: 4 }}>
        <Controller
          control={control}
          defaultValue={dataTransfer?.type}
          name="type"
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Tipo de transferência'} />
              <TextInput
                placeholder="Selecione o tipo de transferência"
                autoCapitalize="none"
                defaultValue={dataTransfer?.type}
                onChangeText={onChange}
                errors={errors}
                {...field}
              />
            </>
          )}
        />
        <Controller
          control={control}
          name="value"
          defaultValue={dataTransfer?.value}
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Valor da transferência'} />
              <TextInput
                placeholder="Valor da transferência"
                autoCapitalize="none"
                defaultValue={dataTransfer?.value}
                onChangeText={onChange}
                errors={errors}
                {...field}
              />
            </>
          )}
        />
        <Controller
          control={control}
          name="date"
          defaultValue={dataTransfer?.date}
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Data da transferência'} />
              <TextInput
                placeholder="05/05/2023"
                autoCapitalize="none"
                defaultValue={dataTransfer?.date}
                onChangeText={onChange}
                errors={errors}
                {...field}
              />
            </>
          )}
        />
        <Controller
          control={control}
          name="init_contract"
          defaultValue={dataTransfer?.init_contract}
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Inicio do contrato'} />
              <TextInput
                placeholder="05/05/2023"
                autoCapitalize="none"
                defaultValue={dataTransfer?.init_contract}
                onChangeText={onChange}
                errors={errors}
                {...field}
              />
            </>
          )}
        />
        <Controller
          control={control}
          name="end_contract"
          defaultValue={dataTransfer?.end_contract}
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Fim do contrato'} />
              <TextInput
                placeholder="05/05/2023"
                autoCapitalize="none"
                defaultValue={dataTransfer?.end_contract}
                onChangeText={onChange}
                errors={errors}
                {...field}
              />
            </>
          )}
        />
        <Controller
          control={control}
          name="salary"
          defaultValue={dataTransfer?.salary}
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Remuneração do Atleta'} />
              <TextInput
                placeholder="R$"
                defaultValue={dataTransfer?.salary}
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
          name="contract"
          defaultValue={dataTransfer?.contract}
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Anexar contrato'} />
              <TextInput
                placeholder="Anexar contrato"
                autoCapitalize="none"
                defaultValue={dataTransfer?.contract}
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
