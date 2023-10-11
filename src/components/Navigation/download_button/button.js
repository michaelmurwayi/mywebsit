import React from "react";
import ResumePdf from "../../../resume.pdf";


const Button = () =>{
    return (
        <div className="download-btn mt-3">
            <a href={ResumePdf} download="resume" target="_blank" rel="noreferrer"><button className='btn btn-sm btn-primary'>Download Resume</button></a>
        </div>
    )
}

export default Button