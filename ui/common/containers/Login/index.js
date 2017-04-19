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

export default class LoginFormContainer extends Component {

    componentDidMount() {
        iniAnimate(this.refs['canvas'])
        iniBubble(this.refs['demo-canvas'])
        // iniNetWorkAnimate(this.refs['canvas'])
    }

    render() {
        return (
            <div id="large-header" className={styles['container-login']}>
                <div className={styles['fix-header']}>
                    <div className={styles['banner']}>P</div>
                </div>
                <canvas ref="canvas" style={{ position: 'absolute', top: '95px', left: '535px' }} />
                {/*<canvas ref="demo-canvas" style={{ position: 'absolute' }} />*/}
                <div ref="form-login" className={styles['login-form']}>
                </div>
            </div >
        )
    }

}
