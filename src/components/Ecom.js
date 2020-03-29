import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'


const Ecom=()=>{
    return(
        <div class="bodyy">
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
                <Link class="nav-link" to='/hail1'>Hail a Repair</Link>
                <a class="nav-link" href='https://moovafrica.com/news/'>Logistics News</a>
                <Link class="nav-link" to='/track'>Track</Link>
                <a class="nav-link" href='https://moovafrica.com/delivery/pages/login'>Login/Sign Up</a>
                <div className="vl"></div>
                <Link id="ser" to='/search'><i class="fas fa-search"></i></Link>
            </Nav>  
        </Navbar.Collapse>
    </Navbar>
        </div>
        <div class="ecom"><img src="./images/ecomm2.jpg" alt="" width="100%" height="650px"/></div>
        <div class="has-max-width text-center"><h1 class="head align-center color-gulfstream ember font-bold">"Welcome to the world of E-commerce"</h1></div>
        </div>
    )
}
export default Ecom