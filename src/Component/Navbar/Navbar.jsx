import './Navbar.css';
import profileImage from '../../assets/Resume picture.jpeg';
const navOptions=['About','Tools','Experinece','Projects','Resume']
function NavOption(props){
    return(
        <p>{props.navItem}</p>
        
    )
}
function Navbar(){
    
    return (
        <div className='navbar_container'>

            <div className='navbar_left'>
            <img src={profileImage} alt='Profile' className='profile_image' />
            </div>


                <div className='navbar_right'>
                    {
                        navOptions.map(function(item,index){
                           return(
                            <NavOption key={item} navItem = {item} />
                           )         
                        })
                    }
                  <NavOption navItem='About'/>
                   {/*  <p>Tools</p>
                    <p>Experience</p>
                    <p>Projets</p>
                    <p>resume</p> */}
                </div>
            
            </div>
    )
}

export default Navbar;