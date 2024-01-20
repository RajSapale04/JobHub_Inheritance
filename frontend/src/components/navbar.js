import {Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBriefcase} from '@fortawesome/free-solid-svg-icons'
const Navbar=()=>{
    return(
        <header>
      <Link to='/' className='logo'>
        
        <FontAwesomeIcon icon={faBriefcase} size='xl' style={{color: "#c3c4d5"}}/>
        </Link>

      
      
      <Link to='/' className='logo-text'>
        <h2>JobHub</h2>
      </Link>
      <div className="navbar">
        <ul>
          <li><a href="">Features</a></li>
          <li><a href="">Pricing</a></li>
          <li><a href="">FAQ</a></li>
          <li><a href="">About</a></li>
          <li>
            <Link to='/login'>
            Login
          </Link>
            </li>
        </ul>
      </div>
      <div className="get-started">
        <Link to='/signup' className='get-started-btn'>
          Get Started

        </Link>

      </div>
    </header>

    )
};


export default Navbar;