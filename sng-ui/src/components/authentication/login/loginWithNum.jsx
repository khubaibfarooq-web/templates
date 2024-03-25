import React, { Fragment } from 'react'
import { Formik } from 'formik';
import ShowLoginWithNum from './showLoginWithNum';
import { Col } from 'antd';

const initialValues = {
    email: "",
    password: "",

};
const LoginWithNum = () => {
    const handleSubmit = (formProps) => {

    };
    return (
        <Fragment>
            <div className="custom-container">
                <Col lg={9} offset={14}>
                    <Formik
                        onSubmit={handleSubmit}
                        initialValues={initialValues}
                        component={ShowLoginWithNum}
                    />
                </Col>
            </div>
        </Fragment>
    )
}

export default LoginWithNum;