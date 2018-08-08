import React from 'react';
import {Layout} from 'antd';
import Sidebar from '../components/Sidebar';
const {Content, Footer} = Layout;

class Homepage extends React.Component {
  render() {
    return (
      <Layout style={{
        minHeight: '100vh'
      }}>
        <Sidebar/>
        <Layout>

          <Content style={{
            margin: '0 16px'
          }}></Content>
          <Footer style={{
            textAlign: 'center'
          }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Homepage;