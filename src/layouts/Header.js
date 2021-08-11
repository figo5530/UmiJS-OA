import React from 'react' 
import { Menu } from 'antd'

const MenuItem = Menu.Item
const header = () => {
    return <div className="header">
        <img className="logo" src={require('@/assets/logo.png')} alt="logo" />
        <Menu className="menus" mode="horizontal" theme="light">
            <MenuItem>
                Home
            </MenuItem>
        </Menu>
    </div>
}
export default header