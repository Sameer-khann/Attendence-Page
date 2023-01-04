import React,{ useState } from "react";
import Navbar from "./Navbar";
// import Pichart from "./Pichart";

export default function AttendancePage() {


    const [count, setCount] = useState(0);

    const handleprev = () => {
        setCount(count-1);
        // console.log("this is prev");
        console.log(count);
    }

    const handleNext = () => {
        setCount(count+1);
        // console.log("this is next");
        console.log(count);
    }


  return (
    <>
      <Navbar />
      <div className="attendance">
        <div className="sidebar">
          <h1 style={{ textAlign: "center",paddingBottom:"10px",paddingTop:"20px" }}>SUBJECTS</h1>
          <ul style={{ listStyle: "none" }}>
            
              <button className="btnn">Computational Methods</button>
              <button className="btnn">Data Structure</button>
              <button className="btnn">Discrite Mathematics</button>
              <button className="btnn">Digital Logic and Circuit Design</button>
              <button className="btnn">Indian Knowledge System</button>
              <button className="btnn">Object Oriented Programming</button>
            
          </ul>
        </div>
        <div className="main">
          <h2 style={{textAlign:"center"}}>Attendence in Data Structure</h2>
          <div className="meter">
            Attendence tracker meter will be here
            {/* <Pichart/> */}
          </div>
          <div className="count">
            <button className="inc" onClick={handleprev} style={{fontSize:"20px"}}><b>-</b></button>
            <span style={{fontSize:"25px",marginTop:"-50px"}}>{count}</span>
            <button className="inc" onClick={handleNext} style={{fontSize:"20px"}}><b>+</b></button>
          </div>
        </div>
      </div>
    </>
  );
}
