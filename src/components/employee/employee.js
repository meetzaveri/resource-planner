import React, {Fragment} from 'react';
import EmpTable from './table';

class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Fragment>
        <EmpTable {...this.props}/>
      </Fragment>
    );
  }
}

export default Employee;