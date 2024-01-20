import google from '../images/google.png'
import airbnb from '../images/airbnb.png'
import linkedin from '../images/linkedin.png'
import amazon from '../images/logo.png'
import instagram from '../images/instagram.png'
import microsoft from '../images/microsoft.png'

const FeaturedJobs = ()=>{
    return(
        <section className='featured-jobs'>
            <h1>Featured Job Posts</h1>
        <div className="featured">
          <img src={google} alt="google-icon" className="featured-icon"/>
          <h3>Web Developer</h3>
          <p>Google.com</p>
          <button class="featured-button">Apply Job</button>
          <h4>$2000/Month</h4>
        </div>
        <div className="featured">
          <img src={airbnb} alt="google-icon" className="featured-icon"/>
          <h3>App Developer</h3>
          <p> Airbnb Inc, USA</p>
          <button class="featured-button">Apply Job</button>
          <h4>$4000/Month</h4>
        </div>
        <div className="featured">
          <img src={linkedin} alt="google-icon" className="featured-icon"/>
          <h3>Web Developer</h3>
          <p>Linkedin, USA</p>
          <button class="featured-button">Apply Job</button>
          <h4>$3500/Month</h4>
        </div>
        <div className="featured">
          <img src={amazon} alt="google-icon" className="featured-icon"/>
          <h3>Web Designer</h3>
          <p>Amazon.com, USA</p>
          <button class="featured-button">Apply Job</button>
          <h4>$5000/Month</h4>
        </div>
        <div className="featured">
          <img src={instagram} alt="google-icon" className="featured-icon"/>
          <h3>Graphics Designer</h3>
          <p>Instagram, USA</p>
          <button class="featured-button">Apply Job</button>
          <h4>$2000/Month</h4>
        </div>
        <div className="featured">
          <img src={microsoft} alt="google-icon" className="featured-icon"/>
          <h3>Product Designer</h3>
          <p>Microsoft Inc,UK</p>
          <button class="featured-button">Apply Job</button>
          <h4>$7000/Month</h4>
        </div>

        <button className="more-jobs">More Jobs</button>

        </section>
    )

};

export default FeaturedJobs;