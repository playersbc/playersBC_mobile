import { Controller, useForm } from 'react-hook-form';
import { View, Text, StyleSheet } from 'react-native';
import { IPlayerStep4 } from '../../interfaces';
import { useStepStore } from '../../stores';
import { Button, TextInput } from '../Form';
import { Theme } from '../../theme';
import { useAuthContext } from '../../contexts';

export function Step4() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IPlayerStep4>();
  const { dataPlayer, setDataPlayer, setStep } = useStepStore();
  const { user } = useAuthContext();

  async function onSubmit(values: IPlayerStep4) {
    dataPlayer.phone = values.phone;
    dataPlayer.photo = values.photo;
    dataPlayer.privateKey = values.privateKey;
    dataPlayer.address = values.address;
    setDataPlayer(dataPlayer);
    setStep(5);
  }

  return (
    <View style={styles.content}>
      <View style={{ gap: 4 }}>
        <Controller
          control={control}
          name="phone"
          defaultValue={dataPlayer?.phone}
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Phone'} />
              <TextInput
                placeholder="Indique o telefone"
                defaultValue={dataPlayer?.phone}
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
          defaultValue={user?.privateKey}
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Private Key'} />
              <TextInput
                placeholder="Digite o private key"
                defaultValue={user?.privateKey}
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
          defaultValue={dataPlayer?.photo}
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Inserir Foto'} />
              <TextInput
                placeholder="Insira a foto"
                defaultValue={dataPlayer?.photo}
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
          name="address"
          defaultValue={dataPlayer?.address}
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Address'} />
              <TextInput
                placeholder="Digite o endereço do Player"
                defaultValue={dataPlayer?.address}
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
  anotherText: {
    fontSize: 14,
    fontFamily: Theme.fontsFamily.display.medium,
    color: '#525252',
  },
});
