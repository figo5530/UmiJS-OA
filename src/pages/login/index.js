import React from 'react'
import jwt_decode from 'jwt-decode'
import router from 'umi/router'
import { Layout, Icon, Form, Input, Button, Message } from 'antd'
import styles from './index.scss'
import { connect } from 'dva'

const { Content, Footer } = Layout;
const iconStyle = { color: 'rgba(0,0,0,.25)' };
const index = ({ form, dispatch, loading }) => {
    const handleSubmit = () => {
        form.validateFields((err, values) => {
            if (!err) {
                dispatch({
                    type: 'login/login',
                    payload: values
                }).then(res => {
                    if (res && res.state === 'suc') {
                        const token = jwt_decode(res.token)
                        const { id, nickname, username, type } = token
                        localStorage.setItem('username', username)
                        localStorage.setItem('nickname', nickname)
                        localStorage.setItem('userId', id)
                        localStorage.setItem('authority', type === '0' ? 'admin' : 'user')
                        router.push('/')
                    } else {
                        Message.error(res ? res.msg : 'Failed to log in')
                    }
                })
                .catch(err => console.log(err))
            }
        })
    }
    return (
        <Layout>
            <Content className={styles.content}>
                <div className={styles.form}>
                    <h1>
                        {/* <img src={require("@/assets/logo.png")} alt='logo' /> */}
                        Office Automation
                    </h1>
                    <Form>
                        <Form.Item>
                            {form.getFieldDecorator('username', {
                                    rules: [
                                        {
                                            required: true,
                                            message: "Username can not be empty",
                                        },
                                    ],
                                })(
                            <Input
                            prefix={<Icon type="user" style={iconStyle} />}
                            placeholder="Username"
                            autoFocus
                        />,
                        )}
                        </Form.Item>
                        <Form.Item>
                        {form.getFieldDecorator('password', {
                                    rules: [
                                        {
                                            required: true,
                                            message: "Password can not be empty",
                                        },
                                    ],
                                })(
                        <Input
                            type="password"
                            prefix={<Icon type="lock" style={iconStyle} />}
                            placeholder="Password"
                            autoFocus
                        />,
                        )}
                        </Form.Item>
                        <Form.Item>
                        <Button loading={loading} onClick={handleSubmit} type="primary" style={{ width: '100%' }}>
                            Sign in
                        </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Content>
            <Footer className={styles.footer}>
                Copyright <Icon type="copyright" /> 2021 Yinghui Gan
            </Footer>
        </Layout>
    )    
}

export default connect(({ loading }) => ({
    loading: loading.effects['login/login']
}))(Form.create()(index))