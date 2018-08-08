import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
const {Header} = Layout;

class Headercomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultSelectedKeys: '1'
    }
  }

  onChangeTab = (e) => {
    console.log('E', e)
    this.setState({defaultSelectedKeys: `${e.key}`})
  }
  render() {
    return (

      <Header style={{
        padding: '0',
        background: '#FFF'
      }}>
        <div className="logo"/> {this.props.mobile
          ? (
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{
              lineHeight: '64px'
            }}>
              <Menu.Item key="1" onClick={this.onChange}>Android</Menu.Item>
              <Menu.Item key="2" onClick={this.onChange}>Iphone</Menu.Item>

            </Menu>
          )
          : (null)}
        {this.props.devices
          ? (
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{
              lineHeight: '64px'
            }}>
              <Menu.Item key="1">IOT</Menu.Item>
              <Menu.Item key="2">Other</Menu.Item>
            </Menu>
          )
          : (null)}

      </Header>

    );
  }
}

export default Headercomponent;
