import React from 'react' 
import { Menu, Dropdown, Icon } from 'antd'
import Link from 'umi/link'
import withRouter from 'umi/withRouter'

const MenuItem = Menu.Item
const header = ({ location }) => {
    const menu = (
        <Menu>
            <MenuItem>
                <span>Sign Out</span>
            </MenuItem>
        </Menu>
    )
    return <div className="header">
        <img className="logo" src={require('@/assets/logo.png')} alt="logo" />
        <Menu className="menus" mode="horizontal" theme="light" selectedKeys={[location.pathname]}>
            <MenuItem key='/'>
            <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem key='/users'>
            <Link to="/">User</Link>
            </MenuItem>
        </Menu>
        <div className='right'>
            <Dropdown overlay={menu} >
                <a className="ant-dropdown-link" href="www.google.com">
                    <Icon type='user' style={{ marginRight: 3 }}/> admin
                </a>
            </Dropdown>
        </div>
    </div>
}
export default withRouter(header)