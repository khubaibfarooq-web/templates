import { Button, Col, Row } from 'antd'
import { Form, Field } from "formik";
import React from 'react'
import userImg from '../../media/prof-img.png'
import { AntInput } from '../form/createAntFields'

const ShowUserDetails = () => {
    return (
        <Row gutter={20} className="align-items-center">
            <Col lg={10}>
                <h2 className="user-profile-heading">Edit Your Profile</h2>
                <div className="user-profile-img-box">
                    <img src={userImg} />
                    <p className="add-user-img">Add image</p>
                </div>
                <Row>
                    <Col lg={24}>
                        <Field
                            size="large"
                            placeholder="Jhon Doe"
                            component={AntInput}
                            name="userName"
                            type="text"
                            label="Enter Your Name"
                            className="custom-input"
                        />
                    </Col>
                    <Col lg={24}>
                        <Field
                            size="large"
                            placeholder="+02 xxx-xxxxxxx"
                            component={AntInput}
                            name="userNum"
                            type="text"
                            label="Mobile Number"
                            className="custom-input"
                        />
                    </Col>
                    <Col lg={24}>
                        <div className="d-flex justify-content-between" gutter={20}>
                            <Button className="prof-cnc-btn  w-100 me-4">
                                cancel
                            </Button>
                            <Button className="prof-save-btn  w-100">
                                save changes
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col lg={10}>
                <h2 className="user-profile-heading">Permanent Address</h2>
                <Col lg={24}>
                    <Field
                        size="large"
                        placeholder="Street no 10"
                        component={AntInput}
                        name="userStreet"
                        type="text"
                        label="Enter Street"
                        className="custom-input"
                    />
                </Col>
                <Col lg={24}>
                    <Field
                        size="large"
                        placeholder="Islamabad"
                        component={AntInput}
                        name="userCity"
                        type="text"
                        label="Enter City"
                        className="custom-input"
                    />
                </Col>
                <Col lg={24}>
                    <Field
                        size="large"
                        placeholder="Islamabad"
                        component={AntInput}
                        name="userDist"
                        type="text"
                        label="Enter District"
                        className="custom-input"
                    />
                </Col>
                <Col lg={24}>
                    <Field
                        size="large"
                        placeholder="Federal"
                        component={AntInput}
                        name="userProv"
                        type="text"
                        label="Enter Province"
                        className="custom-input"
                    />
                </Col>
            </Col>
        </Row>
    )
}

export default ShowUserDetails