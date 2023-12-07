import react, { useState ,useEffect} from "react";
import noteContext from "./NoteContext";

const noteState =(props)=>{

    const s1={
        "name":"harry",
        "class":"12A"
    }
    //const [state,setState]=useState(s1);
//    const  update=()=>{
//         setTimeout(()=>{
//             setState({
                
//             "name":"honey",
//             "class":"10A"
//             })
//         },1000)
//     }
    return (
        // <noteContext.Provider value={{state,update}}>
        //     {props.children}
        // </noteContext.Provider>
        <noteContext.Provider></noteContext.Provider>
    )
}
export default noteState;