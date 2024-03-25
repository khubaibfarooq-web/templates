import React, { Fragment } from 'react';
import { Col, Row } from 'antd';
import Card from "./card";
import waterService from "../media/water.png";
import sanitation from "../media/sanitation.png";
import garbage from "../media/garbage.png";
import other from "../media/other-complain.png";
import { useNavigate } from 'react-router-dom';
import SiteFooter from '../templates/siteFooter';


const HomeDashboard = () => {
    const navigate = useNavigate();
    return (
        <Fragment>
            <div className="content-wrapper mt-5 mb-0">
                <h2 className="welcome-user-heading">Welcome, Jhon Doe!</h2>
                <Row gutter={30}>
                    <Col lg={6} onClick={() => navigate('/applicant_details')}>
                        <Card serviceTitle={'Water'} serviceImg={waterService} />
                    </Col>
                    <Col lg={6} onClick={() => navigate('/applicant_details')}>
                        <Card serviceTitle={'Sanitation'} serviceImg={sanitation} />
                    </Col>
                    <Col lg={6} onClick={() => navigate('/applicant_details')}>
                        <Card serviceTitle={'Garbage Collection'} serviceImg={garbage} />
                    </Col>
                    <Col lg={6} onClick={() => navigate('/applicant_details')}>
                        <Card serviceTitle={'Other Complaints'} serviceImg={other} />
                    </Col>
                </Row>
            </div>
            <SiteFooter />
        </Fragment>
    )
}

export default HomeDashboard;