import React from 'react'
//import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
 
  return (


    <>
    
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="/" >{props.title}</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <strong><li className="nav-item mx-2">
          <a className="nav-link active" aria-current="page" href="/LeftNavigationDrawer" >DemoDrawer</a>
        </li></strong>
        <strong><li className="nav-item mx-2">
          <a className="nav-link active" aria-current="page" href="/textform" >Form</a>
        </li></strong>
        <strong><li className="nav-item mx-2">
          <a className="nav-link active" aria-current="page" href="/About" >About</a>
        </li></strong>
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success"  type="submit">Search</button>
      </form>
      <div className='d-flex'>
        <div className="bg-primary rounded mx-2"   onClick={()=>{props.toggleMode('primary')}}        style={{height:'25px',width:'25px',cursor:'pointer'}} ></div>
        <div className="bg-info rounded mx-2"      onClick={()=>{props.toggleMode('info')}}           style={{height:'25px',width:'25px',cursor:'pointer'}} ></div>
        <div className="bg-secondary rounded mx-2" onClick={()=>{props.toggleMode('secondary')}}       style={{height:'25px',width:'25px',cursor:'pointer'}} ></div>
     
      </div>
      <div className={`form-check form-switch mx-4 text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input"  onClick={()=>{props.toggleMode('#FF7F50')}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change Mode</label>
</div>
    </div>
  </div>
</nav>
    </>
  )
}
