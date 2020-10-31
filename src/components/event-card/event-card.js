import React from 'react';
import './event-card.css';
import img from './event-img.png'
import el1 from './Ellipse 2.png'
import el2 from './Ellipse 3.png'
import el3 from './Ellipse 4.png'


const EventCard = ({event}) =>


    <div className="card event-card" style={{width: "18rem" ,}}>
        <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Wed, Oct  22, 10:00am</h5>
                <h6 className="card-subtitle mb-2">Lake Baikal cleanup</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>

                <div className="participants-container d-flex">
                   <img src={el1}  className="participant-thumbnail" />
                    <img src={el2} className="participant-thumbnail"/>
                    <img src={el3} className="participant-thumbnail" />
                    <span className="m-auto"> & 7 others </span>
                </div>
            </div>
    </div>

export default EventCard;
