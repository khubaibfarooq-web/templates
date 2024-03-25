import React, { Fragment } from 'react'
import { Formik } from 'formik';
import ShowApplicantAddress from "../serviceManagement/showApplicantAddress"

const initialValues = {
    email: "",
    password: "",

};

const ApplicantAddress = () => {

    const handleSubmit = (formProps) => {

    };
    return (
        <Fragment>
            <Formik
                onSubmit={handleSubmit}
                initialValues={initialValues}
                component={ShowApplicantAddress}
            />
        </Fragment>
    )
}

export default ApplicantAddress;