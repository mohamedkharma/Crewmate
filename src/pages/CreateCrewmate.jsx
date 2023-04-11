import React, {useState} from "react";
import { supabase } from '../client'
import './CreateCrewmate.css'

const CreateCrewmate = () => {
    const [crewmate, setCrewmate] = useState({name: "", speed: "", color: "", role:""}); 

    const createCrewmate = async (event) => {
        event.preventDefault(); 

        await supabase
        .from("characters")
        .insert({name: crewmate.name, 
                speed: crewmate.speed, 
                color: crewmate.color, 
                role: crewmate.role
        })
        .select(); 

        alert("Crewmate has been created"); 
        window.location = "/";
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCrewmate( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        });
    }

    const colorOptions = [
        { name: "Red", value: "Red" },
        { name: "Green", value: "Green" },
        { name: "Blue", value: "Blue" },
        { name: "Yellow", value: "Yellow" },
    ];

    const roleOptions = [
        { name: "Imposter", value: "Imposter" },
        { name: "Crewmate", value: "Crewmate" },
    ];

    return (
        <div className="Crewmate">
            <h1>Create a new Crewmate!</h1>
            <form>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" value ={crewmate.name} onChange={handleChange}/><br />
                <br/>

                <label htmlFor="speed">Speed</label><br />
                <input type="text" id="speed" name="speed" value ={crewmate.speed} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="color">Color</label><br />
                <select id="color" name="color" value={crewmate.color} onChange={handleChange}>
                    {colorOptions.map((color) => (
                        <option value={color.value}>{color.name}</option>
                    ))}
                </select>

                <label htmlFor="role">Role</label><br />
                <select id="role" name="role" value={crewmate.role} onChange={handleChange}>
                    {roleOptions.map((role) => (
                        <option value={role.value}>{role.name}</option>
                    ))}; 
                </select>
                <br />
                <input type="submit" value="Submit" onClick={createCrewmate}/>
            </form>
        </div>
    )
}

export default CreateCrewmate