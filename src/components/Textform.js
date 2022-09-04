import React, {useState} from "react";

export default function Textform(props) {

    const handleupclick = ()=> {
       // console.log ("Upper was clicked" + Text);
        let newText = Text.toUpperCase();
        settext (newText) 
      props.showAlert("Converted to uppercase","sucess");
      }

        const handleloclick = ()=> {
            // console.log ("Upper was clicked" + Text);
             let newText = Text.toLowerCase()
             settext (newText) 
             props.showAlert("Converted to lowercase","sucess");}

             const handleclearclick = ()=> {
                // console.log ("Upper was clicked" + Text);
                 let newText = " ";
                 settext (newText)
                 props.showAlert("cleared text","sucess"); }

                 const handleextraspace = ()=> {
                   let newText = Text.split(/[ ]+/)
                   settext (newText.join(" "))
                   props.showAlert("extra spaces removed","sucess");
                   }

    const handleonchange = (event)=> {
        //console.log ("On change");
        settext (event.target.value); }
  const [Text, settext] = useState('');

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
      <div className="mb-3" >
        <textarea className="form-control " value={Text }  style={{background:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleonchange} id="emybox" rows="8" ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleupclick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleloclick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleextraspace}>Remove Extra space</button>
      <button className="btn btn-primary mx-2" onClick={handleclearclick}>Clear Text</button>
      
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{Text.split(" ").length} words and {Text.length} character</p>
            <p>{ 0.008 * Text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{Text.length>0?Text:"Enter something to preview"}</p>
    </div>
    </>
  );
}
