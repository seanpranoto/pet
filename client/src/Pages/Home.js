import React, { useEffect, useState } from 'react';
import { StyledH3, StyledLinks } from '../Components/Styled';
import { Link } from "@reach/router";
import axios from "axios";

export const Home = () => {
    const inlineBlock={
        display:"inline-block",
        margin:"0.2rem"
    }
    const [pets, setPets] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/animals")
            .then(res => setPets(res.data))
            .catch(err => console.log(err));
    }, [pets]);

    return (
        <>
            <StyledH3>These pets are looking for a good home</StyledH3>
            <StyledLinks to="/pets/new">add a pet to the shelter</StyledLinks>
            <table style={{width:"40%", border:"2px solid black"}} className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pets.map((pet) => (
                            <tr key={pet.name}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td>
                                    <Link style={inlineBlock} to={`/pets/${pet._id}`}>details</Link><p style={inlineBlock}>|</p>
                                    <Link style={inlineBlock}to={`/pets/${pet._id}/edit`}>edit</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
