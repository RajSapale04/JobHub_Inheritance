import Candidate from "./Candidate";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="jendo-parent">
        <div className="jendo">
          <div className="logo1">
            <img
              className="briefcase-1-icon1"
              alt=""
              src="/briefcase-1-1.svg"
            />
            <h2 className="jobpilot1">JobHub</h2>
          </div>
          <div className="support-links">
            <div className="phone-number">
              <div className="call-now">Call now:</div>
              <div className="location-text"> +91 9976437298</div>
            </div>
            <div className="elgin-st-celina">
              Veermata Jijabai Technological Institute, Matunga, Mumbai, India.
            </div>
          </div>
        </div>
        <div className="quick-link-footer-links">
          <div className="com">
            <h3 className="quick-link">Quick Link</h3>
            <div className="link1">
              <div className="footer-link8">
                <img
                  className="fiarrow-right-icon6"
                  alt=""
                  src="/fiarrowright.svg"
                />
                <div className="footer-link9">About</div>
              </div>
              <div className="footer-link10">
                <img
                  className="fiarrow-right-icon7"
                  alt=""
                  src="/fiarrowright-2.svg"
                />
                <div className="footer-link11">Contact</div>
              </div>
              <div className="footer-link8">
                <img
                  className="fiarrow-right-icon6"
                  alt=""
                  src="/fiarrowright.svg"
                />
                <div className="footer-link9">Pricing</div>
              </div>
              <div className="footer-link8">
                <img
                  className="fiarrow-right-icon6"
                  alt=""
                  src="/fiarrowright.svg"
                />
                <div className="footer-link9">Blog</div>
              </div>
            </div>
          </div>
          <Candidate
            candidate="Candidate"
            footerLink="Browse Jobs"
            footerLink1="Browse Employers"
            footerLink2="Candidate Dashboard"
            footerLink3="Saved Jobs"
          />
          <Candidate
            candidate="Employers"
            footerLink="Post a Job"
            footerLink1="Browse Candidates"
            footerLink2="Employers Dashboard"
            footerLink3="Applications"
          />
          <div className="support">
            <h3 className="quick-link">Support</h3>
            <div className="link1">
              <div className="footer-link8">
                <img
                  className="fiarrow-right-icon6"
                  alt=""
                  src="/fiarrowright.svg"
                />
                <div className="footer-link9">Faqs</div>
              </div>
              <div className="footer-link8">
                <img
                  className="fiarrow-right-icon6"
                  alt=""
                  src="/fiarrowright.svg"
                />
                <div className="footer-link9">Privacy Policy</div>
              </div>
              <div className="footer-link8">
                <img
                  className="fiarrow-right-icon6"
                  alt=""
                  src="/fiarrowright.svg"
                />
                <div className="footer-link9">{`Terms & Conditions`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <div className="jobpilot-job">
          @ 2021 Jobpilot - Job Portal. All rights Rserved
        </div>
        <div className="support-frame">
          <img className="vector-shape-icon" alt="" src="/vector-shape.svg" />
          <img
            className="youtube-1-icon"
            loading="eager"
            alt=""
            src="/youtube-1.svg"
          />
          <img className="youtube-1-icon" alt="" src="/instagram-1.svg" />
          <img className="youtube-1-icon" alt="" src="/twitter-1.svg" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
