import { put } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import {AuthAPI} from '../api/http/';

export function* loginSaga(action) {
  yield put({ type: ACTION.AUTH_ACTION_REQUEST });
  try {
    const {data: {data: {user}}} = yield AuthAPI.login(action.data);
    action.history.replace('/');
    yield put({ type: ACTION.AUTH_ACTION_SUCCESS, data: user });
  } catch (err) {
    yield put({ type: ACTION.AUTH_ACTION_ERROR, error: err.response });
  }
}

export function* registerSaga(action) {
  yield put({ type: ACTION.AUTH_ACTION_REQUEST });
  try {
    const {data: {data: {user}}} = yield AuthAPI.registration(action.data);
    action.history.replace('/');
    yield put({ type: ACTION.AUTH_ACTION_SUCCESS, data: user });
  } catch (e) {
    yield put({ type: ACTION.AUTH_ACTION_ERROR, error: e.response });
  }
}
