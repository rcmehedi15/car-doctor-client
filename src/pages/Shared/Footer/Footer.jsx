import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
const Footer = () => {
    return (
        <footer className="footer p-10 bg-red-200 text-base-content">
            <div>
                <img src={logo} alt="" />
                <p>NextGEN LTD.<br /><span>Copyright By Md Mehedi Hasan</span></p>     
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link to="/login" className="link link-hover">Login</Link>
                <Link to="/signup" className="link link-hover">Sign UP</Link>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            
        </footer>
        
        
    );
};

export default Footer;