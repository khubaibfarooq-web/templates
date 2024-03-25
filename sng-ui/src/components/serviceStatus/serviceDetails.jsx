import { Button, Col, Row, Input, Breadcrumb } from 'antd';
import React, { Fragment } from 'react'
import Clip from "../../media/paperclip.png";
import Downbtn from "../../media/download.png";
import { useNavigate } from 'react-router-dom';

const { TextArea } = Input;

const ServiceDetails = () => {
    const navigate = useNavigate();
    return (
        <Fragment>
            <div className="bread-crumb-spacer custom-bread-crumb-box">
                <Breadcrumb className="mb-2">
                    <Breadcrumb.Item onClick={() => navigate('/dashboard')}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => navigate('/services')}>Services Status</Breadcrumb.Item>
                    <Breadcrumb.Item>Services Details</Breadcrumb.Item>
                </Breadcrumb>
                <h2>Services Details</h2>
            </div>
            <div className="content-wrapper">
                <Row>
                    <Col lg={8}>
                        <div className="service-con-info s-detail-info">
                            <p className="m-0 service-con-id">Application ID: 2123</p>
                            <p className="service-con-name">New Water Connection</p>
                            <p className="m-0 service-con-status">Status:<span className="service-con-assign"> Assigned to TOI</span> </p>
                        </div>
                        <div className="service-con-time-line">
                            <div className="time-line-container">
                                <div className="time-line-wrapper">
                                    <ul className="time-line-steps">
                                        <li>
                                            <p>Application Received & Assigned to TMO</p>
                                        </li>
                                        <li>
                                            <p>Assigned to TOI</p>
                                        </li>
                                        <li>
                                            <p>Assigned to Sub Engineer</p>
                                        </li>
                                        <li>
                                            <p>Waiting for Sub Engineer Approval</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="recent-attachment-wrapper">
                            <h2 className="service-detail-headings">recent attachments</h2>
                            <Row className="mb-3">
                                <Col lg={14}>
                                    <Button className="rec-atc-btn w-100">
                                        <span className="d-flex align-items-center justify-content-between">
                                            <img src={Clip} />
                                            <span className="recent-file-name">Challan Form.jpg</span>
                                            <img src={Downbtn} />
                                        </span>
                                    </Button>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col lg={14}>
                                    <Button className="rec-atc-btn w-100">
                                        <span className="d-flex align-items-center justify-content-between">
                                            <img src={Clip} />
                                            <span className="recent-file-name">CNIC Front.jpg</span>
                                            <img src={Downbtn} />
                                        </span>
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={14}>
                                    <Button className="rec-atc-btn w-100">
                                        <span className="d-flex align-items-center justify-content-between">
                                            <img src={Clip} />
                                            <span className="recent-file-name">CNIC Front.jpg</span>
                                            <img src={Downbtn} />
                                        </span>
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={16}>
                        <div className="service-document-wrapper">
                            <Row>
                                <Col lg={13}>
                                    <h2 className="service-detail-headings">add comment</h2>
                                    <TextArea rows={4} placeholder="Your Comment Here" maxLength={6} className="user-comment mb-3" />
                                    <Row className="justify-content-between align-items-center spacer-8">
                                        <Col>
                                            <span className="attach-doc-heading ps-3">attach document</span>
                                        </Col>
                                        <Col lg={13}>
                                            <Button className="rec-upl-btn w-100">
                                                <span className="">
                                                    <img src={Clip} className="me-3" />
                                                    <span className="recent-file-upload">Upload</span>
                                                </span>
                                            </Button>
                                        </Col>
                                    </Row>
                                    <Row gutter={19} className="spacer-5">
                                        <Col lg={9}>
                                            <Button className="comment-cancel-btn w-100">cancel</Button>
                                        </Col>
                                        <Col lg={9}>
                                            <Button className="comment-btn w-100">comment</Button>
                                        </Col>
                                    </Row>
                                    <div className="latest-comment-wrapper">
                                        <h2 className="service-detail-headings">latest comments</h2>
                                        <div className="latest-comment-body">
                                            <h3 className="latest-comment-heading">tmo</h3>
                                            <p className="latest-comment-info">Application approved and forwarded to TOI for further process</p>
                                            <Col lg={14}>
                                                <Button className="rec-atc-btn w-100">
                                                    <span className="d-flex align-items-center justify-content-between">
                                                        <img src={Clip} />
                                                        <span className="recent-file-name">Challan Form.jpg</span>
                                                        <img src={Downbtn} />
                                                    </span>
                                                </Button>
                                                <span className="comment-date-time">12:03 PM 12/12/21</span>
                                            </Col>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
}

export default ServiceDetails;