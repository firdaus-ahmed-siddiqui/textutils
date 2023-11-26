import React, { useState } from 'react'

export default function TextForm(props) {
    //state and hooks
    const [text,setText] = useState('');
    const handlerUpClick = () =>{
        let newText = text.toUpperCase();
        console.log('jojhkgvcb')
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    };
    const handlerLwClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    };

    const handlerOnChange = (event) =>{
        setText(event.target.value);
        //enableButton();

    };


    let trimmedText = text.trim();
    const textCharacter = trimmedText.length;
    let textWord = trimmedText.split(' ').length;

    if(text === '' || text === null ){
        textWord = 0;
    }

    /*const enableButton = () =>{
        var button = document.getElementsByClasName("textTransformBtn");
        console.log(text.length)
        if(text.length > 0){
            button.disabled = false;
            console.log(text.length +'hi')
        }else{
            button.disabled = true;
            console.log(text.length+'bye')
        }

    }*/

  return (
    <>
        <div className='container mt-3'>
            <div className="mb-3">
                <h4 className="mu-3">{props.heading}</h4>
                <textarea className="form-control" style={{backgroundColor : props.mode ==='light' ? '#ffffff':'grey' , color : props.mode ==='dark' ? '#ffffff' : '#000000'}}  rows="6" placeholder='Enter text here' onChange={handlerOnChange} value={text} id="exampleFormControlTextarea1"></textarea>
            </div>
            <div className='d-flex justify-content-center'>
                <button className="btn btn-primary mb-3 mx-2" onClick={handlerUpClick}>Convert to uppercase</button>
                <button className="textTransformBtn btn btn-primary mb-3" onClick={handlerLwClick} disabled>Convert to lowercase</button>
            </div>
        </div>
        <div className='container'>
            <h2>You text summary:</h2>
            <p><b>{textWord}</b> words and <b>{textCharacter}</b> characters</p>
            <p>On an average you will take <b>{0.008 * textWord}</b> minutes to read the below preview.</p>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text : 'Enter text above to preview.'}</p>
        </div>
    </>
  )
}
