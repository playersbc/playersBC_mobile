import { HomeEnum } from '../../interfaces';
import { useHomeStore } from '../../stores';
import { Players } from '../Players';
import { Sumario } from '../Sumario';

export function SectionsHome() {
  const { homeState } = useHomeStore();

  switch (homeState) {
    case HomeEnum.Aprovações:
      return <Players />;
    case HomeEnum.Sumário:
      return <Sumario />;
    default:
      break;
  }
}
