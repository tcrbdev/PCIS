import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadPages } from '../../actions/page'
import { Pages } from '../../components'



import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CircularProgress from 'material-ui/CircularProgress';
import TextField from 'material-ui/TextField';

class PagesContainer extends Component {

    static propTypes = {
        pages: PropTypes.array.isRequired,
        onLoadPages: PropTypes.func.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return this.props.pages !== nextProps.pages || this.props.isLoading !== nextProps.isLoading;
    }

    onReloadPages = () => {
        this.props.onLoadPages()
    }

    componentDidMount() {
        this.onReloadPages()
    }

    render() {
        var themes = getMuiTheme(lightBaseTheme)

        if (!this.props.isLoading)
            return (
                <Pages pages={this.props.pages} onReloadPages={this.onReloadPages} />
            )
        else
            return ( < div style = {
                    {
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }
                } > <MuiThemeProvider muiTheme={themes}><CircularProgress size={100} thickness={7} /></MuiThemeProvider> < /div> )
            }
    }

    export default connect(
        (state) => ({ pages: state.pagesData, isLoading: state.isLoadingData }), { onLoadPages: loadPages }
    )(PagesContainer)
