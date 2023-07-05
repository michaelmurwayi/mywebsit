import React from 'react'


const Exp = (props) =>{
    if(props.title == "Work Experience"){

        return (
            <div className='work'>
            <h2>{props.title}</h2>
            <hr/>
            {props.experience.map((experience)=>(
                
                <div className='exp mt-5'>
                <div className='exp-header'>
                    <h6>{experience.company_name}</h6>
                    <small>{experience.link}</small>
                    <p>{experience.start} - {experience.end}</p>
                </div>
                <div className='exp-content'>
                    <p>{experience.position}</p>
                    <small> {experience.desciption}</small>
                </div>
            </div>
            ))}
        </div>
    )
    }else{
        return(
            <div className='school mt-5'>
                    <h2>School Experience</h2>
                        <hr/>
                        {props.experience.map((experience)=>(

                            <div className='exp mt-5'>
                            <div className='exp-header'>
                                <h6>{experience.school_name}</h6>
                                <small>{experience.certification}</small>
                                <p>{experience.start} - {experience.end}</p>
                            </div>
                        </div>
                        ))}
                    </div>
        )
    }
}


export default Exp