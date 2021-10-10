import React from 'react'
import { Row, Col, Card, Pagination } from 'antd'
import { connect } from 'dva'
const List = ({ list, page, pageSize, total }) => {

    const handleChangePage = current => {
        console.log(current)
    }
    const colSpan = { xl: 6, xxl:4, span: 6 }
    return (
        <div>
            <Row gutter={20}>
                {console.log(list, page, pageSize, total)}
                {list.map(item => (
                <Col {...colSpan} key={item.id}>
                    <Card title={item.createTime}>
                        <p className='title'>{item.title}</p>
                        <p>{item.receiverName}</p>
                    </Card>
                </Col>
                ))}
            </Row>
            {list.length ? (
                <Pagination current={page} pageSize={pageSize} total={total} onChange={handleChangePage} />
            ) : ''}
        </div>
    )
}
export default connect(({ reports }) => ({ ...reports }))(List) 