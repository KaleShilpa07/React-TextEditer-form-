import React from 'react'

function Alert(props) {
  //Success:Light mode has been enabled(first letter capital)
  const Capitalize=(word)=>{
    const lowe=word.toLowerCase();
    return lowe.charAt(0).toUpperCase()+lowe.slice(1);
  }
  return (
   
    <div style={{height:'40px',marginTop:'10px',textAlign:'center',alignContent:'center',marginLeft:'200px',marginRight:'200px'}} >
{props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert"> 
     <strong>{Capitalize(props.alert.type)}</strong>:{props.alert.msg} 
    
    {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>}</div>
   
  )
}

export default Alert