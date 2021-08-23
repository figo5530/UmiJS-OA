/**
 * title: User
 */
import React from 'react'
import  { Button } from 'antd'
import { Content, Tool } from '@/components/Layout'
import Table from '@/components/Table'
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
        <Content>
            <Tool>
                <Button type="primary">Add User</Button>
            </Tool>
            <Table columns={columns}/>
        </Content>
    )
}

export default index