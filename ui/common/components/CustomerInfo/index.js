import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
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

import styles from './index.css'

import { Form, Icon, Input, Button, Row, Col, Collapse } from 'antd';
const FormItem = Form.Item;
const Panel = Collapse.Panel;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const hasErrors = (fieldsError) => {
	return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class CustomerInfo extends Component {

	componentWillMount() {
		this.props.getMasterProvince()
		this.props.getMasterAmphur()
		this.props.getMasterDistrict()
		this.props.getMasterSourceType()
		this.props.getMasterChannelType()
		this.props.getMasterBusinessType()
		this.props.getMasterInterestingProduct()
		this.props.getMasterOpportunityCustomer()
		this.props.getMasterPresentProductType()
		this.props.getMasterBusinessPrefix()
		this.props.getMasterAppointmentReason()
	}

	componentDidMount() {
		console.log("componentDidMount", this.props)
	}

	componentWillReceiveProps(props) {
		console.warn("componentWillReceiveProps")
	}

	shouldComponentUpdate(nextProps) {
		console.info("shouldComponentUpdate", nextProps)
		return true;
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
			form: { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched },
			MASTER_PROVINCE,
			MASTER_AMPHUR,
			MASTER_DISTRICT,
			MASTER_SOURCE_TYPE,
			MASTER_CHANNEL_TYPE,
			MASTER_BUSINESS_TYPE,
			MASTER_INTERESTING_PRODUCT,
			MASTER_OPPORTUNITY_CUSTOMER,
			MASTER_PRESENT_PRODUCT_TYPE,
			MASTER_BUSINESS_PREFIX,
			MASTER_APPOINTMENT_REASON
        } = this.props

		const userNameError = isFieldTouched('userName') && getFieldError('userName');
		const passwordError = isFieldTouched('password') && getFieldError('password');

		return (
			<div>
				<Row type="flex" justify="space-around">
					<Col span={8}>
					</Col>
					<Col span={12}>
					</Col>
				</Row>
			</div>
		)
	}
}

const frmCustomerInfo = Form.create()(CustomerInfo)

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
	})(frmCustomerInfo)
