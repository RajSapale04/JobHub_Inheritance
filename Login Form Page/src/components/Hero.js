import { useState } from "react";
import LastNameInput from "./LastNameInput";
import "./Hero.css";

const Hero = () => {
  const [createAPasswordValue, setCreateAPasswordValue] = useState("");
  return (
    <div className="hero">
      <div className="hero-child" />
      <div className="city-input-frame">
        <b className="time-to-grow">Time to grow your company!</b>
      </div>
      <LastNameInput
        emailID="First Name"
        whatIsYouEmailIDPlacehold="What is your first name?"
        emailIDHeight="25px"
        emailIDDisplay="flex"
      />
      <LastNameInput
        emailID="Last Name"
        whatIsYouEmailIDPlacehold="What is your last name?"
        emailIDHeight="25px"
        emailIDDisplay="flex"
      />
      <LastNameInput
        emailID="Company Email ID"
        whatIsYouEmailIDPlacehold="What is you Email ID?"
        emailIDHeight="25px"
        emailIDDisplay="flex"

      />
      <div className="last-name-input-frame">
        <div className="password-min-6-container">
          <span className="password">Password</span>
          <span className="min-6-characters">
            {" "}
            [Min. 6 characters required]
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
        emailIDHeight="25px"
        emailIDDisplay="flex"
      />
      <div className="last-name-input-frame1">
        <div className="company-name">Company Name</div>
        <div className="mention-the-current-city-you-l-wrapper">
          <div className="mention-the-current">
            Mention the current city you live in
          </div>
        </div>
      </div>
      <div className="last-name-input-frame1">
        <div className="registered-country">Registered Country</div>
        <div className="mention-the-country-where-you-wrapper">
          <div className="mention-the-current">
            Mention the country where you’re staying
          </div>
        </div>
      </div>
      <div className="last-name-input-frame1">
        <div className="designationposition-held">
          Designation/Position Held
        </div>
        <div className="mention-the-country-where-you-wrapper">
          <div className="mention-the-current">
            Mention the country where you’re staying
          </div>
        </div>
      </div>
      <div className="designation-position-input-fra">
        <div className="company-verification-documents">
          Company Verification Documents
        </div>
        <div className="upload-resume-frame">
          <div className="d-o-c-max-size-text">
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
    </div>
  );
};

export default Hero;
