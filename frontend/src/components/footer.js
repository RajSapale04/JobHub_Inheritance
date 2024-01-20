import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faFacebook} from '@fortawesome/free-brands-svg-icons'
import{faTwitter} from '@fortawesome/free-brands-svg-icons'
import{faPinterest} from '@fortawesome/free-brands-svg-icons'
import{faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

const Footer=()=>{
    return(
        <footer>
    <div className="jobhub-description">
        <h2>
          JobHub
        </h2>
        <p className="footer-description">
          The internet is a job seeker's most crucial <br/>
          tool to success today. From connecting <br/> 
          with potential employers online to <br/> 
          researching job hunting best practices, 
          <br/> its a goldmine of opportunity. 
        </p>
          <a href="https://www.facebook.com/" className="facebook" >
            <FontAwesomeIcon icon={faFacebook} size='lg' style={{color:"#c3c4d5"}}/>
          </a>
          <a href="https://www.twitter.com/" className="twitter">
            <FontAwesomeIcon icon={faTwitter} size='lg' style={{color:"#c3c4d5"}}/> 
          </a>
          <a href="https://www.pinterest.com/" className="pinterest">
            <FontAwesomeIcon icon={faPinterest} size='lg' style={{color:"#c3c4d5"}}/>      
          </a>
          <a href="https://www.linkedin.com/" className="linkedin">
            <FontAwesomeIcon icon={faLinkedinIn} size='lg' style={{color:"#c3c4d5"}}/>        
          </a>
          
        </div>
        <div className="menu">
          <h3>Menu</h3>
          <p>
            <br/>Home <br/><br/>
            About<br/><br/> 
            Destination<br/><br/>
            Community<br/><br/>
            Contact<br/><br/>
          </p>
        </div>
        <div className="support">
          <h3>Support</h3>
          <p>
            <br/>Terms & Conditions<br/><br/>
            Privacy Policy<br/><br/> 
            Contact Us<br/><br/>
            FAQ/Help<br/><br/>
            Resources<br/><br/>
          </p>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <p>
            <br/>022 2765 1487<br/><br/>
            info@jobhub.com<br/><br/> 
            
          </p>
        </div>
        <hr width="80%"/>
        <div className="copyright">
          <p>Copyright @ 2023.com, All rights reserved.</p>
        </div>
  </footer>
    )

};

export default Footer;