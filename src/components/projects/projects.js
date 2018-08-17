import React, {Fragment} from 'react';
import {Layout, Icon, Row, Tabs, Spin} from 'antd';
import Loadable from 'react-loadable';
const {Content, Footer} = Layout;
const TabPane = Tabs.TabPane;

const Loading = () => (
  <div>
    Loading ...
  </div>
);

const ContentAreaLoader = Loadable({
  loader: () => import ('./content'),
  loading: Loading
});

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
                    <ContentAreaLoader
                      project_temp_id={index + 1}
                      project_name={item.name}
                      project_data={item}
                      projectTreeData={this.props.projectTreeData[index]}/>
                  </Content>
                </TabPane>)}

            </Tabs>
          )}

      </Fragment>
    );
  }
}

export default Project;