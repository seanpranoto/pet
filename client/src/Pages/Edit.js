import React, {useEffect, useState} from 'react';
import axios from "axios";
import { StyledLinks, StyledH3 } from '../Components/Styled';
import { Form } from '../Components/Form';

export const Edit = ({id}) => {
    const [pet, setPet]=useState({});
    const [loaded, setLoaded]=useState(false);

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/animals/${id}`)
        .then(res=>{
            setPet(res.data);
            setLoaded(true);
        })
        .catch(err=>console.log(err))
    }, [id]);

    const edit=(pets, setErrors)=>{
        axios.put(`http://localhost:8000/api/animals/${id}`, pets)
        .then(res=>setErrors(["Your update is succesful"]))
        .catch(err=>{
            const errorResonse=err.response.data.errors;
            const errorArr=[];
            for (const key of Object.keys(errorResonse)){
                errorArr.push(errorResonse[key].message);
            };
            setErrors(errorArr);
        });
    };

    return (
        <>
        {
            loaded&&
            <>
            <StyledH3>Edit {pet.name}</StyledH3>
            <StyledLinks to="/">back to home</StyledLinks>
            <Form onSubmitProps={edit} nameProps={pet.name} typeProps={pet.type} descProps={pet.desc} skill1Props={pet.skill1} skill2Props={pet.skill2} skill3Props={pet.skill3} buttonProps="Edit Pet" />
            </>
        }
            
        </>
    );
};
