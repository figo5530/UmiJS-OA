import React from 'react'
import { Row, Col, Card } from 'antd'
const List = () => {
    return (
        <div>
            <Row gutter={20}>
                <Col>
                    <Card>
                        <p>Title</p>
                        <p>Receiver</p>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default List