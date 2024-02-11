import { useState } from "react";
import axios from "axios";
import "./Hero1.css";
import "./LastNameInput1.css";
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate } from "react-router-dom";

const Hero1 = () => {
  const navigate = useNavigate();
  const {user} = useAuthContext()
  const [formdata,setformdata]= useState({
    firstName:"",
    lastName:"",
    mobileNumber:"",
    currentCity:"",
    currentCountry:"",
    workStatus:""
  })
  const [error, setError] = useState(null)
  const [status, setStatus] = useState(null)

  
  const handleSubmit= async ()=>{
    setError(null)
    setStatus(null)
    try {
      const response = await axios.post("http://localhost:4000/user",formdata,{
      headers:{
        Authorization: `Bearer ${user.token}`
      }
  
  
    })
    const json = response.data
        if (response.status >= 200 && response.status<300){
          setStatus("user profile created")
          navigate(`/user-profile`)
        
        
      }
      else{
        setError(json.error||"Some unexpected Error")
      }

      
    } catch (error) {
      setError(error.response.data.error)


      
    }
    


  }



  return (
    <form className="hero1">
      <div className="hero-item" />
      <div className="im-experienced-frame">
        <b className="time-to-grow1">Time to grow your career!</b>
      </div>
    <div className="last-name-input">
      <div className="password-field">
        <div className="first-name">First Name</div>
        <div className="registration-form">
          <input
            className="what-is-your"
            placeholder="What is your first name?"
            type="text"
            value={formdata.firstName}
            onChange={(event) => setformdata({...formdata,firstName:event.target.value})}
          />
        </div>
      </div>
    </div>
    <div className="last-name-input">
      <div className="password-field">
        <div className="first-name">Last Name</div>
        <div className="registration-form">
          <input
            className="what-is-your"
            placeholder="What is your last name?"
            type="text"
            value={formdata.lastName}
            onChange={(event) => setformdata({...formdata,lastName:event.target.value})}
          />
        </div>
      </div>
    </div>


    <div className="last-name-input">
      <div className="password-field">
        <div className="first-name">Mobile Number</div>
        <div className="registration-form">
          <input
            className="what-is-your"
            placeholder="What is your mobile number?"
            type="text"
            value={formdata.mobileNumber}
            onChange={(event) => setformdata({...formdata,mobileNumber:event.target.value})}
          />
        </div>
      </div>
    </div>
      <div className="last-name-input">
        <div className="password-field">
          <div className="first-name">Current City</div>
          <div className="registration-form">

          
          <input
            className="what-is-your"
            placeholder="Mention the current city you live in"
            type="text"
            value={formdata.currentCity}
            onChange={(event) => setformdata({...formdata,currentCity:event.target.value})}
          />
          </div>
        </div>
      </div>
            <div className="last-name-input">
        <div className="password-field">
          <div className="first-name">Current Country</div>
          <div className="registration-form">

          
          <input
            className="what-is-your"
            placeholder="Mention the current country you live in"
            type="text"
            value={formdata.currentCountry}
            onChange={(event) => setformdata({...formdata,currentCountry:event.target.value})}
          />
          </div>
        </div>
      </div>
      <div className="last-name-input">
        <div className="password-field">
          <div className="first-name">Work Status</div>
          <div className="registration-form">

          
          <input
            className="what-is-your"
            placeholder="Fresher/Experienced"
            type="text"
            value={formdata.workStatus}
            onChange={(event) => setformdata({...formdata,workStatus:event.target.value})}
          />
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


        <div className="register3" onClick={handleSubmit}>Register</div>

      </div>
    {status && <div>{status}</div>}
    {error && <div>{error}</div>}
    </form>
  );
};

export default Hero1; 
