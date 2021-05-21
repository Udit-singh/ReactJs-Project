import React from 'react';
import "../Cads/card-style.css";

const Card= props=>{
return(
    <div className="card text-center shadow ">
        <div className="overflow">
        <img src={props.imgsrc} alt="Image 1" className="card-img-top"/>
        </div>
        <div className="card-body text-dark">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text text-secondary" font="Cambria">{props.text}
            </p>
            <div class="btn-group dropright">
            <a href={props.link} class="btn btn-outline dropdown-toggle">Read more</a>
            </div>

        </div>
    </div>
);

}
export default Card;