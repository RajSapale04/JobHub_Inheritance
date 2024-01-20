// import React, { useState } from 'react';
import Buisness from '../images/businessman.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBriefcase} from '@fortawesome/free-solid-svg-icons'
import {faUsers} from '@fortawesome/free-solid-svg-icons'
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons'
// import BgImage from '../images/—Pngtree—online recruitment concept with a_7537121.png'
import Footer from '../components/footer'
import BgLearn from '../images/—Pngtree—korea talent recruitment identity information_6589962.png'
import FeaturedJobs from '../components/featuredjobs'
import Navbar from '../components/navbar'
import '../styles/home.css'



const Hero = () => (
  <section className="hero">
    <img src='./—Pngtree—online recruitment concept with a_7537121.png' alt="bg-jobs" class="bg-jobs"></img>
    <h1>
      Get Your Dream <br />
      Job Through <span className="emphasized-text">JobHub</span>
    </h1>
    <p>
        The internet is a job seeker's most crucial tool to success today.
        From <br />
        connecting with potential employers online to researching job hunting
        best <br />
        oractices, it's a goldmine of oppurtunity.<br/><br/>
    </p>
        <p className="icon-user">
            <FontAwesomeIcon icon={faUsers} size='lg' style={{color: "#36384e"}}/>
          5000+ Users
        </p>
        <p className="icon-briefcase">
            <FontAwesomeIcon icon={faBriefcase} size='lg' style={{color: "#36384e"}}/>
          
          7520 Job Posts
        </p>
        <SearchBar/>
  </section>
);

const SearchBar = () => (
  <section className="search-bar">
    <div className="search-container">
      <input
        type="text"
        placeholder="  Job Title or Keyword   |   Job Location"
      />
      <button type="button">Search</button>
    </div>
  </section>
);

const Jobs = () => (
  <section className="jobs">
    <div className="marketing">
          <img src={Buisness} className="job-icon" alt="icon"/>
          <h3>Marketing & Sales</h3>
          <p>
            1500+ Jobs Available
          </p>
        </div>
        <div className="marketing">
          <img src={Buisness} className="job-icon" alt="icon"/>
          <h3>App Development</h3>
          <p>
            5000+ Jobs Available
          </p>
        </div>
        <div className="marketing">
          <img src={Buisness} className="job-icon" alt="icon"/>
          <h3>Finance</h3>
          <p>
            3000+ Jobs Available
          </p>
        </div>
        <div className="marketing">
          <img src={Buisness} className="job-icon" alt="icon"/>
          <h3>Graphics Design</h3>
          <p>
            1800+ Jobs Available
          </p>
        </div>
        <div className="marketing">
          <img src={Buisness} className="job-icon" alt="icon"/>
          <h3>Legal Services</h3>
          <p>
            1500+ Jobs Available
          </p>
        </div>
        <div className="marketing">
          <img src={Buisness} className="job-icon" alt="icon"/>
          <h3>Support Engineer</h3>
          <p>
            1300+ Jobs Available
          </p>
        </div>
        <div className="marketing">
          <img src={Buisness} className="job-icon" alt="icon"/>
          <h3>Teacher</h3>
          <p>
            1500+ Jobs Available
          </p>
        </div>
        <div className="marketing">
          <img src={Buisness} className="job-icon" alt="icon"/>
          <h3>Web Development</h3>
          <p>
            5000+ Jobs Available
          </p>
        </div>
        <div className="marketing">
          <img src={Buisness} className="job-icon" alt="icon"/>
          <h3>Security</h3>
          <p>
            3000+ Jobs Available
          </p>
        </div>
  </section>
);


const LearnMore =()=>{
  return(
    <section className="learn-more">
        <img src={BgLearn} className="bg-learn"/>
        <button className="about">About Us</button>
        <h1>Learn More About JobHub</h1>
        <p>
          Welcome to JobHub, where career aspirations meet opportunity! <br/>At JobHub, we are dedicated to connecting talented individuals with their dream jobs,<br/> fostering a seamless and efficient job search experience. <br/><br/>Explore endless possibilities with JobHub - Your Gateway to Career Success! <br/><br/><br/>
          <FontAwesomeIcon icon={faCircleCheck} size='lg' style={{color:"#36384e"}}/> 
          <b>Top Companies and Brands</b> <br/><br/>
          <FontAwesomeIcon icon={faCircleCheck} size='lg' style={{color:"#36384e"}}/>    
          <b>Secured Jobs</b><br/><br/>
          <FontAwesomeIcon icon={faCircleCheck} size='lg' style={{color:"#36384e"}}/>  
          <b>Help & Support</b>
        </p>
        <button className="learn">Learn More</button>
      </section>
  )

};




const Home = ()=>{
    
    return(
      <body>
        

  <main>
    <Navbar/>
    <Hero />
    <Jobs />
    <FeaturedJobs/>
    <LearnMore/>
    <Footer />
  </main>
      </body>
        
    )
};
export default Home;