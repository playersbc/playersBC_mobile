import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import { BackIcon, Button, TextInput, StakeholdersIcon } from '../components';
import { Theme } from '../theme';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import { ISignUpPayload } from '../interfaces';
import { useStepStore } from '../stores';

export function AddUsersScreen({ navigation: { navigate } }) {
  const [isSelected, setSelection] = useState('');
  const { setDataUser } = useStepStore();

  interface CreatePayload extends ISignUpPayload {
    name: string;
  }

  const { control, handleSubmit } = useForm<CreatePayload>();

  async function onSubmit(values: CreatePayload) {
    setDataUser(values);
    await navigate('ApproveUser');
  }

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.subheader}>
          <TouchableOpacity onPress={() => navigate('Players')}>
            <BackIcon fill="#525252" size={30} />
          </TouchableOpacity>
          <Text style={styles.subheaderText}>Cadastrar novo usuário</Text>
          <View />
        </View>
        <View style={styles.content}>
          <View style={{ gap: 4 }}>
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
                    {...field}
                  />
                </>
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, ref, ...field } }) => (
                <>
                  <Text style={styles.text} children={'Email'} />
                  <TextInput
                    placeholder="Digite o email"
                    autoCapitalize="none"
                    onChangeText={onChange}
                    {...field}
                  />
                </>
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, ref, ...field } }) => (
                <>
                  <Text style={styles.text} children={'Senha'} />
                  <TextInput
                    placeholder="Digite a senha"
                    autoCapitalize="none"
                    onChangeText={onChange}
                    {...field}
                  />
                </>
              )}
            />
          </View>
        </View>
        <View style={styles.contentList}>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <StakeholdersIcon />
            <Text style={styles.title}>Lista de Stakeholders</Text>
          </View>
          <View
            onTouchStart={() => {
              if (isSelected) {
                return setSelection('');
              }
              setSelection('Players B.C.');
            }}
            style={styles.checkboxContainer}
          >
            <View style={styles.checkbox}>
              <View
                style={{
                  backgroundColor: isSelected
                    ? Theme.colors.primary
                    : 'transparent',
                  height: 10,
                  width: 10,
                  borderRadius: 50,
                }}
              />
            </View>
            <Text
              style={[
                styles.textCheck,
                { color: isSelected ? Theme.colors.primary : '#525252' },
              ]}
            >
              Players B.C.
            </Text>
          </View>
          <Button
            style={{ marginTop: 30 }}
            label="Cadastrar"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subheader: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  subheaderText: {
    fontSize: 16,
    fontFamily: Theme.fontsFamily.display.medium,
    color: '#000',
  },
  safeArea: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderColor: '#C1C1C1',
  },
  contentList: {
    padding: 20,
    flexDirection: 'column',
  },
  text: {
    fontSize: 14,
    fontFamily: Theme.fontsFamily.display.medium,
    color: '#525252',
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontFamily: Theme.fontsFamily.display.medium,
    color: '#525252',
  },
  textCheck: {
    fontSize: 15,
    fontFamily: Theme.fontsFamily.display.regular,
  },
  checkboxContainer: {
    paddingVertical: 20,
    marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  checkbox: {
    borderRadius: 50,
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.10)',
  },
});
