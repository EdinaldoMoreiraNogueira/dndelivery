import './styles.css';
import { ReactComponent as Logo } from './logo.svg';

function Navibar(){
return (
    <nav  className="main-navbar">
       <Logo/>
       <a href="home" className="logo-text">DV DELIVERY</a>
    </nav>
)
}


export default Navibar;