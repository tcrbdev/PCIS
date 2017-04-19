import config from '../../config'

// const API_ROOT = `http://${config.host}:${config.serverPort}/api/v1`
const API_ROOT = `http://${config.host}:${config.apiPort}/api/v1`

export const PAGES_ENDPOINT = `${API_ROOT}/pages`

const root_old_service = 'newservices'
const root_new_service = 'lendingbranch'

const old_host = `${config.service_host}/${root_old_service}/LBServices.svc`
const new_host = `${config.service_host}/${root_new_service}/LBServices.svc`

export const MASTER_DATA = `${old_host}/master/ddtemplate/region`

export const MASTER_PROVINCE = `${new_host}/master/province`
export const MASTER_AMPHUR = `${new_host}/master/amphur`
export const MASTER_DISTRICT = `${new_host}/master/district`
export const MASTER_SOURCE_TYPE = `${new_host}/master/sourcetype`
export const MASTER_CHANNEL_TYPE = `${new_host}/master/channeltype`
export const MASTER_BUSINESS_TYPE = `${new_host}/master/businesstype`
export const MASTER_INTERESTING_PRODUCT = `${new_host}/master/interestingproduct`
export const MASTER_OPPORTUNITY_CUSTOMER = `${new_host}/master/opportunitycustomer`
export const MASTER_PRESENT_PRODUCT_TYPE = `${new_host}/master/presentproducttype`
export const MASTER_BUSINESS_PREFIX = `${new_host}/master/businessprefix`
export const MASTER_APPOINTMENT_REASON = `${new_host}/master/appointmentreason`