import React, { useEffect, useState } from 'react';
import { AnswerWrapper, StyledForm, StyledH3, StyledLinks, StyledH4 } from '../Components/Styled';
import axios from "axios";
import { navigate } from '@reach/router';

export const Details = ({ id }) => {
    const [pet, setPet] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/api/animals/${id}`)
            .then(pet => setPet(pet.data))
            .catch(err => console.log(err));
    }, [id]);

    const onClick=()=>{
        axios.delete(`http://localhost:8000/api/animals/${id}`)
        .then(res=>navigate("/"))
        .catch(err=>alert(err));
    };

    return (
        <>
            <StyledH3>Details about: {pet.name}</StyledH3>
            <StyledLinks to="/">back to home</StyledLinks>
            <button onClick={onClick} style={{ background: "red", color:"white", marginLeft:"27rem" }}>Adopt {pet.name}</button>
            <StyledForm>
                <AnswerWrapper>
                    <StyledH3>Pet Type: </StyledH3>
                    <StyledH4>{pet.type}</StyledH4>
                </AnswerWrapper>
                <AnswerWrapper>
                    <StyledH3>Pet Description: </StyledH3>
                    <StyledH4 style={{ marginLeft: "10rem" }}>{pet.desc}</StyledH4>
                </AnswerWrapper>
                <AnswerWrapper>
                    <StyledH3>Pet Skills: </StyledH3>
                    <StyledH4>{pet.skill1}</StyledH4>
                    <br />
                    <StyledH4 style={{ marginLeft: "27rem" }}>{pet.skill2}</StyledH4>
                    <br />
                    <StyledH4 style={{ marginLeft: "27rem" }}>{pet.skill3}</StyledH4>
                </AnswerWrapper>
            </StyledForm>
        </>
    )
}
