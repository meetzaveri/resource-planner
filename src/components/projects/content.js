import React, {Fragment} from 'react';

class Content extends React.Component {
    render() {
        return (
            <Fragment>
                <div>{this.props.project_name}
                </div>
            </Fragment>
        )
    }
}

export default Content