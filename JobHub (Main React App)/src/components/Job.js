import "./Job.css";
import { useState,useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
const Job = ({id}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const{user}= useAuthContext()
  console.log(`http://localhost:4000/user/jobs/${id}`)
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate(`/job-detail/${id}`)
  }
  const fetchData=async()=>{

    try {
      const response = await axios.get(`http://localhost:4000/user/jobs/${id}`,{
      headers:{
          Authorization: `Bearer ${user.token}`
        }
      });

      const json = response.data;
      if (response.status >= 200 && response.status<300){
      setData(json[0]);
      console.log(data)



      
     


      }
      else{
        setError(json.error||"some unexpected Error");
      }

      
    } catch (error) {

        navigate('/user/login')

        setError(error.response.data.error);
      
      
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(()=>{

    fetchData()
  },[user])



  return (
    <div className="job11">
      <div className="job1-inner" />
      <div className="job1-child1" />
      <div className="rectangle-shape2">
        <div className="salary-text1">
          <img
            className="microsoft-1-icon4"
            loading="eager"
            alt=""
            src="/microsoft-1@2x.png"
          />
          <div className="job-card-frame1">
            <div className="front-end-developer-group">
              <h3 className="front-end-developer4">{data && data.jobTitle }</h3>
              <div className="type5">
                <div className="full-time5">{data && data.jobType}</div>
              </div>
            </div>
        
            <div className="frame-container1">
              <div className="view-all-button1">
                <img
                  className="mappin-icon4"
                  loading="eager"
                  alt=""
                />
                <div className="dhaka-bangladesh5">{data && data.city}, {data && data.country}</div>
              </div>
              <div className="salary-20000-1">Salary: ${data && data.minSalary} - ${data && data.maxSalary}</div>
            </div>
          </div>
        </div>
        {/* <div className="employer2">
          <div className="feb-2-20231">Feb 2, 2023 20:45</div>
        </div> */}
      </div>
      <div className="active-status1">
        <div className="active-group">
          <div className="active8">Active</div>
          <button className="view-button4" onClick={handleClick}>
            <div className="view-details1">View Details</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Job;
