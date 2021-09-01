
import PropTypes from 'prop-types'
import React, { useState } from 'react';


export default function TextForm(props) {
    const [text, setText] = useState("Enter Text Here");
    const toupperc=()=>{
        var newtext=text.toUpperCase();
        setText(newtext);
        props.showalert("Converted to Upper Case","success")
    }
    var textchange=(event)=>{
        setText(event.target.value);
    }
    const tolowerc=()=>{
      setText(text.toLowerCase());
      props.showalert("Converted to Lower Case","success")
    }
    const cleartext=()=>{
      setText("Enter Text Here")
      props.showalert("All text Cleared","success")
    }
    const selecttext=()=>{
      var selectedtext=document.getElementById("exampleFormControlTextarea1");
      selectedtext.focus();
      selectedtext.select();
      // selectedtext.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(selectedtext.value)
      props.showalert("Text Copied to Clipboard","success")

    }
    const removeextra=()=>{
      
      var newtext=text.split(/[ ]+/)
      setText(newtext.join(" "))
      props.showalert("Extra Spaces Removes","success")
    }
  return (
      <>
      <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
          <h1>{props.title}</h1>
   
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1" >Text</label>
        <textarea
        value={text}
        onChange={textchange}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          style={{resize:'none'}} 
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={toupperc}>UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={tolowerc}>LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={selecttext}>Select</button>
      <button className="btn btn-primary mx-2" onClick={removeextra}>Remove Extra Scpaces</button>
      <button className="btn btn-danger mx-2" onClick={cleartext}>Clear</button>
      
      
    
    </div>
    <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
      <h2>Summary</h2>
      <p>{text.split(" ").length} words and {text.length} Letters</p>
      <p>{0.007*text.split(" ").length} time Read</p>
      <h2>Preview</h2>
      <p>{text!=="Enter Text Here"?text:"Enter something Above in the Textbox to preview"}</p>
    </div>
    </>
  );
}
TextForm.propTypes={
    title:PropTypes.string.isRequired
}