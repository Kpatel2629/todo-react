import { put } from 'redux-saga/effects';
import * as actions from '../actions';
import axios from '../../Axios/axios';

export function* onDeleteSaga(action) {
  try{
    yield put(actions.startRequst(true));
      yield axios.delete("todos/"+action.id+".json");
       yield put(actions.Tobe_deleteTodo(action.id));
        yield put(actions.startRequst(false));  
  }
  catch(error) {
      yield put(actions.onError(error));
      yield put(actions.startRequst(false));
      }  
  }

  export function* onRemovedSaga(action) {
    try { 
    let removetodo = {id:action.id,isCompleted:action.completed,name:action.name}
      yield axios.put("todos/"+action.id+".json",removetodo);
      yield put(actions.Tobe_Removed(action.id,action.completed));
    }
    catch(error) {
      yield put(actions.onError(error));
    }
  }