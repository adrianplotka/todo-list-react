import { call, put, select, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTaskInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
       const exampleTasks = yield call(getExampleTasks);
       yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Coś poszłonie tak!")
    }
}

function* saveTasksInLocalStorageHandler(){
    const tasks = yield select(selectTasks)
    yield call(saveTaskInLocalStorage, tasks)
}

export function* tasksSaga() {
    console.log("saga jest podłączona")
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler)
    yield takeEvery("*", saveTasksInLocalStorageHandler)
}