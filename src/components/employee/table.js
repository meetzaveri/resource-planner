import React from 'react';
import {Table, Icon, Divider, Spin} from 'antd';

const columns = [
  {
    title: 'Employee Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>
  }, {
    title: 'Email',
    dataIndex: 'email',
    key: 'email'
  }, {
    title: 'Address',
    dataIndex: 'address.street',
    key: 'address.street'
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;">Action 一 {record.name}</a>
        <Divider type="vertical"/>
        <a href="javascript:;">Delete</a>
        <Divider type="vertical"/>
        <a href="javascript:;" className="ant-dropdown-link">
          More actions
          <Icon type="down"/>
        </a>
      </span>
    )
  }
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  }
];

const EmpTable = (props) => (props.onLoading
  ? (
    <div className="example_spinner_table_load"><Spin size="large"/></div>
  )
  : (<Table columns={columns} dataSource={props.employeeData}/>));

export default EmpTable;