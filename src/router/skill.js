import React from 'react';
import SkillInput from '../PreSkill/SkillInput'
const Home = ({addSkill}) =>{
    return(
        <div>
            <SkillInput addSkill = {addSkill} />
        </div>

    )
}
export default Home;