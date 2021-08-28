import React, { Component } from 'react'
import { Modal, Form, Input, Radio } from 'antd'

const FormItem = Form.Item
const RadioGroup = Radio.Group

class UserModel extends Component {
    render() {
        return (
            <Modal title="Add User" visible={true} >
                <Form>
                    <FormItem label="username">
                        <Input placeholder="Please input the username"/>
                    </FormItem>
                    <FormItem label="name">
                        <Input placeholder="Please input the name"/>
                    </FormItem>
                    <FormItem label="type">
                        <RadioGroup>
                            <Radio value={'0'}>Adminstrator</Radio>
                            <Radio value={'1'}>User</Radio>
                        </RadioGroup>
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}

export default UserModel