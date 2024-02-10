import { useState } from "react";
import LastNameInput1 from "./LastNameInput1";
import LastNameInput from "./LastNameInput";
import "./Hero1.css";

const Hero1 = () => {
  const [createAPasswordValue, setCreateAPasswordValue] = useState("");
  return (
    <form className="hero1">
      <div className="hero-item" />
      <div className="im-experienced-frame">
        <b className="time-to-grow1">Time to grow your career!</b>
      </div>
      <LastNameInput1
        firstName="First Name"
        whatIsYourFirstNPlacehold="What is your first name?"
      />
      <LastNameInput1
        firstName="Last Name"
        whatIsYourFirstNPlacehold="What is your last name?"
      />
      <LastNameInput
        emailID="Email ID"
        whatIsYouEmailIDPlacehold="What is you Email ID?"
        propHeight="25px"
      />
      <div className="last-name-input2">
        <div className="password-min-6-characters-re-parent">
          <div className="password-min-6-container2">
            <span className="current-country">Password</span>
            <span className="if-residing-outside">
              {" "}
              [Min. 6 characters required]
            </span>
          </div>
          <div className="create-a-password-for-your-acc-container">
            <input
              className="create-a-password1"
              placeholder="Create a password for your account "
              type="text"
              value={createAPasswordValue}
              onChange={(event) => setCreateAPasswordValue(event.target.value)}
            />
          </div>
        </div>
      </div>
      <LastNameInput
        emailID="Mobile Number"
        whatIsYouEmailIDPlacehold="What is your mobile number?"
        propWidth="137px"
        propHeight="25px"
      />
      <div className="last-name-input2">
        <div className="password-min-6-characters-re-parent">
          <div className="current-city">Current City</div>
          <button className="mention-the-current-city-you-l-container">
            <div className="mention-the-current1">
              Mention the current city you live in
            </div>
          </button>
        </div>
      </div>
      <div className="last-name-input2">
        <div className="password-min-6-characters-re-parent">
          <div className="current-country-if-container">
            <span className="current-country-if-container1">
              <span className="current-country">Current Country</span>
              <span className="if-residing-outside">
                {" "}
                [If residing outside India]
              </span>
            </span>
          </div>
          <button className="mention-the-country-where-you-frame">
            <div className="mention-the-current1">
              Mention the country where you’re staying
            </div>
          </button>
        </div>
      </div>
      <div className="register-button">
        <div className="work-status">Work Status</div>
        <div className="experienced-frame">
          <div className="im-experienced-frame1">
            <div className="im-experienced-i-container">
              <span>
                <p className="im-experienced">Im experienced</p>
                <p className="i-have-work">I have work experience</p>
                <p className="i-have-work">(excluding internships)</p>
              </span>
            </div>
          </div>
          <div className="im-experienced-frame1">
            <div className="im-experienced-i-container">
              <span>
                <p className="im-experienced">Im a fresher</p>
                <p className="i-have-work">
                  I am a student/Have’nt worked after graduation
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="resume-text-area">
        <div className="password-min-6-characters-re-parent">
          <div className="resume">Resume</div>
          <div className="mobile-number-text-input">
            <div className="hero-section-frame">
              <div className="upload-resume1">Upload Resume</div>
            </div>
            <div className="doc-docx-pdf1">
              DOC, DOCx, PDF, RTF | Max size : 2mb
            </div>
          </div>
        </div>
      </div>
      <div className="register2">
        <div className="register3">Register</div>
      </div>
    </form>
  );
};

export default Hero1;
