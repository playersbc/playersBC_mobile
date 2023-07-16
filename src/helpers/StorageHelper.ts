import AsyncStorage from '@react-native-async-storage/async-storage';

import { AppConfig } from '../config';

function getKey(key: string) {
  return AppConfig.STORAGE_BASE_KEY + key;
}

async function getItem(key: string) {
  key = getKey(key);
  const item = await AsyncStorage.getItem(key);
  if (!item) return;
  return JSON.parse(item);
}

async function setItem(key: string, data: any) {
  key = getKey(key);
  await AsyncStorage.setItem(key, JSON.stringify(data));
}

async function removeItem(key: string) {
  key = getKey(key);
  await AsyncStorage.removeItem(key);
}

export const StorageHelper = {
  getItem,
  setItem,
  removeItem,
};
