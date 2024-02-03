import Job from "./Job";
import "./FeaturedJobs.css";

const FeaturedJobs = () => {
  return (
    <section className="featured-jobs">
      <div className="list-item">
        <h1 className="featured-jobs1">Featured Jobs</h1>
      </div>
      <div className="text-block">
        <div className="job-parent">
          <div className="job1">
            <div className="heading1">
              <div className="technical-support-specialist">
                Technical Support Specialist
              </div>
              <div className="frame-node">
                <div className="type1">
                  <div className="part-time">Part-time</div>
                </div>
                <div className="salary-20000-1">Salary: $20,000 - $25,000</div>
              </div>
            </div>
            <div className="company1">
              <div className="employers-logo">
                <img
                  className="employers-logo-icon"
                  loading="eager"
                  alt=""
                  src="/employers-logo.svg"
                />
              </div>
              <div className="info1">
                <div className="google-inc">Google Inc.</div>
                <div className="loaction1">
                  <img className="mappin-icon1" alt="" src="/mappin.svg" />
                  <div className="dhaka-bangladesh1">Dhaka, Bangladesh</div>
                </div>
              </div>
              <img
                className="bookmarksimple-icon1"
                alt=""
                src="/bookmarksimple.svg"
              />
            </div>
          </div>
          <div className="job2">
            <div className="heading1">
              <div className="app-developer">App Developer</div>
              <div className="frame-node">
                <div className="type1">
                  <div className="part-time">Part-time</div>
                </div>
                <div className="salary-20000-1">Salary: $20,000 - $25,000</div>
              </div>
            </div>
            <div className="company2">
              <img
                className="airbnb-1-icon"
                loading="eager"
                alt=""
                src="/airbnb-1@2x.png"
              />
              <div className="info1">
                <div className="airbnb-inc-usa">Airbnb Inc. USA</div>
                <div className="loaction1">
                  <img className="mappin-icon1" alt="" src="/mappin.svg" />
                  <div className="dhaka-bangladesh1">Dhaka, Bangladesh</div>
                </div>
              </div>
              <img
                className="bookmarksimple-icon1"
                alt=""
                src="/bookmarksimple.svg"
              />
            </div>
          </div>
        </div>
        <div className="quote-marker">
          <div className="job1">
            <div className="heading1">
              <div className="technical-support-specialist">
                Project Manager
              </div>
              <div className="frame-node">
                <div className="type1">
                  <div className="full-time">Full-Time</div>
                </div>
                <div className="salary-20000-1">Salary: $20,000 - $25,000</div>
              </div>
            </div>
            <div className="company1">
              <div className="employers-logo1" />
              <div className="info1">
                <div className="google-inc">Instagram, USA</div>
                <div className="loaction1">
                  <img className="mappin-icon1" alt="" src="/mappin.svg" />
                  <div className="dhaka-bangladesh1">Dhaka, Bangladesh</div>
                </div>
              </div>
              <img
                className="bookmarksimple-icon1"
                alt=""
                src="/bookmarksimple.svg"
              />
            </div>
          </div>
          <div className="job1">
            <div className="heading1">
              <div className="technical-support-specialist">
                Visual Designer
              </div>
              <div className="frame-node">
                <div className="type1">
                  <div className="full-time">Full-Time</div>
                </div>
                <div className="salary-20000-1">Salary: $20,000 - $25,000</div>
              </div>
            </div>
            <div className="company1">
              <img
                className="logo-1-icon"
                loading="eager"
                alt=""
                src="/logo-1@2x.png"
              />
              <div className="info4">
                <div className="google-inc">Amazon.com, USA</div>
                <div className="loaction1">
                  <img className="mappin-icon1" alt="" src="/mappin.svg" />
                  <div className="dhaka-bangladesh1">Dhaka, Bangladesh</div>
                </div>
              </div>
              <img
                className="bookmarksimple-icon1"
                alt=""
                src="/bookmarksimple.svg"
              />
            </div>
          </div>
        </div>
        <div className="quote-marker">
          <Job
            juniorGraphicDesigner="Junior Graphic Designer"
            linkedin1="/linkedin-1@2x.png"
            linkedinUSA="Linkedin, USA"
            mapPin="/mappin.svg"
            bookmarkSimple="/bookmarksimple.svg"
            propOverflow="hidden"
          />
          <Job
            juniorGraphicDesigner="Marketing Manager"
            linkedin1="/microsoft-1@2x.png"
            linkedinUSA="Microsoft, UK"
            mapPin="/mappin.svg"
            bookmarkSimple="/bookmarksimple.svg"
            propOverflow="unset"
          />
        </div>
        <button className="employers-quick-link">
          <div className="more-jobs">More Jobs</div>
        </button>
      </div>
    </section>
  );
};

export default FeaturedJobs;
