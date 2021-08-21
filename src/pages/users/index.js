/**
 * title: User
 */
import React from 'react'
import  { Button } from 'antd'
import styles from './index.scss'
const index = () => {
    return (
        <div className={`${styles['content-wrapper']}`}>
            <div className={`${styles['tool-wrapper']}`}>
                <Button type="primary">Add User</Button>
            </div>
        </div>
    )
}

export default index