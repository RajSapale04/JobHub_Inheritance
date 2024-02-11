import Hero from "../components/Hero";
import "./Employer.css";

const Employer = () => {
  return (
    <div className="employer1">
      <div className="first-name-frame">
        <img className="background-icon" alt="" src="/background.svg" />
        <header className="navbar">
          {/* <b className="jobhub">JobHub</b>
          <div className="already-registered">Already Registered?</div>
          <div className="navbar-child" /> */}
          <h3 className="jobhub1">JobHub</h3>
          {/* <div className="job-hub-frame">
            <div className="already-registered1">Already Registered?</div>
            <button className="login-here-text">
              <div className="login-here">Login Here</div>
            </button>
          </div> */}
        </header>
        <div className="hero-section">
          <Hero />
        </div>
      </div>
      {/* <div className="home">Home</div>
      <div className="find-candidates">Find Candidates</div>
      <div className="dashboard">Dashboard</div>
      <div className="my-jobs1">My Jobs</div>
      <div className="applications1">Applications</div>
      <img className="employer-child" alt="" src="/rectangle-8.svg" />
      <div className="overview-wrapper">
        <div className="overview2">Overview</div>
      </div>
      <div className="employee-profile-wrapper">
        <div className="employee-profile">Employee Profile</div>
      </div>
      <div className="post-a-job-wrapper">
        <div className="post-a-job1">Post a Job</div>
      </div>
      <div className="my-jobs-wrapper">
        <div className="my-jobs2">My Jobs</div>
      </div>
      <div className="log-out-wrapper">
        <div className="log-out2">Log Out</div>
      </div>
      <div className="saved-candidates-wrapper">
        <div className="saved-candidates">Saved Candidates</div>
      </div>
      <div className="setting-fill-parent">
        <img className="setting-fill-icon2" alt="" src="/setting-fill@2x.png" />
        <div className="settings2">Settings</div>
      </div>
      <div className="all-companies-wrapper">
        <div className="all-companies">All Companies</div>
      </div>
      <div className="plans-billings-wrapper">
        <div className="plans-billings">{`Plans & Billings`}</div>
      </div>
      <b className="jobhub2"> JobHub</b>
      <div className="hello-instagram-here-container">
        <span className="hello-instagram-here-container1">
          <p className="hello-instagram">Hello, Instagram</p>
          <p className="here-is-your">
            Here is your daily activities and applications
          </p>
        </span>
      </div>
      <div className="employer-inner">
        <div className="ellipse-parent">
          <img className="frame-item" alt="" src="/ellipse-3@2x.png" />
          <div className="texttext-parent">
            <div className="texttext">
              <div className="text">Panda</div>
            </div>
            <div className="texttext-group">
              <div className="texttext1">
                <div className="text1">UI/UX Designer</div>
              </div>
              <div className="badge-base-parent">
                <div className="badge-base">
                  <div className="text2">$55K - $60K</div>
                </div>
                <div className="badge-base">
                  <div className="text3">Manchester, UK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-div">
        <div className="ellipse-parent">
          <img className="frame-item" alt="" src="/ellipse-3@2x.png" />
          <div className="texttext-parent">
            <div className="texttext">
              <div className="text">Panda</div>
            </div>
            <div className="texttext-parent1">
              <div className="texttext3">
                <div className="text5">Senior UI/UX Designer</div>
              </div>
              <div className="badge-base-group">
                <div className="badge-base">
                  <div className="text2">$55K - $60K</div>
                </div>
                <div className="badge-base">
                  <div className="text3">Manchester, UK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="employer-inner1">
        <div className="ellipse-parent">
          <img className="frame-item" alt="" src="/ellipse-3@2x.png" />
          <div className="texttext-parent">
            <div className="texttext">
              <div className="text">Panda</div>
            </div>
            <div className="texttext-group">
              <div className="texttext5">
                <div className="text1">Tech Support</div>
              </div>
              <div className="badge-base-parent">
                <div className="badge-base">
                  <div className="text2">$55K - $60K</div>
                </div>
                <div className="badge-base">
                  <div className="text3">Manchester, UK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="employer-inner2">
        <div className="ellipse-parent">
          <img className="frame-item" alt="" src="/ellipse-3@2x.png" />
          <div className="texttext-parent">
            <div className="texttext">
              <div className="text">Panda</div>
            </div>
            <div className="texttext-group">
              <div className="texttext7">
                <div className="text1">Jr. Developer</div>
              </div>
              <div className="badge-base-parent">
                <div className="badge-base">
                  <div className="text2">$55K - $60K</div>
                </div>
                <div className="badge-base">
                  <div className="text3">Manchester, UK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="employer-inner3">
        <div className="ellipse-parent2">
          <img className="frame-item" alt="" src="/ellipse-3@2x.png" />
          <div className="texttext-parent">
            <div className="texttext">
              <div className="text">Panda</div>
            </div>
            <div className="texttext-group">
              <div className="texttext9">
                <div className="text1">Sr. Developer</div>
              </div>
              <div className="badge-base-parent">
                <div className="badge-base">
                  <div className="text2">$55K - $60K</div>
                </div>
                <div className="badge-base">
                  <div className="text3">Manchester, UK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <b className="jobs">Jobs</b>
      <div className="frame-first-name-frame">
        <div className="customer-support-frame">
          <div className="frame-post-a-job">
            <div className="frame-post-a-job-child" />
            <div className="frame-post-a-job-item" />
            <div className="frame-applications-frame">
              <div className="customer-support">Customer Support</div>
            </div>
          </div>
          <div className="active-applications-view-appli">
            <div className="frame-saved-candidates-frame">
              <div className="bellpin-instance">
                <div className="post-a-job-text">
                  <div className="frame-jobs-open-frame">
                    <img
                      className="bell-pin-icon"
                      alt=""
                      src="/bell-pin@2x.png"
                    />
                  </div>
                  <div className="view-application-frame">
                    <h3 className="post-a-job2">Post A Job</h3>
                  </div>
                </div>
              </div>
              <div className="frame-active-active-active">
                <div className="frame-active-active-active-child" />
                <div className="company-details-frame">
                  <div className="customer-support-frame1">
                    <div className="jobs-open">
                      <span>
                        <p className="p">589</p>
                        <p className="p">Jobs Open</p>
                      </span>
                    </div>
                  </div>
                  <div className="customer-support-frame1">
                    <h3 className="saved-candidates1">
                      <span>
                        <p className="p">2000</p>
                        <p className="p">Saved Candidates</p>
                      </span>
                    </h3>
                  </div>
                </div>
                <div className="status-applications-actions">
                  <div className="active-applications-view-appli1">
                    <div className="active-applications-view-appli-child" />
                    <b className="status">Status</b>
                    <b className="applications2">Applications</b>
                    <b className="actions">Actions</b>
                  </div>
                  <div className="applications-view-application">
                    <div className="active-applications-applicatio">
                      <div className="active1">Active</div>
                      <div className="active2">Active</div>
                    </div>
                    <div className="applications-view-application1">
                      <div className="applications3">78 Applications</div>
                      <div className="applications4">178 Applications</div>
                    </div>
                    <div className="view-application-parent">
                      <b className="view-application">View Application</b>
                      <b className="view-application1">View Application</b>
                    </div>
                  </div>
                  <div className="applications-applications">
                    <div className="active-active-active">
                      <div className="active2">Active</div>
                      <div className="active4">Active</div>
                      <div className="active5">Active</div>
                    </div>
                    <div className="applications-view-application2">
                      <div className="applications5">13 Applications</div>
                      <div className="applications-view-application3">
                        <div className="applications6">570 Applications</div>
                        <div className="applications7">250 Applications</div>
                      </div>
                    </div>
                    <div className="applications-view-application4">
                      <b className="view-application2">View Application</b>
                      <div className="view-application-group">
                        <b className="view-application3">View Application</b>
                        <b className="view-application4">View Application</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Employer;
