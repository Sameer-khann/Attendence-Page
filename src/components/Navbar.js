import React from 'react'
import LoginPage from './LoginPage';
import { Link } from "react-router-dom";
import { GiNotebook } from "react-icons/gi";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { SiGooglesheets } from "react-icons/si";
import { MdSell } from "react-icons/md";
import Notes from './Notes';
import SemesterCard from './SemesterCard';

export default function Navbar() {

  const handleColse = (e) => {
    // window.location.reload(false);
  }


  return (
    <>
    <div className="boxnav" >
    <nav className="navbar navbar-expand-lg " style={{color:"#3ec8ea"}} >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{color:"#9b87ff",fontSize:"50px"}}>College Eazy</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link className="nav-link active" to="/Notes"><SiGooglesheets /> Notes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/AttendancePage"><SiGooglesheets /> Attendance</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#"><MdSell /> Sell & Buy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#"><BsFillQuestionCircleFill /> About</a>
            </li>
          </ul>

          <div className='modalCard'>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#LoginPage">
              Login
            </button>
            <div className="modal  login fade" id="LoginPage" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <button type="button" className="btn-close" onClick={handleColse} data-bs-dismiss="modal" aria-label="Close"></button>
                  <LoginPage />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </nav>
    </div>
    </>
  )
}
