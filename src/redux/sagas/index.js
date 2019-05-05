import { takeEvery, all, put, call } from 'redux-saga/effects';
import {LOAD_PIZZAS, loadPizzasSuccess, loadPizzasFail} from "../actions/pizzas";
import { findPizzasApi } from '../../graphql-client/index';

function* findPizzasSaga(action) {
    try {
        const pizzasFound = yield call(findPizzasApi);
        yield put(loadPizzasSuccess(pizzasFound));
    } catch (e) {
        yield put(loadPizzasFail(e.message));
    }
}


export function* findPizzasWatcher() {
    yield takeEvery(LOAD_PIZZAS, findPizzasSaga)
}

export default function* rootSaga() {
    yield all([
        findPizzasWatcher()
    ])
}
