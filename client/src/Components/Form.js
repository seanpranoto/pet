import React, { useState } from 'react';
import { Rows, StyledForm } from './Styled';
import { navigate } from "@reach/router";

export const Form = ({ onSubmitProps, nameProps, typeProps, descProps, skill1Props, skill2Props, skill3Props, buttonProps }) => {
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState(nameProps);
    const [type, setType] = useState(typeProps);
    const [desc, setDesc] = useState(descProps);
    const [skill1, setSkill1] = useState(skill1Props);
    const [skill2, setSkill2] = useState(skill2Props);
    const [skill3, setSkill3] = useState(skill3Props);


    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitProps({ name, type, desc, skill1, skill2, skill3 }, setErrors, navigate);
    }

    return (
        <StyledForm >
            <form onSubmit={onSubmit}>
                {
                    errors.map((err, i) => <p key={i}>{err}</p>)
                }
                <Rows>
                    <label htmlFor="name">Pet Name: </label>
                    <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
                    <label htmlFor="type">Pet Type: </label>
                    <input type="text" name="type" value={type} onChange={e => setType(e.target.value)} />
                    <label htmlFor="desc">Pet Description: </label>
                    <input type="text" name="desc" value={desc} onChange={e => setDesc(e.target.value)} />
                </Rows>
                <Rows>
                    <h5>Skills (optional): </h5>
                    <label htmlFor="skill1">Skill 1: </label>
                    <input type="text" name="skill1" value={skill1} onChange={e => setSkill1(e.target.value)} />
                    <label htmlFor="skill2">Skill 2: </label>
                    <input type="text" name="skill2" value={skill2} onChange={e => setSkill2(e.target.value)} />
                    <label htmlFor="skill3">Skill 3: </label>
                    <input type="text" name="skill3" value={skill3} onChange={e => setSkill3(e.target.value)} />
                </Rows>
                <button style={{ background: "#2b78e4", color: "white", padding: "0.2rem 3rem", position:"absolute", bottom:"36rem", left:"6rem" }}>{buttonProps}</button>
            </form>
        </StyledForm>
    )
}
