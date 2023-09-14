import { HomeEnum } from '../../interfaces';
import { useHomeStore } from '../../stores';
import { Players } from '../Players';
import { Sumario } from '../Sumario';

export function SectionsHome({ showSearch }: { showSearch: boolean }) {
  const { homeState } = useHomeStore();

  const players = []
  for (let i = 0; i < 10; i++) {
    players.push({
      index: i,
      photo: '',
      name: 'Neymar',
      hour: '15h',
      date: '25/10',
      old_club: 'Santos',
      new_club: 'PSG',
      status: 'green',
      type: '',
      country: '',
      state: '',
      email: 'player@gmail.com',
      active: false,
      address: '',
      phone: '',
      privateKey: ''
    });
  }

  switch (homeState) {
    case HomeEnum.Aprovações:
      return <Players players={players} screen='home' searchShow={showSearch} />;
    case HomeEnum.Sumário:
      return <Sumario />;
    default:
      break;
  }
}
