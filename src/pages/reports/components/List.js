import React from 'react'
import { Row, Col, Card, Pagination, Tooltip, Icon } from 'antd'
import { connect } from 'dva'
const List = ({ list, page, pageSize, total, dispatch }) => {

    const handleChangePage = current => {
        if (current !== page) {
            getDatas(current)
        }
    }

    const getDatas = page => {
        dispatch({
            type: 'reports/fetch',
            payload: { page }
        })
    }

    const colSpan = { xl: 6, xxl:4, span: 6 }
    return (
        <div>
            <Row gutter={20}>
                {list.map(item => (
                <Col {...colSpan} key={item.id}>
                    <Card title={item.createTime} extra={
                        <>
                            <Tooltip placement="top" title="edit">
                                <a href={`/reports/write/${item.id}`}>
                                    <Icon type="form"></Icon>
                                </a>
                            </Tooltip>
                        </>
                    }>
                        <p className='title'>{item.title}</p>
                        <p>{item.receiverName}</p>
                    </Card>
                </Col>
                ))}
            </Row>
            {list.length ? (
                <Pagination className='global-pagination' current={page} pageSize={pageSize} total={total} onChange={handleChangePage} />
            ) : ''}
        </div>
    )
}
export default connect(({ reports }) => ({ ...reports }))(List) 