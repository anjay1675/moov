import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const Cargo=()=>{
    return(
    <div>
        <div class="caa">
        <div className="bar">
        <div class="bar1">
        <div class="bar2"><i class="fas fa-phone-alt"></i><h6 class="num">+234 (0) 894820401</h6></div>
        <div class="bar3"><i class="far fa-envelope"></i><h6 class="enq">Contact Us</h6></div>
        </div>
        </div>
    <div className="car">
        <nav class="navbar  navbar-expand-lg navbar-dark scrolling-navbar">
            <img className="logo" src="./images/w1.png" width="180px" height="80px"/>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item">
        <Link class="nav-link" to='/'>Home</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to='/cargo'>Cargo Delivery</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to='/rent'>Rent a Van</Link>
        </li>
        <li class="nav-item">
        <a class="nav-link" href='https://moovafrica.com/shop2me/'>Shop2me</a>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to='/deals'>Deals</Link>
        </li>         
        <li class="nav-item">
        <Link class="nav-link" to='/hail'>Hail a Repair</Link>
        </li>
        <li class="nav-item">
        <a class="nav-link" href='https://moovafrica.com/news/'>Logistics News</a>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to='/track'>Track</Link>
        </li>
        <li class="nav-item">
        <a class="nav-link" href='https://moovafrica.com/delivery/pages/login'>Login/Sign Up</a>
        </li>
        <div className="vl"></div>
        <Link id="ser" to='/search'><i class="fas fa-search"></i></Link>
        </ul>
    </div>
        </nav>
            <img class="imgxx" src="./images/cargo1.jpg"
                 alt="moov africa image"
            />
        </div>
        <div class="nic">
            <div class="nic1">
                <img id="truc" 
                     src="./images/truck26.jpg"
                     width="240px"
                />
                <h4 id="mat">Same Day! Next Day! When?</h4>
                <h2 id="tak">Taking you forward</h2>
                <h5 id="tak2">We guarantee your important parcels and cargo get the desired Express Service</h5>
            </div>
            <div class="nic2">
                <div class="nic3">
                <i class="fas fa-truck-moving"></i>
                </div>
                <div class="nic4">
                    <h4 id="whaa">What do you want delivered</h4>
                    <h5>Different Categories</h5>
                    <h6 id="whaa1">Small/Medium Cargo</h6>
                    <h6 id="whaa1">Small/Big Parcels</h6>
                    <h6 id="whaa1">Bulk Cargo</h6>
                    <h6 id="whaa1">Haulage</h6>
                    <h6 id="whaa1">Home/Office Paking removal</h6>
                </div>
                <div class="nic5">
                <div class="nic6"><i class="fas fa-box-open"></i></div>
                <div class="nic7"><h4 class="what1">What are your options</h4></div>
            </div>
                
            </div>
            
            
        </div>     
    </div>
    </div>       
            
    )
}
export default Cargo