import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { DateTime } from 'luxon';
import { StorageHelper } from '../helpers';
import { IAuthContext, ISignUpPayload, IUser } from '../interfaces';
import { setBearerToken } from '../providers';
import { AuthService } from '../services';

const AuthContext = createContext<IAuthContext>(undefined!);

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | undefined>();
  const [token, setToken] = useState<string | undefined>();
  const [expiresIn, setExpiresIn] = useState<string | undefined>();
  const [stakeHolder, setStakeHolder] = useState<string | undefined>();

  async function login(email: string, password: string) {
    try {
      const { data } = await AuthService.login(email, password);
      setToken(data.token);
      setUser(data.user);
      setExpiresIn(data.expiresIn);
      await StorageHelper.setItem('user', data.user);
      await StorageHelper.setItem('token', data.token);
      await StorageHelper.setItem('expiresIn', data.expiresIn);
    } catch (error) {
      console.log(error)
    }
  }

  async function loginStakeHolder(stakeHolder: string) {
    await StorageHelper.setItem('stakeHolder', stakeHolder);
    setStakeHolder(stakeHolder);
  }

  async function signUp(payload: ISignUpPayload) {
    try {
      await AuthService.signUp(payload);
    } catch (error) {
      console.log(error)
    }
  }

  async function logout() {
    await Promise.all([
      await StorageHelper.removeItem('user'),
      await StorageHelper.removeItem('token'),
      await StorageHelper.removeItem('expiresIn'),
    ]);
    setUser(undefined);
    setToken(undefined);
    setExpiresIn(undefined);
  }

  function checkExpiresIn() {
    let result = false;
    if (expiresIn) {
      const exp = DateTime.fromISO(expiresIn).diffNow('seconds').seconds;
      result = exp > 0;
    }
    if (!result) {
      logout();
    }
    return result;
  }

  useEffect(() => {
    if (token) {
      setBearerToken(token);
    }
  }, [token]);

  useEffect(() => {
    async function loadDefaultData() {
      const [user, token, stakeHolder] = await Promise.all([
        StorageHelper.getItem('user'),
        StorageHelper.getItem('token'),
        StorageHelper.getItem('stakeHolder'),
      ]);
      setUser(user);
      setToken(token);
      setStakeHolder(stakeHolder);
    }
    loadDefaultData();
  }, [stakeHolder, user, token]);

  const isAuth = useMemo(
    () => !!user && !!token,
    [user, token]
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        login,
        loginStakeHolder,
        signUp,
        logout,
        checkExpiresIn,
        stakeHolder,
        isAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
