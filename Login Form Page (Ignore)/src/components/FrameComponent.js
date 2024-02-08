import Candidate from "./Candidate";
import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer1">
        <div className="footer-logo-frame">
          <div className="about-us-frame1">
            <div className="jendo">
              <div className="logo">
                <img
                  className="briefcase-1-icon"
                  loading="eager"
                  alt=""
                  src="/briefcase-1.svg"
                />
                <h3 className="jobpilot">JobHub</h3>
              </div>
              <div className="contact-info-frame">
                <div className="phone-number">
                  <div className="call-now">Call now:</div>
                  <div className="v-j-t">+91-99762-90637</div>
                </div>
                <div className="veermata-jeejabai-technologica">
                  Veermata Jeejabai Technological Institute, Matunga, Mumbai,
                  India.
                </div>
              </div>
            </div>
            <div className="jendo-footer-frame">
              <div className="com">
                <div className="quick-link">Quick Link</div>
                <div className="link1">
                  <div className="footer-link8">
                    <div className="footer-link9">About</div>
                  </div>
                  <div className="footer-link10">
                    <img
                      className="fiarrow-right-icon"
                      loading="eager"
                      alt=""
                      src="/fiarrowright.svg"
                    />
                    <div className="contact">Contact</div>
                  </div>
                  <div className="footer-link8">
                    <div className="footer-link12">Pricing</div>
                  </div>
                  <div className="footer-link8">
                    <div className="footer-link14">Blog</div>
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
                <div className="quick-link">Support</div>
                <div className="link1">
                  <div className="footer-link8">
                    <div className="footer-link16">Faqs</div>
                  </div>
                  <div className="footer-link8">
                    <div className="footer-link18">Privacy Policy</div>
                  </div>
                  <div className="footer-link8">
                    <div className="footer-link20">{`Terms & Conditions`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right">
          <div className="jobhub-job">
            @ 2021 JobHub - Job Portal. All rights Rserved
          </div>
          <div className="footer-section">
            <img
              className="footer-footer-links"
              loading="eager"
              alt=""
              src="/vector.svg"
            />
            <img
              className="youtube-1-icon"
              loading="eager"
              alt=""
              src="/youtube-1.svg"
            />
            <img
              className="youtube-1-icon"
              loading="eager"
              alt=""
              src="/instagram-1.svg"
            />
            <img
              className="youtube-1-icon"
              loading="eager"
              alt=""
              src="/twitter-1.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
