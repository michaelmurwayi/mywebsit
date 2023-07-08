import React from 'react'
import './skill.css'

const Skill = (props) => {
    return(
        <div className='col-md-12'>
            <h2>Skills</h2>
            <div class="card-container row">
                {props.skills.map((skill) =>(
                    <div class="skill-card col-md-3">
                        <div className='skill-header'>
                            <h6>{skill.name}</h6>
                        </div>
                        <div className='divider'></div>
                        <div className='skill-content'>
                            <small>{skill.level}</small>
                        </div>
                </div>
                ))}
            </div>
            </div>

    )
}


export default Skill