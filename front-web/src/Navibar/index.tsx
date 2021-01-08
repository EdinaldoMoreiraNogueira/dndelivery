import './styles.css';
import { ReactComponent as Logo } from './logo.svg';
import { Link } from 'react-router-dom';

function Navibar(){
return (
    <nav  className="main-navbar">
       <Logo/>
       <Link to="/" className="logo-text">DV DELIVERY</Link>
    </nav>
)
}


export default Navibar;