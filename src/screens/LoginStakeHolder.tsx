import { StyleSheet, View, ScrollView, SafeAreaView, Text } from 'react-native';
import { Button, Title } from '../components';
import React, { useEffect, useState } from 'react';
import { Theme } from '../theme';
import { useAuthContext } from '../contexts';
import { StakeHolderService } from '../services';
import { IStakeholder } from '../interfaces';

export function LoginStakeHolder({ navigation: { navigate } }) {
  const [isSelected, setSelection] = useState('');
  const [stakes, setStakes] = useState<IStakeholder[]>([]);
  const { loginStakeHolder, stakeHolder, user } = useAuthContext();

  async function onLogin() {
    loginStakeHolder(isSelected);
    navigate('Home');
  }

  useEffect(() => {
    if (stakeHolder) {
      navigate('Home');
    }
    StakeHolderService.getAllStakeholdersByStakeholder(user.id)
      .then(({ data }) => setStakes(data))
      .catch((e) => console.log(e));
  }, []);

  const userName = user.name;

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.content}>
          <Title>Escolha qual Stakeholder realizar login</Title>
          {stakes.length > 0 ? (
            stakes.map((e, i) => (
              <View
                key={i}
                onTouchStart={() => setSelection(e.name)}
                style={styles.checkboxContainer}
              >
                <View style={styles.checkbox}>
                  <View
                    style={{
                      backgroundColor:
                        isSelected === e.name
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
                    {
                      color:
                        isSelected === e.name
                          ? Theme.colors.primary
                          : '#525252',
                    },
                  ]}
                >
                  {e.name}
                </Text>
              </View>
            ))
          ) : (
            <View
              onTouchStart={() => setSelection(userName)}
              style={styles.checkboxContainer}
            >
              <View style={styles.checkbox}>
                <View
                  style={{
                    backgroundColor:
                      isSelected === userName
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
                  {
                    color:
                      isSelected === userName
                        ? Theme.colors.primary
                        : '#525252',
                  },
                ]}
              >
                {userName}
              </Text>
            </View>
          )}
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
    backgroundColor: 'white',
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
    paddingVertical: 15,
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
