import React, { Component } from 'react'
import { Link } from 'react-router'
import { push } from 'react-router-redux'
import Header from './Header'
import styles from './index.scss'

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';

import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon'

import { connect } from 'react-redux'

import Scrollbar from 'react-smooth-scrollbar';
import { RouteTransition } from 'react-router-transition';
import { spring } from 'react-motion';

import POSPage from '../POSPages'

class App extends Component {

    state = {
        countVal: 1
    }

    componentDidMount() {
        // console.log("Param Did mount app", this.props)
        if (false) {
            this.props.router.push('/login')
        }
    }

    render() {
        console.log("App Test render login !!!!!.", this.props.location)
        var themes = getMuiTheme({
            ripple: { color: '#FFF' }
        })

        const popConfig = { stiffness: 360, damping: 25 };
        // const pop = {
        //     atEnter: {
        //         scale: 0.8,
        //         opacity: 0
        //     },
        //     atLeave: {
        //         scale: spring(0.8, popConfig),
        //         opacity: spring(0, popConfig)
        //     },
        //     atActive: {
        //         scale: spring(1, popConfig),
        //         opacity: 1
        //     },
        //     mapStyles(styles) {
        //         return {
        //             opacity: styles.opacity,
        //             transform: `scale(${styles.scale})`
        //         };
        //     }
        // };

        const fadeConfig = { stiffness: 200, damping: 22 };
        const slideConfig = { stiffness: 330, damping: 30 };
        const slideLeft = {
            atEnter: {
                opacity: 0,
                offset: 100
            },
            atLeave: {
                opacity: spring(0, fadeConfig),
                offset: spring(-100, slideConfig)
            },
            atActive: {
                opacity: spring(1, slideConfig),
                offset: spring(0, slideConfig)
            },
            mapStyles(styles) {
                return {
                    opacity: styles.opacity,
                    transform: `translateX(${styles.offset}%)`
                };
            }
        };

        const pop = {
            atEnter: {
                scale: 0.8,
                opacity: 0
            },
            atLeave: {
                scale: spring(0.8, popConfig),
                opacity: spring(0, popConfig)
            },
            atActive: {
                scale: spring(1, popConfig),
                opacity: 1
            },
            mapStyles(styles) {
                return {
                    opacity: styles.opacity,
                    transform: `scale(${styles.scale})`
                };
            }
        };

        const translateX = {
            atEnter: {
                translateX: 100
            },
            atLeave: {
                translateX: -100
            },
            atActive: {
                translateX: 0
            },
            mapStyle(styles) {
                return {
                    transform: `translateX(${styles.translateX}%)`
                }
            }
        }

        // console.log(this.props)
        // console.log(pop)
        // console.log(spring(0.8, popConfig))

        // themes.ripple = { color: '#FFF' }
        return (
            <div className={styles['app-container']}>
                <Header />
                <div style={{ height: '100%', display: 'flex', overflow: 'hidden' }}>
                    <div className={this.props.isNavMenuOpen ? styles['app-sidebars'] : styles['app-sidebars__close']}>
                        <MuiThemeProvider muiTheme={themes}>
                            <ul className={styles['menu-holizontal']}>
                                <li>
                                    <IconButton><FontIcon color={'rgba(255, 255, 255, 0.35)'} className="fa fa-address-book-o" /></IconButton>
                                    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                                        <List className={styles['dropdown-content']} style={{ padding: '0px', zIndex: '1' }}>
                                            <Link to={{ pathname: '/pages' }} style={{ textDecoration: 'none' }}><ListItem primaryText="Inbox" leftIcon={<ContentInbox />} /></Link>
                                            <Link to={{ pathname: '/' }} style={{ textDecoration: 'none' }}><ListItem primaryText="Starred" leftIcon={<ActionGrade />} /></Link>
                                            <Link to={{ pathname: '/newpos' }} style={{ textDecoration: 'none' }}><ListItem primaryText="Sent mail" leftIcon={<ContentSend />} /></Link>
                                            <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
                                            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
                                        </List>
                                    </MuiThemeProvider>
                                </li>
                                <li>
                                    <IconButton><FontIcon color={'rgba(255, 255, 255, 0.35)'} className="fa fa-user-plus" /></IconButton>
                                    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                                        <List className={styles['dropdown-content']} style={{ padding: '0px', zIndex: '1' }}>
                                            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
                                            <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
                                            <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
                                            <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
                                            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
                                        </List>
                                    </MuiThemeProvider>
                                </li>
                                <li><Link to={{ pathname: '/call/54324' }}><IconButton><FontIcon color={'rgba(255, 255, 255, 0.35)'} className="fa fa-volume-control-phone" /></IconButton></Link></li>
                                <li><IconButton className="btn-date" data-date={(new Date()).getDate()}><FontIcon color={'rgba(255, 255, 255, 0.35)'} className="fa fa-calendar-o" /></IconButton></li>
                                <li><IconButton><FontIcon color={'rgba(255, 255, 255, 0.35)'} className="fa fa-sitemap" /></IconButton></li>
                                <li><IconButton><FontIcon color={'rgba(255, 255, 255, 0.35)'} className="fa fa-trophy" /></IconButton></li>
                                <li><IconButton><FontIcon color={'rgba(255, 255, 255, 0.35)'} className="fa fa-folder-open-o" /></IconButton></li>
                                <li><IconButton><FontIcon color={'rgba(255, 255, 255, 0.35)'} className="fa fa-share-alt" /></IconButton></li>
                                <li><IconButton><FontIcon color={'rgba(255, 255, 255, 0.35)'} className="fa fa-envelope-o" /></IconButton></li>
                                <li><IconButton><FontIcon color={'rgba(255, 255, 255, 0.35)'} className="fa fa-database" /></IconButton></li>
                                <li><IconButton><FontIcon color={'rgba(255, 255, 255, 0.35)'} className="fa fa-group" /></IconButton></li>
                            </ul>
                        </MuiThemeProvider>
                    </div>
                    <div className={styles['app-contnets']}>

                        <Scrollbar style={{ height: '100%' }} overscrollEffect={true}>
                            {this.props.children}
                        </Scrollbar>

                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({ isNavMenuOpen: state.isNavMenuOpen })
)(App)
