import React from 'react' 
import { Menu } from 'antd'
import Link from 'umi/link'
import withRouter from 'umi/withRouter'

const MenuItem = Menu.Item
const header = ({ location }) => {
    return <div className="header">
        <img className="logo" src={require('@/assets/logo.png')} alt="logo" />
        <Menu className="menus" mode="horizontal" theme="light" selectedKeys={[location.pathname]}>
            <MenuItem key='/'>
            <Link to="/">Home</Link>
            </MenuItem>
        </Menu>
    </div>
}
export default withRouter(header)