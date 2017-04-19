import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { POSPages } from '../../components'

import { reduxForm, Field } from 'redux-form'

export default class NewPOSPages extends Component {
    render() {
        return (
        	<div><POSPages/></div>
        )
    }
}