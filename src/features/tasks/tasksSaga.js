import { call, put, takeLatest } from "@redux-saga/core/effects";
import { fetchExampleTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTasksHandler() {
    try {
       const exampleTasks = yield call(getExampleTasks);
       yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Coś poszłonie tak!")
    }
}

export function* watchFetchExampleTasks() {
    console.log("saga jest podłączona")
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler)
}