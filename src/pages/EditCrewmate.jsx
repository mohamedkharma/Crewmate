import React, {useState} from "react";
import { useParams } from 'react-router-dom';
import './EditCrewmate.css'
import { supabase } from '../client'

const EditCrewmate = ({data}) => {

    const {id} = useParams();
    // const post = data.filter(item => item.id === id)[0];
    
    const [crewmate, setCrewmate] = useState({name: "", speed: "", color: "", role:""}); 
    const [post, setPost] = useState({title: "", author: "", description: ""})

    // UPDATE post
    const updateCrewmate = async (event) => {
        event.preventDefault();
    
        await supabase
        .from('characters')
        .update({name: crewmate.name, 
                speed: crewmate.speed, 
                color: crewmate.color, 
                role: crewmate.role
        })
        .eq('id', id);
    
        alert("Crewmate has been updated"); 
        window.location = "/";
    }

    // DELETE post
    const deleteCrewmate = async (event) => {
        event.preventDefault();

        await supabase
        .from('characters')
        .delete()
        .eq('id', id); 

        alert("Crewmate has been deleted!"); 
        window.location = "/";
    }

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
            <h1>Update your Crewmate!</h1>
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
                <button className="updateButton" onClick={updateCrewmate}>Update</button>
                <button className="deleteButton" onClick={deleteCrewmate}>Delete</button>
            </form>
        </div>
    )
}

export default EditCrewmate