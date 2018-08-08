import {emp_action_types as emp_actions} from '../actions/employee';
import _ from 'lodash';

export const employee_reducer = (state = {
  data: [],
  onLoading: false,
  onLoadingFormSubmit: false,
  onEditModalClose: false,
  onModalClose: false
}, action) => {
  switch (action.type) {

    case emp_actions.fetchUsersRequested:
      state = {
        ...state,
        onLoading: true
      }
      return state;

    case emp_actions.fetchUsersSucceded:

      console.log('Action in fetch request success', action);
      let emp_dataArr = action.emp_lists.data;
      if (emp_dataArr) {
        state = {
          ...state,
          data: emp_dataArr,
          onLoading: false
        }

        return state;
      } else {
        state = {
          ...state,
          data: [],
          onLoading: false
        }
        return state;
      }

    case emp_actions.fetchUsersFailed:
      state = {
        ...state,
        data: [],
        onLoading: false
      }
      console.log('Action in fetch request fail', action);
      return state;

    default:
      state = {
        ...state
      }
      return state
  }

}