import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Title, TextInput, Button } from '../components';
import { LoginResolver } from '../validations';
import { useAuthContext } from '../contexts';
import { Logo } from '../components/Logo';
import { ISignUpPayload } from '../interfaces';
import { useState } from 'react';

export function SignInScreen({ navigation: { navigate } }) {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ISignUpPayload>({ resolver: LoginResolver });
  const { signUp } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(values: ISignUpPayload) {
    setIsLoading(true)
    await signUp(values)
    setIsLoading(false)
    await goLogIn()
  }

  async function goLogIn() {
    await navigate('Login');
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ImageBackground
          source={require('../../assets/bgLogin.png')}
          style={styles.background}
        >
          <View style={{ paddingTop: 30, paddingLeft: 30 }}>
            <Title color="#fff">Register</Title>
          </View>
          <Logo />
        </ImageBackground>
        <ScrollView style={styles.content}>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, ref, ...field } }) => (
              <TextInput
                auth
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
                auth
                placeholder="Senha"
                secureTextEntry
                innerRef={ref}
                onChangeText={onChange}
                errors={errors}
                {...field}
              />
            )}
          />
          <Button
            loading={isLoading}
            disabled={isLoading}
            label="Register"
            onPress={handleSubmit(onSubmit)}
            style={{ marginTop: 30 }}
          />
          <Button
            label="Login"
            onPress={goLogIn}
            disabled={isLoading}
            style={{ marginTop: 10 }}
          />
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
    marginTop: '70%'
  },
  background: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    paddingBottom: 200
  },
});
