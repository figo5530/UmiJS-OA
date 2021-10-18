/**
 * title: New
 */

import React, { Component } from 'react'
import { Form, Input, Select, Button, Message} from 'antd'
import { Content } from '@/components/Layout'
import E from 'wangeditor'
import { connect } from 'dva'
import router from 'umi/router'


class $id$ extends Component {

    constructor(props) {
        super(props)

        this.id = props.match.params.id
        this.state = {
            editorContent: null,
            editorCheck: true
        }
    }

    componentDidMount() {
        if(this.id) {
            //edit
            this.getDatas().then(() => {
                const {content} = this.props.info
                this.setState({
                    editorContent: content
                })
                this.initEditor()
            })
        } else {
            this.initEditor()
        }
        this.getAllUsers()
    }

    getDatas() {
        return this.props.dispatch({
            type: "reports/fetchInfo",
            payload: this.id
        })
    }

    getAllUsers() {
        this.props.dispatch({
            type: 'reports/getAllUsers',
        }).then(res => {
            this.renderUsers()
        })
    }

    renderUsers() {
        const { allUsersList } = this.props
        return (
            <Select placeholder="Please select the recipient">
                {allUsersList.map(({ username, nickname }, index) => [
                    <Select.Option value={username} key={index}>
                        {nickname}
                    </Select.Option>
                ])}
            </Select>
        )
    }

    initEditor() {
        const editor = new E(this.refs.editorRef)
        editor.config.onchange = html => {
            let editorCheck = true
            if (!html || html === "<p><br/></p>") {
                editorCheck = false
            }
            this.setState({
                editorContent: html,
                editorCheck: editorCheck
            })
        }
        editor.create()
    }

    handleOk = () => {
        //form validation
        const { editorCheck, editorContent } = this.state
        this.props.form.validateFields((err, value) => {
            if(!err) {
                //editor validation
                if (editorContent && editorCheck) {
                    // console.log(value, editorContent)
                    this.props.dispatch({
                        type: this.id ? 'reports/update' : 'reports/add',
                        payload: { ...value, content: editorContent, id: this.id }
                    })
                    .then(res => {
                        if (res && res.state === 'success') {
                            Message.success("Submit Successfully")
                            router.push('/reports')
                        } else {
                            Message.success("Submit Failed")
                        }
                    })
                } else {
                    this.setState({
                        editorCheck: false
                    })
                }
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form
        const { editorCheck } = this.state
        const { title, receiverName, content } = this.props.info
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
                            ],
                            initialValue: title
                        })(
                        <Input placeholder="Please input the title"/>)}
                    </Form.Item>
                    <Form.Item label="Recipient">
                        {getFieldDecorator('username', {
                            rules: [
                                {
                                    required: true,
                                    message: "Please select the recipient",
                                },
                            ],
                            initialValue: receiverName
                        })(
                        this.renderUsers())}
                    </Form.Item>
                    <Form.Item label="Content" required>
                        <div ref="editorRef" style={!editorCheck ? {border: '1px red solid'} : {border: '1px #eee solid'}} 
                        dangerouslySetInnerHTML={{__html: content}}/>
                        {!editorCheck && <p style={{color: 'red'}}>Content can not be empty</p>}
                    </Form.Item>
                    <Form.Item className="action">
                        <Button>Cancel</Button>
                        <Button onClick={this.handleOk} type="primary">Submit</Button>
                    </Form.Item>
                </Form>
            </Content>
        )
    }
}

export default connect(({ reports }) => ({...reports}))(Form.create()($id$))

