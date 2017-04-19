import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { createPage } from '../../actions/page'
// import { PageForm } from '../../components'

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values /*, dispatch */ ) => {
    return sleep(1000) // simulate server latency
        .then(() => {
            if (['foo@foo.com', 'bar@bar.com'].includes(values.title)) {
                throw { title: 'Email already Exists' }
            }
        })
}

const saveForm = (values, dispatch) => dispatch(createPage(values))

const validate = values => {
    const errors = {}
    const requiredFields = ['title', 'content']
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
        else
        {
            if(values[field] == 'aaa')
            {
                errors[field] = 'Not value bbb.'
            }
        }
    })

    return errors
}

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => {
    return (
        <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}/>
    )
}


class PageFormContainer extends Component {
    render() {
        const { handleSubmit, pristine, reset, submitting, isNavMenuOpen, onSubmitting } = this.props
        console.log(this.props)
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>

              <form className='form'>

                <Field name="title" component={ renderTextField} label="Title"/>

                <Field name="content" component={ renderTextField } label="Content" multiLine={true} rows={2} />

                <FlatButton label="Save" primary={true} onClick={handleSubmit(saveForm)} />

                <CircularProgress style={{display: onSubmitting ? "block" : "none"}} size={100} thickness={7} />

              </form>

            </MuiThemeProvider>
        )
    }
}

const validateReduxForm = reduxForm({
    form: 'MaterialUiForm',
    validate,
    asyncValidate
})(PageFormContainer)

export default connect(
    (state) => ({ isNavMenuOpen: state.isNavMenuOpen, onSubmitting: state.onSubmitting })
)(validateReduxForm)

// export default reduxForm({
//         form: 'syncValidation',
//         name: 'createPageDataTest'
//     },
//     (state) => ({}),
//     (dispatch) => ({
//         onSubmit: (values) =>
//             dispatch(createPage(values))
//     })
// )(PageFormContainer)
