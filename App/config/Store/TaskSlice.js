import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  addTasksToStorage,
  deleteTasksFromStorage,
  getTasksFromStorage,
  saveTasksToStorage,
  updateTasksInStorage,
} from '../Storage';
import {v4 as uuidv4} from 'uuid';

export const loadTask = createAsyncThunk('tasks/loadTasks', async () => {
  const data = await getTasksFromStorage();
  if (data.length > 0) {
    return data;
  } else {
    const initial = [
      {
        id: uuidv4(), // unique  ID
        title: 'Sample First Task',
        description: 'Welcome to your offline task manager!',
        createdAt: new Date().toISOString(),
      },
      {
        id: uuidv4(), // unique  ID
        title: 'Sample Second Task',
        description: 'Welcome to your offline task manager!',
        createdAt: new Date().toISOString(),
      },
    ];
    await saveTasksToStorage(initial);
    return initial;
  }
});

export const addTask = createAsyncThunk(
  'task/add',
  async ({title, description}) => {
    await addTasksToStorage(title, description);
    return await getTasksFromStorage();
  },
);

export const editTask = createAsyncThunk(
  'task/edit',
  async ({id, title, description}) => {
    await updateTasksInStorage(id, title, description);
    return await getTasksFromStorage();
  },
);

export const removeTask = createAsyncThunk('task/remove', async id => {
  await deleteTasksFromStorage(id);
  return await getTasksFromStorage();
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {data: [], loading: false},
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loadTask.pending, state => {
        state.loading = true;
      })
      .addCase(loadTask.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(loadTask.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(editTask.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(removeTask.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default tasksSlice.reducer;
