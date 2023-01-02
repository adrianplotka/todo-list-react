import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from './tasksLocalStorage';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toogleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toogleTaskDone: ({ tasks }, { payload: taksId }) => {
            const index = tasks.findIndex(({ id }) => id === taksId)
            tasks[index].done = !tasks[index].done;
        },
        setAllDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            }
        },
        removeTask: ({ tasks }, { payload: taksId }) => {
            const index = tasks.findIndex(({ id }) => id === taksId)
            tasks.splice(index, 1);
        },
        fetchExampleTasks: state => {
            state.loading = true;
          },
          fetchExampleTasksSucces: (state, { payload: tasks }) => {
            state.tasks = tasks;
            state.loading = false;
          },
          fetchExampleTasksError: (state) => {
            state.loading = false;
        }
    },
});

export const {
    addTask,
    toogleHideDone,
    toogleTaskDone,
    setAllDone,
    removeTask,
    fetchExampleTasks,
    fetchExampleTasksSucces,
    fetchExampleTasksError,
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = state => selectTasks(state).length ===0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done} ) => done);
export const selectLoading = state => selectTasksState(state).loading;

export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if (!query || query.trim() === "" ) {
        return tasks;
    }

    return tasks.filter(({content}) => 
    content.toUpperCase().includes(query.trim().toUpperCase()));
}
    

export default tasksSlice.reducer;
