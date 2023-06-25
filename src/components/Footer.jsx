import React, { useState } from 'react';
import '../assets/css/footer1.css';
import payment from '../assets/images/payment.png';
import logofooter from '../assets/images/logo-footer.png';

const Footer = () => {

    useState = (() =>{
        /* $(document).ready(function () {
            $(".gallery_image_instagram13224991791686976859").attr("rel", "gallery").fancybox({
                prevMethod: false,
                helpers: {
                    thumbs: {
                        width: 50,
                        height: 50
                    },

                    title: {
                        type: "over"
                    }
                }
            });
        });
        function subscribe_newsletter() {
            var emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var email = $("#txtemail").val();
            var d = new Date();
            var createdate = d.getFullYear() + "-" + (
                d.getMonth() + 1
            ) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
            var status = 0;
            var dataString = "email=" + email + "&createdate=" + createdate + "&status=" + status;

            if (email != "") {
                if (! emailpattern.test(email)) {
                    $(".show-error").remove();
                    $(".send-mail").after('<div className="alert alert-danger show-error" role="alert"> <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> Invalid Email </div>');
                    return false;
                } else {
                    $.ajax({
                        url: "index.php?route=extension/module/so_newletter_custom_popup/newsletter",
                        type: "post",
                        data: dataString,
                        dataType: "json",
                        success: function (json) {
                            $(".show-error").remove();
                            if (json.error == false) {
                                $(".send-mail").after('<div className="alert alert-success show-error" role="alert"> <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> ' + json.message + "</div>");
                                setTimeout(function () {
                                    var this_close = $(".popup-close");
                                    this_close.parent().css("display", "none");
                                    this_close.parents().find(".so_newletter_custom_popup_bg").removeclassName("popup_bg");
                                }, 3000);
                            } else {
                                $(".send-mail").after('<div className="alert alert-danger show-error" role="alert"> <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> ' + json.message + "</div>");
                            }
                            var x = document.getElementsByclassNameName("signup");
                            for (i = 0; i < x.length; i ++) {
                                x[i].reset();
                            }
                        }
                    });
                    return false;
                }
            } else {
                alert("Email is required");
                $(email).focus();
                return false;
            }
        } */
    
    },[])
  return (
    <footer className="footer-container typefooter-1">
                <div className="footer-main desc-collapse showdown" id="collapse-footer">
                    <div className="so-page-builder">
                        <div className="container-fluid page-builder-ltr">
                            <div className="row row_3vy7 footer-top">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col_tt1l container ftop">
                                    <div className="px-5 row row_1olj">
                                        <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12 col_vagh col-style">
                                            <div className="module newsletter-footer1">
                                                <div className="newsletter" style={{'{width: "100%"}' : 'S{background-color: "#fff"}'}}>
                                                    <div className="title-block">
                                                        <div className="page-heading mb-2 fw-bold font-title">
                                                            Signup for Newsletter
                                                        </div>
                                                        <div className="promotext">
                                                            We’ll never share your email address with a
                                                                                                                                                                                                                  third-party.
                                                        </div>
                                                    </div>

                                                    <div className="block_content">
                                                        <form method="post" id="signup" name="signup" className="form-group form-inline signup send-mail">
                                                            <div className="form-group">
                                                                <div className="input-box">
                                                                    <input type="email" placeholder="Your email address..." value="" className="form-control" id="txtemail" name="txtemail" size="55"/>
                                                                </div>
                                                                <div className="subcribe">
                                                                    <button className="btn btn-primary btn-default font-title" type="submit" onclick="return subscribe_newsletter();" name="submit">
                                                                        Subscribe
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                   
                                                </div>

                                               
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12 col_1vgt col-style">
                                            <ul className="socials">
                                                <li className="facebook">
                                                    <a className="_blank" href="https://www.facebook.com/SmartAddons.page/" target="_blank">
                                                        <i className="fa fa-facebook"></i>
                                                        <span>Facebook</span>
                                                    </a>
                                                </li>
                                                <li className="twitter">
                                                    <a className="_blank" href="https://twitter.com/smartaddons" target="_blank">
                                                        <i className="fa fa-twitter"></i>
                                                        <span>Twitter</span>
                                                    </a>
                                                </li>
                                                <li className="google_plus">
                                                    <a className="_blank" href="https://plus.google.com/u/0/+Smartaddons/posts" target="_blank">
                                                        <i className="fa fa-google-plus"></i>
                                                        <span>Google Plus</span>
                                                    </a>
                                                </li>
                                                <li className="pinterest">
                                                    <a className="_blank" href="https://www.pinterest.com/smartaddons/" target="_blank">
                                                        <i className="fa fa-pinterest"></i>
                                                        <span>Pinterest</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" page-builder-ltr">
                            <div className="row row_560y ">
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col_i76p col-style">
                                    <div className="infos-footer">
                                        <a href="#"><img src={logofooter} alt="image"/></a>
                                        <ul>
                                            <li className="adres">
                                                San Luis potosí, centro historico, 78000 san luis
                                                                                                                                                                        potosí, SPL, Mexico
                                            </li>
                                            <li className="phone">(+0214)0 315 215 - (+0214)0 315 215</li>
                                            <li className="mail">
                                                <a href="mailto:contact@opencartworks.com">contact@opencartworks.com</a>
                                            </li>
                                            <li className="timer">Open time: 8:00AM - 6:00PM</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12 col_njm1 col-style">
                                    <div className="box-information box-footer">
                                        <div className="module clearfix">
                                            <h3 className="modtitle">Information</h3>
                                            <div className="modcontent">
                                                <ul className="menu">
                                                    <li>
                                                        <a href="index.php?route=information/information&information_id=4">About Us</a>
                                                    </li>
                                                    <li>
                                                        <a href="index.php?route=information/information&information_id=6">FAQ</a>
                                                    </li>
                                                    <li>
                                                        <a href="index.php?route=information/information&information_id=3">Warranty And Services</a>
                                                    </li>
                                                    <li>
                                                        <a href="index.php?route=information/information&information_id=7">Support 24/7 page</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Product Registration</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Product Support</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12 col_py4d col-style">
                                    <div className="box-account box-footer">
                                        <div className="module clearfix">
                                            <h3 className="modtitle">My Account</h3>
                                            <div className="modcontent">
                                                <ul className="menu">
                                                    <li>
                                                        <a href="index.php?route=product/manufacturer">Brands</a>
                                                    </li>
                                                    <li>
                                                        <a href="index.php?route=account/voucher">Gift Certificates</a>
                                                    </li>
                                                    <li>
                                                        <a href="index.php?route=affiliate/login">Affiliates</a>
                                                    </li>
                                                    <li>
                                                        <a href="index.php?route=product/special">Specials</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">FAQs</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Custom Link</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12 col_slxc col-style">
                                    <div className="box-service box-footer">
                                        <div className="module clearfix">
                                            <h3 className="modtitle">Services</h3>
                                            <div className="modcontent">
                                                <ul className="menu">
                                                    <li>
                                                        <a href="index.php?route=information/contact">Contact Us</a>
                                                    </li>
                                                    <li>
                                                        <a href="index.php?route=account/return/add">Returns</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Support</a>
                                                    </li>
                                                    <li>
                                                        <a href="index.php?route=information/sitemap">Site Map</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Customer Service</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Custom Link</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col_5rbh col-style">
                                    <div className="module box-footer so-instagram-gallery-ltr">
                                        <h4 className="modtitle">Instagram Gallery</h4>

                                        <div className="form-group"></div>

                                        <div className="modcontent">
                                            <div className="so-instagram-gallery button-type2 4" id="instagram13224991791686976859">
                                                <div
                                                    className="instagram-items-inner instagram00-5 instagram01-4 instagram02-3 instagram03-2 instagram04-1">
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group"></div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="container page-builder-ltr">
                            <div className="row row_nfrt row-style">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col_apdj col-style">
                                    <ul className="footer-links font-title">
                                        <li>
                                            <a href="#">Online Shopping</a>
                                        </li>
                                        <li>
                                            <a href="#">Promotions</a>
                                        </li>
                                        <li>
                                            <a href="?route=information/information&information_id=6">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="#">Site Map</a>
                                        </li>
                                        <li>
                                            <a href="#">Orders and Returns</a>
                                        </li>
                                        <li>
                                            <a href="?route=information/information&information_id=6">Help</a>
                                        </li>
                                        <li>
                                            <a href="?route=information/contact">Contact Us</a>
                                        </li>
                                        <li>
                                            <a href="#">Support</a>
                                        </li>
                                        <li>
                                            <a href="#">Most Populars</a>
                                        </li>
                                        <li>
                                            <a href="#">New Arrivals</a>
                                        </li>
                                        <li>
                                            <a href="#">Special Products</a>
                                        </li>
                                        <li>
                                            <a href="index.php?route=product/manufacturer">Manufacturers</a>
                                        </li>
                                        <li>
                                            <a href="#">Shipping</a>
                                        </li>
                                        <li>
                                            <a href="#">Payments</a>
                                        </li>
                                        <li>
                                            <a href="#">Returns</a>
                                        </li>
                                        <li>
                                            <a href="#">Refunds</a>
                                        </li>
                                        <li>
                                            <a href="#">Warantee</a>
                                        </li>
                                        <li>
                                            <a href="#">Promotions</a>
                                        </li>
                                        <li>
                                            <a href="?route=information/information&information_id=3">Customer Service</a>
                                        </li>
                                        <li>
                                            <a href="#">Our Stores</a>
                                        </li>
                                        <li>
                                            <a href="#">Discount</a>
                                        </li>
                                        <li>
                                            <a href="?route=checkout/checkout">Checkout</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            

                <div className="footer-bottom">
                    <div className="container">
                        <div className="col-lg-12 col-xs-12 payment-w">
                            <a href="#"><img className="lazyload" data-sizes="auto" src={payment} alt="imgpayment"/></a>
                        </div>
                    </div>
                    <div className="copyright-w">
                        <div className="container">
                            <div className="copyright">
                                eMarket © 2023 Demo Store. All Rights Reserved. Designed by
                                <a href="http://www.smartaddons.com/" target="_blank">Smartaddons.Com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    /* <section classNameName="newsletter container-fluid px-5 py-4">
        <div classNameName="row">
            <div classNameName="col-4">
                <div classNameName="d-inline-block">
                    <div classNameName="fa fa-paper-plane-o fa-3x"></div>
                </div>
                <div classNameName="d-inline-block ms-3">
                    <h5>Signup For Newsletter</h5>
                    <p classNameName="small">We'll never share your email address with a third-party</p>
                </div>
            </div>
            <div classNameName="col-5">

                <div classNameName="input-group">
                    <input type="text" classNameName="form-control" aria-label="Text input with 2 dropdown buttons" placeholder="Email address" />
                    <button classNameName="px-4 fw-bold cat-btn">
                        Subscribe
                    </button>
                </div>
            </div>
            <div classNameName="col-3 fa-lg socials">
                <a href="#">
                    <i classNameName="fa fa-facebook"></i>
                </a>
                <a href="#">
                    <i classNameName="fa fa-twitter"></i>
                </a>
                <a href="#">
                    <i classNameName="fa fa-google-plus"></i>
                </a>
                <a href="#">
                    <i classNameName="fa fa-pinterest"></i>
                </a>
            </div>
        </div> 
        
    </section> */
  );
};

export default Footer;
