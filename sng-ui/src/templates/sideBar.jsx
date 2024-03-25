
import React, { Fragment } from 'react'
import { Layout, Menu } from 'antd';
import AsideHome from "../media/aside-home.svg";
import AsideStatus from "../media/aside-status.svg";
import AsideReports from "../media/aside-reports.svg";
import AsideHelp from "../media/aside-help.svg";
import AsideLogout from "../media/aside-logout.svg";
import { useNavigate } from 'react-router-dom';
const { Sider } = Layout;
const SideBar = () => {
    const navigate = useNavigate();
    return (
        <Fragment>
            <Sider className="side-bar-nav">
                <Menu className="aside-bar" theme="light" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" onClick={() => navigate('/dashboard')}>
                        <span className="d-flex flex-column justify-content-center align-items-center pt-2">
                            <img src={AsideHome} alt={'home-icon'} />
                        </span>
                    </Menu.Item>
                    <Menu.Item key="2" onClick={() => navigate('/services')}>
                        <span className="d-flex flex-column justify-content-center align-items-center">
                            <img src={AsideStatus} alt={'status-icon'} />
                        </span>
                    </Menu.Item>
                    <Menu.Item key="3" onClick={() => navigate('/reports')}>
                        <span className="d-flex flex-column justify-content-center align-items-center">
                            <img src={AsideReports} alt={'report-icon'} />
                        </span>
                    </Menu.Item>
                    <Menu.Item key="4" onClick={() => navigate('/help')}>
                        <span className="d-flex flex-column justify-content-center align-items-center">
                            <img src={AsideHelp} alt={'help-icon'} />
                        </span>
                    </Menu.Item>
                    <Menu.Item onClick={() => navigate('/')} key="5" className="logout-mt">
                        <span className="d-flex flex-column justify-content-center align-items-center">
                            <img src={AsideLogout} alt={'logout-icon'} />
                        </span>
                    </Menu.Item>
                </Menu>
            </Sider>
        </Fragment >
    )
}

export default SideBar;