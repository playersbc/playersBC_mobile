import { IStakeholder } from '../interfaces/IStakeHolder';
import { Api } from '../providers';

async function addStakeHolder(payload: IStakeholder) {
  return await Api.post<IStakeholder>('/v1/stakeholder', payload);
}

export const StakeHolderService = {
  addStakeHolder
};
