import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toogleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toogleTaskDone: ( {tasks}, {payload} ) => {
            const index = tasks.findIndex(({id}) => id === payload)
            tasks[index].done = !tasks[index].done;
        },
        setAllDone: ({tasks}) => {
            for (const task in tasks) {
                tasks[task].done = true;
            }
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
    },
});

export const { addTask, toogleHideDone, toogleTaskDone, setAllDone, removeTask } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;
