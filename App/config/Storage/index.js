import AsyncStorage from '@react-native-async-storage/async-storage';
import {v4 as uuidv4} from 'uuid';
const STORAGE_KEY = 'tasks';

export const getTasksFromStorage = async () => {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveTasksToStorage = async tasks => {
  try {
    const jsonValue = JSON.stringify(tasks);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (err) {
    console.log(err, 'asyncStorageToken');
  }
};

export const addTasksToStorage = async (title, description) => {
  const items = await getTasksFromStorage();
  const newItem = {
    id: uuidv4(),
    title,
    description,
    createdAt: new Date().toISOString(),
  };
  const updated = [...items, newItem];
  await saveTasksToStorage(updated);
};

export const updateTasksInStorage = async (id, title, description) => {
  const items = await getTasksFromStorage();
  const updated = items.map(item =>
    item.id === id ? {id, title, description} : item,
  );
  await saveTasksToStorage(updated);
};

export const deleteTasksFromStorage = async id => {
  const items = await getTasksFromStorage();
  const filtered = items.filter(item => item.id !== id);
  await saveTasksToStorage(filtered);
};
