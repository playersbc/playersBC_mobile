import { IPlayerStakeholder } from '../interfaces';
import { IStakeholder } from '../interfaces/IStakeHolder';
import { Api } from '../providers';

async function addStakeHolder(payload: IStakeholder) {
  return await Api.patch<IStakeholder>('/v1/stakeholder', payload);
}

async function addPlayer(payload: IPlayerStakeholder) {
  return await Api.patch<IStakeholder>('/v1/players', payload);
}

async function getAllPlayers() {
  return await Api.get<IPlayerStakeholder[]>('/v1/players');
}

async function getAllPlayersByStakeholder(id: string) {
  return await Api.get<IPlayerStakeholder[]>(`/v1/stakeholder/${id}/players`);
}

async function getAllStakeholders() {
  return await Api.get<IPlayerStakeholder[]>(`/v1/stakeholder`);
}

async function getPlayerByOnChainId(onChainId: string) {
  return await Api.get<IPlayerStakeholder>(`/v1/players/${onChainId}`);
}


export const StakeHolderService = {
  addStakeHolder,
  addPlayer,
  getAllPlayers,
  getAllPlayersByStakeholder,
  getAllStakeholders,
  getPlayerByOnChainId,
};
