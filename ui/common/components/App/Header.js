import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './Header.scss'

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Avatar from 'material-ui/Avatar';

import { List, ListItem } from 'material-ui/List';

import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon'
import ActionHome from 'material-ui/svg-icons/action/home';
import Online from 'material-ui/svg-icons/action/check-circle';

import { connect } from 'react-redux'
import { setNavMenuOpen } from '../../actions/userprofile'

import Popover from 'material-ui/Popover/Popover';

import { NavMenuIcon } from '../Menu'

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            profileOpen: false,
            time: (new Date()).getSeconds()
        }
    }

    openNavMenu = () => {
        const { setNavMenu, isNavMenuOpen } =     this.props
        setNavMenu()
    }

    openProfile = (event) => {
        this.setState({
            profileOpen: true,
            anchorEl: event.currentTarget
        })
    }

    closeProfile = () => {
        this.setState({
            profileOpen: false,
        })
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: (new Date()).getSeconds()
            })
        }, 1000)
    }

    render() {
        var themes = getMuiTheme(lightBaseTheme)

        return (
            <MuiThemeProvider muiTheme={themes}>
                <header className={styles['header']}>
                    <div className={styles['header-container']}>
                        <div className={styles['nav-menu']} onClick={() => { this.openNavMenu() }}>
                            <NavMenuIcon isopen={this.props.isNavMenuOpen} />
                        </div>
                        <div className={styles['header-container-left']}>
                            <ul className={styles['menu-holizontal']}>
                                <li style={{ backgroundColor: '#F44336' }}><IconButton><FontIcon color={'#FFF'} className="fa fa-line-chart" /></IconButton></li>
                            </ul>
                        </div>
                        <div className={styles['header-container-mid']}>
                        </div>
                        <div className={styles['header-container-right']}>
                            <ul className={styles['menu-holizontal']}>
                                <li className={styles['content']} data-date={this.state.time}></li>
                                <li><IconButton><FontIcon color={'#FFF'} className="fa fa-podcast" /></IconButton></li>
                                <li><IconButton><FontIcon color={'#FFF'} className="fa fa-comments-o" /></IconButton></li>
                                <li><IconButton><FontIcon color={'#FFF'} className="fa fa-bell-o" /></IconButton></li>
                                <li><IconButton><FontIcon color={'#FFF'} className="fa fa-question" /></IconButton></li>
                            </ul>
                            <div className={styles['profile-picture'] + ' ' + (this.state.profileOpen ? styles['active'] : '')} onClick={(e) => { this.openProfile(e) }}>
                                <div style={{ position: 'relative', display: 'flex' }}>
                                    <Avatar style={{ border: '2px solid #CDDC39' }} src="http://172.17.9.94/pcisservices/StaffPicture/58385 Janewit.jpg" />
                                    <Online className={styles['online-status']} />
                                </div>
                                <IconButton><FontIcon color={'#FFF'} className="fa fa-angle-down" /></IconButton>
                                <Popover
                                    open={this.state.profileOpen}
                                    anchorEl={this.state.anchorEl}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    onRequestClose={this.closeProfile}>
                                    <div style={{ width: '300px', height: '200px' }}>
                                        <span className="fa fa-close"></span>
                                    </div>
                                </Popover>
                            </div>
                        </div>
                    </div>
                </header>
            </MuiThemeProvider>
        )
    }
}

export default connect(
    (state) => ({ isNavMenuOpen: state.isNavMenuOpen }), { setNavMenu: setNavMenuOpen }
)(Header)
