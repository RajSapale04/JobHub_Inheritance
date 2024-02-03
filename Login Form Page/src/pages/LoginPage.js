import FRAMEWelcomeBack from "../components/FRAMEWelcomeBack";
import "./LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login-page">
      <main className="main-container">
        <div className="left-side-8-column">
          <FRAMEWelcomeBack />
          <div className="footer-copyright-frame">
            <div className="all-rights-reserved">
              © 2023 ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
        <div className="art" />

      </main>
    </div>
  );
};

export default LoginPage;
