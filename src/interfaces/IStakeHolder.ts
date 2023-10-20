export interface IStakeholder {
  id: string;
  address: string;
  name: string;
  country: string;
  state: string;
  email: string;
  active: boolean;
  password: string;
  status: string;
  phone: string;
  photo: string;
  base_owner: string;
  federal_owner: string;
  base_owner_private: string;
  federal_owner_private: string;
  privateKey: string;
  shareholderType: string;
  language: string;
  family_name: string;
  first_name: string;
  international_id: string;
  birth_date: string;
  birth_name: string;
  birth_city: string;
  birth_state: string;
  birth_country: string;
  gender: string;
  nationality: string;
  onChainId: string;
  players: string[];
  stakeholders: string[];
}

export interface IStakeholderStep1 {
  type: string;
  name: string;
  country: string;
  state: string;
}

export interface IStakeholderStep2 {
  email: string;
  active: boolean;
  status: string;
  address: string;
}

export interface IStakeholderStep3 {
  photo: string;
  phone: string;
  privateKey: string;
}
