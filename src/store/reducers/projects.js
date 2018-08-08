import {project_action_types as proj_actions} from '../actions/projects';
import {getInitialTimeSlotObject} from '../../utils';
import _ from 'lodash';

export const projects = (state = {
  data: [],
  onLoading: true,
  onLoadingFormSubmit: false,
  onEditModalClose: false,
  onModalClose: false
}, action) => {
  switch (action.type) {

    case proj_actions.toggleModal:
      if (action.payload === 'EDIT') {
        state = {
          ...state,
          onEditModalClose: !state.onEditModalClose
        }
      } else if (action.payload === 'CREATE') {
        state = {
          ...state,
          onModalClose: !state.onModalClose
        }
      }

      console.log(state);
      return state;

    case proj_actions.fetchProjectsRequested:
      state = {
        ...state,
        onLoading: true
      }
      return state;
    case proj_actions.fetchProjectsSucceded:

      console.log('Action in fetch request success', action);
      let projectsArr = action.projects.data;

      if (projectsArr) {
        state = {
          ...state,
          data: projectsArr,
          onLoading: false
        }

        return state;
      } else {
        state = {
          data: [],
          onLoading: false
        }
        return state;
      }

    case proj_actions.fetchProjectsFailed:
      state = {
        ...state,
        data: [],
        onLoading: false
      }
      console.log('Action in fetch request fail', action);
      return state;

    case proj_actions.postProjectsRequested:
      state = {
        ...state,
        onLoadingFormSubmit: true
      }
      return state;

    case proj_actions.postProjectsSucceded:
      console.log('POST REQUEST SUCCEEDED', action);
      let projectsData = action.projects.data[0];
      console.log('projectsData', projectsData);
      if (projectsData) {
        state = {
          ...state,
          data: [
            ...state.data,
            projectsData
          ],
          onLoading: false,
          onLoadingFormSubmit: false,
          onModalClose: false
        }

      } else {
        state = {
          ...state,
          onLoading: true,
          onLoadingFormSubmit: false,
          onModalClose: false
        }
      }
      console.log('FINAL STATE AFTER POST REQUEST SUCCESS', state);
      return state;

    case proj_actions.postProjectsFailed:
      console.log('POST REQUEST FAILED', action);
      state = {
        ...state,
        onLoading: false
      }
      return state;

    case proj_actions.putProjectsRequested:
      state = {
        ...state,
        onLoadingFormSubmit: true
      }
      return state;

    case proj_actions.putProjectsSucceded:
      console.log('PUT REQUEST SUCCEEDED', action);
      let editProjectsData = action.projects.data[0];
      let id = _.findIndex(state.data, {id: editProjectsData.id});
      state.data[id] = editProjectsData;

      state = {
        ...state,
        onLoading: false,
        onLoadingFormSubmit: false,
        closeModal: true,
        onEditModalClose: false
      }
      console.log(state);
      return state;

    case proj_actions.putProjectsFailed:
      console.log('PUT REQUEST FAILED', action);
      state = {
        ...state,
        onLoading: false
      }
      return state;

    default:
      state = {
        ...state
      }
      return state
  }

}
