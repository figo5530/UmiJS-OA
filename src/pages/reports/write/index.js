import React, { Component } from 'react'
import { Form, Input, Select, Button } from 'antd'
import { Content } from '@/components/Layout'


class index extends Component {
    render() {
        return (
            <Content>
                <Form>
                    <Form.Item label="Title">
                        <Input placeholder="Please input the title"/>
                    </Form.Item>
                    <Form.Item label="Recipient">
                        <Input placeholder="Please select the recipient"/>
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

export default index