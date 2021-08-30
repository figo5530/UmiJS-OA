import React, { Component } from 'react'
import { Modal, Form, Input, Radio } from 'antd'
import { withClick } from '@/utils/hoc'

const FormItem = Form.Item
const RadioGroup = Radio.Group
const formItemLayout = {
    labelCol: {span : 6 },
    wrapperCol: {span : 14 },
}

class UserModel extends Component {
    state = {
        visible: false
    }

    handlePopClick = () => {
        this.setState({
            visible: true
        })
    }

    handleCancel = () => {
        this.setState({
            visible: false
        })
    }

    render() {
        const { visible } = this.state
        const { children } = this.props
        return (
            <div>
            {withClick(children, this.handlePopClick)}    
            <Modal title="Add User" visible={visible} centered={true} maskClosable={false} onCancel={this.handleCancel}>
                <Form>
                    <FormItem label="Username" {...formItemLayout}>
                        <Input placeholder="Please input the username"/>
                    </FormItem>
                    <FormItem label="Name" {...formItemLayout}>
                        <Input placeholder="Please input the name"/>
                    </FormItem>
                    <FormItem label="Type" {...formItemLayout}>
                        <RadioGroup>
                            <Radio value={'0'}>Adminstrator</Radio>
                            <Radio value={'1'}>User</Radio>
                        </RadioGroup>
                    </FormItem>
                </Form>
            </Modal>
            </div>
        )
    }
}

export default UserModel