import React, { PropTypes } from 'react'

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const errorMessageElement = (field) => {}
// (
//     field['touched'] &&
//     field['error'] &&
//     <div className='error'>{field['error']}</div>
// )
const PageForm = ({
    fields,
    handleSubmit
}) => {
    const { title, content } = fields
console.log(getMuiTheme(lightBaseTheme))
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <form
            onSubmit={handleSubmit}
            className='form'>
            <fieldset>
              <TextField
                hintText="Enter Title"
                floatingLabelText="Title"
                errorText={errorMessageElement(title)}
                {...title} />
            </fieldset>
            <fieldset>
              <TextField
                hintText="Enter Content"
                floatingLabelText="Content"
                multiLine={true}
                rows={2}
                errorText={errorMessageElement(content)}
                {...content} />
            </fieldset>
            <FlatButton label="Save" primary={true} onClick={handleSubmit} />
          </form>
        </MuiThemeProvider>
    )
}

PageForm.propTypes = {
    // fields: PropTypes.shape({
    //     title: PropTypes.object.isRequired,
    //     content: PropTypes.object.isRequired
    // }).isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default PageForm
