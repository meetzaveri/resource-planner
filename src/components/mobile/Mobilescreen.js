import React from 'react';
import {Layout, Icon, Tabs} from 'antd';
import Contentarea from './content';
import Form from './createform'
import Loadable from 'react-loadable';

const {Content, Footer} = Layout;
const TabPane = Tabs.TabPane;

const customTab_1 = <span>
  <Icon type="android"/>Android
</span>

const customTab_2 = <span>
  <Icon type="apple"/>iPhone
</span>

const Loading = () => (
  <div>
    Loading ...
  </div>
);

const SidebarLoader = Loadable({
  loader: () => import ('../Sidebar'),
  loading: Loading
});

const CalendarLoader = Loadable({
  loader: () => import ('./calendar.js'),
  loading: Loading
});

const MobileScreen = (props) => {
  return (
    <Layout style={{
      minHeight: '100vh'
    }}>
      <SidebarLoader
        MenuItemKey='3'
        onCollapsedSider={true}
        SubMenuKeyOpen='sub1'
        subMenuCollapsed={true}/>
      <Layout>
        <Tabs defaultActiveKey="1">
          <TabPane tab={customTab_1} key="1">
            <Content>
              <Form {...props}/>
              <Contentarea {...props} android/>
            </Content>
            {props.onLoadingForCalendar || props.onLoadingFormSubmit
              ? (null)
              : (<CalendarLoader {...props}/>)}

          </TabPane>
          <TabPane tab={customTab_2} key="2">
            <Content>
              <Form {...props}/>
              <Content></Content>
              <Contentarea {...props} iphone/>
            </Content>
          </TabPane>

        </Tabs>

        <Footer style={{
          textAlign: 'center'
        }}></Footer>
      </Layout>
    </Layout>
  );
}

export default MobileScreen;