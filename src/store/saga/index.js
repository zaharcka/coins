import {takeEvery} from "@redux-saga/core/effects";
import actions from '../actionTypes';

const getData = () => {console.log('getting data')};

export default function* () {
    yield takeEvery(actions.GET_DATA, getData);
}