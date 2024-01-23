import { Link } from "react-router-dom";
import Facebook from "../Icons/Facebook";
import Twitter from "../Icons/Twitter";
import Dribbble from "../Icons/Dribbble";
import LinkedIn from "../Icons/LinkedIn";
const Footer = () => {
    return ( 
        <>
<div class="footer5">
<footer class="site-footer">
<div class="container">
<div class="row">
<div class="col-sm-12 col-md-6">
<h6 class="text-justify" >About</h6>
<p class="text-justify">At Legal Assistant Services, we are committed to providing expert legal assistance to meet your needs. Our team of experienced professionals is dedicated to delivering high-quality services and ensuring client satisfaction.

With a focus on legal consultation, document drafting, contract review, and legal research, we strive to assist individuals and businesses in navigating the complexities of the legal landscape.</p>
</div>
<div class="col-6 col-md-3">
<h6>Categories</h6>
<ul class="footer-links ">
<Link to="./laws"><li>Faqs</li></Link>
<Link to="./solving"><li>Case Solving</li></Link>


</ul>
</div>
<div class="col-6 col-md-3">
<h6>Quick Links</h6>
<ul class="footer-links">
<Link to="./about"><li>About Us</li></Link>
<Link to="./cont"><li>Contact Us</li></Link>
<Link to="./serv"><li>Services</li></Link>
<Link to="./api"><li>Legal Assistant</li></Link>
<Link to="./login"><li>Login</li></Link>

{/* <li><a href="/about">About Us</a></li>
<li><a href="/contact">Contact Us</a></li>
<li><a href="/services">Services</a></li>
<li><a href="/chatbot">Legal Assistant</a></li> */}
{/* <li><a href="#">Privacy Policy</a></li> */}

</ul>
</div>
</div>
<hr class="small"></hr>
</div>
<div class="container">
<div class="row">
<div class="col-md-8 col-sm-6 col-12">
<p class="copyright-text">Copyright © 2023 All Rights Reserved by
<Link to="/"><span class="logo">NYAAYSAHAYAK</span></Link>
</p>
</div>
<div class="col-md-4 col-sm-6 col-12">
<ul class="social-icons">
<li><Link class="facebook" to="https://www.facebook.com/"> <Facebook/> <i class="fab fa-facebook-f"></i></Link></li>
<li><Link class="twitter" to="https://twitter.com/i/flow/login"> <Twitter/> <i class="fab fa-twitter"></i></Link></li>
<li><Link class="dribbble" to="https://dribbble.com/session/new" > <Dribbble/> <i class="fab fa-dribbble"></i></Link></li>
<li><Link class="linkedin" to="https://www.linkedin.com/login"> <LinkedIn/> <i class="fab fa-linkedin-in"></i></Link></li>
</ul>

</div>
</div>
</div>
</footer>
</div>
        
        
        
        </>

     );
}
 
export default Footer;