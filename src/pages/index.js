import styles from './index.scss';
import { Card, Col, Row } from 'antd'

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
     </Row>
    </div>
  );
}

export default indexPage
