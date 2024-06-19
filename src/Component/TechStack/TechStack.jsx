/* props are use to pass data from one component to another. 
High order function- fuction in JS that takes another func as callback.  */
import './TechStack.css'
import TechStackIconContainer from './TechStakIconContainer/TechStackIconContainer';
import c from '../../assets/c icon.png';
import js from '../../assets/js icon.png';
import css from '../../assets/css icon.png';
import java from '../../assets/Java icon.png';
import python from '../../assets/python icon.png';
import html from '../../assets/Html icon.png';

function TechStack(){

    const techstackRowOne = [ 
        {
            iconName:'Html',
            iconImage:html,
            iconAltProperty:'htmlImage'
        },
        {
            iconName:'CSS',
            iconImage:css,
            iconAltProperty:'cssImage'
        },
        {
            iconName:'Javascript',
            iconImage:js,
            iconAltProperty:'jsImage'
        },
        
        
        
    ];
    const techstackRowTwo = [ 
        {
            iconName:'C',
            iconImage:c,
            iconAltProperty:'cImage'
        },
        {
            iconName:'Java',
            iconImage:java,
            iconAltProperty:'javaImage'
        },
        {
            iconName:'Python',
            iconImage:python,
            iconAltProperty:'pythonImage'
        },
      
    ];

    return (
        <div className='techstack_container'>
            <p className='techstack_title'>Tech Stack</p>
            <div className='techstack_icon_container'>

               {
                techstackRowOne.map(function(elements,index){
 

                    return(
                        <TechStackIconContainer 
                        key={elements.iconName}
                        title={elements.iconName}
                        altProperty={elements.iconAltProperty}
                        image={elements.iconImage}  />
                    )
                })
               }
               
              
                
                         </div>
                         <div className='techstack_row'>
                         {
                techstackRowTwo.map(function(elements,index){
                    return(
                        <TechStackIconContainer
                        key={elements.iconName} 
                        title={elements.iconName}
                        altProperty={elements.iconAltProperty}
                        image={elements.iconImage}  />
                    )
                })
               }
                        </div>                    
            </div>
    )
}
export default TechStack;