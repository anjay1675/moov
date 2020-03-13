import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'



const Deals =()=>{
    return(
        
        <div>
            <div className="bar">
            <div class="bar1">
                <div class="bar2"><i class="fas fa-phone-alt"></i><h6 class="num">+234 (0) 894820401</h6></div>
                <div class="bar3"><i class="far fa-envelope"></i><h6 class="enq">Contact Us</h6></div>
                </div>
            </div>
        <div className="car">
        <Navbar collapseOnSelect expand="sm">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">    
                <img className="logo" src="./images/w1.png" width="180px" height="80px"/>
            <Nav className="mr-auto">    
                <Link class="nav-link" to='/'>Home</Link>
                <Link class="nav-link" to='/cargo'>Cargo Delivery</Link>
                <Link class="nav-link" to='/rent'>Rent a Van</Link>
                <a class="nav-link" href='https://moovafrica.com/shop2me/'>Shop2me</a>
                <Link class="nav-link" to='/deals'>Deals</Link>
                <Link class="nav-link" to='/get'>Get a Repair</Link>
                <a class="nav-link" href='https://moovafrica.com/news/'>Logistics News</a>
                <Link class="nav-link" to='/track'>Track</Link>
                <a class="nav-link" href='https://moovafrica.com/delivery/pages/login'>Login/Sign Up</a>
                <div className="vl"></div>
                <Link id="ser" to='/search'><i class="fas fa-search"></i></Link>
            </Nav>  
        </Navbar.Collapse>
    </Navbar>
    <div class="deal">
        <img src="./images/img51.jpg"
             alt="moov africa image"
             width="100%"
        />


        <div class="deal1">
            <h2 id="our">Our Deals</h2>
        </div>
        <div class="deal2">
            <h2 class="wha">What we offer</h2>
            <h6 class="whaa">We would always beat your imagination, and even more. 
                Our staff are always very courteous and would always attend to your 
                needs in due time.We would always beat your imagination, and even more.We would always 
                beat your imagination, and even more. 
                Our staff are always very courteous and would always attend to your </h6>
            {/* <div class="deal3">
            <h6 class="wou text-light">We would always beat your imagination, and even more. 
                Our staff are always very courteous and would always attend to your 
                needs in due time.We would always beat your imagination, and even more.We would always 
                beat your imagination, and even more. 
                Our staff are always very courteous and would always attend to your 
                needs in due time.We would always beat your imagination, and even more.We would
                always beat your imagination, and even more. 
                Our staff are always very courteous and would always attend to your 
                needs in due time.We would always beat your imagination, and even more.We would
                always beat your imagination, and even more. 
                Our staff are always veryc courteous and would always attend to your 
                needs in due time.We would always beat your imagination, and even more .</h6>
            </div>
             */}
        </div>
        
    </div>
    
        
    </div> 
    <div class="bodd">
            <h4>WE-A-WONDERFUL-DAY-TO-HAVE-OUR-PATNERS-FROM-CHINA</h4>
            <h4>WHAT-A WONDERFUL DAY TO HAVE OUR PATNERS FROM CHINA</h4>
    </div>     
    </div>

    )
}
export default Deals