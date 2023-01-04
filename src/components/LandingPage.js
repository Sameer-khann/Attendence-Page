import React from 'react'
import { Link } from "react-router-dom";
 import photo1 from '../img/NOTESLO.jpg'
import photo2 from '../img/notelogo1.jpg'
 import photo3 from '../img/buyandsell.jpg'

export default function LandingPage() {
    return (
        <>
            <div className="LandingPage">
                <div className='pagecontainer'>
                    <div className="containerleft">
                        <Link to="/Notes" style={{ textDecoration: "none", color: "#3ec8ea" }}>
                            <div className="notedesc" style={{width:"500px", textAlign:"center"}}>
                            <h1>NOTES</h1>  
                            <span style={{color:"#9b87ff",fontSize:"20px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus harum deleniti assumenda voluptatum maxime eius illum sit facere nam molestiae temporibus velit sint corporis, perspiciatis, est tempora aperiam perferendis totam.</span>
                            </div>
                        </Link>
                    </div>
                    <div className="containerRight" style={{ overflow: "hidden" }}>
                        <img src={photo1} alt="img" style={{ width: "450px" }} />
                    </div>
                </div>
            </div>
            <br />
            <div className="LandingPageA">
                <div className='pagecontainerA'>
                    <div className="containerleftA">
                        <Link to="/AttendancePage" style={{ textDecoration: "none", color: "#3ec8ea" }}>
                        <div className="notedesc" style={{width:"500px"}}>
                            <h1>ATTENDANCE</h1>
                            <span style={{color:"#9b87ff",fontSize:"20px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, expedita eveniet nesciunt cum voluptatem sit necessitatibus consectetur autem maxime repudiandae odit! Deleniti ipsum animi ipsa saepe cupiditate voluptas amet unde!</span>
                            </div>
                        </Link>
                    </div>
                    <div className="containerRightA" style={{ overflow: "hidden" }}>
                        <img src={photo2} alt="img" style={{ width: "500px" }} />
                    </div>
                </div>
            </div>
            <br />
            <div className="LandingPageB">
                <div className='pagecontainerB'>
                    <div className="containerleftB">
                    <div className="notedesc" style={{width:"400px"}}>
                        <h1>BUY AND SELL</h1>
                        <span style={{color:"#9b87ff",fontSize:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum veritatis beatae aliquid quia, ab vel! Tenetur sed odio, repellendus eaque quibusdam aperiam quas, eos ea fugiat illo ipsam quos laudantium.</span>
                        </div>
                    </div>
                    <div className="containerRightB" style={{ overflow: "hidden" }}>
                        <img src={photo3} alt="img" style={{width: "500px" }} />
                    </div>
                </div>
            </div>
            <br />
            <div className="LandingPageabout">
                <div className='pagecontainerabout'>
                    <h1>ABOUT</h1>
                    <div className="boxabout" style={{backgroundColor:"white", height:"14rem"}}>
                        <h1 style={{color:"black"}}>The World Wide Web, commonly known as the Web, is an information system enabling documents and other web resources to be accessed over the Internet. Documents and downloadable media are made available to the network through web servers and can be accessed by programs such as web browsers.</h1>
                    </div>
                    <div className="footer" style={{background:"grey"}}>

<div className="footerSection" style={{display:"flex",flexDirection:"row"}}>

  <div style={{textAlign: "center",marginLeft:"10rem"}}>
    <h3 style={{marginBottom:"35px",paddingTop:"15px"}}>Contact Us:</h3>
    <div className="contact" style={{height:"12rem",flexDirection:"colomn",fontSize:"30px"}}>
    <p>www.collegeazy.com</p>
    <p>Mobile: +91 76782 58***</p>
    <p>Email: collegeazy@gmail.com</p>
    </div>
  </div>
  <div className="contributors" style={{textAlign: "center",marginLeft:"20rem"}}>
    <h3>Our Team</h3>
    <div style={{fontSize:"30px"}}>

    <p>Shashank Pandey</p>
    <p>Mohd Azam</p>
    <p>Samir Khan</p>
    <p>Yashi Vaish</p>

    </div>

  </div>
</div>
    <p style={{background:"darkgrey",textAlign: "center"}}>
            Copyright &copy; collegeazy.com
    </p>
</div>
                </div>
            </div>
        </>
    )
}
