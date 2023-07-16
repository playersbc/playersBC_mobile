import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  Text,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Title, TextInput, Button } from '../components';
import { LoginResolver } from '../validations';
import { useAuthContext } from '../contexts';
import React from 'react';
import { Logo } from '../components/Logo';

type Form = {
  email: string;
  password: string;
};

export function LoginScreen() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Form>({ resolver: LoginResolver });
  const { login } = useAuthContext();

  async function onSubmit(values: Form) {
    await login(values.email, values.password);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ImageBackground
          source={require('../../assets/bgLogin.png')}
          style={styles.background}
        >
          <View style={{ paddingTop: 30 }}>
            <Title color="#fff">Login</Title>
          </View>
          <Logo />
        </ImageBackground>
        <ScrollView style={styles.content}>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, ref, ...field } }) => (
              <TextInput
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                innerRef={ref}
                onChangeText={onChange}
                errors={errors}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, ref, ...field } }) => (
              <TextInput
                placeholder="Senha"
                secureTextEntry
                innerRef={ref}
                onChangeText={onChange}
                errors={errors}
                {...field}
              />
            )}
          />
          <View style={{ marginBottom: 30 }}>
            <Text
              style={{
                color: 'red',
                flexDirection: 'row',
                alignSelf: 'flex-end',
              }}
            >
              Esqueceu sua senha?
            </Text>
          </View>
          <Button label="Login" onPress={handleSubmit(onSubmit)} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  logoContainer: {
    width: '100%',
    paddingVertical: 20,
  },
  content: {
    padding: 30,
  },
  background: {
    flex: 0.5,
    paddingHorizontal: 20,
    paddingBottom: '50%'
  },
});
