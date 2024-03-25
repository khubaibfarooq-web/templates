import { Breadcrumb, Col, Row } from 'antd';
import React, { Fragment, useState } from 'react'
import rightArrow from "../../media/tab-right-arrow.png";
import UserDetails from './userDetails';
import UserPass from "./userPass";
import UserLang from "./userLang";
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const navigate = useNavigate();
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <Fragment>
            <div className="bread-crumb-spacer custom-bread-crumb-box">
                <Breadcrumb className="mb-2">
                    <Breadcrumb.Item onClick={() => navigate('/dashboard')}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>My Account</Breadcrumb.Item>
                </Breadcrumb>
                <h2>My Account</h2>
            </div>
            <div className="content-wrapper">
                <Row gutter={40}>
                    <Col lg={6}>
                        <div className="user-profile-tab">
                            <ul>
                                <li onClick={() => toggleTab(1)}>
                                    <span className="d-flex justify-content-between align-items-center user-tab-pading">
                                        <span className={toggleState === 1 ? "user-profile-tab-list active-user-profile-tab-list" : "user-profile-tab-list"}>edit profile</span>
                                        <img src={rightArrow} />
                                    </span>
                                </li>
                                <li onClick={() => toggleTab(2)}>
                                    <span className="d-flex justify-content-between align-items-center user-tab-pading">
                                        <span className={toggleState === 2 ? "user-profile-tab-list active-user-profile-tab-list" : "user-profile-tab-list"}>change password</span>
                                        <img src={rightArrow} />
                                    </span>
                                </li>
                                <li onClick={() => toggleTab(3)}>
                                    <span className="d-flex justify-content-between align-items-center user-tab-pading">
                                        <span className={toggleState === 3 ? "user-profile-tab-list active-user-profile-tab-list" : "user-profile-tab-list"}>change language</span>
                                        <img src={rightArrow} />
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={18}>
                        <div className="tabs-content-holder">
                            <div className={toggleState === 1 ? "content  active-content" : "content"}>
                                <UserDetails />
                            </div>
                            <div className={toggleState === 2 ? "content  active-content" : "content"}>
                                <UserPass />
                            </div>
                            <div className={toggleState === 3 ? "content  active-content" : "content"}>
                                <UserLang />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

        </Fragment>
    )
}

export default UserProfile;