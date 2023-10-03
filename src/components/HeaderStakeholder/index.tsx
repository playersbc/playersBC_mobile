import { View } from 'react-native';
import { Title } from '../Title';
import { PsgIcon } from '../Icons';

export function HeaderStakeholder() {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 4,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#C1C1C1',
        borderTopColor: '#C1C1C1',
        borderBottomWidth: 0.5,
        borderTopWidth: 0.5,
      }}
    >
      <Title fontSize={24}>Clube PSG</Title>
      <PsgIcon size={30} />
    </View>
  );
}
