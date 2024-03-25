import React, { Fragment } from 'react'
import { Form, Field } from "formik";
import { AntInput, AntTextArea } from '../form/createAntFields';
import { Button, Col, Row, Breadcrumb } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
const ShowApplicantAddress = () => {
    const navigate = useNavigate();
    return (
        <Fragment>
            <div className="bread-crumb-spacer custom-bread-crumb-box">
                <Breadcrumb className="mb-2">
                    <Breadcrumb.Item onClick={() => navigate('/dashboard')}>
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Water</Breadcrumb.Item>
                </Breadcrumb>
                <h2>water</h2>
            </div>
            <div className="content-wrapper">
                <Form name="login-form" className="form-container" autoComplete="off">
                    <Row gutter={30}>
                        <Col lg={7}>
                            <Col lg={24}>
                                <Field
                                    size="large"
                                    placeholder="Street no 10"
                                    component={AntInput}
                                    name="streetNum"
                                    type="text"
                                    label="Enter Street"
                                    className="custom-input"
                                />
                            </Col>
                            <Col lg={24}>
                                <Field
                                    size="large"
                                    placeholder="Hangu"
                                    component={AntInput}
                                    name="district"
                                    type="text"
                                    label="Enter District"
                                    className="custom-input"
                                />
                            </Col>
                            <Col lg={24}>
                                <Field
                                    size="large"
                                    placeholder="Kpk"
                                    component={AntInput}
                                    name="province"
                                    type="text"
                                    label="Enter Province"
                                    className="custom-input"
                                />
                            </Col>
                            <Col lg={24}>
                                <Row className="justify-content-between">
                                    <Col lg={11}>
                                        <Button onClick={() => navigate('/applicant_details')} className="custom-btn-bg" type="primary" block size={'large'}>Back</Button>
                                    </Col>

                                    <Col lg={11}>
                                        <Button className="custom-btn-bg" type="primary" block size={'large'}>Submit</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Col>
                        <Col lg={12}>
                            <Col lg={13}>
                                <Field
                                    size="large"
                                    placeholder="Kpk"
                                    component={AntTextArea}
                                    name="province"
                                    type="text"
                                    label="Enter Province"
                                    className=""
                                    rows={5}
                                />
                            </Col>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Fragment>

    )
}

export default ShowApplicantAddress;