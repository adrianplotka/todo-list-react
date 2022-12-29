import { call, put, select, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { fetchExampleTasks, fetchExampleTasksError, fetchExampleTasksSucces, selectTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTaskInLocalStorage } from "./tasksLocalStorage";
import { delay } from "q";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000)
       const exampleTasks = yield call(getExampleTasks);
       yield put(fetchExampleTasksSucces(exampleTasks));
    } catch (error) {
        yield put(fetchExampleTasksError());
        yield call(alert, "Coś poszłonie tak!");
    }
}

function* saveTasksInLocalStorageHandler(){
    const tasks = yield select(selectTasks)
    yield call(saveTaskInLocalStorage, tasks)
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler)
    yield takeEvery("*", saveTasksInLocalStorageHandler)
}