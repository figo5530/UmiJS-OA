import React from 'react'
import { Layout, Icon } from 'antd'
import styles from './index.scss'

const { Content, Footer } = Layout;
export default function index() {
    return (
        <Layout>
            <Content className={styles.content}>Login</Content>
            <Footer className={styles.footer}>
                Copyright <Icon type="copyright" /> 2021 Yinghui Gan
            </Footer>
        </Layout>
    )
    
}