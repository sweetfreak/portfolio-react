import React, {useState} from "react";
import billionImage from "../../assets/billionstair.png";
import nogginImage from "../../assets/noggin.png";
import classPresImage from "../../assets/classPresident.png";
import foodfestImage from "../../assets/foodfest.png";
import portfolioOGImage from "../../assets/portfolioOriginal.png";
import mediaGenImage from "../../assets/mediagenerator.png"

const Portfolio = () => {

    const [works] = useState([
    {
        name: "BillionStair",
        imgSrc: billionImage,
        workType:"game",
        link: "https://sweetfreak.itch.io/billionstair"
    },
    {
        name: "Class President",
        imgSrc: classPresImage,
        workType:"game",
        link: "/"
    },
    {
        name: "Noggin Games",
        imgSrc: nogginImage,
        workType:"game",
        link: "https://www.noggin.com/"
    },
    {
        name: "Media Generator",
        imgSrc:mediaGenImage,
        workType:"website",
        link: "https://sweetfreak.github.io/media-generator/"
    },
    {
        name: "Food Festival Module",
        imgSrc: foodfestImage,
        workType:"website",
        link: "https://sweetfreak.github.io/food-festival-module/index.html"
    },
    {
        name: "Original HTML/CSS website",
        imgSrc: portfolioOGImage,
        workType:"website",
        link: "https://sweetfreak.github.io/portfolio-assignment-1/"
    }

    ])

    const [workType, setWorkType] = useState("game");

    const currentWorks = works.filter((work) => work.workType === workType)
    
    

    return (
        <section className="mx-2 ">
            <h1 id="portfolio">Portfolio</h1>
            <div className="miniNav">
                <li key="games" className={`mx-2`}>
                    <span className={`${
                        workType === "game" 
                        && 'navActive'}`}
                        key={currentWorks.workType} 
                        onClick={() => {
                        setWorkType("game") 
                        console.log(workType)
                        }}
                    >
                        Games
                    </span>
                </li>
                <li key="websites" className={`mx-2`}>
                    <span className={`${
                        workType === "website" 
                        && 'navActive'}`}
                        key={currentWorks.workType} 
                        onClick={() => {
                        setWorkType("website") 
                        console.log(workType)
                        }}
                    >
                        Websites
                    </span>
                </li>
            </div>
            
                <div className="flex-row">
                    {currentWorks.map((work) => (
                        <li key={currentWorks.name} className="projectCard">
                            <a href={work.link} target="_blank" rel="noreferrer" key={work.name}>  
                                <img
                                    src={work.imgSrc}
                                    alt={work.name}
                                    className="img-thumbnail mx-1"
                                    key={work.name}
                                /><br></br>{work.name}
                            </a> 
                            <br></br>
                            <br></br>
                        </li>
                        
                        
                    ))}
                </div>         
            </section>
    )
}

export default Portfolio;