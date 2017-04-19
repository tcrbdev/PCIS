import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {
    getMasterProvince,
    getMasterAmphur,
    getMasterDistrict,
} from '../../actions/master'

import { Input, Icon, Cascader } from 'antd'

const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    isLeaf: false,
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    isLeaf: false,
}];

const DropDownProvince = ({
    getFieldDecorator,
    name
}) => {
    return getFieldDecorator(name, { rules: [{ required: true, message: 'Please input you Hello World!' }] })
        (<Input />)
}

export default DropDownProvince


// class DropDownProvince extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             inputValue: '',
//             options
//         }
//     }

//     componentDidMount() {
//         this.props.getMasterProvince()
//         this.props.getMasterAmphur()
//         this.props.getMasterDistrict()
//     }

//     render() {
//         console.log("///////////////////////////////////////")
//         return this.props.getFieldDecorator(this.props.name, { rules: [{ required: true, message: 'Please input you Hello World!' }] })
//             (<Input />);
//     }
// }

// export default connect(
//     (state) => ({
//         MASTER_PROVINCE: state.MASTER_PROVINCE,
//         MASTER_AMPHUR: state.MASTER_AMPHUR,
//         MASTER_DISTRICT: state.MASTER_DISTRICT
//     }), {
//         getMasterProvince: getMasterProvince,
//         getMasterAmphur: getMasterAmphur,
//         getMasterDistrict: getMasterDistrict
//     })(DropDownProvince)
