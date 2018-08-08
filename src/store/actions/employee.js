export const emp_action_types = {
  fetchUsersRequested: 'employee/FETCH_USERS_REQUESTED',
  fetchUsersSucceded: 'employee/FETCH_USERS_SUCCEEDED',
  fetchUsersFailed: 'employee/FETCH_USERS_FAILED'
}

export const emp_fetchUsersRequested = (params) => ({type: emp_action_types.fetchUsersRequested, payload: params});
export const emp_fetchUsersSucceded = (data) => ({type: emp_action_types.fetchUsersSucceded, payload: data});
export const emp_fetchUsersFailed = (err) => ({type: emp_action_types.fetchUsersFailed, payload: err});