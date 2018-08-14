import React from 'react';
import {Layout} from 'antd';
import Sidebar from '../components/Sidebar';
import Projects from '../components/projects/projects'
import API from '../services/api';
import {connect} from 'react-redux'
import {fetchProjectsRequested, postProjectsRequested, putProjectsRequested} from '../store/actions/projects'
const {Content, Footer} = Layout;

// const treeData = [   {     title: '0-0',     key: '0-0',     children: [  {
//     title: '0-0-0',         key: '0-0-0',         children: [  {  title:
// '0-0-0-0',             key: '0-0-0-0'           }, {          title:
// '0-0-0-1',             key: '0-0-0-1'           }, {    title: '0-0-0-2',
//     key: '0-0-0-2'           }         ] }, {         title: '0-0-1',
// key: '0-0-1',         children: [    {             title: '0-0-1-0',
// key: '0-0-1-0'           }, {            title: '0-0-1-1', key: '0-0-1-1'
//       }, {      title: '0-0-1-2',             key: '0-0-1-2'           }
//    ] }, {         title: '0-0-2',         key: '0-0-2'       }     ]   }, {
// title: '0-1',     key: '0-1',     children: [    {         title: '0-1-0-0',
//        key: '0-1-0-0'       }, { title: '0-1-0-1',  key: '0-1-0-1'       }, {
//         title: '0-1-0-2',  key: '0-1-0-2'     }     ]   }, {     title:
// '0-2',     key: '0-2'   } ];

class ProjectPanel extends React.Component {
  state = {
    projectData: []
  }
  componentDidMount() {
    this
      .props
      .fetchProjectsData();
    // console.log('State Data in componentDidMount()', this.props.project_data);
  }
  render() {
    // console.log('props > project data', this.props.project_data);
    const {data, onLoading} = this.props.project_data;
    let updatedTreeData = [];
    console.log('Data for project', data, updatedTreeData);

    updatedTreeData = data.map((project, id) => {
      let title = 'Teams Assigned';
      let key = project.id;
      let children = project
        .teams_assigned
        .map((team, teamid) => {
          let filteredUsersForEachProject = project
            .users_assigned
            .filter((user, userid) => {
              return user.team_id === team.id
            });
          filteredUsersForEachProject = filteredUsersForEachProject.map((elem, ele_id) => {
            return {title: elem.name, key: elem.id};
          })
          return {title: team.name, key: team.id, children: filteredUsersForEachProject}
        });
      // console.log({title: title, key: key, children: children});
      return {title: title, key: key, children: children};
    });
    console.log('updatedTreeData Last', updatedTreeData);

    return (
      <Layout style={{
        minHeight: '100vh'
      }}>
        <Sidebar MenuItemKey='24' onCollapsedSider={true} subMenuCollapsed={false}/>
        <Layout>

          <Content style={{
            margin: '0 16px'
          }}><Projects
            projectData={data}
            onLoading={onLoading}
            projectTreeData={updatedTreeData}/></Content>
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