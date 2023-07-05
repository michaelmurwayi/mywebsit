import React from "react"
import "./reference.css"

const Reference = (props) => {
    return (

        <div class="ref-container row mt-5">
            <h2>References</h2>
        {props.references.map((reference) =>(
            <div class="ref-card flip-card col-md-6 mt-5">
              <div class="ref-card-body">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                     {/* Front content */}
                    <img src={reference.src}/>
                  </div>
                  <div class="flip-card-back mt-2">
                    <h5 class="ref-card-title">{reference.name}</h5>
                    <p class="ref-card-text">{reference.email}</p>
                    <p class="ref-card-text">{reference.number}</p>
                    <p class="ref-card-text">{reference.role}</p>
                  </div>
                </div>
              </div>
            </div>

          

        ))}
        </div>
    )
}

export default Reference