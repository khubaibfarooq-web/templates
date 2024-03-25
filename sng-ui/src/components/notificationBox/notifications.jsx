import { Col, Row, Breadcrumb, Button } from 'antd';
import React, { Fragment } from 'react'
import water from "../../media/service-water.png";
import unread from "../../media/un-read.png"
import read from "../../media/read.png"
import { useNavigate } from 'react-router-dom';

const Notifications = () => {
    const navigate = useNavigate();
    console.log('render notificaitons')
    return (
        <Fragment>
            <div className="d-flex align-items-center justify-content-between">
                <div className="bread-crumb-spacer custom-bread-crumb-box">
                    <Breadcrumb className="mb-2">
                        <Breadcrumb.Item onClick={() => navigate('/dashboard')}>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Notifications</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2>Notifications</h2>
                </div>
                <div className="mark-all-read">
                    <Col lg={24}>
                        <Button className="read-all-btn w-100">Mark All as read</Button>
                    </Col>
                </div>
            </div>
            <div className="content-wrapper">
                <Row>
                    <Col lg={24}>
                        <div className="notification-wrapper notification-unread">
                            <div className="d-flex justify-content-between">
                                <div className="connection-info d-flex">
                                    <div className="connection-icon">
                                        <img src={water} />
                                    </div>
                                    <div className="connection-title">
                                        <p>Application has been approved for the new water connection</p>
                                    </div>
                                </div>
                                <div className="connection-read-status">
                                    <img src={unread} alt={'un-read-icon'} />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="connection-date-time">
                                    <span>10/04/2021  06:22:20</span>
                                </div>
                                <div className="connection-id">
                                    <span>Application ID:2123</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={24}>
                        <div className="notification-wrapper notification-unread">
                            <div className="d-flex justify-content-between">
                                <div className="connection-info d-flex">
                                    <div className="connection-icon">
                                        <img src={water} />
                                    </div>
                                    <div className="connection-title">
                                        <p>Application has been approved for the new water connection</p>
                                    </div>
                                </div>
                                <div className="connection-read-status">
                                    <img src={unread} alt={'un-read-icon'} />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="connection-date-time">
                                    <span>10/04/2021  06:22:20</span>
                                </div>
                                <div className="connection-id">
                                    <span>Application ID:2123</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={24}>
                        <div className="notification-wrapper notification-unread">
                            <div className="d-flex justify-content-between">
                                <div className="connection-info d-flex">
                                    <div className="connection-icon">
                                        <img src={water} />
                                    </div>
                                    <div className="connection-title">
                                        <p>Application has been approved for the new water connection</p>
                                    </div>
                                </div>
                                <div className="connection-read-status">
                                    <img src={unread} alt={'un-read-icon'} />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="connection-date-time">
                                    <span>10/04/2021  06:22:20</span>
                                </div>
                                <div className="connection-id">
                                    <span>Application ID:2123</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={24}>
                        <div className="notification-wrapper notification-read">
                            <div className="d-flex justify-content-between">
                                <div className="connection-info d-flex">
                                    <div className="connection-icon">
                                        <img src={water} />
                                    </div>
                                    <div className="connection-title">
                                        <p>Application has been approved for the new water connection</p>
                                    </div>
                                </div>
                                <div className="connection-read-status">
                                    <img src={read} alt={'read-icon'} />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="connection-date-time">
                                    <span>10/04/2021  06:22:20</span>
                                </div>
                                <div className="connection-id">
                                    <span>Application ID:2123</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={24}>
                        <div className="notification-wrapper notification-read">
                            <div className="d-flex justify-content-between">
                                <div className="connection-info d-flex">
                                    <div className="connection-icon">
                                        <img src={water} />
                                    </div>
                                    <div className="connection-title">
                                        <p>Application has been approved for the new water connection</p>
                                    </div>
                                </div>
                                <div className="connection-read-status">
                                    <img src={read} alt={'read-icon'} />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="connection-date-time">
                                    <span>10/04/2021  06:22:20</span>
                                </div>
                                <div className="connection-id">
                                    <span>Application ID:2123</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={24}>
                        <div className="notification-wrapper notification-read">
                            <div className="d-flex justify-content-between">
                                <div className="connection-info d-flex">
                                    <div className="connection-icon">
                                        <img src={water} />
                                    </div>
                                    <div className="connection-title">
                                        <p>Application has been approved for the new water connection</p>
                                    </div>
                                </div>
                                <div className="connection-read-status">
                                    <img src={read} alt={'read-icon'} />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="connection-date-time">
                                    <span>10/04/2021  06:22:20</span>
                                </div>
                                <div className="connection-id">
                                    <span>Application ID:2123</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}

export default Notifications;