import React from 'react';
import {Layout} from 'antd';
import Sidebar from '../components/Sidebar';
import EmployeeComponent from '../components/employee/employee';
import API from '../services/api';
import {connect} from 'react-redux'
import {emp_fetchUsersRequested} from '../store/actions/employee'
const {Content, Footer} = Layout;

class EmployeePage extends React.Component {
  state = {
    employeeData: [
      {
        key: '1',
        name: 'John Brown',
        email: 32,
        address: 'New York No. 1 Lake Park'
      }, {
        key: '2',
        name: 'Jim Green',
        email: 42,
        address: 'London No. 1 Lake Park'
      }, {
        key: '3',
        name: 'Joe Black',
        email: 32,
        address: 'Sidney No. 1 Lake Park'
      }
    ]
  }
  componentDidMount() {
    this
      .props
      .fetchEmployeeData();
  }
  render() {
    const {data, onLoading} = this.props.emp_data;
    console.log('Emp Data', data);
    return (
      <Layout style={{
        minHeight: '100vh'
      }}>
        <Sidebar MenuItemKey='23' onCollapsedSider={true} subMenuCollapsed={false}/>
        <Layout>

          <Content style={{
            margin: '0 16px'
          }}><EmployeeComponent onLoading={onLoading} employeeData={data}/></Content>
          <Footer style={{
            textAlign: 'center'
          }}></Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({emp_data: state.employee});
const mapDispatchToProps = dispatch => {
  return {

    fetchEmployeeData: () => dispatch(emp_fetchUsersRequested({method: 'GET', url: API.listEmployees}))
  }
}

const EmployeeScreenConnector = connect(mapStateToProps, mapDispatchToProps)(EmployeePage)

export default EmployeeScreenConnector;