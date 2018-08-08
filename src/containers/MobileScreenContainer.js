import React, {Component} from 'react';
import MobileScreenComponent from '../components/mobile/Mobilescreen'
import {connect} from 'react-redux'
import {postResourceRequested, fetchResourceRequested, putResourceRequested, toggleModal} from '../store/actions/mobile'

class MobileScreen extends Component {
  state = {
    formValueStatus: '',
    formValueDescription: '',
    formValueDevice_info: '',
    formValueTeamName: '',
    formTimeSlotInput: '',
    formTimeSlotStartTime: '',
    formTimeSlotEndTime: '',
    editFormValueStatus: '',
    editFormValueDevice_info: '',
    editFormValueTeamName: '',
    editFormValueDescription: ' ',
    editResourceFormTimeSlotInput: '',
    editResourceFormTimeSlotInputStartTime: '',
    editResourceFormTimeSlotInputEndTime: '',
    editResourceStartTime: '',
    editResourceEndTime: '',
    mobileType: '',
    editModalVisible: false
  };
  componentDidMount() {
    this
      .props
      .fetchResource();
  }

  onHandleCreateFormClose = () => {
    this
      .props
      .toggleModal('CREATE');
  }

  onHandleCreateResourceFormAndroid = event => {
    console.log('event', event, event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value, mobileType: 'Android'});
  };

  handleFormTimeRange = (timestring) => {
    console.log('Timestring', timestring);
    this.setState({formTimeSlotInput: timestring})
  }

  handleFormTimeRangeForStartTimeAndEndTime = (timestring) => {
    console.log('Timestring for start time and end time', timestring);
    this.setState({formTimeSlotStartTime: timestring[0]});
    this.setState({formTimeSlotEndTime: timestring[1]})
  }

  handleFormTimeRangeForStartTime = (timestring) => {
    console.log('Timestring', timestring);
    this.setState({formTimeSlotStartTime: timestring})
  }

  handleFormTimeRangeForEndTime = (timestring) => {
    console.log('Timestring', timestring);
    this.setState({formTimeSlotEndTime: timestring})
  }

  onCreateResourceForAndroid = (event) => {
    const {
      formValueDevice_info,
      formValueStatus,
      formTimeSlotInput,
      formValueTeamName,
      formValueDescription,
      mobileType,
      formTimeSlotStartTime,
      formTimeSlotEndTime
    } = this.state;
    const sendObj = {
      deviceInfo: formValueDevice_info,
      status: formValueStatus,
      timeSlot: formTimeSlotInput,
      teamName: formValueTeamName,
      description: formValueDescription,
      startTime: formTimeSlotStartTime,
      endTime: formTimeSlotEndTime,
      loading: false,
      mobileType: mobileType
    }

    this
      .props
      .addresource(sendObj);
  }

  onHandleLoading = () => {
    this.setState({})
  }

  onEditResourceForAndroid = (event, cb) => {
    const {
      editFormResourceId,
      editFormValueDevice_info,
      editFormValueDescription,
      editFormValueStatus,
      editFormValueTeamName,
      editResourceFormTimeSlotInput,
      editResourceStartTime,
      editResourceEndTime
    } = this.state;
    const sendObj = {
      id: editFormResourceId,
      deviceInfo: editFormValueDevice_info,
      status: editFormValueStatus,
      timeSlot: editResourceFormTimeSlotInput,
      teamName: editFormValueTeamName,
      description: editFormValueDescription,
      startTime: editResourceStartTime,
      endTime: editResourceEndTime,
      loading: false,
      mobileType: 'Android'
    }

    this
      .props
      .editResource(sendObj);
  }
  onHandleEditForAndroid = (event, item) => {
    console.log('On edit', event, item);
    this.setState({
      editFormResourceId: item.id,
      editModalVisible: true,
      editFormValueDevice_info: item.deviceInfo,
      editFormValueDescription: item.description,
      editFormValueStatus: item.status,
      editFormValueTeamName: item.teamName,
      editResourceFormTimeSlotInput: item.timeSlot,
      editResourceStartTime: item.startTime,
      editResourceEndTime: item.endTime
    });
    this
      .props
      .toggleModal('EDIT')

  }

  onHandleEditFormClose = () => {
    this
      .props
      .toggleModal('EDIT');
  }

  onHandleeditResourceFormAndroid = (event, item) => {
    console.log('Event ', event, item)
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value, mobileType: 'Android'});
  }

  onToggleEditFormTimeSlot = (event) => {
    this.setState({editResourceFormTimeSlotInput: null})
  }

  handleEditFormResourceTimeRange = (time, timestring) => {
    console.log('Timestring', timestring);
    this.setState({editResourceFormTimeSlotInput: timestring})
  }

  resetAllFormValues = () => {
    this.setState({formValueStatus: '', formValueDescription: '', formValueDevice_info: '', formValueTeamName: '', formTimeSlotInput: ''});
    this
      .props
      .toggleModal('CREATE');
  }
  render() {
    const {
      onHandleCreateResourceFormAndroid,
      onHandleeditResourceFormAndroid,
      handleEditFormResourceTimeRange,
      onCreateResourceForAndroid,
      handleFormTimeRange,
      resetAllFormValues,
      onHandleEditForAndroid,
      onToggleEditFormTimeSlot,
      onEditResourceForAndroid,
      onHandleEditFormClose,
      handleFormTimeRangeForStartTime,
      handleFormTimeRangeForEndTime,
      handleFormTimeRangeForStartTimeAndEndTime,
      onHandleCreateFormClose
    } = this;
    const actions = {
      onHandleCreateResourceFormAndroid,
      handleEditFormResourceTimeRange,
      onToggleEditFormTimeSlot,
      onHandleeditResourceFormAndroid,
      onHandleEditForAndroid,
      onCreateResourceForAndroid,
      handleFormTimeRange,
      resetAllFormValues,
      onEditResourceForAndroid,
      handleFormTimeRangeForStartTime,
      handleFormTimeRangeForEndTime,
      handleFormTimeRangeForStartTimeAndEndTime,
      onHandleEditFormClose,
      onHandleCreateFormClose
    };
    const {
      data,
      onLoading,
      onEditModalClose,
      onLoadingFormSubmit,
      closeModal,
      onModalClose,
      currentTimeSlotData
    } = this.props.fetchedResources;
    return (<MobileScreenComponent
      resources={data}
      giveCalendarProps={currentTimeSlotData}
      editModalVisible={onEditModalClose}
      createModalVisible={onModalClose}
      onLoadingForAndroid={onLoading}
      onLoadingForCalendar={onLoading}
      onLoadingFormSubmit={onLoadingFormSubmit}
      closeModal={closeModal}
      actions={actions}
      state={this.state}/>);
  }
}

const mapStateToProps = state => ({mobile_resources: state.mobile, fetchedResources: state.res_req_mob});
const mapDispatchToProps = dispatch => {
  return {
    addresource: (obj) => dispatch(postResourceRequested({method: 'POST', data: obj})),
    fetchResource: () => dispatch(fetchResourceRequested({method: 'GET'})),
    editResource: (obj) => dispatch(putResourceRequested({method: 'PUT', data: obj})),
    toggleModal: (state) => dispatch(toggleModal(state))
  }
}

const MobileScreenConnector = connect(mapStateToProps, mapDispatchToProps)(MobileScreen)

export default MobileScreenConnector;