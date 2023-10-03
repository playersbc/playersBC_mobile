import { create } from 'zustand';
import { IStakeholder } from '../interfaces/IStakeHolder';
import { IPlayerStakeholder, ITransfer, ITransferPayload } from '../interfaces';

export interface useStepStore {
  step: number;
  setStep: (step: number) => void;
  dataStakeholder: IStakeholder | undefined;
  setDataStakeholder: (dataStakeholder: IStakeholder | undefined) => void;
  dataPlayer: IPlayerStakeholder | undefined;
  setDataPlayer: (dataPlayer: IPlayerStakeholder | undefined) => void;
  dataUser: any;
  setDataUser: (dataUser: any) => void;
  dataTransfer: ITransferPayload;
  setDataTransfer: (dataTransfer: ITransferPayload) => void;
}
export const useStepStore = create<useStepStore>((set) => ({
  step: 1,
  setStep: (step) => set({ step }),
  dataStakeholder: undefined,
  setDataStakeholder: (dataStakeholder) => set({ dataStakeholder }),
  dataPlayer: undefined,
  setDataPlayer: (dataPlayer) => set({ dataPlayer }),
  dataUser: undefined,
  setDataUser: (dataUser) => set({ dataUser }),
  dataTransfer: undefined,
  setDataTransfer: (dataTransfer) => set({ dataTransfer }),
}));
