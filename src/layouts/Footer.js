import React from 'react' 
import { Layout, Icon } from 'antd'

const { Footer } = Layout
const footer = () => {
    return <Footer className="footer">
        Copyright <Icon type="copyright" /> 2021 Yinghui Gan
        </Footer>
}
export default footer