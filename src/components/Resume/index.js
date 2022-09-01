import React from "react";
import resumePDF from "../../assets/JesseSheehan_Resume.pdf"

const Resume = () => {
    return (
        <section className="my-5">
            <h1 id="resume">Resume</h1>
            <object data={resumePDF} alt="Jesse's Resume"> </object>
            <a href={resumePDF} alt="download resume" target="_blank" rel="noreferrer" >Open in new tab</a>
        </section>
    )
}

export default Resume;