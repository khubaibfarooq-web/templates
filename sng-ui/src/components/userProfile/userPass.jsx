import React, { Fragment } from 'react'
import { Formik } from 'formik';
import ShowUserPass from "./showUserPass";

const initialValues = {
    email: "",
    password: "",

};

const UserPass = () => {
    const handleSubmit = (formProps) => {

    };
    return (
        <Fragment>
            <Formik
                onSubmit={handleSubmit}
                initialValues={initialValues}
                component={ShowUserPass}
            />
        </Fragment>
    )
}

export default UserPass;