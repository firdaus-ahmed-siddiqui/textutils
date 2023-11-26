import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.appColor} bg-${props.appColor}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>
              <li className="nav-item">
                <div className="btn-group">
                  <button style={{color : props.mode ==='dark' ? '#ffffff' : '#000000'}} type="button" className={`btn btn-grey dropdown-toggle p-0 my-2`} data-bs-toggle="dropdown" aria-expanded="false">
                    Developed by Siddiqui
                  </button>
                  <ul style={{backgroundColor : props.mode ==='light' ? '#ffffff':'grey' , color : props.mode ==='dark' ? '#ffffff' : '#000000'}} className="dropdown-menu px-3">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li className="dropdown-item">Another action</li>
                    <li className="dropdown-item">
                        <div style={{display:'flex'}}>
                          <span className="form-check-label" htmlFor="flexSwitchCheckDefault">Light</span>
                          <div className={`form-check form-switch text-${props.mode === 'light'? 'dark':'light'}`}>
                            <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
                          </div>
                          <span className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark</span>
                        </div>
                    </li>
                    <li><hr className="dropdown-divider"/></li>
                    <li>
                      <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button  style={{backgroundColor:'green'}} type="button" onClick={props.toggleGreen} className="btn btn-green bg-success">Green</button>
                        <button style={{backgroundColor:'pink'}} type="button" onClick={props.toggleBlue} className="btn btn-blue bg-info">Blue</button>
                        <button style={{backgroundColor:'yellow'}} type="button" onClick={props.toggleYellow} className="btn btn-yellow bg-warning">Yellow</button>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          
        </div>
      </nav>


    </>
  )
}

//Defining proptypes
Navbar.propTypes = { 
    mode : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string,
};

//Defining default value of prop
Navbar.defaultProps = {
    mode : 'light',
    title : 'Website name',
    aboutText : 'About'

}