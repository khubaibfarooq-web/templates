import React, { Fragment } from 'react'
import { Formik } from 'formik';
import ShowApplicantDetails from "../serviceManagement/showApplicantDetails";



const initialValues = {
    email: "",
    password: "",

};

const ApplicantDetails = () => {



    const handleSubmit = (formProps) => {

    };

    return (
        <Fragment>
            <Formik
                onSubmit={handleSubmit}
                initialValues={initialValues}
                component={ShowApplicantDetails}
            />
        </Fragment>
    )
}

export default ApplicantDetails;