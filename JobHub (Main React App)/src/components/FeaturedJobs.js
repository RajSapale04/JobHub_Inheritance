import Job3 from "./Job3";
import "./FeaturedJobs.css";
import { Link } from "react-router-dom";

const FeaturedJobs = () => {
  return (
    <section className="featured-jobs">
      <div className="featured-jobs-child" />
      <div className="list-item">
        <h1 className="featured-jobs1">Featured Jobs</h1>
      </div>
      <div className="text-block">
        <div className="job-parent">
          <div className="job8">
            <div className="heading5">
              <div className="technical-support-specialist">
                Technical Support Specialist
              </div>
              <div className="frame-node">
                <div className="type9">
                  <div className="part-time1">Part-time</div>
                </div>
                <div className="salary-20000-5">Salary: $20,000 - $25,000</div>
              </div>
            </div>
            <div className="company3">
              <div className="employers-logo3">
                <img
                  className="employers-logo-icon2"
                  loading="eager"
                  alt=""
                  src="/employers-logo.svg"
                />
              </div>
              <div className="info4">
                <div className="instagram-usa">Google Inc.</div>
                <div className="loaction3">
                  <img className="mappin-icon9" alt="" src="/mappin.svg" />
                  <div className="dhaka-bangladesh9">Dhaka, Bangladesh</div>
                </div>
              </div>
              <img
                className="bookmarksimple-icon8"
                alt=""
                src="/bookmarksimple-11.svg"
              />
            </div>
          </div>
          <div className="job9">
            <div className="heading5">
              <div className="technical-support-specialist">App Developer</div>
              <div className="frame-node">
                <div className="type9">
                  <div className="part-time1">Part-time</div>
                </div>
                <div className="salary-20000-5">Salary: $20,000 - $25,000</div>
              </div>
            </div>
            <div className="company4">
              <img
                className="airbnb-1-icon"
                loading="eager"
                alt=""
                src="/airbnb-1@2x.png"
              />
              <div className="info4">
                <div className="airbnb-inc-usa">Airbnb Inc. USA</div>
                <div className="loaction3">
                  <img className="mappin-icon9" alt="" src="/mappin.svg" />
                  <div className="dhaka-bangladesh9">Dhaka, Bangladesh</div>
                </div>
              </div>
              <img
                className="bookmarksimple-icon8"
                alt=""
                src="/bookmarksimple-11.svg"
              />
            </div>
          </div>
        </div>
        <div className="quote-marker">
          <div className="job8">
            <div className="heading5">
              <div className="technical-support-specialist">
                Project Manager
              </div>
              <div className="frame-node">
                <div className="type9">
                  <div className="full-time6">Full-Time</div>
                </div>
                <div className="salary-20000-5">Salary: $20,000 - $25,000</div>
              </div>
            </div>
            <div className="company3">
              <div className="employers-logo4">
                <img
                  className="employers-logo-icon3"
                  alt=""
                  src="/employers-logo.svg"
                />
              </div>
              <div className="info4">
                <div className="instagram-usa">Instagram, USA</div>
                <div className="loaction3">
                  <img className="mappin-icon9" alt="" src="/mappin.svg" />
                  <div className="dhaka-bangladesh9">Dhaka, Bangladesh</div>
                </div>
              </div>
              <img
                className="bookmarksimple-icon8"
                alt=""
                src="/bookmarksimple-11.svg"
              />
            </div>
          </div>
          <div className="job8">
            <div className="heading5">
              <div className="technical-support-specialist">
                Visual Designer
              </div>
              <div className="frame-node">
                <div className="type9">
                  <div className="full-time6">Full-Time</div>
                </div>
                <div className="salary-20000-5">Salary: $20,000 - $25,000</div>
              </div>
            </div>
            <div className="company3">
              <img
                className="logo-1-icon2"
                loading="eager"
                alt=""
                src="/logo-1@2x.png"
              />
              <div className="info7">
                <div className="instagram-usa">Amazon.com, USA</div>
                <div className="loaction3">
                  <img className="mappin-icon9" alt="" src="/mappin.svg" />
                  <div className="dhaka-bangladesh9">Dhaka, Bangladesh</div>
                </div>
              </div>
              <img
                className="bookmarksimple-icon8"
                alt=""
                src="/bookmarksimple-11.svg"
              />
            </div>
          </div>
        </div>
        <div className="quote-marker">
          <Job3
            juniorGraphicDesigner="Junior Graphic Designer"
            linkedin1="/linkedin-1@2x.png"
            linkedinUSA="Linkedin, USA"
            propOverflow="hidden"
          />
          <Job3
            juniorGraphicDesigner="Marketing Manager"
            linkedin1="/microsoft-11@2x.png"
            linkedinUSA="Microsoft, UK"
            propOverflow="unset"
          />
        </div>
        <Link className="job-link" to="/job-list">
        <button className="more-jobs-wrapper">
          <div className="more-jobs">More Jobs</div>
        </button></Link>
      </div>
    </section>
  );
};

export default FeaturedJobs;
