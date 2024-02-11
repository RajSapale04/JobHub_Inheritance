import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import EmployerProfile from "./pages/EmployerProfile";
import UserProfile from "./pages/UserProfile";
import JobDetail from "./pages/JobDetail";
import JobList from "./pages/JobList";
import Job from "./pages/Job";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import Employer from "./pages/Employer";
import JobSeeker from "./pages/JobSeeker";
import Welcome from "./pages/Welcome";
import MainPage from "./pages/MainPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/user-profile":
        title = "";
        metaDescription = "";
        break;
      case "/job-detail":
        title = "";
        metaDescription = "";
        break;
      case "/job-list":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-page":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/employer":
        title = "";
        metaDescription = "";
        break;
      case "/jobseeker":
        title = "";
        metaDescription = "";
        break;
      case "/welcome":
        title = "";
        metaDescription = "";
        break;
      case "/main-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/post-job" element={<Job />} />
      <Route path="/job-detail/:id" element={<JobDetail />} />
      <Route path="/job-list" element={<JobList />} />
      <Route path="/:user/signup" element={<SignUpPage />} />
      <Route path="/:user/login" element={<LoginPage />} />
      <Route path="/company" element={<Employer />} />
      <Route path="/user" element={<JobSeeker />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/company-profile" element={<EmployerProfile />} />
    </Routes>
  );
}
export default App;
