import { create } from 'zustand';
import { IStakeholder } from '../interfaces/IStakeHolder';

export interface useStepStore {
  step: number;
  setStep: (step: number) => void;
  dataStakeholder: IStakeholder | undefined
  setDataStakeholder: (dataStakeholder: IStakeholder | undefined) => void;
}
export const useStepStore = create<useStepStore>((set) => ({
  step: 1,
  setStep: (step) => set({ step }),
  dataStakeholder: undefined,
  setDataStakeholder: (dataStakeholder) => set({ dataStakeholder }),
}));
