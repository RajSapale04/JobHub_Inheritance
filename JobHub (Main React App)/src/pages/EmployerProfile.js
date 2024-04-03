import { useState,useEffect } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import CopyRight from "../components/CopyRight";
import "./EmployerProfile.css";
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLogout } from '../hooks/useLogout'

const EmployerProfile = () => {
  const [overviewTextValue, setOverviewTextValue] = useState("");
  const [myJobsTextValue, setMyJobsTextValue] = useState("");
  const [plansBillingValue, setPlansBillingValue] = useState("");
  const [settingsTextValue, setSettingsTextValue] = useState("");
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
        const response = await axios.get("http://localhost:4000/company",{
        headers:{
            Authorization: `Bearer ${user.token}`
          }
        });
        
        const json = response.data;
        if (response.status >= 200 && response.status<300){
        setData(json[0]);
        console.log(json[0]);
        
       


        }

        else{
          setError(json.error||"some unexpected Error");
        }

        
      } catch (error) {
        
        if(error.response.data.error==="no such company found"){
          navigate('/company');
        }
        else{
        navigate('/company/login')
        setError(error.response.data.error);
        }
      } finally {
        setIsLoading(false);
      }

    }
    if(user){
      fetchData()
      
      console.log(data)
      
    }





  },[user])


  return (
    <div className="employer-profile">
      <FrameComponent1 />
      <section className="edit-profile-frame-parent">
        <div className="edit-profile-frame">
          <div className="recently-posted-jobs">
            <div className="view-all">
              <div className="status-action-frame">
                <div className="status-action-frame-child" />
                <img className="stack-icon" alt="" src="/stack.svg" />
                <input
                  className="overview"
                  placeholder="Overview"
                  type="text"
                  value={overviewTextValue}
                  onChange={(event) => setOverviewTextValue(event.target.value)}
                />
              </div>
              <div className="status-action-frame1">
                <div className="status-action-frame-item" />
                <img
                  className="briefcase-1-icon"
                  alt=""
                  src="/briefcase-1-1.svg"
                />
                <input
                  className="my-jobs"
                  placeholder="My Jobs"
                  type="text"
                  value={myJobsTextValue}
                  onChange={(event) => setMyJobsTextValue(event.target.value)}
                />
              </div>
              <div className="status-action-frame2">
                <div className="status-action-frame-item" />
                <img
                  className="stack-icon"
                  loading="eager"
                  alt=""
                  src="/bookmarksimple.svg"
                />
                <h3 className="saves-candidates">Saves Candidates</h3>
              </div>
              <div className="status-action-frame3">
                <div className="status-action-frame-item" />
                <img className="stack-icon" alt="" src="/bellringing-1.svg" />
                <input
                  className="plans-billing"
                  placeholder={`Plans & Billing`}
                  type="text"
                  value={plansBillingValue}
                  onChange={(event) => setPlansBillingValue(event.target.value)}
                />
              </div>
              <div className="status-action-frame4">
                <div className="status-action-frame-child1" />
                <div className="status-action-frame-child2" />
                <img
                  className="setting-fill-icon"
                  alt=""
                  src="/setting-fill@2x.png"
                />
                <input
                  className="settings"
                  placeholder="Settings"
                  type="text"
                  value={settingsTextValue}
                  onChange={(event) => setSettingsTextValue(event.target.value)}
                />
              </div>
            </div>
          </div>
         {data &&<FrameComponent {...data} />}
        </div>
        <div className="logout-button"
        >
          <div className="div" onClick={handleClick}>
            <div className="child" />
            <div className="profile-pic-rectangle" />
            <h3 className="log-out" onClick={handleClick}>Log Out</h3>
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

export default EmployerProfile;
