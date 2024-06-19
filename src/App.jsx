
import './App.css'
import Navbar from './Component/Navbar/Navbar';
import HomePage from './Component/homepage/homepage';
import TechStack from './Component/TechStack/TechStack';
/* import Experience from './Component/Experience/Experience'; */
import Projects from './Component/projects/Projects';
function App() {
/*  Portfolio Website
 1.Navbar
 2.homepage
 3.techstack
 4.Experience
 5.projects */
  return (
    <div className='app'> 
      <Navbar/>
      <HomePage/>
      <TechStack/>
    {/*   <Experience/> */}
      <Projects/>
    </div>
  )
}

export default App
