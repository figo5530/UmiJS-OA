/**
 * title: User
 */
import React from 'react'
import  { Button } from 'antd'
import { Content, Tool } from '@/components/Layout'
import Table from '@/components/Table'
import { connect } from 'dva'
import UserModel from './components/UserModel'
const index = ({ list }) => {

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
            width: '25%',
            render: text => <span>{text === "0" ? 'Adminstrator' : 'User'}</span>
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
                <UserModel></UserModel>
            </Tool>
            <Table columns={columns} dataSource={list} rowKey={(list, index) => list.id}/>
        </Content>
    )
}

export default connect(({users}) => ({...users}))(index)