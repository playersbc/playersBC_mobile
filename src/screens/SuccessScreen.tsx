import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import { StatusIcon } from '../components/Icons/StatusIcon';
import { Button } from '../components';
import { Theme } from '../theme';
import { useState } from 'react';

export function SuccessScreen({ navigation: { navigate }, route }) {
  const [text] = useState(route.params.text);

  async function onSubmit() {
    await navigate('Home');
  }

  return (
    <View style={styles.content}>
      <View style={styles.card}>
        <Text
          style={{
            fontFamily: Theme.fontsFamily.display.medium,
            color: '#525252',
            fontSize: 18,
            textAlign: 'center',
          }}
        >
          {text}
        </Text>
        <StatusIcon status="green" />
      </View>
      <Button label="Voltar" onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    height: '100%',
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'column',
    gap: 20,
  },
  card: {
    height: 170,
    backgroundColor: '#EEF2F3',
    borderRadius: 10,
    padding: 20,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Theme.colors.primary,
  },
});
