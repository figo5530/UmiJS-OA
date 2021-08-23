/**
 * title: User
 */
import React from 'react'
import  { Button, Table } from 'antd'
import styles from './index.scss'
const index = () => {
    const columns =[
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
            width: '25%'
        },
        {
            title: 'Nickname',
            dataIndex: 'nickname',
            key: 'nickname',
            width: '25%'
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            width: '25%'
        },
        {
            title: 'Operation',
            key: 'operation',
            render: (text, record) => (
                <div>
                    <a>Edit</a>
                    <a>Delete</a>
                </div>
            )
        },
    ]
    return (
        <div className={`${styles['content-wrapper']}`}>
            <div className={`${styles['tool-wrapper']}`}>
                <Button type="primary">Add User</Button>
            </div>
            <Table columns={columns}/>
        </div>
    )
}

export default index