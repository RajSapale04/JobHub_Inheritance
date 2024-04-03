import Navigation1 from "../components/Navigation1";
import ContactChild from "../components/ContactChild";
import Info from "../components/Info";
import FooterLinkContact from "../components/FooterLinkContact";
import "./JobDetail.css";
import { useState,useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate, useParams } from "react-router-dom";

const JobDetail = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const{user}= useAuthContext()
  const navigate=useNavigate()
  const id = useParams().id
  const [isApplied, setIsApplied] = useState(false);

 
  const handleClick=async()=>{
    console.log("User:", user);
    console.log("Data:", data);
    await fetchData(); // Call fetchData function
    console.log("Data after fetch:", data);

    if (!isApplied){
      try {
        const response = await axios.post(`http://localhost:4000/user/jobs/${id}`,null,{
        headers:{
          Authorization: `Bearer ${user.token}`
        }
      })   
          const json = response.data
          if (response.status >= 200 && response.status<300){
            setIsApplied(true);
            alert("Succesfully applied for job")
          }else{
            alert(json.error||"Some unexpected Error")
          }
  
      } catch (error) {
        alert(error.response.data.error)
   
      }
    }
    else{
      try {
        const response = await axios.delete(`http://localhost:4000/user/jobs/${id}`,{
        headers:{
          Authorization: `Bearer ${user.token}`
        } 
      })
          
          const json = response.data
          if (response.status >= 200 && response.status<300){
            setIsApplied(false);
            alert("Succesfully unapplied from job")
    
        }
        else{
          alert(json.error||"Some unexpected Error")
        }
       
      } catch (error) {
        alert(error.response.data.error)
        
      }

    }
    
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


      }
      else{
        setError(json.error||"some unexpected Error");
      }

      
    } catch (error) {

      
      setError(error.response.data.error);
      // navigate('/user/login')
      
      
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(()=>{
    fetchData()

    
  },[user,id])
  useEffect(() => {
    if (data && data.user_id.includes(user.id)) {
      setIsApplied(true);
    } else {
      setIsApplied(false);
    }
  }, [data, user]);

  return (
    <div className="job-detail">

      <Navigation1 
      
      />

      <section className="quick-links-section">
        <div className="breadcrumb">
          <div className="label">Job Details</div>
          <div className="process">
            <div className="label1">Home</div>
            <div className="social-media-icons">/</div>
            <div className="label2">Label</div>
            <div className="div1">/</div>
            <div className="label2">Label</div>
            <div className="div1">/</div>
            <div className="label2">Label</div>
            <div className="div1">/</div>
            <div className="label2">Label</div>
            <div className="div1">/</div>
            <div className="label2">Label</div>
            <div className="div1">/</div>
            <div className="label7">Find Job</div>
            <div className="social-media-icons">/</div>
            <div className="label8">{`Graphics & Design`}</div>
            <div className="social-media-icons">/</div>
            <div className="label9">Job Details</div>
          </div>
        </div>
      </section>
      <section className="rectangle-shape1">
        <div className="vector-shape">
          <div className="background-container">
            <img
              className="logo-frame-icon"
              loading="eager"
              alt=""
              src="/rectangle-43@2x.png"
            />
            <div className="job-info-box">
              <div className="heading">
                <h2 className="senior-ux-designer">{data && data.jobTitle}</h2>
              </div>
              <div className="map-trifold">
                <div className="at-facebook">at {data && data.companyName}</div>
                <button className="line">
                  <div className="full-time2">{data && data.jobType}</div>
                </button>
                <button className="badge">
                  <div className="featured">Featured</div>
                </button>
              </div>
            </div>
          </div>
          <div className="quick-links">
            <div className="icon-button">
              <img
                className="envelope-icon"
                loading="eager"
                alt=""
                src="/bookmarksimple1.svg"
              />
            </div>
            {data && (

              <button className="button" onClick={handleClick}>
              <div className="primary">{isApplied ? "Unapply Now" : "Apply Now"}</div>
              <img
                className="fiarrow-right-icon"
                alt=""
                src="/fiarrowright.svg"
                />
            </button>
                )}
          </div>
        </div>
        <div className="call-now">
          {data && (

            <ContactChild 
            description={data.jobDescription}
            
            />
            )}
          <div className="map-trifold-instance">
            <div className="salary-location">
              <div className="job-overview-frame">
                <div className="salary-usd">Salary (USD)</div>
                <div className="info-text-node">
                  <div className="div6">${data && data.minSalary} - ${data && data.maxSalary}</div>
                  <div className="yearly-salary">Yearly salary</div>
                </div>
              </div>
              <div className="candidate-name-text" />
              <div className="phone-number-container">
                <img
                  className="maptrifold-icon"
                  loading="eager"
                  alt=""
                  src="/maptrifold.svg"
                />
                <div className="logo-frame">
                  <div className="salary-usd">Job Location</div>
                  <div className="dhaka-bangladesh2">{data && data.city}, {data && data.country}</div>
                </div>
              </div>
            </div>
            <div className="job-information">
              <div className="contact-text">
                <div className="job-overview">Job Overview</div>
                {/* <div className="blog-link">
                  <Info
                    calendarBlank="/calendarblank.svg"
                    jobPosted="Job Posted:"
                    jun2021="14 Jun, 2021"
                    propMinWidth="109px"
                  />
                  <Info
                    calendarBlank="/timer.svg"
                    jobPosted="Job expire in:"
                    jun2021="14 Aug, 2021"
                    propMinWidth="109px"
                    propOverflow="unset"
                  />
                  <Info
                    calendarBlank="/stack.svg"
                    jobPosted="Job Level:"
                    jun2021="Entry Level"
                    propMinWidth="109px"
                    propOverflow="unset"
                  />
                </div> */}
                {data && (

                  <div className="experience-education-info">
                  <Info
                    calendarBlank="/wallet.svg"
                    jobPosted="Experience"
                    jun2021={data.experience}
                    propMinWidth="unset"
                    propOverflow="unset"
                    />
                  <Info
                    calendarBlank="/briefcase.svg"
                    jobPosted="Education"
                    jun2021={data.education}
                    propMinWidth="unset"
                    propOverflow="hidden"
                    />
                </div>
                    )}
              </div>
              <div className="line-separator" />
              <div className="share-this-job-parent">
                <div className="job-overview">Share this job:</div>
                <div className="social-button-parent">
                  <button className="social-button">
                    <img
                      className="linksimple-icon"
                      alt=""
                      src="/linksimple.svg"
                    />
                    <div className="copy-links">Copy Links</div>
                  </button>
                  <div className="social-button1">
                    <img
                      className="social-icon"
                      loading="eager"
                      alt=""
                      src="/social-icon.svg"
                    />
                  </div>
                  <div className="social-button2">
                    <img
                      className="social-icon"
                      alt=""
                      src="/social-icon-1.svg"
                    />
                  </div>
                  <div className="social-button1">
                    <img
                      className="social-icon"
                      alt=""
                      src="/social-icon-2.svg"
                    />
                  </div>
                  <div className="social-button4">
                    <img
                      className="envelope-icon"
                      loading="eager"
                      alt=""
                      src="/envelope.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterLinkContact />
    </div>
  );
};

export default JobDetail;
