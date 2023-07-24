import React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  left?: React.ReactNode;
  right?: React.ReactNode;
};

export function Header({ left, right }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {left}
        <View style={{ paddingHorizontal: !!left ? 10 : 0 }}></View>
      </View>
      {right}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  logoContainer: {},
});
