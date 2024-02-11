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
    jobTitle:"",
    minSalary:"",
    maxSalary:"",
    jobDescription:"",
    experience:"",
    city:"",
    vacancies:"",
    country:"",
    education:"",
    jobType:""
  })
  const [error, setError] = useState(null)
  const [status, setStatus] = useState(null)

  
  const handleSubmit= async ()=>{
    setError(null)
    setStatus(null)
    try {
      const response = await axios.post("http://localhost:4000/company/jobs",formdata,{
      headers:{
        Authorization: `Bearer ${user.token}`
      }
  
  
    })
    const json = response.data
        if (response.status >= 200 && response.status<300){
          setStatus("job created")
          navigate(`/company-profile`)
        
        
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
        <b className="time-to-grow1">Time to grow company!</b>
      </div>
    <div className="last-name-input">
      <div className="password-field">
        <div className="first-name">Job Title</div>
        <div className="registration-form">
          <input
            className="what-is-your"
            placeholder="What is your Job Title?"
            type="text"
            value={formdata.jobTitle}
            onChange={(event) => setformdata({...formdata,jobTitle:event.target.value})}
          />
        </div>
      </div>
    </div>
    <div className="last-name-input">
      <div className="password-field">
        <div className="first-name">Education</div>
        <div className="registration-form">
          <input
            className="what-is-your"
            placeholder="What is your education requirement?"
            type="text"
            value={formdata.education}
            onChange={(event) => setformdata({...formdata,education:event.target.value})}
          />
        </div>
      </div>
    </div>


    <div className="last-name-input">
      <div className="password-field">
        <div className="first-name">Minimum Salary</div>
        <div className="registration-form">
          <input
            className="what-is-your"
            placeholder="What is the minimum salary?"
            type="text"
            value={formdata.minSalary}
            onChange={(event) => setformdata({...formdata,minSalary:event.target.value})}
          />
        </div>
      </div>
    </div>
      <div className="last-name-input">
        <div className="password-field">
          <div className="first-name">Maximum Salary</div>
          <div className="registration-form">

          
          <input
            className="what-is-your"
            placeholder="
            What is the maximum Salary"
            type="text"
            value={formdata.maxSalary}
            onChange={(event) => setformdata({...formdata,maxSalary:event.target.value})}
          />
          </div>
        </div>
      </div>
            <div className="last-name-input">
        <div className="password-field">
          <div className="first-name">City</div>
          <div className="registration-form">

          
          <input
            className="what-is-your"
            placeholder="Mention the city of the job"
            type="text"
            value={formdata.city}
            onChange={(event) => setformdata({...formdata,city:event.target.value})}
          />
          </div>
        </div>
      </div>
      <div className="last-name-input">
        <div className="password-field">
          <div className="first-name">Country</div>
          <div className="registration-form">

          
          <input
            className="what-is-your"
            placeholder="Mention the country of the job"
            type="text"
            value={formdata.country}
            onChange={(event) => setformdata({...formdata,country:event.target.value})}
          />
          </div>
        </div>
      </div>
            <div className="last-name-input">
        <div className="password-field">
          <div className="first-name">Job Description</div>
          <div className="registration-form">

          
          <input
            className="what-is-your"
            placeholder="Enter the Job Description"
            type="text"
            value={formdata.jobDescription}
            onChange={(event) => setformdata({...formdata,jobDescription:event.target.value})}
          />
          </div>
        </div>
      </div>
            <div className="last-name-input">
        <div className="password-field">
          <div className="first-name">Experience</div>
          <div className="registration-form">

          
          <input
            className="what-is-your"
            placeholder="What is the required Experience"
            type="text"
            value={formdata.experience}
            onChange={(event) => setformdata({...formdata,experience:event.target.value})}
          />
          </div>
        </div>
      </div>
            <div className="last-name-input">
        <div className="password-field">
          <div className="first-name">Job Type</div>
          <div className="registration-form">

          
          <input
            className="what-is-your"
            placeholder="Full Time/Part Time"
            type="text"
            value={formdata.jobType}
            onChange={(event) => setformdata({...formdata,jobType:event.target.value})}
          />
          </div>
        </div>
      </div>
            <div className="last-name-input">
        <div className="password-field">
          <div className="first-name">Vacancies</div>
          <div className="registration-form">

          
          <input
            className="what-is-your"
            placeholder="What are the vacancies"
            type="text"
            value={formdata.vacancies}
            onChange={(event) => setformdata({...formdata,vacancies:event.target.value})}
          />
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
