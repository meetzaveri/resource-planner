import React from 'react';
import {NavLink} from "react-router-dom";
import {Layout, Menu} from 'antd';
import {routes} from '../routes/routes';
const {Sider} = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    defaultSelectedKeys: 'sub1'
  };
  componentDidMount() {
    console.log('menu selected item key', this.props.MenuItemKey)
    this.setState({defaultSelectedKeys: this.props.MenuItemKey})
  }
  onCollapse = (collapsed) => {
    this.setState({collapsed});
  }
  onChangeTab = (e) => {
    console.log('E', e, this.props.MenuItemKey)
    this.setState({defaultSelectedKeys: this.props.MenuItemKey})
  }

  render() {
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}>
        <div className="logo"/>
        <Menu
          defaultOpenKeys={this.props.SubMenuKeyOpen}
          theme="dark"
          mode="inline"
          inlineCollapsed={this.props.subMenuCollapsed}
          defaultSelectedKeys={[this.props.MenuItemKey]}>
          <Menu.Item key="1">
            {/* <Icon type="pie-chart"/> */}
            <NavLink to={routes.index} className="normal">
              Home
            </NavLink>
          </Menu.Item>

          <SubMenu key="sub1" title="Resources">
            <Menu.Item key="3">
              <NavLink
                to={routes.resources.mobile}
                className="normal"
                activeClassName="active">
                Mobile
              </NavLink>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="23">
            {/* <Icon type="pie-chart"/> */}
            <NavLink to={routes.employees} className="normal">
              Employees
            </NavLink>
          </Menu.Item>
          <Menu.Item key="24">
            {/* <Icon type="pie-chart"/> */}
            <NavLink to={routes.projects} className="normal">
              Projects
            </NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SiderDemo;