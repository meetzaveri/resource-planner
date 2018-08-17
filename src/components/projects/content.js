import React, {Fragment} from 'react';
import {Tree} from 'antd';
import ColumnChart from './columnchart';
import './custom.css'
const TreeNode = Tree.TreeNode;

class Content extends React.Component {
  state = {
    expandedKeys: [],
    autoExpandParent: true,
    checkedKeys: ['0-0-0'],
    selectedKeys: []
  }

  componentDidMount() {
    // console.log('projectTreeData in CDM', this.props.projectTreeData);
    let treedata = [];
    treedata.push(this.props.projectTreeData);
    console.log()
    this.setState({
      expandedKeys: [this.props.projectTreeData.key]
    })
  }

  onExpand = (expandedKeys) => {
    console.log('onExpand', expandedKeys);

    // if not set autoExpandParent to false, if children expanded, parent can not
    // collapse. or, you can remove all expanded children keys.
    this.setState({expandedKeys, autoExpandParent: false});
  }

  onCheck = (checkedKeys) => {
    console.log('onCheck', checkedKeys);
    this.setState({checkedKeys});
  }

  onSelect = (selectedKeys, info) => {
    console.log('onSelect', info);
    this.setState({selectedKeys});
  }

  renderTreeNodes = (data) => {
    // console.log('data in renderTreeNodes', data);
    return data.map((item) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item}/>;
    });
  }

  render() {
    console.log('projectTreeData', this.props.projectTreeData);
    let treedata = [];
    treedata.push(this.props.projectTreeData);

    return (
      <Fragment>
        <div>
          <h1>Project - {this.props.project_name}</h1>
        </div>
        <div>
          <Tree
            onExpand={this.onExpand}
            expandedKeys={this.state.expandedKeys}
            autoExpandParent={this.state.autoExpandParent}
            onSelect={this.onSelect}
            selectedKeys={this.state.selectedKeys}>
            {this.renderTreeNodes(treedata)}
          </Tree>
        </div>
        <ColumnChart
          {...this.props}
          chartid={`chart_id_` + this.props.project_temp_id}/>
      </Fragment>
    )
  }
}

export default Content