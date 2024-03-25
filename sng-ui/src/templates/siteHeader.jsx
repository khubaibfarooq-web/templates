import React, { Fragment } from 'react'
import headerLogo from "../media/header-logo.png";
import bell from "../media/bell.png";
import userImg from "../media/user-img.png";
import { useNavigate } from "react-router-dom";
const SiteHeader = () => {
    const navigate = useNavigate();
    return (
        <Fragment>
            <div className="site-header-wrapper">
                <img src={headerLogo} alt={'header-logo'} onClick={() => navigate('/dashboard')} />
                <span className="portal-heading">Municipal Services KP Management Portal</span>
                <div className="notifications">
                    <img src={bell} alt={'bell-icon'} onClick={() => navigate('/notification_inbox')} />
                    <span className="ms-2 me-2">Hi , Admin</span>
                    <img src={userImg} alt={'user-img'} onClick={() => navigate('/user_profile')} />
                </div>
            </div>
        </Fragment>
    )
}

export default SiteHeader;