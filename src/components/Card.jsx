import React, {useState} from "react";
import "./Card.css"; 
import { Link } from "react-router-dom"; 

const Card = (props) =>  {
  
    return (
        <div className="Card">
        <Link to={"crewmate/" + props.id}>
            <h2 className="name">{"Name of Crewmate: " + props.name}</h2>
            <h3 className="speed">{"Speed of Crewmate: " + props.speed}</h3>
            <h3 className="color">{"Color of Crewmate: " + props.color}</h3>
            <h3 className="role">{"Role of Crewmate: " + props.role}</h3>
            <Link to={"edit/" + props.id}><button>Edit me</button></Link>
        </Link>
        </div>

        // <div className="Card">
        //     <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
        //     <h2 className="title">{props.title}</h2>
        //     <h3 className="author">{"by " + props.author}</h3>
        //     <p className="description">{props.description}</p>
        //     <button className="betButton" onClick={updateCount} >👍 Bet Count: {count}</button>
        // </div>
    );
  };
  
  export default Card;
