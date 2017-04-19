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
import { Form, Icon, Input, Button, Checkbox, Cascader, Radio, Select, DatePicker, Progress } from 'antd';
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
		console.log("----------------------------------------------------------------------",this.props)
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
				console.log('Received values of form: ', values);
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
			<div color='green' style={{ width: '70%' }} className={styles['form-test']}>
				<Header>
					<SemanticIcon color='teal' name='user' />
					<Header.Content>
						Customer Profile (5901012017)
					</Header.Content>
				</Header>
				<Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
					<Segment.Group horizontal>
						<Segment color='teal' style={{ width: '50%' }}>
							<Label as='a' color={this.state.percentStatus} ribbon>{`${this.state.percent}% Complete information`}</Label>
							<ButtonGroup>
								<Button onClick={this.decline.bind(this)} icon="minus" />
								<Button onClick={this.increase.bind(this)} icon="plus" />
							</ButtonGroup>
							<Divider horizontal style={{ fontSize: '13px', textTransform: 'none' }}>Business Information</Divider>
							<FormItem label="ประเภทกิจการ" {...formItemLayout} >
								{
									getFieldDecorator('businessprefix', { rules: [{ required: this.state.req, message: 'Please select business type!' }] })
										(
										<RadioGroup>
											{
												MASTER_BUSINESS_PREFIX.map((item, index) => (<Radio key={index} value={item.BusinessPrefixCode}>{item.BusinessPrefixName}</Radio>))
											}
										</RadioGroup>
										)
								}
							</FormItem>
							<FormItem label="ชื่อกิจการ" {...formItemLayout} >
								{
									getFieldDecorator('businessname', { rules: [{ required: true, message: 'Please input you email!' }] })
										(<Input />)
								}
							</FormItem>
							<FormItem label="เบอร์โทรกิจการ" {...formItemLayout} >
								{
									getFieldDecorator('businesstel', { rules: [{ required: true, message: 'Please input you email!' }] })
										(<Input addonBefore={selectTelType} />)
								}
							</FormItem>
							<FormItem label="ประเภทธุรกิจ" {...formItemLayout} >
								{
									getFieldDecorator('businesstype', { rules: [{ required: true, message: 'Please input Business Type!' }] })
										(
										<Select
											showSearch
											filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
											{
												MASTER_BUSINESS_TYPE.map((item, index) =>
													(<Select.Option key={index} value={item.BusinessTypeCode}>{item.BusinessTypeName}</Select.Option>))
											}
										</Select>
										)
								}
							</FormItem>
							<FormItem label="อธิบายเพิ่มเติม" {...formItemLayout} >
								{
									getFieldDecorator('businessdescription', {})
										(<Input type="textarea" autosize={{ minRows: 2, maxRows: 4 }} />)
								}
							</FormItem>

							<Divider horizontal style={{ fontSize: '13px', textTransform: 'none' }}>Business Owner Information</Divider>

							<FormItem label="ชื่อ - นามสกุล" {...formItemLayout} >
								{
									getFieldDecorator('name', { rules: [{ required: true, message: 'Please input you email!' }] })
										(<Input />)
								}
							</FormItem>
							<FormItem label="ชื่อเล่น" {...formItemLayout} >
								{
									getFieldDecorator('nickname', {})
										(<Input />)
								}
							</FormItem>
							<FormItem label="เบอร์โทรศัพท์" {...formItemLayout} >
								{
									getFieldDecorator('tel', { rules: [{ required: true, message: 'Please input you tel!' }] })
										(<Input addonBefore={selectTelType2} />)
								}
							</FormItem>

							<Divider horizontal style={{ fontSize: '13px', textTransform: 'none' }}>Contact Information</Divider>

							<FormItem label="ชื่อ - นามสกุล" {...formItemLayout} >
								{
									getFieldDecorator('cname', { rules: [{ required: true, message: 'Please input you email!' }] })
										(<Input />)
								}
							</FormItem>
							<FormItem label="ชื่อเล่น" {...formItemLayout} >
								{
									getFieldDecorator('cnickname', {})
										(<Input />)
								}
							</FormItem>
							<FormItem label="เบอร์โทรศัพท์" {...formItemLayout} >
								{
									getFieldDecorator('ctel', { rules: [{ required: true, message: 'Please input you tel!' }] })
										(<Input addonBefore={selectTelType} />)
								}
							</FormItem>

						</Segment>
						<Segment color='pink' style={{ width: '50%' }}>

							<Divider horizontal style={{ fontSize: '13px', textTransform: 'none' }}>Profile</Divider>

							<FormItem label="ที่อยู่" {...formItemLayout} >
								{
									getFieldDecorator('address', {})
										(<Input type="textarea" autosize={{ minRows: 3, maxRows: 6 }} />)
								}
							</FormItem>
							<FormItem label="จังหวัด" {...formItemLayout} >
								{
									getFieldDecorator('province', {})
										(
										<Cascader
											showSearch
											options={this.getOptions()}
											onChange={this.onChange} />
										)
								}
							</FormItem>
							<FormItem label="รหัสไปรษณีย์" {...formItemLayout} >
								{
									getFieldDecorator('zipcode', {})
										(<Input disabled={true} />)
								}
							</FormItem>
							<FormItem label="วันที่นัดหมาย" {...formItemLayout}>
								{
									getFieldDecorator('appointmentdate', { rules: [{ type: 'array' }] })
										(
										<RangePicker
											showTime
											format="DD/MM/YYYY HH:mm:ss"
											placeholder={['Start Time', 'End Time']}
										/>
										)
								}
							</FormItem>
							<FormItem label="เหตุผลที่นัดหมาย" {...formItemLayout} >
								{
									getFieldDecorator('appointmentreason', { rules: [{ required: true, message: 'Please input Business Type!' }] })
										(
										<Select
											showSearch
											filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
											{
												MASTER_APPOINTMENT_REASON.map((item, index) =>
													(<Select.Option key={index} value={item.AppointmentReasonCode}>{item.AppointmentReasonName}</Select.Option>))
											}
										</Select>
										)
								}
							</FormItem>
							<FormItem label="สนใจบริการสินเชื่อ" {...formItemLayout}>
								{
									getFieldDecorator('interest', {})
										(
										<RadioGroup>
											{
												MASTER_INTERESTING_PRODUCT.map((item, index) => (<Radio key={index} value={item.InterestingProductCode}>{item.InterestingProductName}</Radio>))
											}
										</RadioGroup>
										)
								}
							</FormItem>
							<FormItem label="โอกาสการเป็นลูกค้า" {...formItemLayout}>
								{
									getFieldDecorator('opportunity', {})
										(
										<RadioGroup>
											{
												MASTER_OPPORTUNITY_CUSTOMER.map((item, index) => (<Radio key={index} value={item.OpportunityCustomerCode}>{item.OpportunityCustomerName}</Radio>))
											}
										</RadioGroup>
										)
								}
							</FormItem>
							<FormItem label="ประเภทสินเชื่อ" {...formItemLayout}>
								{
									getFieldDecorator('loantype', {})
										(
										<RadioGroup>
											{
												MASTER_PRESENT_PRODUCT_TYPE.map((item, index) => (<Radio key={index} value={item.PresentProductTypeCode}>{item.PresentProductTypeDigit}</Radio>))
											}
										</RadioGroup>
										)
								}
							</FormItem>
							<FormItem label="รับทราบจากช่องทาง" {...formItemLayout}>
								{
									getFieldDecorator('chanel', {})
										(
										<Select
											showSearch
											filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
											{
												MASTER_CHANNEL_TYPE.map((item, index) =>
													(
														<Select.OptGroup key={index} label={item.GroupChannelName}>
															{
																item.ChannelTypeItem.map((sItem, sIndex) => (<Select.Option key={sIndex} value={sItem.ChannelTypeCode}>{sItem.ChannelTypeName}</Select.Option>))
															}
														</Select.OptGroup>
													))
											}
										</Select>
										)
								}
							</FormItem>
							<FormItem label="แหล่งที่มาลูกค้า" {...formItemLayout}>
								{
									getFieldDecorator('sourceofcustomer', {})
										(
										<Select
											showSearch
											filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
											{
												MASTER_SOURCE_TYPE.map((item, index) =>
													(
														<Select.OptGroup key={index} label={item.GroupSourceName}>
															{
																item.SourceTypeItem.map((sItem, sIndex) => (<Select.Option key={sIndex} value={sItem.SourceTypeCode}>{sItem.SourceTypeName}</Select.Option>))
															}
														</Select.OptGroup>
													))
											}
										</Select>
										)
								}
							</FormItem>
							<FormItem label="วงเงินที่ต้องการ" {...formItemLayout} >
								{
									getFieldDecorator('amount', {})
										(<Input />)
								}
							</FormItem>
							<FormItem>
								<Button style={{ width: '100%' }} type="primary" htmlType="submit" size="large">Register</Button>
							</FormItem>
							<FormItem>
								<Button style={{ width: '100%' }} type="primary" size="large" onClick={() => this.changereq()}>Set Required</Button>
							</FormItem>

						</Segment>
					</Segment.Group>
				</Form>
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
