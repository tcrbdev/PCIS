import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, change } from 'redux-form'
import styles from './index.scss'

import { getTestData } from '../../actions/userprofile'

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import AutoComplete from 'material-ui/AutoComplete';
import DatePicker from 'material-ui/DatePicker';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values /*, dispatch */ ) => {
    return sleep(1000) // simulate server latency
        .then(() => {
            if (['foo@foo.com', 'bar@bar.com'].includes(values.firstName)) {
                throw { firstName: 'Email already Exists' }
            }
        })
}

const validate = values => {
    const errors = {}
    const requiredFields = ['firstName', 'lastName']
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        } else {
            if (values[field] == 'lastName') {
                values['firstName'] = 'Not value bbb.'
            }
        }
    })

    return errors
}

const saveForm = (values, dispatch) => {
    console.info("--------------- FORM Values ----------------")
    console.info(values)
}

class NewPOSPages extends Component {
    constructor(props) {
        super(props);
        this.state = { other: "bbb", value: 1, lastname: '555' };
    }

    handleChange = (event, index, values) => {
        console.log(values)
        this.setState({ values })
    }

    plusState = () => {
        console.log(this.state.value++)
        this.setState({ value: this.state.value++ })
        console.log("------------- state -----------------")
        console.log(this.state)
        console.log("------------- props -------------------")
        console.log(this.props)
        this.props.dispatch(change('NewPOSPageForm', 'firstName', 'WTF Change' + this.state.value))
    }


    textchange = (event) => {
        console.log(event.target.value)
        this.setState({ lastname: event.target.value })
        this.props.dispatch(change('NewPOSPageForm', 'firstName', event.target.value))
    }

    updateinput = (text) => (this.setState({ lastname: text }))

    renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => {
        console.log("------------------------------ renderTextField -----------------------------------")
        return (
            <TextField
                errorText={touched && error}
                {...input}
                {...custom}/>
        )
    }

    renderDatePicker = ({ input, label, meta: { touched, error }, ...custom }) => {
        return (
            <DatePicker
                errorText={touched && error}
                hintText={label}
                container="inline"
                mode="landscape"
                {...input}
                onChange={(e,val)=>{return input.onChange(val)}}
                autoOk={true} />
        )
    }

    renderAutoComplete = ({ input, label, meta: { touched, error }, ...custom }) => {
        return (
            <TextField
                errorText={touched && error}
                {...input}
                {...custom}/>
        )
    }

    componentWillReceiveProps(nextProps) {
        console.log("----------------- Receive Props -------------------------")
        console.log(nextProps.initialValues)
    }

    /*shouldComponentUpdate(nextProps) {
        console.log("-------------------------------- shouldComponentUpdate -----------------------------")
        console.log(this.props.initialValues)
        console.log(nextProps.initialValues)
        console.log(this.props.initialValues !== nextProps.initialValues)
        console.log(nextProps)
        if (this.props.initialValues !== nextProps.initialValues) {
            nextProps.reset()
            console.log(nextProps.initialValues)
        }
        return this.props.initialValues !== nextProps.initialValues;
        return true;
    }*/

    componentDidMount() {
        console.log("-------------------------------- Component Did Mount -----------------------------")
    }

    componentDidUpdate(nextProps) {
        console.log("-------------------------------- Did Update -----------------------------")
        console.log(nextProps)
    }

    render() {
        console.log("-------------------------------- Render -----------------------------")
        console.log(this.props)
        const { handleSubmit, pristine, reset, submitting, isNavMenuOpen, onSubmitting } = this.props
        const dataSource2 = ['12345', '23456', '34567', '23456', '34567', '23456', '34567', '23456', '34567', '23456', '34567', '23456', '34567', '23456', '34567', '23456', '34567', '23456', '34567', '23456', '34567', '23456', '34567', '23456', '34567', '23456', '34567'];

        const propAuto = {
            searchText: this.state.lastname,
            menuStyle: { maxHeight: "30vh" },
            onUpdateInput: this.updateinput,
            fullWidth: true,
            filter: AutoComplete.caseInsensitiveFilter,
            openOnFocus: true,
            dataSource: dataSource2
        }

        return (
            <div style={{width:'100%' , display:'flex' , padding:'5px' ,flexDirection:'column' , alignItems:'flex-start'}}>

            <div style={{width:'420px' , height:'100%'}}>
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>

                <Card>
                    <CardHeader
                    className={styles['card-header']}
                    title="Pospect List"
                    titleColor='#3b6479'
                    subtitle="Add new pospect customer"
                    subtitleColor='#3d3d3d'
                    avatar={
                        <Avatar
                        color={'#FFF'}
                        backgroundColor={'#00BCD4'}
                        icon={ <FontIcon className="fa fa-user-plus" /> }
                        />
                        }
                    />

                    <Divider />

                    <CardText>
                    <div>
                    {
                        JSON.stringify(this.props.initialValues, null, 2)
                    }
                    </div>
                                        <div>
                    {
                        JSON.stringify(this.state.value, null, 2)
                    }
                    </div>

                        <div className={styles['card-row']}>
                            <FontIcon className="fa fa-user" color='#607d8b' />
                            <TextField hintText='First Name' fullWidth={true} value={this.state.lastname} />
                            <TextField hintText='Last Name' fullWidth={true} value={this.state.lastname} onChange={this.textchange} />
                        </div>

                        <div className={styles['card-row']}>
                            <FontIcon className="fa fa-phone" color='#607d8b' />
                            <TextField hintText='Mobile Phone' fullWidth={true} />
                        </div>

                        <div className={styles['card-row']}>
                            <FontIcon className="fa fa-map-marker" color='#607d8b' />
                            <TextField hintText="Home Address" multiLine={true} rows={2} fullWidth={true} />
                        </div>

                        <div className={styles['card-row']}>
                            <FontIcon className="fa fa-map-signs" color='#607d8b' />
                            <AutoComplete hintText="Tambon" {...propAuto} />
                            <AutoComplete hintText="Amphur" {...propAuto} />
                            <AutoComplete hintText="Province" {...propAuto} />
                        </div>

                        <div className={styles['card-row']}>
                            <FontIcon className="fa fa-location-arrow" color='#607d8b' />
                            <TextField hintText='Zipcode' fullWidth={true} />
                        </div>

                        <div className={styles['card-row']}>
                            <FontIcon className="fa fa-location-arrow" color='#607d8b' />
                            <Field name="firstName" component={this.renderTextField} />
                            <Field name="selectDate" label="select date" component={this.renderDatePicker} />
                        </div>

                        <div className={styles['card-row']}>
                            <FontIcon className="fa fa-location-arrow" color='#607d8b' />
                            <Field name="newFieldTest" component={this.renderTextField} />
                        </div>


                    </CardText>

                    <CardActions className={styles['card-action']}>
                        <FlatButton label="Load Data" primary={true} icon={<FontIcon className="fa fa-plus" />} onClick={()=>{this.props.loadTestData()}} />
                        <FlatButton label="Create" primary={true} icon={<FontIcon className="fa fa-plus" />} onClick={handleSubmit(saveForm)} />
                        <FlatButton label="Plus" primary={true} icon={<FontIcon className="fa fa-plus" />} onClick={() =>{ this.plusState()}} />
                    </CardActions>
                </Card>

            </MuiThemeProvider>
            </div>

            </div>)
    }
}

const getTestDataArray = (state) => {
    console.log("-------------------------------- getTestDataArray -----------------------------")
    console.log(state.testData)
    let copy = Object.assign({}, state.testData[0])
    console.log(copy)
    console.log(state.testData[0] === copy)
    console.log(typeof(state.testData[0]))
    console.log(typeof(copy))

    if (state.testData[0]) {
        const id = state.testData[0].myDate
        return state.testData.find((item) => (item.myDate === id))
    }

}

const validateNewPOSForm = reduxForm({
    form: 'NewPOSPageForm',
    validate,
    asyncValidate
})(NewPOSPages)

export default connect(
    (state) => {
        return {
            isNavMenuOpen: state.isNavMenuOpen,
            onSubmitting: state.onSubmitting,
            initialValues: getTestDataArray(state),
            changeValue: state.changeValue
        }
    }, {
        loadTestData: getTestData
    })(validateNewPOSForm)
