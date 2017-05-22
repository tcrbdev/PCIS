import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Form, Icon, Input, Select, Button, Collapse, Row, Col, Spin } from 'antd';
import _ from './loadash'

import {
    getMasterProvince,
    getMasterAmphur,
    getMasterDistrict,
    getMasterSourceType,
    getMasterChannelType,
    getMasterBusinessType,
    getMasterInterestingProduct,
    getMasterOpportunityCustomer,
    getMasterPresentProductType,
    getMasterBusinessPrefix,
    getMasterAppointmentReason
} from '../../actions/master'

import styles from './index.scss'

const FormItem = Form.Item;
const Option = Select.Option;
const Panel = Collapse.Panel;

class CustomerInformation extends Component {

    state = {
        loading: false
    }

    componentWillMount() {
        // this.props.getMasterProvince()
        // this.props.getMasterAmphur()
        // this.props.getMasterDistrict()
        // this.props.getMasterSourceType()
        // this.props.getMasterChannelType()
        // this.props.getMasterBusinessType()
        // this.props.getMasterInterestingProduct()
        // this.props.getMasterOpportunityCustomer()
        // this.props.getMasterPresentProductType()
        this.props.getMasterBusinessPrefix()
        // this.props.getMasterAppointmentReason()
    }

    getPrefixName(name) {
        const { MASTER_BUSINESS_PREFIX, form: { getFieldDecorator } } = this.props

        if (MASTER_BUSINESS_PREFIX.length > 0)
            return getFieldDecorator(name, { initialValue: MASTER_BUSINESS_PREFIX[0].BusinessPrefixCode })(
                <Select style={{ width: 60 }}>
                    {
                        MASTER_BUSINESS_PREFIX.map((item, index) => {
                            return (<Select.Option key={item.SysNO} value={item.BusinessPrefixCode}>{item.BusinessPrefixName}</Select.Option>)
                        })
                    }
                </Select>
            )
        else
            return getFieldDecorator(name, {})(
                <Select style={{ width: 60 }}>
                </Select>
            )
    }

    getInput(name, inputProps, hasPrefix) {
        const { getFieldDecorator } = this.props.form

        if (hasPrefix) {
            inputProps.addonBefore = this.getPrefixName(`prefix-${name}`);
        }

        return (
            <FormItem>
                {
                    getFieldDecorator(name, {})(
                        <Input {...inputProps} />
                    )
                }
            </FormItem>
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let loading = true;
                this.setState({ loading })
                console.log('Received values of form : ', values)
            }
        })
    }

    render() {
        console.log("Render")
        return (
            <Spin tip="Loading..." size="large" spinning={this.state.loading}>
                <Form onSubmit={this.handleSubmit}>
                    <Collapse bordered={false} defaultActiveKey={['1', '2']}>
                        <Panel className={styles['Panel']}
                            header={
                                <div className={styles['Icon-Panel']}><Icon type="user" /><span>Basic Information</span></div>
                            } key="1">
                            <Row><span>Business</span></Row>
                            <Row gutter={16}>
                                <Col span={4}>
                                    {
                                        this.getInput('BusinessName', { placeholder: 'Business Name' }, true)
                                    }
                                </Col>
                                <Col span={4}>
                                    {
                                        this.getInput('BusinessType', { placeholder: 'Business Type' })
                                    }
                                </Col>
                                <Col span={4}>
                                    {
                                        this.getInput('BusinessTel', { placeholder: 'Tel' })
                                    }
                                </Col>
                            </Row>
                            <Row><span>Customer</span></Row>
                            <Row gutter={16}>
                                <Col span={4}>
                                    {
                                        this.getInput('CustomerName', { placeholder: 'Full Name' }, true)
                                    }
                                </Col>
                                <Col span={4}>
                                    {
                                        this.getInput('CustomerNickName', { placeholder: 'Nick Name' })
                                    }
                                </Col>
                                <Col span={4}>
                                    {
                                        this.getInput('CustomerTel', { placeholder: 'Tel' })
                                    }
                                </Col>
                            </Row>
                            <Row><span>Contact</span></Row>
                            <Row gutter={16}>
                                <Col span={4}>
                                    {
                                        this.getInput('ContactName', { placeholder: 'Full Name' }, true)
                                    }
                                </Col>
                                <Col span={4}>
                                    {
                                        this.getInput('ContactNickName', { placeholder: 'Nick Name' })
                                    }
                                </Col>
                                <Col span={4}>
                                    {
                                        this.getInput('ContactTel', { placeholder: 'Tel' })
                                    }
                                </Col>
                            </Row>
                        </Panel>
                        <Panel
                            header={
                                <div className={styles['Icon-Panel']}><Icon type="idcard" /><span>Advance Information</span></div>
                            } key="2">
                        </Panel>
                    </Collapse>
                    <Row type="flex" justify="end">
                        <Col>
                            <Button type="primary" icon="save" htmlType="submit" >
                                Save
                        </Button>
                        </Col>
                    </Row>
                </Form>
            </Spin>
        )
    }
}

const frmCustomerInformation = Form.create()(CustomerInformation)

export default connect(
    (state) => ({
        MASTER_PROVINCE: state.MASTER_PROVINCE,
        MASTER_AMPHUR: state.MASTER_AMPHUR,
        MASTER_DISTRICT: state.MASTER_DISTRICT,
        MASTER_SOURCE_TYPE: state.MASTER_SOURCE_TYPE,
        MASTER_CHANNEL_TYPE: state.MASTER_CHANNEL_TYPE,
        MASTER_BUSINESS_TYPE: state.MASTER_BUSINESS_TYPE,
        MASTER_INTERESTING_PRODUCT: state.MASTER_INTERESTING_PRODUCT,
        MASTER_OPPORTUNITY_CUSTOMER: state.MASTER_OPPORTUNITY_CUSTOMER,
        MASTER_PRESENT_PRODUCT_TYPE: state.MASTER_PRESENT_PRODUCT_TYPE,
        MASTER_BUSINESS_PREFIX: state.MASTER_BUSINESS_PREFIX,
        MASTER_APPOINTMENT_REASON: state.MASTER_APPOINTMENT_REASON
    }), {
        getMasterProvince: getMasterProvince,
        getMasterAmphur: getMasterAmphur,
        getMasterDistrict: getMasterDistrict,
        getMasterSourceType: getMasterSourceType,
        getMasterChannelType: getMasterChannelType,
        getMasterBusinessType: getMasterBusinessType,
        getMasterInterestingProduct: getMasterInterestingProduct,
        getMasterOpportunityCustomer: getMasterOpportunityCustomer,
        getMasterPresentProductType: getMasterPresentProductType,
        getMasterBusinessPrefix: getMasterBusinessPrefix,
        getMasterAppointmentReason: getMasterAppointmentReason
    })(frmCustomerInformation)

