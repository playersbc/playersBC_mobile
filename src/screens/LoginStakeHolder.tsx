import { StyleSheet, View, ScrollView, SafeAreaView, Text } from 'react-native';
import { Button, Title } from '../components';
import React, { useEffect, useState } from 'react';
import { Theme } from '../theme';
import { useAuthContext } from '../contexts';

export function LoginStakeHolder({ navigation: { navigate } }) {
  const [isSelected, setSelection] = useState('');
  const { loginStakeHolder, stakeHolder } = useAuthContext();

  async function onLogin() {
    loginStakeHolder(isSelected);
    navigate('Home');
  }
  
  useEffect(() => {
    if (stakeHolder) {
      navigate('Home');
    }
  }, [stakeHolder]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.content}>
          <Title>Escolha qual Stakeholder realizar login</Title>
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
        </ScrollView>
        <View style={{ padding: 20, marginBottom: 20 }}>
          <Button
            label="Fazer Login"
            onPress={onLogin}
            disabled={!isSelected}
          />
        </View>
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
  content: {
    padding: 20,
  },
});
