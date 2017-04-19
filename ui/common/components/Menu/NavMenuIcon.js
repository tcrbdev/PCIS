import React, { Component, PropTypes } from 'react'
import styles from './NavMenuIcon.scss'

export default class NavMenuIcon extends Component {
    static propTypes = {
        isopen: PropTypes.bool.isRequired
    }

    render() {
        const { isopen, color } = this.props
        const styleMenu = {
            backgroundColor: color ? color : '#FFF'
        }
        return (
            <div>
	            <div className={isopen ? styles['nav-menu-icon'] + ' ' +styles['nav-menu-icon__open'] : styles['nav-menu-icon']}>
					<span style={styleMenu}></span>
					<span style={styleMenu}></span>
					<span style={styleMenu}></span>
					<span style={styleMenu}></span>
				</div>
			</div>
        )
    }
}
