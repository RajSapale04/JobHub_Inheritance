import JobCard from "../components/JobCard";
import Category from "../components/Category";
import FeaturedJobs from "../components/FeaturedJobs";
import JendoLogoFrame from "../components/JendoLogoFrame";
import FrameComponent from "../components/FrameComponent";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="main-page">
      <main className="background">
        <JobCard />
        <section className="categories">
          <Category
            businessman1="/businessman-1@2x.png"
            marketingSales={`Marketing & Sales`}
            jobsAvailable="1500+ Jobs Available"
            propPadding="var(--padding-7xs) var(--padding-base) var(--padding-xs) var(--padding-3xs)"
          />
          <Category
            businessman1="/businessman-1@2x.png"
            marketingSales="App Development"
            jobsAvailable="1800+ Jobs Available"
            propPadding="var(--padding-7xs) var(--padding-sm) var(--padding-xs) var(--padding-3xs)"
          />
          <Category
            businessman1="/businessman-1@2x.png"
            marketingSales="Finance"
            jobsAvailable="900+ Jobs Available"
            propPadding="var(--padding-7xs) var(--padding-24xl) var(--padding-xs) var(--padding-3xs)"
          />
          <Category
            businessman1="/businessman-1@2x.png"
            marketingSales="Graphics Design"
            jobsAvailable="2300+ Jobs Available"
            propPadding="var(--padding-7xs) var(--padding-9xl) var(--padding-xs) var(--padding-3xs)"
          />
          <Category
            businessman1="/businessman-1@2x.png"
            marketingSales="Legal Services"
            jobsAvailable="2500+ Jobs Available"
            propPadding="var(--padding-7xs) var(--padding-17xl) var(--padding-xs) var(--padding-3xs)"
          />
          <Category
            businessman1="/businessman-1@2x.png"
            marketingSales="Support Engineer"
            jobsAvailable="500+ Jobs Available"
            propPadding="var(--padding-7xs) var(--padding-lgi) var(--padding-xs) var(--padding-3xs)"
          />
          <Category
            businessman1="/businessman-1@2x.png"
            marketingSales="Teacher"
            jobsAvailable="300+ Jobs Available"
            propPadding="var(--padding-7xs) var(--padding-25xl) var(--padding-xs) var(--padding-3xs)"
          />
          <Category
            businessman1="/businessman-1@2x.png"
            marketingSales="Web Development"
            jobsAvailable="2200+ Jobs Available"
            propPadding="var(--padding-7xs) var(--padding-2xs) var(--padding-xs) var(--padding-3xs)"
          />
          <Category
            businessman1="/businessman-1@2x.png"
            marketingSales="Security"
            jobsAvailable="500+ Jobs Available"
            propPadding="var(--padding-7xs) var(--padding-24xl) var(--padding-xs) var(--padding-3xs)"
          />
        </section>
        <FeaturedJobs />
        <JendoLogoFrame />
        <section className="pngtreekorea-talent-recruitme-parent">
          <img
            className="pngtreekorea-talent-recruitme"
            loading="eager"
            alt=""
            src="/pngtreekorea-talent-recruitment-identity-information-6589962-1@2x.png"
          />
          <div className="about-us-frame-parent">
            <div className="about-us-frame">
              <button className="about-us-wrapper">
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
              <div className="frame-parent">
                <div className="circle-wavy-check-duotone-1-parent">
                  <input
                    className="circle-wavy-check-duotone-1"
                    type="checkbox"
                  />
                  <input
                    className="circle-wavy-check-duotone-1"
                    type="checkbox"
                  />
                  <input
                    className="circle-wavy-check-duotone-1"
                    type="checkbox"
                  />
                </div>
                <div className="top-companies-and-brands-parent">
                  <div className="top-companies-and">
                    Top Companies and Brands
                  </div>
                  <div className="secured-jobs">Secured Jobs</div>
                  <div className="help-support">{`Help & Support`}</div>
                </div>
              </div>
              <button className="footer-links">
                <div className="learn-more">Learn More</div>
              </button>
            </div>
          </div>
        </section>
        <FrameComponent />
      </main>
    </div>
  );
};

export default MainPage;
