import { useState,useEffect } from "react";
import Navigation from "../components/Navigation";
import StatusActionFrame from "../components/StatusActionFrame";
import CopyRight from "../components/CopyRight";
import "./UserProfile.css";
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLogout } from '../hooks/useLogout'

const UserProfile = () => {
  const { logout } = useLogout()
  const navigate=useNavigate();
  const [data, setData] = useState(null);
  const {user} = useAuthContext();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = () => {
    logout();
    navigate('/')
  }
  useEffect(()=>{
    const fetchData=async()=>{

      try {
        const response = await axios.get("http://localhost:4000/user",{
        headers:{
            Authorization: `Bearer ${user.token}`
          }
        });

        const json = response.data;
        if (response.status >= 200 && response.status<300){
        setData(json[0]);
 
        }
        else{
          setError(json.error||"some unexpected Error");
        }

        
      } catch (error) {
        if(error.response.data.error==="no such user found"){
          navigate('/user');
        }
        else{

          navigate('/user/login')

          setError(error.response.data.error);
        }
        
      } finally {
        setIsLoading(false);
      }

    }
    if(user){
      fetchData()

      
    }





  },[user])

  
  const [overviewTextValue, setOverviewTextValue] = useState("");
  const [appliedJobsTextValue, setAppliedJobsTextValue] = useState("");
  const [jobAlertsTextValue, setJobAlertsTextValue] = useState("");
  const [settingsTextValue, setSettingsTextValue] = useState("");
  return (
    <div className="user-profile">
      <Navigation />
      <section className="frame-parent">
        <div className="yourprofileeditingisnotcomplet-parent">
          <div className="yourprofileeditingisnotcomplet">
            <div className="edit-button">
              <div className="recently-applied-frame">
                <div className="recently-applied-frame-child" />
                <img className="stack-icon1" alt="" src="/stack.svg" />
                <input
                  className="overview1"
                  placeholder="Overview"
                  type="text"
                  value={overviewTextValue}
                  onChange={(event) => setOverviewTextValue(event.target.value)}
                />
              </div>
              <div className="recently-applied-frame1">
                <div className="recently-applied-frame-item" />
                <img
                  className="briefcase-1-icon1"
                  alt=""
                  src="/briefcase-1-1.svg"
                />
                <input
                  className="applied-jobs"
                  placeholder="Applied Jobs"
                  type="text"
                  value={appliedJobsTextValue}
                  onChange={(event) =>
                    setAppliedJobsTextValue(event.target.value)
                  }
                />
              </div>
              <div className="recently-applied-frame2">
                <div className="recently-applied-frame-item" />
                <img
                  className="stack-icon1"
                  loading="eager"
                  alt=""
                  src="/bookmarksimple.svg"
                />
                <h3 className="favorite-jobs">Favorite Jobs</h3>
              </div>
              <div className="recently-applied-frame3">
                <div className="recently-applied-frame-item" />
                <img className="stack-icon1" alt="" src="/bellringing-1.svg" />
                <input
                  className="job-alerts"
                  placeholder="Job Alerts"
                  type="text"
                  value={jobAlertsTextValue}
                  onChange={(event) =>
                    setJobAlertsTextValue(event.target.value)
                  }
                />
              </div>
              <div className="recently-applied-frame3">
                <div className="recently-applied-frame-item" />
                <img
                  className="setting-fill-icon1"
                  alt=""
                  src="/setting-fill@2x.png"
                />
                <input
                  className="settings1"
                  placeholder="Settings"
                  type="text"
                  value={settingsTextValue}
                  onChange={(event) => setSettingsTextValue(event.target.value)}
                />
              </div>
            </div>
          </div>
          {data && <StatusActionFrame {...data}/>}
          {data && console.log(data)}
        </div>
        <div className="main-navigation">
          <div className="top-bar" onClick={handleClick}  >
            <div className="top-bar-child" />
            <div className="logo-container" />
            <h3 className="log-out1">Log Out</h3>
          </div>
  
        </div>
      </section>
      <CopyRight
        twitter="/vector.svg"
        youtube1="/youtube-1.svg"
        instagram1="/instagram-1.svg"
        twitter1="/twitter-1.svg"
      />
    </div>
  );
};

export default UserProfile;
