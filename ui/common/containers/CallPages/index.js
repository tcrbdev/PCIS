import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { CustomerInfo } from '../../components'

import { Segment } from 'semantic-ui-react'
import moment from 'moment'

export default class CallPages extends Component {

    render() {
        const { params: { id } } = this.props

        return (
            <Segment>
                <CustomerInfo id={id}/>
            </Segment>)
    }
}
