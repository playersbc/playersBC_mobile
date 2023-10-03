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
  const { setDataTransfer, setStep } = useStepStore();
  const { user } = useAuthContext();

  async function onSubmit(values: ITransferPayload) {
    setDataTransfer({
      ...values,
      player_address: player.address,
      privateKey: user.privateKey,
      privateKeyFederal:
        'b64b535ac37ad5908878758ea089036938999524563d452d18777fd2781c44b9',
      isPending: true,
    });
    setStep(2);
  }

  return (
    <View style={styles.content}>
      <View style={{ gap: 4 }}>
        <Controller
          control={control}
          name="type"
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Tipo de transferência'} />
              <TextInput
                placeholder="Selecione o tipo de transferência"
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
          name="value"
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Valor da transferência'} />
              <TextInput
                placeholder="Valor da transferência"
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
          name="date"
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Data da transferência'} />
              <TextInput
                placeholder="05/05/2023"
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
          name="init_contract"
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Inicio do contrato'} />
              <TextInput
                placeholder="05/05/2023"
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
          name="end_contract"
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Fim do contrato'} />
              <TextInput
                placeholder="05/05/2023"
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
          name="salary"
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Remuneração do Atleta'} />
              <TextInput
                placeholder="R$"
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
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Anexar contrato'} />
              <TextInput
                placeholder="Anexar contrato"
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
