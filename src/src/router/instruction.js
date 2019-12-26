import React from 'react';
import Container from 'react-bootstrap/Container'

const instruction = () => {
    return(
        <Container>
            <p class = "lead"> this is a project aim to organize plan and requirement  </p>
            <ul> 
                <p> Some instruction on how to use ! </p>
                <li>Home: Where you can start your new plan </li>
                <li>Skill: Where you can input in the skill you have learnt before</li>
                <li>After input your plan, click on the plan and you can put in the requirement</li>
                <li>If the requirement is met, the skill list will shine green !</li>
                <li>important!: becareful not to delete your item, as re-do is not implement yet</li>
                <li> if you found a bug, email : ldle@knox.edu so I can fix it asap ! Thank you </li>
            </ul>
        </Container>
    )
}

export default instruction