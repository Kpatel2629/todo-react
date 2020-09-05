import {takeLatest } from 'redux-saga/effects';
import { onDeleteSaga , onRemovedSaga } from './RootSaga';
import * as actionTypes from '../actions';

export function* watchDelete(){
   yield takeLatest(actionTypes.ON_INIT_DELETE,onDeleteSaga);
   yield takeLatest(actionTypes.ON_INIT_REMOVED,onRemovedSaga);
}