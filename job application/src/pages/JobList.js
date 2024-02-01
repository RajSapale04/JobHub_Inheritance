import Navigation from "../components/Navigation";
import CopyrightSection from "../components/CopyrightSection";
import AdbanceFilter from "../components/AdbanceFilter";
import Job from "../components/Job";
import Footer from "../components/Footer";
import "./JobList.css";

const JobList = () => {
  return (
    <div className="job-list">
      <Navigation />
      <CopyrightSection />
      <section className="vector-shape">
        <AdbanceFilter />
        <div className="pages">
          <Job
            interactionDesigner="Techical Support Specialist"
            partTime="Part-time"
            propBackground="linear-gradient(90deg, #fff6e6, #fff), #fff"
          />
          <Job
            interactionDesigner="Senior UX Designer"
            partTime="Full-Time"
            propBackground="linear-gradient(90deg, #fff6e6, #fff), #fff"
            propBackgroundColor="unset"
          />
          <Job
            interactionDesigner="Marketing Officer"
            partTime="Internship"
            propBackground="unset"
            propBackgroundColor="#fff"
          />
          <Job
            interactionDesigner="Junior Graphic Designer"
            partTime="Internship"
            propBackground="unset"
            propBackgroundColor="#fff"
          />
          <Job
            interactionDesigner="Interaction Designer"
            partTime="Part-time"
            propBackground="unset"
            propBackgroundColor="#fff"
          />
          <Job
            interactionDesigner="Project Manager"
            partTime="Full-Time"
            propBackground="unset"
            propBackgroundColor="#fff"
          />
          <Job
            interactionDesigner="Software Engineer"
            partTime="Full-Time"
            propBackground="unset"
            propBackgroundColor="#fff"
          />
          <Job
            interactionDesigner="Visual Designer"
            partTime="Full-Time"
            propBackground="unset"
            propBackgroundColor="#fff"
          />
          <Job
            interactionDesigner="Project Manager"
            partTime="Full-Time"
            propBackground="linear-gradient(90deg, #fff6e6, #fff), #fff"
            propBackgroundColor="unset"
          />
          <Job
            interactionDesigner="UI/UX Designer"
            partTime="Full-Time"
            propBackground="unset"
            propBackgroundColor="#fff"
          />
          <Job
            interactionDesigner="Product Designer"
            partTime="Full-Time"
            propBackground="unset"
            propBackgroundColor="#fff"
          />
          <Job
            interactionDesigner="Networking Engineer"
            partTime="Internship"
            propBackground="unset"
            propBackgroundColor="#fff"
          />
          <Job
            interactionDesigner="Front End Developer"
            partTime="Part-time"
            propBackground="unset"
            propBackgroundColor="#fff"
          />
          <Job
            interactionDesigner="Senior UX Designer"
            partTime="Full-Time"
            propBackground="unset"
            propBackgroundColor="#fff"
          />
          <Job
            interactionDesigner="Marketing Manager"
            partTime="Internship"
            propBackground="unset"
            propBackgroundColor="#fff"
          />
        </div>
        <div className="pagination">
          <div className="icon-button">
            <img
              className="fiarrow-right-icon"
              loading="eager"
              alt=""
              src="/fiarrowright.svg"
            />
          </div>
          <div className="pages1">
            <div className="pagination1">
              <div className="div">01</div>
            </div>
            <div className="pagination2">
              <div className="div">02</div>
            </div>
            <div className="pagination3">
              <div className="div">03</div>
            </div>
            <div className="pagination4">
              <div className="div">04</div>
            </div>
            <div className="pagination2">
              <div className="div">05</div>
            </div>
          </div>
          <div className="icon-button1">
            <img
              className="fiarrow-right-icon1"
              alt=""
              src="/fiarrowright-1.svg"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default JobList;
