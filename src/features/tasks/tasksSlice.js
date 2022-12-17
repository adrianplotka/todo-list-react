import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
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
    },
});

export const {
    addTask,
    toogleHideDone,
    toogleTaskDone,
    setAllDone,
    removeTask
} = tasksSlice.actions;

export const selectTasks = state => state.tasks;

export default tasksSlice.reducer;
