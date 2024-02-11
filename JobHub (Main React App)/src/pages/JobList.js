import Navigation2 from "../components/Navigation2";
import FrameContainer from "../components/FrameContainer";
import "./JobList.css";
import axios from "axios";
import { useState,useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";


const JobList = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const{user}= useAuthContext()

    useEffect(()=>{
    const fetchData=async()=>{

      try {
        const response = await axios.get("http://localhost:4000/user/jobs",{
        headers:{
            Authorization: `Bearer ${user.token}`
          }
        });
        
        const json = response.data;
        if (response.status >= 200 && response.status<300){
        setData(json);
        console.log(response);
        
       


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
    if(user){
      fetchData()
      
      console.log(data)
      
    }





  },[user])


  return (
    <div className="job-list">
      <Navigation2 />
      <section className="breadcrumb-wrapper">
        <div className="breadcrumb1">
          <h3 className="label10">Find Job</h3>
  
          
        </div>
      </section>
      {data &&<FrameContainer data={data}/>}
      <footer className="footer">
        <div className="main-frame">
          <div className="jendo">
            <div className="jendo1">
              <div className="logo">
                <img
                  className="briefcase-1-icon2"
                  loading="eager"
                  alt=""
                  src="/briefcase-1-11.svg"
                />
                <h2 className="jobpilot">JobHub</h2>
              </div>
              <div className="phone-button">
                <div className="phone-number">
                  <div className="call-now1">Call now:</div>
                  <div className="div14">+91-99762-90637</div>
                </div>
                <div className="veermata-jeejabai-technologica">
                  Veermata Jeejabai Technological Institute, Matunga, Mumbai,
                  India.
                </div>
              </div>
            </div>
          </div>
          <div className="footer-link-bar">
            <div className="com">
              <h3 className="quick-link">Quick Link</h3>
              <div className="link">
                <div className="footer-link">
                  <img
                    className="fiarrow-right-icon1"
                    alt=""
                    src="/fiarrowright.svg"
                  />
                  <div className="about">About</div>
                </div>
                <div className="footer-link1">
                  <img
                    className="fiarrow-right-icon2"
                    loading="eager"
                    alt=""
                    src="/fiarrowright-1.svg"
                  />
                  <div className="contact">Contact</div>
                </div>
                <div className="footer-link">
                  <img
                    className="fiarrow-right-icon1"
                    alt=""
                    src="/fiarrowright.svg"
                  />
                  <div className="pricing">Pricing</div>
                </div>
                <div className="footer-link">
                  <img
                    className="fiarrow-right-icon1"
                    alt=""
                    src="/fiarrowright.svg"
                  />
                  <div className="blog">Blog</div>
                </div>
              </div>
            </div>
            <div className="com">
              <h3 className="quick-link">Candidate</h3>
              <div className="link">
                <div className="footer-link">
                  <img
                    className="fiarrow-right-icon1"
                    alt=""
                    src="/fiarrowright.svg"
                  />
                  <div className="browse-jobs">Browse Jobs</div>
                </div>
                <div className="footer-link">
                  <img
                    className="fiarrow-right-icon1"
                    alt=""
                    src="/fiarrowright.svg"
                  />
                  <div className="browse-employers">Browse Employers</div>
                </div>
                <div className="footer-link">
                  <img
                    className="fiarrow-right-icon1"
                    alt=""
                    src="/fiarrowright.svg"
                  />
                  <div className="candidate-dashboard">Candidate Dashboard</div>
                </div>
                <div className="footer-link">
                  <img
                    className="fiarrow-right-icon1"
                    alt=""
                    src="/fiarrowright.svg"
                  />
                  <div className="saved-jobs">Saved Jobs</div>
                </div>
              </div>
            </div>
            <div className="com">
              <h3 className="quick-link">Employers</h3>
              <div className="link">
                <div className="footer-link">
                  <img
                    className="fiarrow-right-icon1"
                    alt=""
                    src="/fiarrowright.svg"
                  />
                  <div className="post-a-job">Post a Job</div>
                </div>
                <div className="footer-link">
                  <img
                    className="fiarrow-right-icon1"
                    alt=""
                    src="/fiarrowright.svg"
                  />
                  <div className="browse-candidates">Browse Candidates</div>
                </div>
                <div className="footer-link">
                  <img
                    className="fiarrow-right-icon1"
                    alt=""
                    src="/fiarrowright.svg"
                  />
                  <div className="candidate-dashboard">Employers Dashboard</div>
                </div>
                <div className="footer-link">
                  <img
                    className="fiarrow-right-icon1"
                    alt=""
                    src="/fiarrowright.svg"
                  />
                  <div className="applications">Applications</div>
                </div>
              </div>
            </div>
            <div className="com">
              <h3 className="quick-link">Support</h3>
              <div className="link">
                <div className="footer-link">
                  <img
                    className="fiarrow-right-icon1"
                    alt=""
                    src="/fiarrowright.svg"
                  />
                  <div className="faqs">Faqs</div>
                </div>
                <div className="footer-link">
                  <img
                    className="fiarrow-right-icon1"
                    alt=""
                    src="/fiarrowright.svg"
                  />
                  <div className="privacy-policy">Privacy Policy</div>
                </div>
                <div className="footer-link">
                  <img
                    className="fiarrow-right-icon1"
                    alt=""
                    src="/fiarrowright.svg"
                  />
                  <div className="terms-conditions">{`Terms & Conditions`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right">
          <div className="jobpilot-job">
            @ 2021 Jobpilot - Job Portal. All rights Rserved
          </div>
          <div className="instagram-link">
            <img
              className="twitter-link-icon"
              loading="eager"
              alt=""
              src="/vector.svg"
            />
            <img
              className="youtube-1-icon"
              loading="eager"
              alt=""
              src="/youtube-1.svg"
            />
            <img
              className="youtube-1-icon"
              loading="eager"
              alt=""
              src="/instagram-1.svg"
            />
            <img
              className="youtube-1-icon"
              loading="eager"
              alt=""
              src="/twitter-1.svg"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JobList;
