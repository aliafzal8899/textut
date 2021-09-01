import React,{useState} from 'react'

export default function About() {
    const [btntext, setbtntext] = useState("Enable Dark Mode")
    const [syt, setsyt] = useState({
        color:"black",
        backgroundColor:"#e9ecef"
    })
    const Togglemode=()=>{
        if (syt.color==="black"){
            setsyt({
                color:"white",
                backgroundColor:"#272727" 
            })
            setbtntext("Disable Dark Mode")
        }
        else{
            setsyt({
                color:"black",
        backgroundColor:"#e9ecef"
            });
            setbtntext("Enable Dark Mode")
        }

    }
    return (
       <>
       <div className="container my-3">
       <div className="jumbotron" style={syt}>
  <h1 className="display-4">Hello, world!</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4"/>
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <button className="btn btn-primary" onClick={Togglemode}>{btntext}</button>
</div>
</div>
       </>
    )
}
