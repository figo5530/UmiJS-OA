import React, { Component } from 'react'
import { Modal, Form, Input, Radio } from 'antd'
import { withClick } from '@/utils/hoc'
import create from 'antd/lib/icon/IconFont'

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

    handleOk =() => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values)
            }
        })
    }

    render() {
        const { visible } = this.state
        const { children } = this.props
        const { getFieldDecorator } = this.props.form
        return (
            <div>
            {withClick(children, this.handlePopClick)}    
            <Modal title="Add User" 
            visible={visible} 
            centered={true} 
            maskClosable={false} 
            onCancel={this.handleCancel}
            onOk={this.handleOk}>
                <Form>
                    <FormItem label="Username" {...formItemLayout}>
                        {getFieldDecorator('username', {
                            rules: [
                                {
                                    required: true,
                                    message: "Username can not be empty",
                                },
                            ],
                        })(
                        <Input placeholder="Please input the username"/>)}
                    </FormItem>
                    <FormItem label="Name" {...formItemLayout}>
                        {getFieldDecorator('name', {
                            rules: [
                                {
                                    required: true,
                                    message: "Name can not be empty",
                                },
                            ],
                        })(
                        <Input placeholder="Please input the name"/>)}
                    </FormItem>
                    <FormItem label="Type" {...formItemLayout}>
                        {getFieldDecorator('type', {
                            rules: [
                                {
                                    required: true,
                                    message: "Please choose one",
                                },
                            ],
                        })(
                        <RadioGroup>
                            <Radio value={'0'}>Adminstrator</Radio>
                            <Radio value={'1'}>User</Radio>
                        </RadioGroup>)}
                    </FormItem>
                </Form>
            </Modal>
            </div>
        )
    }
}

export default Form.create()(UserModel)