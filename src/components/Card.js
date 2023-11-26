
import React, { useState } from 'react';


export default function Card(props) {

    const [cardStyle, setcardStyle] = useState(
        {
         backgroundColor : 'white',
         color : 'black',
         width : '20rem',
        }
    );

    const [cardImgStyle, setcardImgStyle] = useState(
        {
            filter: 'grayscale(0%)',
        }
    );

    const [btnText, setbtnText] = useState('Dark Mode')

    const toggleCardDarkMode = () =>{
        if(cardStyle.color === 'white'){
            setcardStyle(
                {
                    backgroundColor : 'white',
                    color : 'black',
                    width : '20rem',
                }
            )
            setcardImgStyle(
                {
                    filter: 'grayscale(0%)',
                }
            )

            setbtnText('Dark Mode');
        }else{
            setcardStyle(
                {
                    backgroundColor : 'black',
                    color : 'white',
                    width : '20rem',
                    
                }
            )
            setcardImgStyle(
                {
                    filter: 'grayscale(80%)',
                }
            )
            setbtnText('Light Mode');
        }

    }
  return (
    <>
        <div className="card my-3 mx-2" style={cardStyle}>
            <img style={cardImgStyle} src={props.image} className="card-img-top" alt="River in dooars"/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.about}</p>
                <button style={cardImgStyle} className="btn btn-primary" onClick ={toggleCardDarkMode}>{btnText}</button>
            </div>
        </div>
    </>
  )
}
