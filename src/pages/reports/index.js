/**
 * title: Report
 */
import React, { Component } from 'react'
import Link from 'umi/link'
import { Button } from 'antd'
import { Content, Tool } from '@/components/Layout'

class index extends Component {
    render() {
        return (
            <Content className="report-wrapper">
                <Tool>
                    <Button type="primary">
                        <Link to="/reports/write">New</Link>
                    </Button>
                </Tool>
            </Content>
        )
    }
}

export default index