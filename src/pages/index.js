/**
 * title: Home
 * Routers:
 *   - ./src/routes/PrivateRoute.js
 * authority: ["admin","user"]
 */
import styles from './index.scss';
import { Card, Col, Row } from 'antd'
import ReactEcharts from 'echarts-for-react'

const reportOptions = {
  title: {
    text: 'Weekly Statistics',
    x: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b} : {c} person({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['submitted', 'unsubmitted'],
  },
  series: [
    {
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 200, name: 'submitted' },
        { value: 30, name: 'unsubmitted' },
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
}

const loginOptions = {
  title: {
    text: 'Weekly log in times',
    x: 'center',
    textAlign: 'center',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999',
      },
    },
  },
  legend: {
    left: "left",
    data: ['users', 'times'],
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisPointer: {
        type: 'shadow',
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      name: 'users',
      min: 0,
      // interval: 50,
      axisLabel: {
        formatter: '{value} users',
      },
    },
    {
      type: 'value',
      name: 'times',
      min: 0,
      // interval: 5,
      axisLabel: {
        formatter: '{value} times',
      },
    },
  ],
  series: [
    {
      name: 'users',
      type: 'bar',
      data: [230, 150, 120, 100, 210, 15, 0],
      barWidth: [35],
      itemStyle: {
        color: '#58afff',
      },
    },
    {
      name: 'times',
      type: 'line',
      yAxisIndex: 1,
      data: [350, 300, 280, 378, 320, 20, 0],
      lineStyle: {
        color: 'orange',
      },
    },
  ],
}

function indexPage() {
  return (
    <div className={styles.home}>
     <Row gutter={16}>
        <Col span={4}>
          <Card className={`${styles.card} ${styles.number}`}>
            <p className={styles.title}>To be reviewed</p>
            <p className={styles.text}>2</p>
          </Card>
        </Col>
        <Col span={4}>
          <Card className={`${styles.card} ${styles.number}`}>
            <p className={styles.title}>Weekly log in</p>
            <p className={`${styles.text} ${styles.gray}`}>5</p>
          </Card>
        </Col>
        <Col span={16}>
            <div className={`${styles.images} ${styles.card}`}></div>
        </Col>
        <Col span={8}>
          <Card className={`${styles.card}`}>
            <ReactEcharts option={reportOptions} style={{height:400}} />
          </Card>
        </Col>
        <Col span={16}>
          <Card className={`${styles.card}`}>
            <ReactEcharts option={loginOptions} style={{height:400}} />
          </Card>
        </Col>
     </Row>
    </div>
  );
}

export default indexPage
