import React, { Fragment } from 'react'
import { Form, Field } from "formik";
import { AntInput, AntSelect, RadioGroup } from '../form/createAntFields';
import { Button, Col, Row, Breadcrumb } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
const ShowApplicantDetails = () => {

    const navigate = useNavigate();
    return (
        <Fragment>
            <div className="bread-crumb-spacer custom-bread-crumb-box">
                <Breadcrumb className="mb-2">
                    <Breadcrumb.Item onClick={() => navigate('/dashboard')}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Water</Breadcrumb.Item>
                </Breadcrumb>
                <h2>water</h2>
            </div>
            <div className="content-wrapper">
                <Form name="login-form" className="form-container" autoComplete="off">
                    <Row gutter={40}>
                        <Col lg={7} className="mb-3">
                            <Field
                                size="large"
                                placeholder="Select"
                                component={AntSelect}
                                name="serviceType"
                                type="text"
                                label="Service Type"
                                hasFeedback
                                className="custom-select"
                            />
                        </Col>
                        <Col lg={24}>
                            <h2 className="applicant-heading">enter applicant details</h2>
                        </Col>
                        <Col lg={7} className="mb-1">
                            <Field
                                size="large"
                                placeholder="John Doe"
                                component={AntInput}
                                name="userName"
                                type="text"
                                label="Enter Your Name"
                                hasFeedback
                                className="custom-input"
                            />
                        </Col>
                        <Col lg={7} className="mb-1">
                            <Field
                                size="large"
                                placeholder="xxxxx-xxxxx-xxxxx"
                                component={AntInput}
                                name="cnic"
                                type="text"
                                label="CNIC"
                                hasFeedback
                                className="custom-input"
                            />
                        </Col>
                        <Col lg={7} className="mb-1">
                            <span className="ant-form-item-label gender-label">Gender</span>
                            <div className="gender-box">
                                <Field
                                    size="large"
                                    placeholder="Select an option"
                                    component={RadioGroup}
                                    required={true}
                                    name="gender"
                                    options={[
                                        { label: 'Male', value: 'male' },
                                        { label: 'Female', value: 'female' },
                                    ]}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={40}>
                        <Col lg={7} className="mb-3">
                            <Field
                                size="large"
                                placeholder="Jhonedoe@gmail.com"
                                component={AntInput}
                                name="userEmail"
                                type="email"
                                label="Enter Your email address"
                                hasFeedback
                                className="custom-input"
                            />
                        </Col>
                        <Col lg={7} className="mb-3">
                            <Field
                                size="large"
                                placeholder="+02 xxx-xxxxx"
                                component={AntInput}
                                name="userNum"
                                type="text"
                                label="Mobile Number"
                                hasFeedback
                                className="custom-input"
                            />
                        </Col>
                    </Row>
                    <Row gutter={40}>
                        <Col lg={7}>
                            <Button onClick={() => navigate('/applicant_address')} className="custom-btn-bg" type="primary" block size={'large'}>NEXT</Button>
                        </Col>
                    </Row>
                </Form>

            </div>


        </Fragment>

    )
}

export default ShowApplicantDetails;