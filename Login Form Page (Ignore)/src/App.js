import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MainPage from "./pages/MainPage";

import LoginPage from "./pages/LoginPage";
import Employer from "./pages/Employer";
import JobSeeker from "./pages/JobSeeker";
import Welcome from "./pages/Welcome";

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
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login-page" element={<LoginPage />} />

      <Route path="/employer" element={<Employer />} />
      <Route path="/jobseeker" element={<JobSeeker />} />
      <Route path="/welcome" element={<Welcome />} />

    </Routes>
  );
}
export default App;
