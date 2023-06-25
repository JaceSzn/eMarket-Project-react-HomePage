import React, { useEffect } from "react";

import enGbFlag from "../assets/images/language/en-gb/en-gb.png";
import slider2 from "../assets/images/slider-2-950x450.jpg";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/banner4.jpg";
import banner7 from "../assets/images/banner7.jpg";
import image1 from '../assets/images/10-130x130.webp';
import image2 from '../assets/images/6-130x130.webp';
import image3 from '../assets/images/20-100x100.webp';
import image4 from '../assets/images/6-80x80.webp';
import image5 from '../assets/images/18-270x270.webp';


const HomePage = () => {
  return (
    <>
      <div className="row ">
            <div className="col-2 main-sidebar small">
                <div className="card">
                    <nav className="nav shadow flex-column">
                        <a className="nav-link" href="#"><i className="fa fa-gift"></i> Gifts & Toys</a>
                        <a className="nav-link" href="#"><i className="fa fa-plug"></i> Electronics</a>
                        <a className="nav-link" href="#"><i className="fa fa-diamond"></i> Fashion & Accessories</a>
                        <a className="nav-link" href="#"><i className="fa fa-shopping-bag"></i> Bags & Shoes</a>
                        <a className="nav-link" href="#"><i className="fa fa-video-camera"></i> Optimum Electronics</a>
                        <a className="nav-link" href="#"><i className="fa fa-bath"></i> Bathroom</a>
                        <a className="nav-link" href="#"><i className="fa fa-heartbeat"></i> Health & Beauty</a>
                        <a className="nav-link" href="#"><i className="fa fa-dot-circle-o"></i> Home & Light</a>
                        <a className="nav-link" href="#"><i className="fa fa-gift"></i> Metallurgy</a>
                        <a className="nav-link" href="#"><i className="fa fa-bed"></i> Bedroom</a>
                        <a className="nav-link" href="#"><i className="fa fa-cogs"></i> Industrial Parts</a>
                        <a className="nav-link" href="#"><i className="fa fa-chevron-down"></i> More Categories</a>
                    </nav>
                </div>
            </div>
            <div className="col-10 ps-5 main-content">
                <div className="row">
                    <div className="col-9">
                        <a href="#"><img src={slider2} alt="Slide 1" /></a>
                    </div>
                    <div className="col-3">
                        <a href="#"><img src={banner1} alt="Side Image 1" className="d-block mb-5" /></a>
                        <a href="#"><img src={banner2} alt="Side Image 2" className="d-block" /></a>
                    </div>
                </div>
                <div className="shadow mt-5">
                    <a href="#"><img src={banner3} alt="banner3" /></a>
                </div>
               
            </div>

            <div className="mt-3 container  row flex ">
                <div className="col-2">
                    <nav className="shadow flex">
                       <a href="#"><img src={banner4} className="banner4" alt="banner4" /></a>
                    </nav>
                    
                </div>
                <section className="col section-p1" id="feature">
                    <div className="fe-box">
                        <img src={image1} alt="feature" />
                        <h6>Balltip nullaeit</h6>
                    </div>
                    <div className="fe-box">
                        <img src={image2} alt="feature" />
                        <h6>Wamboudin Ribeye</h6>
                    </div>
                    <div className="fe-box">
                        <img src={image3} alt="feature" />
                        <h6>Hroscuiutto Kevincap</h6>
                    </div>
                    <div className="fe-box">
                        <img src={image4} alt="feature" />
                        <h6>Cenison Meatloa</h6>
                    </div>
                    <div className="fe-box">
                        <img src={image5} alt="feature" />
                        <h6>Proident Laborum</h6>
                    </div>
                </section>
                <section className="row section-p1" id="feature">
                    <div className="fe-box">
                        <img src={image1} alt="feature" />
                        <h6>Balltip nullaeit</h6>
                    </div>
                    <div className="fe-box">
                        <img src={image2} alt="feature" />
                        <h6>Wamboudin Ribeye</h6>
                    </div>
                    <div className="fe-box">
                        <img src={image3} alt="feature" />
                        <h6>Hroscuiutto Kevincap</h6>
                    </div>
                    <div className="fe-box">
                        <img src={image4} alt="feature" />
                        <h6>Cenison Meatloa</h6>
                    </div>
                    <div className="fe-box">
                        <img src={image5} alt="feature" />
                        <h6>Proident Laborum</h6>
                    </div>
                </section>
                
            </div>
       
        </div> 
        <section className="row">
            <div className="banner7 col-sm">
                <a href="#"><img src={banner7} alt="banner7" className="img-fluid" /></a>
            </div>
            <div className="banner7 col-sm">
                <a href="#"><img src={banner7} alt="banner7" className="img-fluid" /></a>
            </div>
            <div className="banner7 col-sm">
                <a href="#"><img src={banner7} alt="banner7" className="img-fluid" /></a>
            </div>
        </section>
    </>
  );
};

export default HomePage;
