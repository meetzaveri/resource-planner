import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {fakeApiCall_A, RealApiCall, fakeApiCall_Projects} from '../services/index';
import {mb_action_types} from '../store/actions/mobile';
import {emp_action_types} from '../store/actions/employee';
import {project_action_types} from '../store/actions/projects';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function * fetchResource(action) {
  try {
    console.log('Saga in use for fetch resource')
    const resource = yield call(fakeApiCall_A, action.payload);
    console.log('Resource', resource)
    yield put({type: mb_action_types.fetchResourceSucceded, resource: resource});
  } catch (e) {
    console.log('Into catch block')
    yield put({type: mb_action_types.fetchResourceFailed, message: e.message});
  }
}

function * postResource(action) {
  try {
    console.log('Saga in use for fetch resource')
    const resource = yield call(fakeApiCall_A, action.payload);
    console.log('Resource', resource)
    yield put({type: mb_action_types.postResourceSucceded, resource: resource});
  } catch (e) {
    console.log('Into catch block')
    yield put({type: mb_action_types.postResourceFailed, message: e.message});
  }
}

function * putResource(action) {
  try {
    console.log('Saga in use for fetch resource')
    const resource = yield call(fakeApiCall_A, action.payload);
    console.log('Resource', resource)
    yield put({type: mb_action_types.putResourceSucceded, resource: resource});
  } catch (e) {
    console.log('Into catch block')
    yield put({type: mb_action_types.putResourceFailed, message: e.message});
  }
}

function * fetchEmployeeData(action) {
  try {
    console.log('Saga in use for fetch employee')
    const employees = yield call(RealApiCall, action.payload);
    console.log('employees', employees)
    yield put({type: emp_action_types.fetchUsersSucceded, emp_lists: employees});
  } catch (e) {
    console.log('Into catch block')
    yield put({type: emp_action_types.fetchUsersFailed, message: e.message});
  }
}

function * fetchProjectsData(action) {
  try {
    console.log('Saga in use for fetch project')
    const projects = yield call(fakeApiCall_Projects, action.payload);
    console.log('projects', projects)
    yield put({type: project_action_types.fetchProjectsSucceded, projects: projects});
  } catch (e) {
    console.log('Into catch block')
    yield put({type: project_action_types.fetchProjectsFailed, message: e.message});
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function * mySaga() {
  console.log('Calling main saga');
  yield takeLatest(mb_action_types.fetchResourceRequested, fetchResource);
  yield takeLatest(mb_action_types.postResourceRequested, postResource);
  yield takeLatest(mb_action_types.putResourceRequested, putResource);
  yield takeLatest(emp_action_types.fetchUsersRequested, fetchEmployeeData);
  yield takeLatest(project_action_types.fetchProjectsRequested, fetchProjectsData);
}

export default mySaga;