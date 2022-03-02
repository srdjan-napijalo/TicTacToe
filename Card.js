import React from 'react';
import data from './data';
import loc from './location.png';
console.log(data);
export default function Card(props){
    
    return(
        
       <div className="card">
          <img className="cardImg" src={props.imageUrl} alt="no content" width="50%"/>
          <div className="desription">
              <span className = "location">
                <img src={loc} alt="L" width="10px"></img>  
                {props.location}</span>
              <a href={props.googleMapsUrl} className = "locationLink">View on Google maps</a>
              <h3 className='title'>{props.title}</h3>
              <h5 className='description'>{props.description}</h5>
              <div className = "dates">{props.startDate}-{props.endDate}</div>
          </div>
       </div>
        
    )
}