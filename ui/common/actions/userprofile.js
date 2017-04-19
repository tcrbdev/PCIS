import { NAV_MENU_CLICK } from '../constants/actionTypes'
import { CALL_API } from 'redux-api-middleware'
// import { PAGES_ENDPOINT } from '../constants/endpoints'
// import { push } from 'react-router-redux'
// import {
//     LOAD_PAGES_REQUEST,
//     LOAD_PAGES_SUCCESS,
//     LOAD_PAGES_FAILURE,

//     LOAD_PAGE_REQUEST,
//     LOAD_PAGE_SUCCESS,
//     LOAD_PAGE_FAILURE,

//     CREATE_PAGE_REQUEST,
//     CREATE_PAGE_SUCCESS,
//     CREATE_PAGE_FAILURE
// } from '../constants/actionTypes'

// export const getUserProfile = (id) => {
//     [CALL_API]: {
//         endpoint: `${PAGES_ENDPOINT}/${id}`,
//         method: 'GET',
//         types: [LOAD_PAGE_REQUEST, LOAD_PAGE_SUCCESS, LOAD_PAGE_FAILURE]
//     }
// }

export const setNavMenuOpen = () => (
    (dispatch) => dispatch({ type: NAV_MENU_CLICK })
)

export const getTestData = () => (
    dispatch => {
        let data = {
            firstName: "Firstname " + (new Date).getMilliseconds(),
            lastName: "Hello Lastname",
            myDate: (new Date).getMilliseconds(),
            selectDate: new Date()
        }
        console.log("------------------------------ Action Creater -----------------------------------")
        console.log(data)
        dispatch({ type: 'test', data })
    }
)
