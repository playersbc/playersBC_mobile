import { useState, useEffect } from 'react';
import { HomeEnum, IPlayerStakeholder } from '../../interfaces';
import { StakeHolderService } from '../../services';
import { useHomeStore } from '../../stores';
import { Players } from '../Players';
import { Sumario } from '../Sumario';

export function SectionsHome({ showSearch }: { showSearch: boolean }) {
  const { homeState } = useHomeStore();

  const [players, setPlayers] = useState<IPlayerStakeholder[]>([]);

  useEffect(() => {
    StakeHolderService.getAllPlayers()
      .then(({ data }) => setPlayers(data ? data : []))
      .catch((err) => console.log(err));
  }, []);

  switch (homeState) {
    case HomeEnum.Aprovações:
      return <Players players={players} screen='home' searchShow={showSearch} />;
    case HomeEnum.Sumário:
      return <Sumario />;
    default:
      break;
  }
}
