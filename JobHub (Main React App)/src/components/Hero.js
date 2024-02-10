import { useState } from "react";
import LastNameInput from "./LastNameInput";
import "./Hero.css";

const Hero = () => {
  const [createAPasswordValue, setCreateAPasswordValue] = useState("");
  return (
    <form className="hero">
      <div className="hero-child" />
      <div className="designation-position-frame">
        <b className="time-to-grow">Time to grow your company!</b>
      </div>
      <LastNameInput
        emailID="First Name"
        whatIsYouEmailIDPlacehold="What is your first name?"
        propWidth="194px"
        propHeight="25px"
      />
      <LastNameInput
        emailID="Last Name"
        whatIsYouEmailIDPlacehold="What is your last name?"
        propWidth="217px"
        propHeight="25px"
      />
      <LastNameInput
        emailID="Company Email ID"
        whatIsYouEmailIDPlacehold="What is you Email ID?"
        propWidth="394px"
        propHeight="25px"
      />
      <div className="create-password-frame">
        <div className="password-min-6-container">
          <span className="password-min-6-container1">
            <span className="password">Password</span>
            <span className="min-6-characters">
              {" "}
              [Min. 6 characters required]
            </span>
          </span>
        </div>
        <div className="create-a-password-for-your-acc-wrapper">
          <input
            className="create-a-password"
            placeholder="Create a password for your account "
            type="text"
            value={createAPasswordValue}
            onChange={(event) => setCreateAPasswordValue(event.target.value)}
          />
        </div>
      </div>
      <LastNameInput
        emailID="Mobile Number"
        whatIsYouEmailIDPlacehold="What is your mobile number?"
        propWidth="298px"
        propHeight="25px"
      />
     <LastNameInput
        emailID="Company Name"
        whatIsYouEmailIDPlacehold="What is your company name?"
        propWidth="298px"
        propHeight="25px"
      />
      <LastNameInput
        emailID="Registered Country"
        whatIsYouEmailIDPlacehold="What country are you registered in?"
        propWidth="298px"
        propHeight="25px"
      />
      <LastNameInput
        emailID="Designation/Post Held"
        whatIsYouEmailIDPlacehold="What is the designation/post you hold?"
        propWidth="298px"
        propHeight="25px"
      />
      <div className="create-password-frame">
        <div className="company-verification-documents">
          Company Verification Documents
        </div>
        <div className="d-o-c-max-size-frame">
          <div className="register-frame">
            <div className="upload-resume">Upload Resume</div>
          </div>
          <div className="doc-docx-pdf">
            DOC, DOCx, PDF, RTF | Max size : 2mb
          </div>
        </div>
      </div>
      <div className="register">
        <div className="register1">Register</div>
      </div>
    </form>
  );
};

export default Hero;
