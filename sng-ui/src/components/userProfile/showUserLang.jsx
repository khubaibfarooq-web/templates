import React from 'react'
import { Col, Row, Radio, Button } from 'antd';



const ShowUserLang = () => {

    return (
        <Row gutter={9}>
            <Col lg={10}>
                <h2 className="user-profile-heading">Please Choose preferred Language</h2>
                <div className="lang-select-box mb-5">
                    <Col className="mb-3">
                        <Radio>English</Radio>
                    </Col>
                    <Col className="mb-3">
                        <Radio>Urdu</Radio>
                    </Col>
                    <Col className="mb-2">
                        <Radio>Pashto</Radio>
                    </Col>
                </div>
                <Col lg={24}>
                    <div className="d-flex justify-content-between" gutter={20}>
                        <Button className="prof-cnc-btn  w-100 me-4">
                            cancel
                        </Button>
                        <Button className="prof-save-btn  w-100">
                            update
                        </Button>
                    </div>
                </Col>
            </Col>
        </Row>
    )
}

export default ShowUserLang;