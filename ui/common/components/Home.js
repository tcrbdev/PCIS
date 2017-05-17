import React, { Component } from 'react'
import styles from './Home.scss'
import config from '../../config'

import io from 'socket.io-client'

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import { Input, Rating, Button, Header, Icon, Modal, Label, Menu, Table, Segment, Comment, Form, Sidebar, Statistic, Image } from 'semantic-ui-react'

import 'antd/dist/antd.min.css'
import { DatePicker, message, Table as Tables } from 'antd';

// import '../theme/font-awesome/css/font-awesome.css'

let socket = io(`localhost:8080`);

const CommentExampleThreaded = () => (
  <Comment.Group threaded>
    <Header as='h3' dividing>Comments</Header>

    <Comment>
      <Comment.Avatar as='a' src='http://semantic-ui.com/images/avatar/small/matt.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Matt</Comment.Author>
        <Comment.Metadata>
          <span>Today at 5:42PM</span>
        </Comment.Metadata>
        <Comment.Text>How artistic555!</Comment.Text>
        <Comment.Actions>
          <a>Reply</a>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar as='a' src='http://semantic-ui.com/images/avatar/small/elliot.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Elliot Fu</Comment.Author>
        <Comment.Metadata>
          <span>Yesterday at 12:30AM</span>
        </Comment.Metadata>
        <Comment.Text>
          <p>This has been very useful for my research. Thanks as well!</p>
        </Comment.Text>
        <Comment.Actions>
          <a>Reply</a>
        </Comment.Actions>
      </Comment.Content>

      <Comment.Group>
        <Comment>
          <Comment.Avatar as='a' src='http://semantic-ui.com/images/avatar/small/jenny.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>Jenny Hess</Comment.Author>
            <Comment.Metadata>
              <span>Just now</span>
            </Comment.Metadata>
            <Comment.Text>Elliot you are always so right :)</Comment.Text>
            <Comment.Actions>
              <a>Reply</a>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>

    <Comment>
      <Comment.Avatar as='a' src='http://semantic-ui.com/images/avatar/small/joe.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Joe Henderson</Comment.Author>
        <Comment.Metadata>
          <span>5 days ago</span>
        </Comment.Metadata>
        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
        <Comment.Actions>
          <a>Reply</a>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Form reply onSubmit={e => e.preventDefault()}>
      <Form.TextArea />
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
)

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const pagination = {
  total: data.length,
  showSizeChanger: true,
  onShowSizeChange: (current, pageSize) => {
    console.log('Current: ', current, '; PageSize: ', pageSize);
  },
  onChange: (current) => {
    console.log('Current: ', current);
  },
};

const ModalBasicExample = ({
    visibility,
  func
}) => (
    <Modal dimmer="blurring"
      closeOnEscape={true}
      closeOnRootNodeClick={false}
      trigger={<Button>Basic Modal</Button>} basic size='small'>
      <Header icon='archive' content='Archive Old Messages' />
      <Modal.Content>

        <Button onClick={() => func()}>Toggle Visibility {visibility}</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={visibility} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
              <Segment color='red'>
                <CommentExampleThreaded />
                <TableExamplePagination />
              </Segment>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>

      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted>
          <Icon name='remove' /> No
      </Button>
        <Button color='green' inverted>
          <Icon name='checkmark' /> Yes
      </Button>
      </Modal.Actions>
    </Modal>
  )

const TableExamplePagination = () => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>First</Label>
          </Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan='3'>
            <Menu floated='right' pagination>
              <Menu.Item as='a' icon>
                <Icon name='left chevron' />
              </Menu.Item>
              <Menu.Item as='a'>1</Menu.Item>
              <Menu.Item as='a'>2</Menu.Item>
              <Menu.Item as='a'>3</Menu.Item>
              <Menu.Item as='a'>4</Menu.Item>
              <Menu.Item as='a' icon>
                <Icon name='right chevron' />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )
}

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: '',
      visible: false,
      CallTime: 0,
      CounterTimeText: "00:00",
      startCall: null,
      stopCall: null,
      isStartCall: false,
      CounterTimeInterval: null,
      LastTimeText: '00:00',
      rating: 0
    };
  }

  handleChange(date) {
    message.info('Selected Date: ' + date.toString());
    this.setState({ date });
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  padLeft = (nr, n, str) => (Array(n - String(nr).length + 1).join(str || '0') + nr)

  startCall = () => {
    console.log("Start Call")
    var CallTime = 0;
    var CurrentDate = new Date()

    var CounterTimeInterval = setInterval(() => {
      this.setState({ CallTime: ++this.state.CallTime })
      let hours = Math.floor(this.state.CallTime / 3600)
      let minutes = Math.floor((this.state.CallTime / 60) % 60)
      let secounds = Math.floor(this.state.CallTime % 60)
      let time = new Date(CurrentDate.getDate(), CurrentDate.getMonth(), CurrentDate.getYear(), hours, minutes, secounds)
      let CounterTimeText = "";
      if (hours > 0) {
        CounterTimeText = this.padLeft(hours, 2, '0') + ":" + this.padLeft(minutes, 2, '0') + ":" + this.padLeft(secounds, 2, '0')
      } else {
        CounterTimeText = this.padLeft(minutes, 2, '0') + ":" + this.padLeft(secounds, 2, '0')
      }
      this.setState({ CounterTimeText })
    }, 1000)

    this.setState({ isStartCall: true, CounterTimeInterval: CounterTimeInterval })
  }

  stopCall = () => {
    console.log("Stop Call")
    clearInterval(this.state.CounterTimeInterval)
    this.setState({ isStartCall: false, CounterTimeInterval: null, CounterTimeText: '00:00', CallTime: '0', LastTimeText: this.state.CounterTimeText })
  }

  componentDidMount() {
    // var socket = io.connect(`http://${config.host}:${config.serverPort}`);
    //var socket = io.connect(`172.17.3.41:8080`);
    // console.log("from home");

    socket.on('register:users', obj => {
      console.log("------------ FROM Win Application Client -----------------------")
      console.log(obj)
    })

    this.setState({ startCall: this.startCall.bind(this), stopCall: this.stopCall.bind(this) })

  }

  _printObjSignal = (obj) => {
    console.log(obj)
  }

  _sendMessageToClient = () => {
    var clientId = Math.random().toString();

    console.log(clientId);

    socket.emit('register:users', { client: clientId + "__TEST", date: new Date() });
  }

  handleRatingChange = (e, { rating }) => {
    this.setState({ rating })
  }

  render() {
    return (
      <div>
        <span className="fa fa-bell">{this.state.CounterTime}</span>
        <Segment>
          <Statistic.Group>
            <Statistic color='teal' value={this.state.CounterTimeText} label='Call Time' />
            <Statistic color='pink' value={this.state.LastTimeText} label='Last Call Time' />
          </Statistic.Group>
          <Button onClick={() => (this.state.isStartCall ? this.state.stopCall() : this.state.startCall())}>{this.state.isStartCall ? 'Stop Call' : 'Start Call'}</Button>
        </Segment>
        <h2 className="hello-world">Welcome to BabelCoder Wiki!</h2>
        <button onClick={() => this._sendMessageToClient()}>Send Data</button>
        <Input placeholder='Search...' />
        <span>Your select rating : {this.state.rating}</span>
        <Rating icon='star' defaultRating={3} maxRating={4} onRate={this.handleRatingChange} />
        <ModalBasicExample func={this.toggleVisibility} visibility={this.state.visible} />
        <DatePicker onChange={value => this.handleChange(value)} />
        <div style={{ marginTop: 20 }}>Date: {this.state.date.toString()}</div>
        <Segment color='red'>
          <TableExamplePagination />
        </Segment>
        <Segment inverted color='red'>Red</Segment>
        {/*<Tables columns={columns} dataSource={data} pagination={pagination} />*/}
      </div>
    )
  }
}

export default Home
