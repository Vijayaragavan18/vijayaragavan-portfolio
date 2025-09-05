import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Landing from './component/index';
import HeroPage from './component/heroPage/heroPAge';
import AboutMe from './component/AboutMe/aboutMe';
import Skill from './component/skill/skill';
import Projects from './component/Projects/project';
import LinksRote from './component/LinksRote/LinksRote';
import Contact from './component/contact/contact';
import Footer from './component/footer/footer';
// import Uncult from './component/Task/unculltr';
import { createContext, React, useState } from 'react';
export const cartContext = createContext();
function App() {


  const [visible, setvisible] = useState(false);
  return (
    <>
      <cartContext.Provider value={{ visible, setvisible }}>
        <HeroPage />

        <AboutMe />
        <Skill />
        <Projects />
        <LinksRote />
        <Contact />
        <Footer />
      </cartContext.Provider>
    </>
  );
}

export default App;
