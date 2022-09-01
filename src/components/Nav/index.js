import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import headerImage from "../../assets/JesseInverse.jpg";

function Nav(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
      } = props;


      useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
      }, [currentCategory]);

    return (
        <header className="flex-row">
            <h1 className="mx-1">
                <a data-testid="link" href ="/" >
                <img src={headerImage} alt="Jesse with colors inverted" className="my-1" style={{width: "5%"}} /> Jesse Sheehan
                </a>
            </h1>
            <nav>
              {categories.map((category) => (
               <li
               className={`mx-2 ${
                   currentCategory.name === category.name  && "navActive"
               }`}
               key={category.name}
           >
               <span 
                   onClick={() => {
                       setCurrentCategory(category)
                       
                   }}
               >
                   {capitalizeFirstLetter(category.name)}
               </span>
           </li>
                ))}  
            </nav>
        </header>
    )
}

export default Nav;


// <ul className="flex-row">
// <li className="mx-2">
//     <a data-testid="about" href="#about" >
//         About Me
//     </a>
// </li>
// <li className="mx-2">
//     <a data-testid="Portfolio" href="#Portfolio" >
//         Portfolio
//     </a>
// </li>
// <li className="mx-2">
//     <a data-testid="resume" href="#resume" >
//         Resume
//     </a>
// </li>                 
// <li className="mx-2">
//     <a data-testid="contact" href="#contact" >
//         Contact Me
//     </a>
// </li>

// </ul>