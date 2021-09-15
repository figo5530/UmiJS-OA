import React, { Component } from 'react'
import { Form, Input, Select, Button } from 'antd'
import { Content } from '@/components/Layout'


class index extends Component {
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <Content>
                <Form>
                    <Form.Item label="Title">
                        {getFieldDecorator('title', {
                            rules: [
                                {
                                    required: true,
                                    message: "Title can not be empty",
                                },
                            ]
                        })(
                        <Input placeholder="Please input the title"/>)}
                    </Form.Item>
                    <Form.Item label="Recipient">
                        {getFieldDecorator('recipient', {
                            rules: [
                                {
                                    required: true,
                                    message: "Please select the recipient",
                                },
                            ]
                        })(
                        <Select placeholder="Please select the recipient"/>)}
                    </Form.Item>
                    <Form.Item className="action">
                        <Button>Cancel</Button>
                        <Button type="primary">Submit</Button>
                    </Form.Item>
                </Form>
            </Content>
        )
    }
}

export default Form.create()(index)