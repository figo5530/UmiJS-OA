import React from 'react'
import { Layout, Icon, Form, Input, Button } from 'antd'
import styles from './index.scss'

const { Content, Footer } = Layout;
const iconStyle = { color: 'rgba(0,0,0,.25)' };
export default function index() {
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
                        <Input
                            prefix={<Icon type="user" style={iconStyle} />}
                            placeholder="Username"
                            autoFocus
                        />
                        </Form.Item>
                        <Form.Item>
                        <Input
                            type="password"
                            prefix={<Icon type="lock" style={iconStyle} />}
                            placeholder="Password"
                            autoFocus
                        />
                        </Form.Item>
                        <Form.Item>
                        <Button type="primary" style={{ width: '100%' }}>
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