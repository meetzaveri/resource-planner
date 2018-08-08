import React from 'react';
import moment from 'moment';
import {
  Modal,
  Button,
  Form,
  Icon,
  TimePicker,
  DatePicker,
  Spin
} from 'antd';
const FormItem = Form.Item;
const {RangePicker} = DatePicker;
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
function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}
function onOk(value) {
  console.log('onOk: ', value);
}
class Createform extends React.Component {
  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false
  }

  handleOk = () => {
    this.setState({ModalText: 'The modal will be closed after two seconds', confirmLoading: true});
    setTimeout(() => {
      this.setState({visible: false, confirmLoading: false});
    }, 2000);
    this
      .props
      .actions
      .onHandleCreateFormClose();
  }

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({visible: false});
    this
      .props
      .actions
      .onHandleCreateFormClose();
  }

  showModal = () => {
    this.setState({visible: true});
    this
      .props
      .actions
      .resetAllFormValues();
  }

  onChangeStartTimeAndEndTime = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
    this
      .props
      .actions
      .handleFormTimeRangeForStartTimeAndEndTime(dateString);
  }

  onHandleTimeRange = (time, timeString) => {
    console.log(time, timeString);
    this
      .props
      .actions
      .handleFormTimeRange(timeString);
  }

  onHandleTimeRangeForStartTime = (time, timeString) => {
    console.log(time, timeString);
    this
      .props
      .actions
      .handleFormTimeRangeForStartTime(timeString);
  }

  onHandleTimeRangeForEndTime = (time, timeString) => {
    console.log(time, timeString);
    this
      .props
      .actions
      .handleFormTimeRangeForEndTime(timeString);
  }

  render() {

    const {visible, confirmLoading, ModalText} = this.state;
    const {formValueDevice_info, formValueStatus, formValueTeamName, formValueDescription} = this.props.state;
    const {closeModal} = this.props;
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
      <div
        style={{
        background: 'transparent',
        padding: '5px 30px'
      }}>
        <Button type="primary" onClick={this.showModal}>Create a resource</Button>
        <Modal
          width='600px'
          footer={null}
          title="Add a resource slot"
          visible={this.props.createModalVisible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}>
          <form
            onSubmit={(e) => {
            e.preventDefault();
            this
              .props
              .actions
              .onCreateResourceForAndroid(e, () => {
                this.handleCancel
              });
          }}>

            <FormItem {...formItemLayout} label="Device info">
              <input
                type="text"
                required
                name="formValueDevice_info"
                className="form-control"
                id="formValueDevice_info"
                placeholder="Device info"
                value={this.props.state.formValueDevice_info}
                onChange={e => {
                this
                  .props
                  .actions
                  .onHandleCreateResourceFormAndroid(e);
              }}/>
            </FormItem>

            <FormItem {...formItemLayout} label="Select Status">
              <div className="form-group">
                <div className="checkbox">
                  <select
                    name="formValueStatus"
                    value={this.props.state.formValueStatus}
                    onChange={e => {
                    this
                      .props
                      .actions
                      .onHandleCreateResourceFormAndroid(e);
                  }}>
                    <DropDownForAdminData {...this.props}/></select>
                </div>
              </div>

            </FormItem>

            <FormItem {...formItemLayout} label="Total time allocation">
              <TimePicker
                onChange={this.onHandleTimeRange}
                defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}/>
            </FormItem>

            <FormItem {...formItemLayout} label="Time range">
              <div>
                <RangePicker
                  showTime={{
                  format: 'HH:mm'
                }}
                  format="YYYY-MM-DD HH:mm"
                  placeholder={['Start Time', 'End Time']}
                  onChange={this.onChangeStartTimeAndEndTime}
                  onOk={onOk}/>
              </div>
            </FormItem>

            <FormItem {...formItemLayout} label="Team name">
              <input
                type="text"
                required
                name="formValueTeamName"
                className="form-control"
                id="formValueTeamName"
                placeholder="Team name"
                value={this.props.state.formValueTeamName}
                onChange={e => {
                this
                  .props
                  .actions
                  .onHandleCreateResourceFormAndroid(e);
              }}/>
            </FormItem>

            <FormItem {...formItemLayout} label="Description">
              <textarea
                type="email"
                required
                name="formValueDescription"
                className="form-control"
                id="formValueDescription"
                placeholder="Description"
                value={this.props.state.formValueDescription}
                onChange={e => {
                this
                  .props
                  .actions
                  .onHandleCreateResourceFormAndroid(e);
              }}/>
            </FormItem>
            <button type="submit" className="btn btn-default">
              Add {this.props.onLoadingFormSubmit
                ? (<Spin
                  style={{
                  paddingLeft: '4px'
                }}
                  size="small"
                  indicator={antIcon}/>)
                : (null)}

            </button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Createform