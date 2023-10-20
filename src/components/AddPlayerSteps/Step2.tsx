import { Controller, useForm } from 'react-hook-form';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox } from '../Form/CheckBox';
import { StatusIcon } from '../Icons/StatusIcon';
import { IPlayerPayload } from '../../interfaces';
import { useState } from 'react';
import { useStepStore } from '../../stores';
import { Button, TextInput } from '../Form';
import { Player2Resolver } from '../../validations';
import { Theme } from '../../theme';

export function Step2() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IPlayerPayload>();
  const { dataPlayer, setDataPlayer, setStep } = useStepStore();
  const [status, setStatus] = useState('green');
  const [active, setActive] = useState(false);

  async function onSubmit(values: IPlayerPayload) {
    dataPlayer.email = values.email;
    dataPlayer.status = status;
    dataPlayer.active = active;
    dataPlayer.birth_city = values.birth_city;
    dataPlayer.birth_country = values.birth_country;
    dataPlayer.birth_state = values.birth_state;
    setDataPlayer(dataPlayer);
    setStep(3);
  }

  return (
    <View style={styles.content}>
      <View style={{ gap: 4 }}>
        <Controller
          control={control}
          defaultValue={dataPlayer.birth_country}
          name="birth_country"
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Country of Birth'} />
              <TextInput
                placeholder="Insira o país de nascimento"
                defaultValue={dataPlayer.birth_country}
                onChangeText={onChange}
                errors={errors}
                {...field}
              />
            </>
          )}
        />
        <Controller
          control={control}
          name="birth_state"
          defaultValue={dataPlayer.birth_state}
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Region or State of Birth'} />
              <TextInput
                placeholder="Insira a região ou estado de nascimento"
                onChangeText={onChange}
                defaultValue={dataPlayer.birth_state}
                errors={errors}
                {...field}
              />
            </>
          )}
        />
        <Controller
          control={control}
          name="birth_city"
          defaultValue={dataPlayer.birth_city}
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'City of birth'} />
              <TextInput
                placeholder="Insira a cidade de nascimento"
                defaultValue={dataPlayer.birth_city}
                onChangeText={onChange}
                errors={errors}
                {...field}
              />
            </>
          )}
        />

        <Controller
          control={control}
          name="email"
          defaultValue={dataPlayer.email}
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Email'} />
              <TextInput
                placeholder="Digite seu email"
                keyboardType="email-address"
                autoCapitalize="none"
                defaultValue={dataPlayer.email}
                onChangeText={onChange}
                errors={errors}
                {...field}
              />
            </>
          )}
        />

        <View>
          <Text style={styles.anotherText} children={'Ativo'} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingHorizontal: 50,
              gap: 20,
            }}
          >
            <CheckBox onPress={() => setActive(true)} isSelected={active}>
              <Text style={styles.anotherText}>Sim</Text>
            </CheckBox>
            <CheckBox onPress={() => setActive(false)} isSelected={!active}>
              <Text style={styles.anotherText}>Não</Text>
            </CheckBox>
          </View>
        </View>

        <View>
          <Text style={styles.anotherText} children={'Status'} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 50,
            }}
          >
            <CheckBox
              onPress={() => setStatus('green')}
              isSelected={status === 'green' && true}
              children={<StatusIcon status={'green'} />}
            />
            <CheckBox
              onPress={() => setStatus('yellow')}
              isSelected={status === 'yellow' && true}
              children={<StatusIcon status={'yellow'} />}
            />
            <CheckBox
              onPress={() => setStatus('red')}
              isSelected={status === 'red' && true}
              children={<StatusIcon status={'red'} />}
            />
          </View>
        </View>
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
