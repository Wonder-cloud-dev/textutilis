import React, {useState} from 'react'



export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!", "successfully");
  }

  const handleLowClick = ()=>{
    // console.log("Uppercase was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case!", "successfully");
  }
  

  const ClearText = ()=>{
    // console.log("Uppercase was clicked" + text)
    let newText =""
    setText(newText);
    props.showAlert("Text is cleared!", "successfully");
  }
  

  const FirstCase = ()=>{
    let newText =text.slice(0,1).toUpperCase() + text.slice(1, text.length);
    setText(newText)
  } 

  const handleCopy = ()=>{
    console.log("i am copy");
    var text = document.getElementById("myBox");
    text.select();
    // text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text Copied!", "successfully");
  }

  const handleExtraSpaces = ()=>{
      let newText =text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra Spaces have been added!", "successfully");
  }

//   const text = 'helloThereMister';
//   const result = text.replace(/([A-Z])/g, " $1");
// const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
// console.log(finalResult);





  const handleOnChange =(event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }
  




  

  
  
  

 const [text, setText] = useState('');
  // setText("new text"); 
 
  return (
    <>
     <div className='container' style={{color : props.mode==='dark'? 'white':'#042743'}}    >
       <h1>{props.heading}</h1>
       <div className="mb-3">
       
       <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'? 'grey':'white', color: props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
     </div>
     <button className="btn btn-primary mx-2" onClick={handleUpClick}>Change To UpperCase</button>
     <button className="btn btn-primary mx-2" onClick={handleLowClick}>Change To LowerCase</button>
     <button className="btn btn-primary mx-2" onClick={ClearText}>Clear Text</button>
     <button className="btn btn-primary mx-2" onClick={FirstCase}>Title Case</button>
     <button className="btn btn-primary mx-2" onClick={handleCopy}>Handle Copy</button>
     <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Handle Extra Spaces</button>
      
     </div>
     <div className="container "  style={{color : props.mode==='dark'? 'white':'#042743'}} > 
      <h1>Your Text Summary</h1>
      <p> {text.trim().split(" ").length} words and {text.length} characters</p>
      <p>{0.08 * text.split(" ").length} Minutes</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Text To Preview"}</p>
      <h3>Count</h3>
      <p> 
      {text.split(".").length} Sentences
      </p>
     </div>
    </>
  )
 }
