import React from 'react';
import {Layout} from 'antd';
import Sidebar from '../components/Sidebar';
import Projects from '../components/projects/projects'
import API from '../services/api';
import {connect} from 'react-redux'
import {fetchProjectsRequested, postProjectsRequested, putProjectsRequested} from '../store/actions/projects'
const {Content, Footer} = Layout;

class ProjectPanel extends React.Component {
  state = {}
  componentDidMount() {
    this
      .props
      .fetchProjectsData();
  }
  render() {
    console.log('props > project data', this.props.project_data);
    const {data, onLoading} = this.props.project_data;
    return (
      <Layout style={{
        minHeight: '100vh'
      }}>
        <Sidebar MenuItemKey='24' onCollapsedSider={true} subMenuCollapsed={false}/>
        <Layout>

          <Content style={{
            margin: '0 16px'
          }}><Projects projectData={data} onLoading={onLoading}/></Content>
          <Footer style={{
            textAlign: 'center'
          }}></Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({project_data: state.projects});
const mapDispatchToProps = dispatch => {
  return {
    fetchProjectsData: () => dispatch(fetchProjectsRequested({method: 'GET'}))
  }
}
const ProjectContainerConnector = connect(mapStateToProps, mapDispatchToProps)(ProjectPanel)

export default ProjectContainerConnector;