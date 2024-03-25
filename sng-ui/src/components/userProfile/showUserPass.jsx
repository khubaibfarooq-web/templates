import React from 'react'
import { Form, Field } from "formik";
import { AntInput } from '../form/createAntFields'
import { Button, Col, Row } from 'antd';

const ShowUserPass = () => {
    return (
        <Row>
            <Col lg={10}>
                <h2 className="user-profile-heading">Change Password</h2>
                <Col lg={24}>
                    <Field
                        size="large"
                        placeholder="********"
                        component={AntInput}
                        name="userOldPass"
                        type="password"
                        label="Enter Old Password"
                        className="custom-input"
                    />
                </Col>
                <Col lg={24}>
                    <Field
                        size="large"
                        placeholder="********"
                        component={AntInput}
                        name="userNewPass"
                        type="password"
                        label="Enter New Password"
                        className="custom-input"
                    />
                </Col>
                <Col lg={24} className="mb-4">
                    <Field
                        size="large"
                        placeholder="********"
                        component={AntInput}
                        name="userConfPass"
                        type="password"
                        label="Confirm New Password"
                        className="custom-input"
                    />
                </Col>
                <Col lg={24}>
                    <div className="d-flex justify-content-between" gutter={20}>
                        <Button className="prof-cnc-btn  w-100 me-4">
                            cancel
                        </Button>
                        <Button className="prof-save-btn  w-100">
                            confirm
                        </Button>
                    </div>
                </Col>
            </Col>
        </Row>
    )
}

export default ShowUserPass;