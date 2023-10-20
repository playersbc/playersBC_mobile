import { IStakeholder } from './IStakeHolder';

export interface IPlayer {
  index: number;
  name: string;
  hour: string;
  date: string;
  base_owner: string;
  new_club: string;
  status: string;
  type: string;
  country: string;
  state: string;
  email: string;
  active: boolean;
  address: string;
  photo: string;
  phone: string;
  privateKey: string;
  onChainId: string;
}

export interface IPlayerPayload {
  language: string;
  family_name: string;
  first_name: string;
  international_id: string;
  birth_date: string;
  birth_name: string;
  birth_city: string;
  birth_state: string;
  birth_country: string;
  address: string;
  gender: string;
  nationality: string;
  name: string;
  country: string;
  state: string;
  email: string;
  active: boolean;
  status: string;
  phone: string;
  photo: string;
  privateKey: string;
  shareholderType: string;
}