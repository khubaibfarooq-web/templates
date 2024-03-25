import { Col, Row, Breadcrumb } from 'antd';
import React, { Fragment } from 'react'
import HelpCards from "../card";
import helpContact from "../../media/help-contact.png"
import faq from "../../media/faq.png"
import { useNavigate } from 'react-router-dom';


const HelpMain = () => {

    const navigate = useNavigate();

    return (
        <Fragment>
            <div className="bread-crumb-spacer custom-bread-crumb-box">
                <Breadcrumb className="mb-2">
                    <Breadcrumb.Item onClick={() => navigate('/dashboard')}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Help</Breadcrumb.Item>
                </Breadcrumb>
                <h2>help</h2>
            </div>
            <div className="content-wrapper">
                <Row gutter={30}>
                    <Col lg={6} onClick={() => navigate('/contact_us')}>
                        <HelpCards serviceTitle={'Contact Us'} serviceImg={helpContact} />
                    </Col>
                    <Col lg={6} onClick={() => navigate('/faq')}>
                        <HelpCards serviceTitle={"FAQ'S"} serviceImg={faq} />
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}

export default HelpMain;