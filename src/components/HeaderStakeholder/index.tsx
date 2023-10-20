import { View } from 'react-native';
import { Title } from '../Title';
import { ClubeIcon } from '../Icons/ClubeIcon';
import { useAuthContext } from '../../contexts';

export function HeaderStakeholder() {
  const { stakeHolder } = useAuthContext();
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
      <Title fontSize={24} children={stakeHolder} />
      <ClubeIcon width={50} height={50} />
    </View>
  );
}
