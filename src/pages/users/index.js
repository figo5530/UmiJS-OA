/**
 * title: User
 * Routers:
 *   - ./src/routes/PrivateRoute.js
 * authority: ["admin"]
 */
import React from 'react'
import  { Button, Message, Popconfirm } from 'antd'
import { Content, Tool } from '@/components/Layout'
import Table from '@/components/Table'
import { connect } from 'dva'
import UserModal from './components/UserModal'

const index = ({ list, dispatch, loading, addLoading, total, page, pageSize }) => {

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
                    <UserModal title="Edit User" record={record} onAdd={value => handleEdit(record.id, value)}>
                        <a>Edit</a>
                    </UserModal>
                    <Popconfirm title="Confirm to delete this user?" onConfirm={() => handleDelete(record.id)}>
                        <a>Delete</a>
                    </Popconfirm>
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
                Message.success('Successfully added')
                reload()
                return res
            } else {
                Message.error('Failed to add user')
            }
        })
    }

    const handlePageChange = pageNum => {
        if (page !== pageNum) {
            dispatch({ type: 'users/fetch', payload: { page: pageNum } })
        }
    }

    const handleEdit = (id, value) => {
        return dispatch({ type: 'users/edit', payload: {id, value} })
        .then(res => {
            console.log(res)
            if (res && res.state === 'success') {
                Message.success('Successfully updated')
                reload()
                return res
            } else {
                Message.error('Failed to edit user')
            }
        })
    }
    
    const handleDelete = (id) => {
        return dispatch({ type: 'users/remove', payload: id })
        .then(res => {
            if (res && res.state === 'success') {
                Message.success('Successfully deleted')
                reload()
            } else {
                Message.error('Failed to delete user')
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
            <Table columns={columns} dataSource={list} 
                rowKey={(list, index) => list.id} loading={loading} 
                pagination={{
                    total: total,
                    pageSize: pageSize,
                    current: page,
                    onChange: handlePageChange
                }}
            />
        </Content>
    )
}

export default connect(({ users, loading }) => ({
    ...users,
    loading: loading.effects['users/fetch'],
    addLoading: loading.effects['users/add']
}))(index)