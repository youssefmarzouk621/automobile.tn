import "./sidebar.css"
import { useEffect, useState } from 'react';


function Sidebar() {
    const [cats,setCats] = useState([]);
 
    useEffect(()=> {

        setCats([{name:"Bon"},{name:"ww"}])

    },[])
    return (
        <div className="sidebar" >
            <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
          
            
   
        
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                {cats.map(c => (
                   

                <li className="sidebarListItem">{c.name}</li>
              
                ))}
            </ul>

            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW ME</span>
            <div className="sidebarSocial">
            <a  href="mailto:aymenouerghui0@gmail.com"  >     <i className="sidebarIcon fas fa-envelope-square" ></i></a>
           <a  href="https://github.com/aymenouer">     <i className="sidebarIcon fab fa-github-square" ></i></a>
           <a  href="https://www.linkedin.com/in/aymen-ouerghi-249632146/">     <i className="sidebarIcon fab fa-linkedin" ></i></a>
           <a  href="https://aymenouer.github.io/portfolio">     <i className="sidebarIcon fab fa-pinterest-square" ></i></a>

            </div>

            </div>
        </div>
    )
}

export default Sidebar
