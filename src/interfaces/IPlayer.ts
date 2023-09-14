import { IStakeholder } from './IStakeHolder';

export interface IPlayer {
  index: number;
  name: string;
  hour: string;
  date: string;
  old_club: string;
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

export interface IPlayerStakeholder extends IStakeholder, IPlayer {
  gender: string;
  nationality: string;
  birth_country: string;
  birth_state: string;
  birth_city: string;
  international_id: string;
  family_name: string;
  first_name: string;
  birth_name: string;
  language: string;
  birth_date: string;
}

export interface IPlayerStep1 {
  type: string;
  name: string;
  gender: string;
  nationality: string;
  country: string;
  state: string;
}

export interface IPlayerStep2 {
  email: string;
  active: boolean;
  status: string;
  birth_country: string;
  birth_state: string;
  birth_city: string;
}

export interface IPlayerStep3 {
  international_id: string;
  family_name: string;
  first_name: string;
  birth_name: string;
  language: string;
  birth_date: string;
}

export interface IPlayerStep4 {
  photo: string;
  phone: string;
  privateKey: string;
  address: string;
}
