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

import { Segment, Header, Icon as SemanticIcon, Divider, Label } from 'semantic-ui-react'
import { Form, Icon, Input, Button, Checkbox, Cascader, Radio, Select, DatePicker, Progress, Row, Col } from 'antd';
import filter from 'lodash/filter'

import styles from './index.css'

const FormItem = Form.Item
const RadioButton = Radio.Button
const RadioGroup = Radio.Group
const ButtonGroup = Button.Group;
const RangePicker = DatePicker.RangePicker
const options = [{
	value: 'zhejiang',
	label: 'Zhejiang',
	isLeaf: false,
}, {
	value: 'jiangsu',
	label: 'Jiangsu',
	isLeaf: false,
}];

class CustomerInfo extends Component {

	state = {
		options,
		req: false,
		percent: 0,
		percentStatus: 'red'
	}

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
		console.log("----------------------------------------------------------------------", this.props)
	}

	onChange = (value, selectedOptions) => {
		const { setFieldsValue } = this.props.form

		if (selectedOptions.length == 3) {

			const zipcode = selectedOptions[2].code
			setFieldsValue({ zipcode: zipcode })
		} else {
			setFieldsValue({ zipcode: null })
		}
	}

	getOptions = () => {
		const { MASTER_PROVINCE, MASTER_AMPHUR, MASTER_DISTRICT } = this.props

		return MASTER_PROVINCE.map((province, index) => ({
			value: province.ProvinceCode,
			label: province.ProvinceNameTH,
			children: filter(MASTER_AMPHUR, (o) => o.ProvinceCode == province.ProvinceCode)
				.map((amphur, index) => ({
					value: amphur.AmphurCode,
					label: amphur.AmphurNameTH,
					children: filter(MASTER_DISTRICT, (o) => o.ProvinceCode == province.ProvinceCode && o.AmphurCode == amphur.AmphurCode)
						.map((district, index) => ({
							value: district.DistrictCode,
							label: `${district.DistrictNameTH} (${district.ZipCode})`,
							code: district.ZipCode
						}))
				}))
		}))
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			console.log(err)

			if (!err) {
				console.log('Received value of form: ', values);
			}
		});
	}

	selectTelTypefn = (id) => {
		const { getFieldDecorator } = this.props.form
		const Option = Select.Option
		return getFieldDecorator(id, { initialValue: '089' })
			(
			<Select style={{ width: 55 }} >
				<Option value="02">02</Option>
				<Option value="089">089</Option>
				<Option value="091">091</Option>
			</Select>
			)
	}

	increase() {
		let percent = this.state.percent + 10;
		if (percent > 100) {
			percent = 100;
		}
		this.setState({ percent });
		this.setPercentStatus(percent)
	}
	decline() {
		let percent = this.state.percent - 10;
		if (percent < 0) {
			percent = 0;
		}
		this.setState({ percent });
		this.setPercentStatus(percent)
	}

	setPercentStatus(percent) {
		if (percent <= 35) {
			this.setState({ percentStatus: 'red' })
		} else if (percent > 35 && percent < 99) {
			this.setState({ percentStatus: 'teal' })
		} else {
			this.setState({ percentStatus: 'blue' })
		}
	}

	getBusinessType() {
		const { getFieldDecorator } = this.props.form

		let itemsOption = this.props.MASTER_BUSINESS_TYPE.map((item, index) => {
			return <Select.Option key={item['SysNO']} value={item.BusinessTypeCode}>{item.BusinessTypeName}</Select.Option>
		})

		return getFieldDecorator('businessType', {})
			(
			<Select>
				{itemsOption}
			</Select>
			)
	}

	getSelectDropDown(value, text, data) {
		let itemsOption = data.map((item, index) => {
			return <Select.Option key={index} value={item[value]}>{item[item]}</Select.Option>
		})
		return itemsOption
	}

	componentWillReceiveProps(props) {
		console.warn("Receive Props")
	}

	shouldComponentUpdate(props) {
		console.info("Component Update")
		return true;
	}

	render() {
		const {
            form: {
                getFieldDecorator,
			getFieldValue
            },
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

		const formItemLayout = {
			labelCol: { span: 6 },
			wrapperCol: { span: 18 },
			hasFeedback: true
		}

		const selectTelType = this.selectTelTypefn('aloha')
		const selectTelType2 = this.selectTelTypefn('aloh2')

		return (
			<div>

			</div>)
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
