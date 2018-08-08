import {mb_action_types as m_actions} from '../actions/mobile';
import {getInitialTimeSlotObject} from '../../utils';
import _ from 'lodash';

export const resourcerequest_android = (state = {
  data: [],
  onLoading: false,
  onLoadingFormSubmit: false,
  onEditModalClose: false,
  onModalClose: false,
  currentTimeSlotData: []
}, action) => {
  switch (action.type) {

    case m_actions.toggleModal:
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

    case m_actions.fetchResourceRequested:
      state = {
        ...state,
        onLoading: true
      }
      return state;
    case m_actions.fetchResourceSucceded:

      console.log('Action in fetch request success', action);
      let resourceArr = action.resource.data;

      let timeSlotObjForFetch = resourceArr.map((item, index) => getInitialTimeSlotObject(item.deviceInfo, item.startTime, item.endTime, item.id));
      console.log('Timeslotobj', timeSlotObjForFetch, state);
      if (resourceArr) {
        state = {
          ...state,
          currentTimeSlotData: timeSlotObjForFetch,
          data: resourceArr,
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

    case m_actions.fetchResourceFailed:
      state = {
        ...state,
        data: [],
        onLoading: false
      }
      console.log('Action in fetch request fail', action);
      return state;

    case m_actions.postResourceRequested:
      state = {
        ...state,
        onLoadingFormSubmit: true
      }
      return state;

    case m_actions.postResourceSucceded:
      console.log('POST REQUEST SUCCEEDED', action);
      let resourceData = action.resource.data[0];
      let timeSlotForPostResource = getInitialTimeSlotObject(resourceData.deviceInfo, resourceData.startTime, resourceData.endTime);
      console.log('resourceData', resourceData);
      if (resourceData) {
        state = {
          ...state,
          data: [
            ...state.data,
            resourceData
          ],
          currentTimeSlotData: [
            ...state.currentTimeSlotData,
            timeSlotForPostResource
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

    case m_actions.postResourceFailed:
      console.log('POST REQUEST FAILED', action);
      state = {
        ...state,
        onLoading: false
      }
      return state;

    case m_actions.putResourceRequested:
      state = {
        ...state,
        onLoadingFormSubmit: true
      }
      return state;

    case m_actions.putResourceSucceded:
      console.log('PUT REQUEST SUCCEEDED', action);
      let editResourceData = action.resource.data[0];
      let id = _.findIndex(state.data, {id: editResourceData.id});
      state.data[id] = editResourceData;

      state = {
        ...state,
        onLoading: false,
        onLoadingFormSubmit: false,
        closeModal: true,
        onEditModalClose: false
      }
      console.log(state);
      return state;

    case m_actions.putResourceFailed:
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

export const mobile = (state = [], action) => {
  // console.log('Action ', action);

  switch (action.type) {
    case m_actions.addresource:
      {
        const {deviceInfo, status, timeSlot, teamName, description} = action.payload;
        console.log('SUCCESS', deviceInfo, status, timeSlot, teamName, description);
        let success = {
          message: 'success'
        };
        action.onLoadCb(success, null);
        return [
          ...state, {
            deviceInfo,
            status,
            timeSlot,
            teamName,
            description
          }
        ]
      }
    default:
      return state
  }
}