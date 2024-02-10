import JobCard from "../components/JobCard";
import Category1 from "../components/Category1";
import Category from "../components/Category";
import FeaturedJobs from "../components/FeaturedJobs";
import FrameComponent2 from "../components/FrameComponent2";
import ContactInfoFrame from "../components/ContactInfoFrame";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="main-page">
      <main className="background">
        <div className="background-child" />
        <JobCard />
        <section className="categories">
          <div className="cat">
            <Category1
              marketingSales={`Marketing & Sales`}
              jobsAvailable="1500+ Jobs Available"
              propLeft="515px"
              propPadding="var(--padding-7xs) var(--padding-base) var(--padding-xs) var(--padding-3xs)"
              propTop="50px"
            />
            <Category1
              marketingSales="App Development"
              jobsAvailable="1800+ Jobs Available"
              propLeft="839px"
              propPadding="var(--padding-7xs) var(--padding-sm) var(--padding-xs) var(--padding-3xs)"
              propTop="50px"
            />
            <Category1
              marketingSales="Finance"
              jobsAvailable="900+ Jobs Available"
              propLeft="1163px"
              propPadding="var(--padding-7xs) var(--padding-24xl) var(--padding-xs) var(--padding-3xs)"
              propTop="50px"
            />
            <Category1
              marketingSales="Graphics Design"
              jobsAvailable="2300+ Jobs Available"
              propLeft="515px"
              propPadding="var(--padding-7xs) var(--padding-9xl) var(--padding-xs) var(--padding-3xs)"
              propTop="183px"
            />
            <Category
              legalServices="Legal Services"
              jobsAvailable="2500+ Jobs Available"
              propLeft="839px"
              propPadding="var(--padding-7xs) var(--padding-17xl) var(--padding-xs) var(--padding-3xs)"
              propTop="183px"
            />
            <Category
              legalServices="Support Engineer"
              jobsAvailable="500+ Jobs Available"
              propLeft="1163px"
              propPadding="var(--padding-7xs) var(--padding-lgi) var(--padding-xs) var(--padding-3xs)"
              propTop="183px"
            />
            <Category1
              marketingSales="Teacher"
              jobsAvailable="300+ Jobs Available"
              propLeft="515px"
              propPadding="var(--padding-7xs) var(--padding-25xl) var(--padding-xs) var(--padding-3xs)"
              propTop="316px"
            />
            <Category
              legalServices="Web Development"
              jobsAvailable="2200+ Jobs Available"
              propLeft="839px"
              propPadding="var(--padding-7xs) var(--padding-2xs) var(--padding-xs) var(--padding-3xs)"
              propTop="316px"
            />
            <div className="category9">
              <div className="category9-child" />
              <img
                className="businessman-1-icon"
                alt=""
                src="/businessman-1@2x.png"
              />
              <div className="security-500-jobs-container">
                <p className="security">Security</p>
                <p className="jobs-available">500+ Jobs Available</p>
              </div>
            </div>
          </div>
        </section>
        <FeaturedJobs />
        <FrameComponent2 />
        <section className="pngtreekorea-talent-recruitme-parent">
          <img
            className="pngtreekorea-talent-recruitme"
            loading="eager"
            alt=""
            src="/pngtreekorea-talent-recruitment-identity-information-6589962-1@2x.png"
          />
          <div className="about-us-frame-parent">
            <div className="about-us-frame">
              <button className="frame-learn-more-about-job-hub">
                <div className="about-us">About us</div>
              </button>
              <div className="help-support-frame">
                <h1 className="learn-more-about">Learn More About JobHub</h1>
                <div className="welcome-to-jobhub-container">
                  <span>
                    <p className="welcome-to-jobhub">
                      Welcome to JobHub, where career aspirations meet
                      oppurtunity!
                    </p>
                    <p className="welcome-to-jobhub">
                      At JobHub, we are dedicated to connecting talented
                      individuals with their dream
                    </p>
                    <p className="welcome-to-jobhub">
                      {" "}
                      jobs, fostering a seamless and efficient job search
                      experience.
                    </p>
                    <p className="welcome-to-jobhub">&nbsp;</p>
                    <p className="welcome-to-jobhub">
                      Explore endless oppurtunities with JobHub - Your Gateway
                      to Career Success
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="learn-more-button">
              <div className="circle-wavy-check-frame-parent">
                <div className="circle-wavy-check-frame">
                  <img
                    className="circle-wavy-check-duotone-1-icon"
                    alt=""
                    src="/circlewavycheckduotone-1.svg"
                  />
                  <img
                    className="circle-wavy-check-duotone-1-icon"
                    alt=""
                    src="/circlewavycheckduotone-1.svg"
                  />
                  <img
                    className="circle-wavy-check-duotone-1-icon"
                    alt=""
                    src="/circlewavycheckduotone-1.svg"
                  />{" "}
                </div>
                <div className="dashboard-link">
                  <div className="top-companies-and">
                    Top Companies and Brands
                  </div>
                  <div className="secured-jobs">Secured Jobs</div>
                  <div className="help-support">{`Help & Support`}</div>
                </div>
              </div>
              <button className="learn-more-wrapper">
                <div className="learn-more">Learn More</div>
              </button>
            </div>
          </div>
        </section>
        <ContactInfoFrame />
      </main>
    </div>
  );
};

export default MainPage;
