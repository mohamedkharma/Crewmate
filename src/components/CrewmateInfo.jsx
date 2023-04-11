import React from "react";
import { useParams } from 'react-router-dom'; 
import { Link } from 'react-router-dom'; 
import "./CrewmateInfo.css"; 

const CrewmateInfo = (props) => {

    const { id } = useParams(); 
    const crewmateData = props.data;
    const newData = crewmateData.filter((crewmate) => {
        return crewmate.id === Number(id)
    })

    return (
        <div className="detailed-view">
            <h1>{newData[0].name}</h1>
            <h2>Id: {newData[0].id}</h2>
            <h2>Speed: {newData[0].speed} mph</h2>
            <h2>Color: {newData[0].color}</h2>
            <h2>Role: {newData[0].role}</h2>
                        
            <br />
            {newData[0].speed > 100 ?
                <h2>Wow, very fast!</h2> :
                <h2>Ugh, slow and needs to get faster...</h2>
            }
            <Link to={"edit/" + newData[0].id}><button>Wanna Edit the information?</button></Link>
        </div>
    );
};

export default CrewmateInfo; 