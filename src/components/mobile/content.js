import React from 'react';
import {
  Card,
  Col,
  Row,
  Spin,
  Button,
  Icon
} from 'antd';
import EditformModal from './editmodal';

const CardComponentForIphone = (props) => {
  const arr = props.resources;
  const card = arr.map((Item, index) => (
    <Col
      key={index}
      span={8}
      style={{
      paddingLeft: '8px',
      paddingRight: '8px'
    }}>
      <Card title="Card title" bordered={false}>Card content</Card>
    </Col>
  ));
  return (card)
}

const CustomExtraContent = (props) => (
  <div>
    <h3>{props.title}
    </h3>
    <Button type="primary" onClick={props.onHandleEditForAndroid}>
      <Icon type="edit"></Icon>
    </Button>
  </div>
);

const CardComponentForAndroid = (props) => {
  const arr = props.resources;
  const onLoadingForAndroid = props.onLoadingForAndroid;

  console.log('Resources', arr, onLoadingForAndroid);
  let card = null;
  if (onLoadingForAndroid) {
    return (
      <div>
        <Spin/>
      </div>
    )
  } else {
    card = arr.map((item, index) => (
      <Col
        key={index}
        span={8}
        style={{
        paddingLeft: '8px',
        paddingRight: '8px'
      }}>
        <EditformModal {...props}/>
        <Card
          title={item.deviceInfo}
          extra={< CustomExtraContent title = {
          item.mobileType
        }
        onHandleEditForAndroid = {
          (e) => props
            .actions
            .onHandleEditForAndroid(e, item)
        } />}
          bordered={false}>
          <Row>Status - {item.status}</Row>
          <Row>
            Team name - {item.teamName}
          </Row>
          <Row>Description - {item.description}</Row>
          <Row>Timeslot - {item.timeSlot}
          </Row>
          <Row>
            <Col span={10}>Start time - {item.startTime}</Col>

            <Col span={10}>End time - {item.endTime}
            </Col>
          </Row>
        </Card>
      </Col>
    ));
    return (card)
  }
}

const Content = (props) => {
  if (props.android) {
    return (
      <div>
        <br/>
        <div
          style={{
          background: '#ECECEC',
          padding: '30px'
        }}>
          <Row gutter={16}>
            <h3>
              Ongoing slots
            </h3>
            <CardComponentForAndroid {...props}/>
          </Row>
        </div>
      </div>
    );
  } else if (props.iphone) {
    return (
      <div>
        <br/>
        <div
          style={{
          background: '#ECECEC',
          padding: '30px'
        }}>
          <Row gutter={16}>
            <h3>
              Ongoing slots
            </h3>
            <CardComponentForIphone {...props}/>
          </Row>
        </div>
      </div>
    );
  }
}

export default Content