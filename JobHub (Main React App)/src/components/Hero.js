import { useState } from "react";
import  "./LastNameInput.css";
import "./Hero.css";
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
  const {user} = useAuthContext()
   const [formdata,setformdata]= useState({
    firstName:"",
    lastName:"",
    mobileNumber:"",
    companyName:"",
    registeredCountry:"",
    
  })

  return (
    <form className="hero">
      <div className="hero-child" />
      <div className="designation-position-frame">
        <b className="time-to-grow">Time to grow your company!</b>
      </div>
          <div className="last-name-input1">
      <div className="email-id" >
        First Name
      </div>
      <div className="career-growth-frame">
        <input
          className="what-is-you"
          placeholder="What is your first name?"
          type="text"
          value={formdata.firstName}
          onChange={(event) => setformdata({...formdata,firstName:event.target.value})}
        />
      </div>
    </div>
          <div className="last-name-input1">
      <div className="email-id" >
        Last Name
      </div>
      <div className="career-growth-frame">
        <input
          className="what-is-you"
          placeholder="What is your last name?"
          type="text"
          value={formdata.lastName}
          onChange={(event) => setformdata({...formdata,lastName:event.target.value})}
        />
      </div>
    </div>
         <div className="last-name-input1">
      <div className="email-id" >
        Mobile Number
      </div>
      <div className="career-growth-frame">
        <input
          className="what-is-you"
          placeholder="What is your mobile Number"
          type="text"
          value={formdata.mobileNumber}
          onChange={(event) => setformdata({...formdata,mobileNumber:event.target.value})}
        />
      </div>
    </div>

  
    <div className="last-name-input1">
      <div className="email-id" >
        Company Name
      </div>
      <div className="career-growth-frame">
        <input
          className="what-is-you"
          placeholder="What is your company name?"
          type="text"
          value={formdata.companyName}
          onChange={(event) => setformdata({...formdata,companyName:event.target.value})}
        />
      </div>
    </div>
    <div className="last-name-input1">
      <div className="email-id" >
        Registered Country
      </div>
      <div className="career-growth-frame">
        <input
          className="what-is-you"
          placeholder="What is your registered Company?"
          type="text"
          value={formdata.registeredCountry}
          onChange={(event) => setformdata({...formdata,registeredCountry:event.target.value})}
        />
      </div>
    </div>


  
 
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
