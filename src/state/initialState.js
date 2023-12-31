
const initialState = {
    dev: "Michael Murwayi",
    nationality: "Kenyan",
    number: "+254746256084",
    email: "mikemurwayi7@gmail.com",
    role: "Full Stack Web Developer",
    bio : "As a code composer, I dance with algorithms, orchestrating symphonies of efficiency and functionality. With each keystroke, I strive to create clean, scalable, and maintainable software architectures, harnessing the power of cutting-edge technologies and frameworks.",
    profile: "Hello, I'm Michael Murwayi, a passionate and dedicated software developer with a strong foundation in creating efficient, scalable, and user-friendly applications. With 6 years of experience in the field, I have a deep understanding of software development principles and a proven track record of delivering high-quality code. My expertise lies in Python, allowing me to tackle complex challenges and build robust solutions. I thrive in collaborative environments, working closely with cross-functional teams to analyze requirements, design software architectures, and implement innovative solutions. Throughout my career, I have successfully completed projects ranging from web development to Data Science, showcasing my ability to adapt to different industries and technologies. I'm well-versed in agile methodologies and have a strong commitment to writing clean, maintainable code that meets project objectives and exceeds client expectations.",
    year: new Date().getFullYear(),
    workExperience: [{
        company_name: 'Revolution Analytics, Nairobi (Kenya) ',
        link: 'https://revolution-analytics.co.ke/',
        position: '',
        start: '2021 August',
        end: '2023 May',
        languages: ["Python", "Html", "CSS", "JS (Angular)", "PHP (Laravel)", "Mysql", "PowerBI", "Excel"],
        desciption: 'I professionally worked as both Frontend and Backend developer.I also rotated to a data science project where i did both data collection ( web scrapping ) , data warehousing and data analysis. '
    },
    {
        company_name: 'Zalisha Kenya , Kenyatta University (Kenya)',
        link: 'https://www.zalishafrica.com/',
        position: '',
        start: '2021 August',
        end: '2023 May',
        languages: ["Html", "CSS", "MDBootrap", "Firebase", "JS(Vue.js)"],
        desciption: 'My role mainly included frontend development. Mainly worked with material design bootstrap and vue js.I also learnt how to user firebase for authentication and data storage. '
    },
    {
        company_name: 'Ona  , Nairobi (Kenya)',
        link: 'https://ona.io',
        position: '',
        start: '2021 August',
        end: '2023 May',
        languages: ["Python", "Git", "Docker"],
        desciption: ' I mainly maintained the Ona Data API which was written in python .I fixed issues that   arose in production .I got extensivly introduced to Django Rest API and writing system tests.We heavily relied on git for version control and  i also went through some deployment techniques with docker.'
    }
    ],
    schoolExperience: [{
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
    ],
    skills: [
        {
            name:"Html",
            level: "Proficient"
        },
        {
            name:"CSS",
            level: "Proficient"
        },
        {
            name:"Python",
            level: "Intermediate"
        },
        {
            name:"JavaScript",
            level: "Intermediate"
        },
        {
            name:"Mysql",
            level: "Intermediate"
        },
        {
            name:"Docker",
            level: "Intermediate"
        },
        {
            name:"Git",
            level: "Intermediate"
        },
        {
            name:"MongoDB",
            level: "Beginner"
        },
        {
            name:"PHP",
            level: "Beginner"
        },
        {
            name:"Cyber Security",
            level: "Beginner"
        }
    ],
    references: [
        {
            src: "/images/ona.png",
            name: "Dickson Ukanga",
            number: "0724242424",
            role: "CTO",
            email: "ukangadickson@gmail.com"
        },
        {
            src: "/images/zalisha.jpeg",
            name: "Steve Kombo",
            number: "0724242424",
            role: "CEO",
            email: "skombo@gmail.com"

        },

    ],
    companyName: "huncho Inc"
};

export default initialState