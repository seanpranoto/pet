import React from 'react'
import { Form } from '../Components/Form'
import { StyledH3, StyledLinks } from '../Components/Styled';
import axios from "axios";

export const NewForm = () => {
    const createNew=(pets, setErrors, navigate)=>{
        axios.post("http://localhost:8000/api/animals", pets)
        .then(res=>navigate("/"))
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
            <StyledH3>Know a pet needing a home?</StyledH3>
            <StyledLinks to ="/">back to home</StyledLinks>
            <Form buttonProps="Add Pet" onSubmitProps={createNew} nameProps="" typeProps="" descProps="" skill1Props="" skill2Props="" skill3Props=""/>
        </>
    )
}
