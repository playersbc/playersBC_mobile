export interface IStakeholder {
  address: string,
  name: string,
  country: string,
  state: string,
  email: string,
  active: boolean,
  status: string,
  phone: string,
  photo: string,
  privateKey: string,
  shareholderType: string,
}

export interface IStakeholderStep1 {
  type: string,
  name: string,
  country: string,
  state: string,
}

export interface IStakeholderStep2 {
  email: string,
  active: boolean,
  status: string,
  address: string,
}

export interface IStakeholderStep3 {
  photo: string,
  phone: string
  privateKey: string,
}