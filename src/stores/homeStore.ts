import { create } from 'zustand';
import { HomeEnum } from '../interfaces';

export interface HomeStoreState {
  homeState: HomeEnum;
  setHomeState: (homeState: HomeEnum) => void;
}
export const useHomeStore = create<HomeStoreState>((set) => ({
  homeState: HomeEnum.Sumário,
  setHomeState: (homeState) => set({ homeState }),
}));
