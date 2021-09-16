/**
 * title: New
 */

import React, { Component } from 'react'
import { Form, Input, Select, Button } from 'antd'
import { Content } from '@/components/Layout'
import E from 'wangeditor'


class index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            editorContent: null,
            editorCheck: true
        }
    }

    componentDidMount() {
        this.initEditor()
    }

    initEditor() {
        const editor = new E(this.refs.editorRef)

        editor.customConfig.onchage = html => {
            let editorCheck = true
            if (!html || html == "<p><br/></p>") {
                editorCheck = false
            }
            this.setState({
                editorContent: html,
                editorCheck: editorCheck
            })
        }
        editor.create()
    }

    render() {
        const { getFieldDecorator } = this.props.form
        const { editorCheck } = this.state
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
                    <Form.Item label="Content" required>
                        <div ref="editorRef" style={!editorCheck ? {border: '1px red solid'} : {border: '1px #eee solid'}}/>
                        {!editorCheck && <p style={{color: 'red'}}>Content can not be empty</p>}
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