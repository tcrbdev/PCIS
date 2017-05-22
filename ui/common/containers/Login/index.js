import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './Login.scss'
import { iniAnimate, iniBubble, iniNetWorkAnimate } from '../../../client/vendor/demo-1.js'

// let width = undefined
// let height = undefined
// let largeHeader = undefined
// let canvas = undefined
// let ctx = undefined
// let points = undefined
// let target = undefined
// let animateHeader = true

import { Form, Icon, Input, Button, Row, Col, Collapse, Timeline, Table, Calendar, Modal, Steps, Tabs, Menu, Badge } from 'antd';
const FormItem = Form.Item;
const Panel = Collapse.Panel;
const Step = Steps.Step;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const onPanelChange = (value, mode) => {
    console.log(value, mode);
}

const info = () => {
    Modal.info({
        title: 'This is a notification message',
        content: (
            <div>
                <p>some messages...some messages...</p>
                <p>some messages...some messages...</p>
            </div>
        ),
        onOk() { },
    });
}

class LoginFormContainer extends Component {

    componentDidMount() {
        iniAnimate(this.refs['canvas'])
        iniBubble(this.refs['demo-canvas'])
        // iniNetWorkAnimate(this.refs['canvas'])
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }


    render() {
        const {
			 getFieldDecorator, getFieldsError, getFieldError, isFieldTouched
        } = this.props.form

        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');

        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="#">{text}</a>,
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <a href="#">Action 一 {record.name}</a>
                    <span className="ant-divider" />
                    <a href="#">Delete</a>
                    <span className="ant-divider" />
                    <a href="#" className="ant-dropdown-link">
                        More actions <Icon type="down" />
                    </a>
                </span>
            ),
        }];

        const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        }];

        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User',    // Column configuration not to be checked
            }),
        };

        const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

        return (
            <Collapse bordered={false} defaultActiveKey={['1', '3']}>
                <Panel header="This is panel header 1" key="1">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                    <Steps current={1}>
                        <Step title="Finished" description="This is a description." />
                        <Step title="In Progress" description="This is a description." />
                        <Step title="Waiting" description="This is a description." />
                    </Steps>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                    <Timeline style={{ paddingLeft: '85px' }} pending={<a href="#">See more</a>}>
                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                        <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">Technical testing 2015-09-01</Timeline.Item>
                        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                        <Timeline.Item
                            dot={
                                <Badge count={100}>
                                    <img style={{ width: '35px', height: '35px', borderRadius: '50%', border: '2px solid #FF5722' }} src="http://172.17.9.94/newservices/LBServices.svc/employee/image/57251" class="chat-avatar" alt="57251" src="http://172.17.9.94/newservices/LBServices.svc/employee/image/57251" />
                                </Badge>}>
                            <span style={{ position: 'absolute', left: '-80px', fontWeight: '500', color: 'rgba(0,0,0,.65)' }}>20/12/2017</span>
                            <Button onClick={info}>Info</Button>


                            <Tabs defaultActiveKey="2">
                                <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">
                                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} size="small" />
                                </TabPane>
                                <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">
                                    <Steps direction="vertical" current={1}>
                                        <Step title="Finished" description="This is a description." />
                                        <Step title="In Progress" description="This is a description." />
                                        <Step title="Waiting" description="This is a description." />
                                    </Steps>
                                </TabPane>
                                <TabPane tab={<span><Icon type="appstore" />Tab 2</span>}>
                                    <Menu
                                        style={{ width: 240 }}
                                        defaultSelectedKeys={['1']}
                                        defaultOpenKeys={['sub1']}
                                        mode="inline" >
                                        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                                            <MenuItemGroup key="g1" title="Item 1">
                                                <Menu.Item key="1">Option 1</Menu.Item>
                                                <Menu.Item key="2">Option 2</Menu.Item>
                                            </MenuItemGroup>
                                            <MenuItemGroup key="g2" title="Item 2">
                                                <Menu.Item key="3">Option 3</Menu.Item>
                                                <Menu.Item key="4">Option 4</Menu.Item>
                                            </MenuItemGroup>
                                        </SubMenu>
                                        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                                            <Menu.Item key="5">Option 5</Menu.Item>
                                            <Menu.Item key="6">Option 6</Menu.Item>
                                            <SubMenu key="sub3" title="Submenu">
                                                <Menu.Item key="7">Option 7</Menu.Item>
                                                <Menu.Item key="8">Option 8</Menu.Item>
                                            </SubMenu>
                                        </SubMenu>
                                        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                                            <Menu.Item key="9">Option 9</Menu.Item>
                                            <Menu.Item key="10">Option 10</Menu.Item>
                                            <Menu.Item key="11">Option 11</Menu.Item>
                                            <Menu.Item key="12">Option 12</Menu.Item>
                                        </SubMenu>
                                    </Menu>
                                </TabPane>
                            </Tabs>
                        </Timeline.Item>
                        <Timeline.Item>
                            <span style={{ position: 'absolute', left: '-80px', fontWeight: '500', color: 'rgba(0,0,0,.65)' }}>20/12/2017</span>
                            <Table columns={columns} dataSource={data} />
                            <Collapse bordered={false} >
                                <Panel header="This is panel header 1" key="1">
                                    <Calendar onPanelChange={onPanelChange} />
                                </Panel>
                            </Collapse>
                        </Timeline.Item>
                        <Timeline.Item>
                            < Form onSubmit={this.handleSubmit} >
                                <FormItem
                                    validateStatus={userNameError ? 'error' : ''}
                                    help={userNameError || ''}>
                                    {getFieldDecorator('userName', {
                                        rules: [{ required: true, message: 'Please input your username!' }],
                                    })(
                                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                                        )}
                                </FormItem>
                                <FormItem
                                    validateStatus={passwordError ? 'error' : ''}
                                    help={passwordError || ''}>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: 'Please input your Password!' }],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                                        )}
                                </FormItem>
                                <FormItem>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        disabled={hasErrors(getFieldsError())}>
                                        Log in
                                    </Button>
                                </FormItem>
                            </Form >
                        </Timeline.Item>
                    </Timeline>
                </Panel>
            </Collapse>
            /*<div id="large-header" className={styles['container-login']}>
                <div className={styles['fix-header']}>
                    <div className={styles['banner']}>P</div>
                </div>
                <canvas ref="canvas" style={{ position: 'absolute', top: '95px', left: '535px' }} />
                <canvas ref="demo-canvas" style={{ position: 'absolute' }} />
                <div ref="form-login" className={styles['login-form']}>
                </div>
            </div >*/
        )
    }

}

export default Form.create()(LoginFormContainer)


