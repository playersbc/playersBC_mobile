import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { BillingYuLogo } from '../Icons';

type Props = {
  left?: React.ReactNode;
  right?: React.ReactNode;
};

export function Header({ left, right }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {left}
        <View style={{ paddingHorizontal: !!left ? 10 : 0 }}>
          <BillingYuLogo />
        </View>
      </View>
      {right}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
