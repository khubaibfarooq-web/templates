import React, { Fragment } from 'react'
import { Button, Col, Collapse, Row, Breadcrumb } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const { Panel } = Collapse;




const Faq = () => {
    const navigate = useNavigate();
    return (
        <Fragment>
            <div className="bread-crumb-spacer custom-bread-crumb-box">
                <Breadcrumb className="mb-2">
                    <Breadcrumb.Item onClick={() => navigate('/dashboard')}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => navigate('/help')}>Help</Breadcrumb.Item>
                    <Breadcrumb.Item>FAQs</Breadcrumb.Item>
                </Breadcrumb>
                <h2>FAQs</h2>
            </div>
            <div className="content-wrapper">
                <Collapse
                    expandIconPosition={"right"}
                    defaultActiveKey={["1"]}
                    className="faqs-accordion mb-2"
                    expandIcon={({ isActive }) => isActive ? <AiOutlineMinus size={24} /> : <AiOutlinePlus size={24} />}
                >
                    <Panel
                        header="
                    App installation failed, how to update system information?."
                        key="1"
                        className="faq-accordion-title"
                    >
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolor.
                        </p>
                    </Panel>
                </Collapse>
                <Collapse
                    expandIconPosition={"right"}
                    defaultActiveKey={["-1"]}
                    className="faqs-accordion mb-2"
                    expandIcon={({ isActive }) => isActive ? <AiOutlineMinus size={24} /> : <AiOutlinePlus size={24} />}
                >
                    <Panel
                        header="
                    Website reponse taking time, how to improve?."
                        key="1"
                        className="faq-accordion-title"
                    >
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolor.
                        </p>
                    </Panel>
                </Collapse>
                <Collapse
                    expandIconPosition={"right"}
                    defaultActiveKey={["-1"]}
                    className="faqs-accordion mb-2"
                    expandIcon={({ isActive }) => isActive ? <AiOutlineMinus size={24} /> : <AiOutlinePlus size={24} />}
                >
                    <Panel
                        header="
                    App installation failed, how to update system information?."
                        key="1"
                        className="faq-accordion-title"
                    >
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolor.
                        </p>
                    </Panel>
                </Collapse>
                <Collapse
                    expandIconPosition={"right"}
                    defaultActiveKey={["-1"]}
                    className="faqs-accordion mb-2"
                    expandIcon={({ isActive }) => isActive ? <AiOutlineMinus size={24} /> : <AiOutlinePlus size={24} />}
                >
                    <Panel
                        header="
                    Website reponse taking time, how to improve?."
                        key="1"
                        className="faq-accordion-title"
                    >
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolor.
                        </p>
                    </Panel>
                </Collapse>
                <Collapse
                    expandIconPosition={"right"}
                    defaultActiveKey={["-1"]}
                    className="faqs-accordion mb-2"
                    expandIcon={({ isActive }) => isActive ? <AiOutlineMinus size={24} /> : <AiOutlinePlus size={24} />}
                >
                    <Panel
                        header="
                    App installation failed, how to update system information?."
                        key="1"
                        className="faq-accordion-title"
                    >
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolor.
                        </p>
                    </Panel>
                </Collapse>
                <Collapse
                    expandIconPosition={"right"}
                    defaultActiveKey={["-1"]}
                    className="faqs-accordion mb-2"
                    expandIcon={({ isActive }) => isActive ? <AiOutlineMinus size={24} /> : <AiOutlinePlus size={24} />}
                >
                    <Panel
                        header="
                    Website reponse taking time, how to improve?."
                        key="1"
                        className="faq-accordion-title"
                    >
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolor.
                        </p>
                    </Panel>
                </Collapse>
            </div>

        </Fragment>
    )
}

export default Faq;