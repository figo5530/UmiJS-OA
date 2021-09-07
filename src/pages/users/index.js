/**
 * title: User
 */
import React from 'react'
import  { Button, Message } from 'antd'
import { Content, Tool } from '@/components/Layout'
import Table from '@/components/Table'
import { connect } from 'dva'
import UserModal from './components/UserModal'

const index = ({ list, dispatch, loading, addLoading }) => {

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

    const reload = () => {
        dispatch({ type: "users/fetch", payload: { page: 1 } })
    }

    const handleAdd = values => {
        return dispatch({ type: 'users/add', payload: values })
        .then(res => {
            console.log(res)
            if (res && res.state === 'success') {
                Message.success(res.msg)
                reload()
                return res
            } else {
                Message.error('Failed to add user')
            }
        })
    }
    return (
        <Content>
            <Tool>
                <UserModal onAdd={handleAdd} addLoading={addLoading}>
                    <Button type="primary">Add User</Button>
                </UserModal>
            </Tool>
            <Table columns={columns} dataSource={list} rowKey={(list, index) => list.id} loading={loading}/>
        </Content>
    )
}

export default connect(({ users, loading }) => ({
    ...users,
    loading: loading.effects['users/fetch'],
    addLoading: loading.effects['users/add']
}))(index)