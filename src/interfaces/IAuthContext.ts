import { ISignUpPayload } from './ISignUpPayload';
import { IUser } from './IUser';

export interface IAuthContext {
  user?: IUser;
  setUser: (user: IUser | undefined) => void;
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
