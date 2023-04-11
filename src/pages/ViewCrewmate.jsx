import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const ViewCrewmate = (props) => {

    const [crewmates, setCrewmates] = useState([]); 

    useEffect(() => {
        setCrewmates(props.data);
    }, [props]);
    
    return (
        <div className="ViewCrewmate">
            {
                crewmates && crewmates.length > 0 ? (
                crewmates.map((crewmate) => (
                   <Card 
                   id={crewmate.id} 
                   name={crewmate.name} 
                   speed={crewmate.speed} 
                   color={crewmate.color}
                   role={crewmate.role}
                   />
                ))
                ) : (
                <h2>{'No CrewMates yet! 😞'}</h2>
            )}
        </div>  
    )
}

export default ViewCrewmate;