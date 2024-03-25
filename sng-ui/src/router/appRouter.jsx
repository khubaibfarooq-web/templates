import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLogin from "../components/authentication/login/defaultLogin";
import PreLoginTemplate from "../templates/preLoginTemplate";
import MainLayout from "../templates/mainLayout";
import LoginWithCnic from "../components/authentication/login/loginWithCnic";
import LoginWithNum from "../components/authentication/login/loginWithNum";
import DisplayRegisterForm from "../components/authentication/signup/displayRegisterForm";
import HomeDashboard from "../components/homeDashboard";
import ApplicantDetails from "../components/serviceManagement/applicantDetails ";
import ApplicantAddress from "../components/serviceManagement/applicantAddress";
import Notifications from "../components/notificationBox/notifications";
import UserProfile from "../components/userProfile/userProfile";
import HelpMain from "../components/help/helpMain";
import ContactUs from "../components/help/contactUs";
import Faq from "../components/help/faq";
import TermsAndConditions from "../components/help/termsAndConditions";
import PrivacyPolicy from "../components/help/privacyPolicy";
import Services from "../components/serviceStatus/services";
import ServiceDetails from "../components/serviceStatus/serviceDetails";
import Reports from "../components/reports/reports";



const MainRouter = () => {
    return (
        <Router>

            <Routes>
                {/* 
                <Route path="/" element={
                    <PreLoginTemplate >
                        <DefaultLogin />
                    </PreLoginTemplate>
                }
                /> */}

                <Route path="/" element={
                    <PreLoginTemplate >
                        <LoginWithNum />
                    </PreLoginTemplate>
                }
                />


                <Route path="/login_cnic" element={
                    <PreLoginTemplate >
                        <LoginWithCnic />
                    </PreLoginTemplate>
                }
                />



                <Route path="/signup" element={
                    <PreLoginTemplate >
                        <DisplayRegisterForm />
                    </PreLoginTemplate>
                }
                />


                <Route path="/dashboard/*" element={
                    <MainLayout >
                        <HomeDashboard />
                    </MainLayout>
                }
                />

                <Route path="/applicant_details/*" element={
                    <MainLayout >
                        <ApplicantDetails />
                    </MainLayout>
                }
                />

                <Route path="/applicant_address/*" element={
                    <MainLayout >
                        <ApplicantAddress />
                    </MainLayout>
                }
                />


                <Route path="/notification_inbox/*" element={
                    <MainLayout >
                        <Notifications />
                    </MainLayout>
                }
                />


                <Route path="/user_profile/*" element={
                    <MainLayout >
                        <UserProfile />
                    </MainLayout>
                }
                />


                <Route path="/help/*" element={
                    <MainLayout >
                        <HelpMain />
                    </MainLayout>
                }
                />

                <Route path="/contact_us/*" element={
                    <MainLayout >
                        <ContactUs />
                    </MainLayout>
                }
                />

                <Route path="/faq/*" element={
                    <MainLayout >
                        <Faq />
                    </MainLayout>
                }
                />

                <Route path="/terms_conditions/*" element={
                    <MainLayout >
                        <TermsAndConditions />
                    </MainLayout>
                }
                />

                <Route path="/privacy_policy/*" element={
                    <MainLayout >
                        <PrivacyPolicy />
                    </MainLayout>
                }
                />

                <Route path="/services/*" element={
                    <MainLayout >
                        <Services />
                    </MainLayout>
                }
                />

                <Route path="/service_details/*" element={
                    <MainLayout >
                        <ServiceDetails />
                    </MainLayout>
                }
                />

                <Route path="/reports/*" element={
                    <MainLayout >
                        <Reports />
                    </MainLayout>
                }
                />



            </Routes>
        </Router>)

}
export default MainRouter;




