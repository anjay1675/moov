import React from 'react'
import {Link} from 'react-router-dom'


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
                <Link class="nav-link" to='/get'>Get a Repair</Link>
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
    <div class="deal">
        {/* <img src="./images/dealsx8.jpg"
             alt="moov africa image"
             width="100%"
        /> */}


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