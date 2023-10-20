import { IPlayerPayload } from '../interfaces';
import { IStakeholder } from '../interfaces/IStakeHolder';
import { Api } from '../providers';

async function addStakeHolder(payload: IStakeholder) {
  return await Api.patch<IStakeholder>('/v1/stakeholder', payload);
}

async function addPlayer(payload: IPlayerPayload) {
  return await Api.patch<IStakeholder>('/v1/players', payload);
}

async function getAllPlayers() {
  return await Api.get<IStakeholder[]>('/v1/players');
}

async function getAllPlayersByStakeholder(id: string) {
  return await Api.get<IStakeholder[]>(`/v1/stakeholder/${id}/players`);
}

async function getAllStakeholdersByStakeholder(id: string) {
  const url = `/v1/stakeholder/${id}/stakeholders`;
  return await Api.get<IStakeholder[]>(url);
}

async function getStakeholderBalance(id: string) {
  return await Api.get(`/v1/stakeholder/${id}/balance`);
}

async function getAllStakeholders() {
  return await Api.get<IStakeholder[]>(`/v1/stakeholder`);
}

async function getPlayerByOnChainId(onChainId: string) {
  return await Api.get<IStakeholder>(`/v1/players/${onChainId}`);
}

async function getStakeholderByAddress(address: string) {
  return await Api.get<IStakeholder>(`/v1/stakeholder/address/${address}`);
}

export const StakeHolderService = {
  addStakeHolder,
  addPlayer,
  getAllPlayers,
  getStakeholderBalance,
  getAllPlayersByStakeholder,
  getAllStakeholdersByStakeholder,
  getAllStakeholders,
  getPlayerByOnChainId,
  getStakeholderByAddress
};
