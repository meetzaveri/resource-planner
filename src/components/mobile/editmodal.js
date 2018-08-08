import React from 'react';
import moment from 'moment';
import {
  Modal,
  Button,
  Form,
  Icon,
  TimePicker,
  Spin
} from 'antd';
const FormItem = Form.Item;
// const Option = Select.Option; const AutoCompleteOption = AutoComplete.Option;
// const MonthPicker = DatePicker.MonthPicker; const RangePicker =
// DatePicker.RangePicker;
const antIcon = <Icon type="loading" style={{
  fontSize: 14
}} spin/>;

const DropDownForAdminData = (props) => {
  const adminAccounts = ['Available', 'In use', 'Broken'];

  // console.log('Appinstances', adminAccounts);
  if (adminAccounts) {
    const accounts = adminAccounts.map((item, index) => <option key={index} value={item}>{item}</option>)
    return (accounts)
  } else {
    const accounts = <option value="None">Account Name</option>
    return (accounts)
  }
}

class Editform extends React.Component {
  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false
  }

  handleOk = () => {
    // this.setState({ModalText: 'The modal will be closed after two seconds',
    // confirmLoading: true}); setTimeout(() => {   this.setState({visible: false,
    // confirmLoading: false}); }, 2000);
    this
      .props
      .actions
      .onHandleEditFormClose();
  }

  handleCancel = () => {

    this
      .props
      .actions
      .onHandleEditFormClose();
  }

  showModal = () => {
    this.setState({visible: true});
    this
      .props
      .actions
      .resetAllFormValues();
  }

  onHandleTimeRange = (time, timeString) => {
    console.log(time, timeString);
    this
      .props
      .actions
      .handleEditFormResourceTimeRange(timeString);
  }

  render() {

    const {visible, confirmLoading, ModalText} = this.state;
    const {editFormValueDevice_info, editFormValueStatus, editFormValueTeamName, editFormValueDescription} = this.props.state;
    const {closeModal} = this.props;
    const action = this.props.onEditShowModal;
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 8
        }
      },
      wrapperCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 16
        }
      }
    };

    return (

      <Modal
        footer={null}
        title="Edit a resource slot"
        visible={this.props.editModalVisible}
        onOk={this.handleOk}
        confirmLoading={confirmLoading}
        onCancel={this.handleCancel}>
        <form
          onSubmit={(e) => {
          e.preventDefault();
          this
            .props
            .actions
            .onEditResourceForAndroid(e, () => {
              this.handleCancel
            });
        }}>

          <FormItem {...formItemLayout} label="Device info">
            <input
              type="text"
              required
              name="editFormValueDevice_info"
              className="form-control"
              id="formValueDevice_info"
              placeholder="Device info"
              value={editFormValueDevice_info}
              onChange={e => {
              this
                .props
                .actions
                .onHandleeditResourceFormAndroid(e);
            }}/>
          </FormItem>

          <FormItem {...formItemLayout} label="Select Status">
            <div className="form-group">
              <div className="checkbox">
                <select
                  name="editFormValueStatus"
                  value={editFormValueStatus}
                  onChange={e => {
                  this
                    .props
                    .actions
                    .onHandleeditResourceFormAndroid(e);
                }}>
                  <DropDownForAdminData {...this.props}/></select>
              </div>
            </div>

          </FormItem>

          <FormItem {...formItemLayout} label="Time Slot">
            {this.props.state.editResourceFormTimeSlotInput
              ? (
                <a onClick={this.props.actions.onToggleEditFormTimeSlot}>
                  {this.props.state.editResourceFormTimeSlotInput}</a>
              )
              : (<TimePicker
                onChange={this.props.actions.handleEditFormResourceTimeRange}
                defaultOpenValue={moment('00:00;:00', 'HH:mm:ss')}/>)}

          </FormItem>

          <FormItem {...formItemLayout} label="Team name">
            <input
              type="text"
              required
              name="editFormValueTeamName"
              className="form-control"
              id="formValueTeamName"
              placeholder="Team name"
              value={editFormValueTeamName}
              onChange={e => {
              this
                .props
                .actions
                .onHandleeditResourceFormAndroid(e);
            }}/>
          </FormItem>

          <FormItem {...formItemLayout} label="Description">
            <textarea
              type="email"
              required
              name="editFormValueDescription"
              className="form-control"
              id="formValueDescription"
              placeholder="Description"
              value={editFormValueDescription}
              onChange={e => {
              this
                .props
                .actions
                .onHandleeditResourceFormAndroid(e);
            }}/>
          </FormItem>
          <button type="submit" className="btn btn-default">
            Edit {/* {this.props.onLoadingFormSubmit
              ? (<Spin
                style={{
                paddingLeft: '4px'
              }}
                size="small"
                indicator={antIcon}/>)
              : (null)} */}

          </button>
        </form>
      </Modal>
    );
  }
}

export default Editform