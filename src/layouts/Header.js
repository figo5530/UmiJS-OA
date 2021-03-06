import React from 'react' 
import { Menu, Dropdown, Icon } from 'antd'
import Link from 'umi/link'
import withRouter from 'umi/withRouter'
import router from 'umi/router'

const MenuItem = Menu.Item
const header = ({ location }) => {
    const onLogOut = () => {
        localStorage.clear()
        router.push('/login')
    }
    const menu = (
        <Menu>
            <MenuItem>
                <span onClick={onLogOut}>Sign Out</span>
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
                <Link to="/users">User</Link>
            </MenuItem>
            <MenuItem key='/reports'>
                <Link to="/reports">Report</Link>
            </MenuItem>
        </Menu>
        <div className='right'>
            <Dropdown overlay={menu} >
                <a className="ant-dropdown-link" href="#">
                    <Icon type='user' style={{ marginRight: 3 }}/> {localStorage.nickname}
                </a>
            </Dropdown>
        </div>
    </div>
}
export default withRouter(header)