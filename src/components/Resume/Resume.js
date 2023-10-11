import React from 'react'
import Nav from '../Navigation/Nav'
import './Resume.css'
import Info from './info/info'
import Exp from './experience/exp'
import Skill from './skills/skill'
import Reference  from './reference/reference'
import Footer from '../Footer/footer'
import { connect } from 'react-redux'


const Resume = ({profile, workExperience, schoolExperience, skills, references}) =>{
    
    return (
        <div className='resume-main'>
            <Nav/>

            <header className="video-background">
                <video autoPlay muted loop className="video">
                    <source src="/videos/background.mp4" type="video/mp4"/>
                </video>
            </header>
            <Info/>
            <div className='content row'>
                <div className='col-md-12'>
                    <h2>Personal Profile</h2>
                    <p>
                    Hello, I'm Michael Murwayi, a passionate and dedicated software developer with a strong foundation in creating efficient, scalable, and user-friendly applications. With 6 years of experience in the field, I have a deep understanding of software development principles and a proven track record of delivering high-quality code.
                    My expertise lies in Python, allowing me to tackle complex challenges and build robust solutions. I thrive in collaborative environments, working closely with cross-functional teams to analyze requirements, design software architectures, and implement innovative solutions.
                    Throughout my career, I have successfully completed projects ranging from web development to Data Science, showcasing my ability to adapt to different industries and technologies. I'm well-versed in agile methodologies and have a strong commitment to writing clean, maintainable code that meets project objectives and exceeds client expectations.
                    </p>
                </div>
                <div className='row'>

                <div className='col-md-6 mt-5'>
                    <Exp title="Work Experience" experience={workExperience}/>
                    <Exp title="School Experience" experience={schoolExperience}/>
                    </div>
                <div className='col-md-6 mt-5'>
                    <Skill skills={skills}/>
                    <Reference references={references}/>
                </div>
            </div>
            <Footer/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        dev: state.reducer.dev,
        nationality: state.reducer.nationality,
        number: state.reducer.number,
        email: state.reducer.email,
        profile: state.reducer.profile,
        workExperience: state.reducer.workExperience,
        schoolExperience: state.reducer.schoolExperience,
        skills: state.reducer.skills,
        references: state.reducer.references
    }
}

export default connect(mapStateToProps)(Resume)