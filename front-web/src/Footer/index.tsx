import {ReactComponent as YoutubeIcon } from './youtube.svg';
import {ReactComponent as InstagranIcon } from './instagram.svg';
import {ReactComponent as LinkedinIcon } from './linkedin.svg';
import './styles.css';



function Footer(){
return (
   <footer  className="main-footer">
       App desenvolvido durante o evento da semana DevSuperior
       <div  className="footer-icons">
           <a href="https://youtube.com/c/DevSuperior" target="_blank">
               <YoutubeIcon/>
           </a>
           <a href="https://linkedin.com/c/DevSuperior" target="_blank">
               <InstagranIcon/>
           </a>
           <a href="https://instagram.com/c/DevSuperior" target="_blank">
               <LinkedinIcon/>
           </a>
       </div>
   </footer>
)
}


export default Footer;