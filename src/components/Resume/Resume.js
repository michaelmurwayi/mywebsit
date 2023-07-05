import React from 'react'
import Nav from '../Navigation/Nav'
import './Resume.css'
import Info from './info/info'

const Resume = () =>{
    const schoolExperience = [{
        school_name: 'Meru University of Science and Technology',
        certification: 'Bachelor in Computer Technology',
        start: '2016',
        end: '2021'
    },
    {
        school_name: 'Pioneer Group of Schools',
        certification: 'High School Education Certificate (KSCE)',
        start: '2012',
        end: '2016'
    },
    {
        school_name: 'Utawala Academy',
        certification: 'Primary School Education Certificate (KCPE)',
        start: '2008',
        end: '2011'
    }
    ]

    const WorkExperience = [{
        company_name: 'Revolution Analytics, Nairobi (Kenya) ',
        link: 'https://revolution-analytics.co.ke/',
        position: '',
        languages: [],
        desciption: ''
    },
    {
        company_name: 'Zalisha Kenya , Kenyatta University (Kenya)',
        link: 'https://www.zalishafrica.com/',
        position: '',
        languages: [],
        desciption: ''
    },
    {
        company_name: 'Ona  , Nairobi (Kenya)',
        link: 'https://ona.io',
        position: '',
        languages: [],
        desciption: ''
    },
    ]

    return (
        <div>
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
            </div>
                
        </div>
    )
}

export default Resume