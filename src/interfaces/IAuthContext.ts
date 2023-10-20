import { ISignUpPayload } from './ISignUpPayload';
import { IStakeholder } from './IStakeHolder';

export interface IAuthContext {
  user?: IStakeholder;
  setUser: (user: IStakeholder | undefined) => void;
  token?: string;
  stakeHolder: string;
  loginStakeHolder: (stakeHolder: string | undefined) => Promise<void>;
  setToken: (token: string | undefined) => void;
  login: (email: string, password: string) => Promise<void>;
  signUp: (payload: ISignUpPayload) => Promise<void>;
  logout: () => Promise<void>;
  checkExpiresIn: () => boolean;
  isAuth: boolean;
}
