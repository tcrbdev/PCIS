import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import pages, { isLoadingData } from './pages'
import userprofile, { isNavMenuOpen, onSubmitting, myTestData, changeValue } from './userprofile'
import {
    MASTER_PROVINCE,
    MASTER_AMPHUR,
    MASTER_DISTRICT,
    MASTER_SOURCE_TYPE,
    MASTER_CHANNEL_TYPE,
    MASTER_BUSINESS_TYPE,
    MASTER_INTERESTING_PRODUCT,
    MASTER_OPPORTUNITY_CUSTOMER,
    MASTER_PRESENT_PRODUCT_TYPE,
    MASTER_BUSINESS_PREFIX,
    MASTER_APPOINTMENT_REASON
} from './master'

import myvalidate from './myvalidate'

export default combineReducers({
    form: formReducer,
    routing: routerReducer,
    userProfile: userprofile,
    pagesData: pages,
    isLoadingData: isLoadingData,
    isNavMenuOpen: isNavMenuOpen,
    onSubmitting: onSubmitting,
    testData: myTestData,
    changeValue: changeValue,

    //master
    MASTER_PROVINCE: MASTER_PROVINCE,
    MASTER_AMPHUR: MASTER_AMPHUR,
    MASTER_DISTRICT: MASTER_DISTRICT,
    MASTER_SOURCE_TYPE: MASTER_SOURCE_TYPE,
    MASTER_CHANNEL_TYPE: MASTER_CHANNEL_TYPE,
    MASTER_BUSINESS_TYPE: MASTER_BUSINESS_TYPE,
    MASTER_INTERESTING_PRODUCT: MASTER_INTERESTING_PRODUCT,
    MASTER_OPPORTUNITY_CUSTOMER: MASTER_OPPORTUNITY_CUSTOMER,
    MASTER_PRESENT_PRODUCT_TYPE: MASTER_PRESENT_PRODUCT_TYPE,
    MASTER_BUSINESS_PREFIX: MASTER_BUSINESS_PREFIX,
    MASTER_APPOINTMENT_REASON: MASTER_APPOINTMENT_REASON
})
