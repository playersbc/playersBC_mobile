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
import { Logo } from '../components/Logo';
import { useState } from 'react';

type Form = {
  email: string;
  password: string;
};

export function LoginScreen({ navigation: { navigate } }) {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Form>({ resolver: LoginResolver });
  const { login } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(values: Form) {
    setIsLoading(true)
    await login(values.email, values.password);
    setIsLoading(false)
  }

  async function goSign() {
    navigate('SignIn');
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ImageBackground
          source={require('../../assets/bgLogin.png')}
          style={styles.background}
        >
          <View style={{ paddingTop: 30, paddingLeft: 30 }}>
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
                autoCapitalize="none"
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
          <Button label="Login" loading={isLoading} disabled={isLoading} onPress={handleSubmit(onSubmit)} />
          <Button label="Register" onPress={goSign} disabled={isLoading} style={{ marginTop: 10 }} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  safeArea: {
    width: '100%',
    height: '100%',
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
