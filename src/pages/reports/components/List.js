import React from 'react'
import { Row, Col, Card } from 'antd'
import { connect } from 'dva'
const List = ({ list }) => {
    const colSpan = { xl: 6, xxl:4, span: 6 }
    return (
        <div>
            <Row gutter={20}>
                {console.log(list)}
                {list.map(item => (
                <Col {...colSpan} key={item.id}>
                    <Card title={item.createTime}>
                        <p className='title'>{item.title}</p>
                        <p>{item.receiverName}</p>
                    </Card>
                </Col>
                ))}
            </Row>
        </div>
    )
}
export default connect(({ reports }) => ({ ...reports }))(List) 