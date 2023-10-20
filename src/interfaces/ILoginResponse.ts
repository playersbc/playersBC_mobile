import { IStakeholder } from './IStakeHolder';

export interface ILoginResponse {
  token: string;
  user: IStakeholder;
  expiresIn: string;
}
