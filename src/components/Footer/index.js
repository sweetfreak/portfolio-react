import React from "react";
import githubImage from "../../assets/logos/githubLogo.svg"
import itchioImage from "../../assets/logos/itchioLogo.svg"
import linkedinImage from "../../assets/logos/linkedInLogo.svg"

function Footer() {

    return (
        <div className="svg" >
        <li key="github">
            <a href="https://github.com/sweetfreak">
            <img src={githubImage} alt="Sweetfreak Github" />
            </a>
        </li>
        <li key="itch.io">
            <a href="https://sweetfreak.itch.io/">
            <span><img src={itchioImage} alt="Sweetfreak Itch.io" />
            </span></a>
        </li>
        <li key="linkedin">
            <a href="https://www.linkedin.com/in/jessetsheehan/">
            <img src={linkedinImage} alt="Jesse Sheehan Linkedin" />
            </a>
        </li>
            
        
     </div>   
    )
}

export default Footer; 