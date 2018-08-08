import React, {Fragment} from 'react';
import {Layout, Icon, Row, Tabs, Spin} from 'antd';
import ContentArea from './content';
const {Content, Footer} = Layout;
const TabPane = Tabs.TabPane;

const TabsRender = (props) => {
  console.log('PROPS IN TABSRENDER', props)
  if (props.onLoading) {
    return (
      <div>
        Loading projects...
      </div>
    )
  } else {
    let projects = props
      .projectData
      .map((item, index) => <TabPane tab={item.name} key={index}>
        <Content>
          Tab1
        </Content>
      </TabPane>);
    console.log('PROJECTS', projects);
    return (projects)
  }

}

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Fragment>

        {this.props.onLoading
          ? (
            <div
              className="example_spinner_table_load"
              style={{
              background: 'transparent'
            }}><Spin size="large"/></div>
          )
          : (
            <Tabs defaultActiveKey="1">

              {this
                .props
                .projectData
                .map((item, index) => <TabPane tab={item.name} key={index + 1}>
                  <Content>
                    <ContentArea project_name={item.name}/>
                  </Content>
                </TabPane>)}

            </Tabs>
          )}

      </Fragment>
    );
  }
}

export default Project;