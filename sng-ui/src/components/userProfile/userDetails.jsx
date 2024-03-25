import React, { Fragment } from 'react'
import { Formik } from 'formik';
import ShowUserDetails from "./showUserDetails"

const initialValues = {
    email: "",
    password: "",

};

const UserDetails = () => {
    const handleSubmit = (formProps) => {

    };
    return (
        <Fragment>
            <Formik
                onSubmit={handleSubmit}
                initialValues={initialValues}
                component={ShowUserDetails}
            />
        </Fragment>
    )
}

export default UserDetails;