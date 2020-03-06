import React from 'react'
import {Carousel} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'


   const Menu =()=>{
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
                <li class="nav-item ">
                <Link class="nav-link" to='/'>Home</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link " to='/cargo'>Cargo Delivery</Link>
                </li>
                <li class="nav-item ">
                <Link class="nav-link" to='/rent'>Rent a Van</Link>
                </li>
                <li class="nav-item ">
                <a class="nav-link" href='https://moovafrica.com/shop2me/'>Shop2me</a>
                </li>
                <li class="nav-item ">
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
    <Carousel className="ccc">
      <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/moovvx2.jpg"
      alt="moov africa"
    />
    <div className="container">
      <span className="text1">Welcome to Moov Africa</span>
      <span classnName="text2">Experience the difference</span>
    </div>
    <Carousel.Caption>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/imgx44.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <button className="but text-center"  type="type" style={{backgroundColor:"black",
    marginBottom:"60px",color:"white", height:"40px", width:"140px",border:"none", 
    outline:"none", borderRadius:"5px"}} >Shop2me</button>
    <div className="qq">
      <h1 id="one">The most reliable express Delivery</h1>
      <h1 id="sho">of Parcels and Cargo service providers</h1>
      <h1 id="me">'Worldwide'</h1>
    </div>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/cargo1.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
    <button className="but text-center"  type="type" style={{backgroundColor:"white",
    marginBottom:"300px",color:"black", height:"40px", width:"140px",border:"none", 
    outline:"none", borderRadius:"5px"}} >Shop2me</button>
    </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    <div className="on fixed-top"><h1 id="tra1">TRACKING</h1>
    </div>
    <div className="track fixed-top"><a href="https://seanjohn.com/" 
    id="tra2">Track<i class="fas fa-long-arrow-alt-right"></i></a>
    </div>
    </div>
    <div className="reg fixed-top">
    <div className="fa1"><i class="fa fa-angle-up"></i>
    </div>
    <div className="fa2"><a href="https://moovafrica.com/delivery/pages/login" id="reg1">Sign Up</a>
    </div>
    </div>
    <div className="we">
        <div className="we1">
        <div className="mo">More Than Renting A Van</div>
       <div className="text">We provide superior service experience to our Customers 
           through fast express delivery service of parcels and cargo, anywhere in
            Nigeria and Africa when you use Moov Africa
        </div>
        </div>
       <div className="truck">
           <img
            src="./images/moov-project.jpg"
            alt="Moov Africa Image"
            width="380px"
            height="220px;"
           />
       </div>
    </div>
    <button type="button" className="butx"><h6 id="rent">Rent a Van</h6></button>
    <div className="bod">
            <Row>
                <Col>
                <div className="el1"><img
                    className="el2" 
                    src="./images/imgx2.jpeg"
                    alt="moov africa image"
                /></div><div className="giv">Giving You The Best</div><h6 id="pro">We provide superior service experience to our Customers 
                through fast express delivery service of parcels and cargo, anywhere in
                 Nigeria and Africa when you use Moov Africa</h6><button type="button" className="but1"><h6 id="rent">Transport</h6></button>
    
                </Col>
                <Col>
                <div className="el1"><img
                    className="el2" 
                    src="./images/e-com.jpg"
                    alt="moov africa image"
                /></div><div className="giv">Quality Services</div><h6 id="pro">We provide superior service experience to our Customers 
                through fast express delivery service of parcels and cargo, anywhere in
                 Nigeria and Africa when you use Moov Africa</h6><button type="button" className="but1"><h6 id="rent">E-commerce</h6></button>
                </Col>
                <Col>
                <div className="el1"><img
                    className="el2" 
                    src="./images/crop2.jpg"
                    alt="moov africa image"
                /></div><div className="giv">Guess What?</div><h6 id="pro">We provide superior service experience to our Customers 
                through fast express delivery service of parcels and cargo, anywhere in
                 Nigeria and Africa when you use Moov Africa</h6><button type="button" className="but1"><h6 id="rent">Cargo Delivery</h6></button>
                </Col>
            </Row>
            </div>
            <div className="img">
                <img src="./images/e-com7.png" class="img2"/>
                <img src="./images/cargo.jpg" class="img1"/>
            </div>
            <div className="sat1">
                <div className="more">
                    <div className="more1">More</div>
                    <div className="more2">About Us</div>
                </div>
                <Row>
                    <Col></Col>
                <Col>
                <img
                src="./images/woman.jpg"
                width="240px"
                height="180px"
                />
                </Col>
                <Col>
                <img
                src="./images/ship.jpeg"
                width="240px"
                height="180px"
                />
                </Col>
                <Col>
                <img
                src="./images/hail3.jpeg"
                width="240px"
                height="180px"
                />
                </Col>
                <Col>
                <img
                src="./images/connect.jpg"
                width="240px"
                height="180px"
                />
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                <div class="more3">
                    <div class="more4"><h4 id="topic">Smart Services</h4></div>
                    <div class="more5">We would always beat your imagination, and even more. 
                        Our staff are always very courteous and would always attend to your 
                        needs in due time.We would always beat your imagination, and even more. </div>
                </div>
                </Col>
                <Col>
                <div class="more3">
                <div class="more4"><h4 id="topic">Global Biz</h4></div>
                    <div class="more5">We would always beat your imagination, and even more. 
                        Our staff are always very courteous and would always attend to your 
                        needs in due time.We would always beat your imagination, and even more. </div>
                </div>
                </Col>
                <Col>
                <div class="more3">
                <div class="more4"><h4 id="topic">Hail A Repair</h4></div>
                    <div class="more5">We would always beat your imagination, and even more. 
                        Our staff are always very courteous and would always attend to your
                         needs in due time.We would always beat your imagination, and even more. </div>
                </div>
                </Col>
                <Col>
                <div class="more3">
                <div class="more4"><h4 id="topic">Deals</h4></div>
                    <div class="more5">We would always beat your imagination, and even more. 
                        Our staff are always very courteous and would always attend to your 
                        needs in due time.We would always beat your imagination, and even more. </div>
                </div>
                </Col>
                <Col></Col>
            </Row>
            </div>   
            <div className="foot" fluid={true} style={{backgroundColor:'black', height:'400px',}} variant='dark'>
                <Row>
                    <Col>
                    <h6 id="las1">About</h6>
                    </Col>
                    <Col>
                    <h6 id="las2">Store</h6>
                    </Col>
                    <Col>
                    <h6 id="las3">Get in touch</h6>
                    </Col>
                    <Col>
                    <h6 id="las4">Social 
                      <a href="https://web.facebook.com/moov.nigeria?_rdc=1&_rdr" ><i className="fab fa-facebook-f"></i></a> 
                      <a href="https://twitter.com/moovnigeria"><i className="fab fa-twitter"></i></a>
                        <i className="fab fa-instagram"></i>
                       <a href="https://www.linkedin.com/company/moovafrica/"><i className="fab fa-linkedin-in"></i></a>
                    </h6>
                    </Col>   
                </Row>
                <Row>
                    <Col>
                    <h6 id="ll">An independent Courier, Haulage n Logistics</h6>
                    </Col>
                    <Col>
                    <h6 id="l1">23 Albert Road</h6>
                    </Col>
                    <Col>
                    <h6 id="l2">Mon-Sat: 9:30am-6pm/Sun 11am-4pm</h6>
                    </Col>
                    <Col>
                    <Link to='/register'><button className="bttn" type="submit" style={{ width:"180px", height:"43px", borderRadius:"4px",outline:"none"}}>
                        <h6 className="news" >Sign Up</h6></button></Link>
                    </Col>   
                </Row>
                <Row>
                    <Col>
                    <h6 id="lo"> Company with amazing services and Packages,</h6>
                    </Col>
                    <Col>
                    <h6 id="l12">Southsea</h6>
                    </Col>
                    <Col>
                    <h6 id="l21">+44(0)2392426388</h6>
                    </Col>
                    <Col>
                    
                    </Col>   
                </Row>
                <Row>
                    <Col>
                    <h6 id="lo">which include Shop2me and Hail a Repair</h6>
                    </Col>
                    <Col>
                    <h6 id="l12">P05 2SE</h6>
                    </Col>
                    <Col>
                    <h6 id="l21">shop@bored.southsea.co.uk</h6>
                    </Col>
                    <Col>
                    </Col>   
                </Row>
                <Row id="row">
                    <Col>
                    <h6 id="pac"><a href=""/>About</h6>
                    </Col>
                    <Col>
                    <h6 id="pac1">Delivery & Returns</h6>
                    </Col>
                    <Col>
                    <h6 id="pac2">Contact</h6>
                    </Col>
                    <Col>
                    <h6 id="pac3">Terms and Condition</h6>
                    </Col>
                    <Col>
                    <h6 id="pac4">Privacy</h6>
                    </Col>
                    <Col>
                    <h6 id="pac5">Cookies</h6>
                    </Col>
                    <Col id="cc"></Col>
                    <Col id="cc"></Col>
                    <Col id="cc"></Col>
                    <Col id="cc"></Col>
                    <Col id="cc"></Col>
                    
                </Row>


            </div>
    </div>        
    )
}
export default Menu