import React, { Fragment, useState } from 'react'
import { Breadcrumb, Button, Col, Tabs } from 'antd';
import { useNavigate } from 'react-router-dom';

const { TabPane } = Tabs;

const Services = () => {
    const navigate = useNavigate();
    const [size, setSize] = useState();
    const onChange = e => {
        this.setState({ size: e.target.value });
    };
    return (
        <Fragment>
            <div className="bread-crumb-spacer custom-bread-crumb-box">
                <Breadcrumb className="mb-2">
                    <Breadcrumb.Item onClick={() => navigate('/dashboard')}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Services Status</Breadcrumb.Item>
                </Breadcrumb>
                <h2>Services Status</h2>
            </div>
            <div className="content-wrapper">
                <div className="service-tabs-wrapper">
                    <Col lg={18}>
                        <Tabs defaultActiveKey="1" type="card" size={'large'} className="service-tabs">
                            <TabPane tab="All" key="1">
                                <Col lg={24} className="mb-3">
                                    <div className="servie-status-detail-wrapper d-flex justify-content-between align-items-center service-con-inprocess">
                                        <div className="service-con-info">
                                            <p className="m-0 service-con-id">Application ID: 2123</p>
                                            <p className="service-con-name">New Water Connection</p>
                                            <p className="m-0 service-con-status">Status:<span className="service-con-assign"> Assigned to TOI</span> </p>
                                        </div>
                                        <div className="service-con-status">
                                            <Button className="mb-2 service-con-btn service-proces-btn">in progress</Button>
                                            <span onClick={() => navigate('/service_details')} className="d-block text-center service-con-detail">View Details</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={24} className="mb-3">
                                    <div className="servie-status-detail-wrapper d-flex justify-content-between  service-con-complete">
                                        <div className="service-con-info">
                                            <p className="m-0 service-con-id">Application ID: 2123</p>
                                            <p className="service-con-name">New Water Connection</p>
                                            <p className="m-0 service-con-status">Status:<span className="service-con-assign"> Assigned to TOI</span> </p>
                                        </div>
                                        <div className="service-con-status">
                                            <Button className="mb-2 service-con-btn service-complete-btn">Completed</Button>
                                            <span onClick={() => navigate('/service_details')} className="d-block text-center service-con-detail">View Details</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={24} className="mb-3">
                                    <div className="servie-status-detail-wrapper d-flex justify-content-between service-con-reject">
                                        <div className="service-con-info">
                                            <p className="m-0 service-con-id">Application ID: 2123</p>
                                            <p className="service-con-name">New Water Connection</p>
                                            <p className="m-0 service-con-status">Status:<span className="service-con-assign"> Assigned to TOI</span> </p>
                                        </div>
                                        <div className="service-con-status">
                                            <Button className="mb-2 service-con-btn service-reject-btn">rejected</Button>
                                            <span onClick={() => navigate('/service_details')} className="d-block text-center service-con-detail">View Details</span>
                                        </div>
                                    </div>
                                </Col>
                            </TabPane>
                            <TabPane tab="In Progress" key="2">
                                <Col lg={24} className="mb-3">
                                    <div className="servie-status-detail-wrapper d-flex justify-content-between align-items-center service-con-inprocess">
                                        <div className="service-con-info">
                                            <p className="m-0 service-con-id">Application ID: 2123</p>
                                            <p className="service-con-name">New Water Connection</p>
                                            <p className="m-0 service-con-status">Status:<span className="service-con-assign"> Assigned to TOI</span> </p>
                                        </div>
                                        <div className="service-con-status">
                                            <Button className="mb-2 service-con-btn service-proces-btn">in progress</Button>
                                            <span onClick={() => navigate('/service_details')} className="d-block text-center service-con-detail">View Details</span>
                                        </div>
                                    </div>
                                </Col>
                            </TabPane>
                            <TabPane tab="Completed" key="3">
                                <Col lg={24} className="mb-3">
                                    <div className="servie-status-detail-wrapper d-flex justify-content-between  service-con-complete">
                                        <div className="service-con-info">
                                            <p className="m-0 service-con-id">Application ID: 2123</p>
                                            <p className="service-con-name">New Water Connection</p>
                                            <p className="m-0 service-con-status">Status:<span className="service-con-assign"> Assigned to TOI</span> </p>
                                        </div>
                                        <div className="service-con-status">
                                            <Button className="mb-2 service-con-btn service-complete-btn">Completed</Button>
                                            <span onClick={() => navigate('/service_details')} className="d-block text-center service-con-detail">View Details</span>
                                        </div>
                                    </div>
                                </Col>
                            </TabPane>
                            <TabPane tab="Rejected" key="4">
                                <Col lg={24} className="mb-3">
                                    <div className="servie-status-detail-wrapper d-flex justify-content-between service-con-reject">
                                        <div className="service-con-info">
                                            <p className="m-0 service-con-id">Application ID: 2123</p>
                                            <p className="service-con-name">New Water Connection</p>
                                            <p className="m-0 service-con-status">Status:<span className="service-con-assign"> Assigned to TOI</span> </p>
                                        </div>
                                        <div className="service-con-status">
                                            <Button className="mb-2 service-con-btn service-reject-btn">rejected</Button>
                                            <span onClick={() => navigate('/service_details')} className="d-block text-center service-con-detail">View Details</span>
                                        </div>
                                    </div>
                                </Col>
                            </TabPane>
                            <TabPane tab="Out of TAT" key="5">
                                <Col lg={24}>
                                    <div className="servie-status-detail-wrapper">

                                    </div>
                                </Col>
                            </TabPane>
                        </Tabs>
                    </Col>
                </div>
            </div>
        </Fragment >
    )
}

export default Services;