import { useState } from "react";
import Job2 from "./Job2";
import "./FrameContainer.css";
import { Link } from "react-router-dom";

const FrameContainer = () => {
  const [searchByJobValue, setSearchByJobValue] = useState("");
  const [cityStateOrValue, setCityStateOrValue] = useState("");
  return (
    <section className="frame-container2">
      <form className="adbance-filter">
        <div className="input-field">
          <img className="fisearch-icon3" alt="" src="/fisearch.svg" />
          <input
            className="search-by-job"
            placeholder="Search by: Job title, Position, Keyword..."
            type="text"
            value={searchByJobValue}
            onChange={(event) => setSearchByJobValue(event.target.value)}
          />
        </div>
        <div className="devider" />
        <div className="input-field1">
          <div className="employer-profile-card">
            <img className="crosshair-icon" alt="" src="/mappin.svg" />
            <input
              className="city-state-or"
              placeholder="City, state or zip code"
              type="text"
              value={cityStateOrValue}
              onChange={(event) => setCityStateOrValue(event.target.value)}
            />
          </div>
          <img className="crosshair-icon" alt="" src="/crosshair.svg" />
        </div>
        <button className="button4">
          <img className="crosshair-icon" alt="" src="/sliders.svg" />
          <div className="primary1">Filters</div>
        </button>
        <button className="button5">
          <div className="primary2">Find Job</div>
        </button>
      </form>
      <div className="google-inc2">
        <Link className="job-link" to="/job-detail">
        <Job2
          techicalSupportSpecialist="Techical Support Specialist"
          partTime="Part-time"
          employersLogo="/employers-logo.svg"
          mapPin="/mappin.svg"
          bookmarkSimple="/bookmarksimple-11.svg"
          propBackground="linear-gradient(90deg, #d2d3e0, #fff), #fff"
        /></Link>
                <Link className="job-link" to="/job-detail">

        <Job2
          techicalSupportSpecialist="Senior UX Designer"
          partTime="Full-Time"
          employersLogo="/employers-logo.svg"
          mapPin="/mappin.svg"
          bookmarkSimple="/bookmarksimple-11.svg"
          propBackground="linear-gradient(90deg, #d2d3e0, #fff), #fff"
          propBackgroundColor="unset"
        /></Link>
                <Link className="job-link" to="/job-detail">

        <Job2
          techicalSupportSpecialist="Marketing Officer"
          partTime="Internship"
          employersLogo="/employers-logo.svg"
          mapPin="/mappin.svg"
          bookmarkSimple="/bookmarksimple-11.svg"
          propBackground="unset"
          propBackgroundColor="#fff"
        /></Link>
        <Job2
          techicalSupportSpecialist="Junior Graphic Designer"
          partTime="Internship"
          employersLogo="/employers-logo.svg"
          mapPin="/mappin.svg"
          bookmarkSimple="/bookmarksimple-11.svg"
          propBackground="unset"
          propBackgroundColor="#fff"
        />
                <Link className="job-link" to="/job-detail">

        <Job2
          techicalSupportSpecialist="Interaction Designer"
          partTime="Part-time"
          employersLogo="/employers-logo.svg"
          mapPin="/mappin.svg"
          bookmarkSimple="/bookmarksimple-11.svg"
          propBackground="unset"
          propBackgroundColor="#fff"
        /></Link>
                <Link className="job-link" to="/job-detail">

        <Job2
          techicalSupportSpecialist="Project Manager"
          partTime="Full-Time"
          employersLogo="/employers-logo.svg"
          mapPin="/mappin.svg"
          bookmarkSimple="/bookmarksimple-11.svg"
          propBackground="unset"
          propBackgroundColor="#fff"
        /></Link>
                <Link className="job-link" to="/job-detail">

        <Job2
          techicalSupportSpecialist="Software Engineer"
          partTime="Full-Time"
          employersLogo="/employers-logo.svg"
          mapPin="/mappin.svg"
          bookmarkSimple="/bookmarksimple-11.svg"
          propBackground="unset"
          propBackgroundColor="#fff"
        /></Link>
                <Link className="job-link" to="/job-detail">

        <Job2
          techicalSupportSpecialist="Visual Designer"
          partTime="Full-Time"
          employersLogo="/employers-logo.svg"
          mapPin="/mappin.svg"
          bookmarkSimple="/bookmarksimple-11.svg"
          propBackground="unset"
          propBackgroundColor="#fff"
        /></Link>
                <Link className="job-link" to="/job-detail">

        <Job2
          techicalSupportSpecialist="Project Manager"
          partTime="Full-Time"
          employersLogo="/employers-logo.svg"
          mapPin="/mappin.svg"
          bookmarkSimple="/bookmarksimple-11.svg"
          propBackground="linear-gradient(90deg, #d5d2e0, #fff), #fff"
          propBackgroundColor="unset"
        /></Link>
                <Link className="job-link" to="/job-detail">

        <Job2
          techicalSupportSpecialist="UI/UX Designer"
          partTime="Full-Time"
          employersLogo="/employers-logo.svg"
          mapPin="/mappin.svg"
          bookmarkSimple="/bookmarksimple-11.svg"
          propBackground="unset"
          propBackgroundColor="#fff"
        /></Link>
                <Link className="job-link" to="/job-detail">

        <Job2
          techicalSupportSpecialist="Product Designer"
          partTime="Full-Time"
          employersLogo="/employers-logo.svg"
          mapPin="/mappin.svg"
          bookmarkSimple="/bookmarksimple-11.svg"
          propBackground="unset"
          propBackgroundColor="#fff"
        /></Link>
                <Link className="job-link" to="/job-detail">

        <Job2
          techicalSupportSpecialist="Networking Engineer"
          partTime="Internship"
          employersLogo="/employers-logo.svg"
          mapPin="/mappin.svg"
          bookmarkSimple="/bookmarksimple-11.svg"
          propBackground="unset"
          propBackgroundColor="#fff"
        /></Link>
                <Link className="job-link" to="/job-detail">

        <Job2
          techicalSupportSpecialist="Front End Developer"
          partTime="Part-time"
          employersLogo="/employers-logo.svg"
          mapPin="/mappin.svg"
          bookmarkSimple="/bookmarksimple-11.svg"
          propBackground="unset"
          propBackgroundColor="#fff"
        /></Link>
                <Link className="job-link" to="/job-detail">

        <Job2
          techicalSupportSpecialist="Senior UX Designer"
          partTime="Full-Time"
          employersLogo="/employers-logo.svg"
          mapPin="/mappin.svg"
          bookmarkSimple="/bookmarksimple-11.svg"
          propBackground="unset"
          propBackgroundColor="#fff"
        /></Link>
                <Link className="job-link" to="/job-detail">

        <Job2
          techicalSupportSpecialist="Marketing Manager"
          partTime="Internship"
          employersLogo="/employers-logo.svg"
          mapPin="/mappin.svg"
          bookmarkSimple="/bookmarksimple-11.svg"
          propBackground="unset"
          propBackgroundColor="#fff"
        /></Link>
      </div>
      <div className="pagination">
        <div className="icon-button1">
          <img
            className="fiarrow-right-icon33"
            loading="eager"
            alt=""
            src="/fiarrowright1.svg"
          />
        </div>
        <div className="pages">
          <div className="pagination1">
            <div className="empty-frame">01</div>
          </div>
          <div className="pagination2">
            <div className="div16">02</div>
          </div>
          <div className="pagination2">
            <div className="div16">03</div>
          </div>
          <div className="pagination4">
            <div className="div18">04</div>
          </div>
          <div className="pagination2">
            <div className="div16">05</div>
          </div>
        </div>
        <button className="icon-button2">
          <img
            className="fiarrow-right-icon34"
            alt=""
            src="/fiarrowright-11.svg"
          />
        </button>
      </div>
    </section>
  );
};

export default FrameContainer;
