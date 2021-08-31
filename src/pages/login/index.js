import React from 'react'
import { login } from './services/login'
import { Layout, Icon, Form, Input, Button } from 'antd'
import styles from './index.scss'

const { Content, Footer } = Layout;
const iconStyle = { color: 'rgba(0,0,0,.25)' };
const index = ({ form }) => {
    const handleSubmit = () => {
        form.validateFields((err, values) => {
            if (!err) {
                login(values).then(data => console.log(data)).catch(err => console.log(err))
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
                        <Button onClick={handleSubmit} type="primary" style={{ width: '100%' }}>
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

export default Form.create()(index)