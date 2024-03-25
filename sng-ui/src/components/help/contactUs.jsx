import { Col, Row, Breadcrumb } from 'antd';
import React, { Fragment } from 'react'
import Card from "../card";
import Phone from "../../media/phone.png"
import Envelope from "../../media/envelope.png"
import Map from "../../media/map.png";
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
    const navigate = useNavigate();
    return (
        <Fragment>
            <div className="bread-crumb-spacer custom-bread-crumb-box">
                <Breadcrumb className="mb-2">
                    <Breadcrumb.Item onClick={() => navigate('/dashboard')}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => navigate('/help')}>Help</Breadcrumb.Item>
                    <Breadcrumb.Item>Contact Us</Breadcrumb.Item>
                </Breadcrumb>
                <h2>contact us</h2>
            </div>
            <div className="content-wrapper">
                <Row gutter={30} className="mb-4">
                    <Col lg={6}>
                        <Card serviceTitle={'Call'} serviceImg={Phone} />
                    </Col>
                    <Col lg={6}>
                        <Card serviceTitle={'Email Us'} serviceImg={Envelope} />
                    </Col>
                </Row>
                <Row gutter={30}>
                    <Col lg={24}>
                        <Col lg={12} className="ps-0">
                            <div className="horizontal-address-card d-flex align-items-center">
                                <div className="map-icon">
                                    <img src={Map} />
                                </div>
                                <div className="address-box">
                                    <p className="address-heading">Address:</p>
                                    <p className="address-detail">Lorem ipsum dolor sit amet, Islamabad.</p>
                                </div>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}

export default ContactUs;