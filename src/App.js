import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    {
      name: "About",
      description: "Learn about Jesse"
    },
    {
      name: "Portfolio",
      description: "Jesse's Work"
    },
    {
      name: "Resume",
      description: "Jesse's Job Experience"
    },
    {
      name: "Contact",
      description: "Contact Jesse"
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);


function displayComponent(currentCategory) {
  if (currentCategory.name === "About") {
    return (<About></About>)
  } else if ( currentCategory.name=== "Portfolio") {
    return (<Portfolio></Portfolio>)
  } else if (currentCategory.name === "Resume") {
    return (<Resume></Resume>)
  } else {
    return (<ContactForm></ContactForm>)
  }
}


  return (
    <div>
      <Nav
        categories = {categories}
        setCurrentCategory = {setCurrentCategory}
        currentCategory = {currentCategory}
      
      ></Nav>
      <main>
        <>
         {displayComponent(currentCategory)}
        </>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
