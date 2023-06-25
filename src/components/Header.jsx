import React, { useEffect } from "react";
import $ from "jquery";
import "../assets/css/header1.css";
import "../assets/css/so_megamenu.css";
import Logo from '../assets/images/logo.png';
import Arab from '../assets/images/ar-ar.png';
import Newicon from '../assets/images/new-icon.png';
import Hoticon from '../assets/images/hot-icon.png';



import enGbFlag from "../assets/images/language/en-gb/en-gb.png";

const Header = () => {
  useEffect(() => {
    document.title = "eMarket - Homepage";

    $(document).ready(function () {
      $('a[href="https://opencart.smartaddons.com/themes/so_emarket/"]').each(
        function () {
          $(this).parents(".with-sub-menu").addClass("sub-active");
        }
      );
    });
    $(document).ready(function () {
      var itemver = 13;
      if (itemver <= $(".vertical ul.megamenu >li").length)
        $(".vertical ul.megamenu").append(
          '<li class="loadmore"><i class="fa fa-plus-square"></i><span class="more-view"> More Categories</span></li>'
        );

      $(".horizontal ul.megamenu li.loadmore").remove();

      var show_itemver = itemver - 1;
      $("ul.megamenu > li.item-vertical").each(function (i) {
        if (i > show_itemver) {
          $(this).css("display", "none");
        }
      });
      $(".megamenu .loadmore").click(function () {
        if ($(this).hasClass("open")) {
          $("ul.megamenu li.item-vertical").each(function (i) {
            if (i > show_itemver) {
              $(this).slideUp(200);
              $(this).css("display", "none");
            }
          });
          $(this).removeClass("open");
          $(".loadmore").html(
            '<i class="fa fa-plus-square"></i><span class="more-view">More Categories</span>'
          );
        } else {
          $("ul.megamenu li.item-vertical").each(function (i) {
            if (i > show_itemver) {
              $(this).slideDown(200);
            }
          });
          $(this).addClass("open");
          $(".loadmore").html(
            '<i class="fa fa-minus-square"></i><span class="more-view">Close Categories</span>'
          );
        }
      });
    });

    $(document).ready(function () {
      $('a[href="https://opencart.smartaddons.com/themes/so_emarket/"]').each(
        function () {
          $(this).parents(".with-sub-menu").addClass("sub-active");
        }
      );
    });
    
  }, []);
  return (
    <header id="header" className="variant typeheader-1">
      <div className="header-top hidden-compact">
        <div className="container">
          <div className="row">
            <div className="header-top-left col-lg-7 col-md-8 col-sm-6 col-xs-4">
              <div className="hidden-sm hidden-xs welcome-msg">
                <b>Welcome to Emarket !</b>
                Wrap new offers / gift every single day on Weekends – New Coupon
                code: Happy2017
              </div>
              <ul className="top-link list-inline hidden-lg hidden-md">
                <li className="account" id="my_account">
                  <a
                    href="https://opencart.smartaddons.com/themes/so_emarket/index.php?route=account/account"
                    title="My Account "
                    className="btn-xs acct dropdown-toggle"
                    data-toggle="dropdown">
                    <span className="hidden-xs">My Account </span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://opencart.smartaddons.com/themes/so_emarket/index.php?route=account/wishlist"
                        title="Wish List (0)">
                        Wish List (0)
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://opencart.smartaddons.com/themes/so_emarket/index.php?route=product/compare"
                        title="Compare">
                        Compare
                      </a>
                    </li>

                    <li>
                      <a
                        className="dropdown-item"
                        href="https://opencart.smartaddons.com/themes/so_emarket/index.php?route=account/register">
                        Register
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://opencart.smartaddons.com/themes/so_emarket/index.php?route=account/login">
                        Login
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="header-top-right collapsed-block col-lg-5 col-md-4 col-sm-6 col-xs-8">
              <ul className="top-link list-inline lang-curr">
                <li className="currency">
                  <div className="pull-left">
                    <form
                      action="https://opencart.smartaddons.com/themes/so_emarket/index.php?route=common/currency/currency"
                      method="post"
                      enctype="multipart/form-data"
                      id="form-currency">
                      <div className="btn-group">
                        <button
                          className="btn-link dropdown-toggle"
                          data-toggle="dropdown">
                          $ US Dollar &nbsp;
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <button
                              className="currency-select btn-block"
                              type="button"
                              name="EUR">
                              € Euro
                            </button>
                          </li>
                          <li>
                            <button
                              className="currency-select btn-block"
                              type="button"
                              name="GBP">
                              £ Pound Sterling
                            </button>
                          </li>
                          <li>
                            <button
                              className="currency-select btn-block"
                              type="button"
                              name="USD">
                              $ US Dollar
                            </button>
                          </li>
                        </ul>
                      </div>
                      <input type="hidden" name="code" value="" />
                      <input
                        type="hidden"
                        name="redirect"
                        value="https://opencart.smartaddons.com/themes/so_emarket/index.php?route=common/home"
                      />
                    </form>
                  </div>
                </li>
                <li className="language">
                  <div className="pull-left">
                    <form
                      action="https://opencart.smartaddons.com/themes/so_emarket/index.php?route=common/language/language"
                      method="post"
                      enctype="multipart/form-data"
                      id="form-language">
                      <div className="btn-group">
                        <button
                          className="btn-link dropdown-toggle"
                          data-toggle="dropdown">
                          <img
                            className="lazyload"
                            data-sizes="auto"
                            src={enGbFlag}
                            alt="English"
                            title="English"
                          />
                          <span className="hidden-xs hidden-sm hidden-md">
                            English
                          </span>
                        </button>

                        <ul className="dropdown-menu">
                          <li>
                            <button
                              className="btn-block language-select"
                              type="button"
                              name="ar-ar">
                              <img
                                className="lazyload"
                                data-sizes="auto"
                                src={Arab}
                                alt="Arabic"
                                title="Arabic"
                              />
                              Arabic
                            </button>
                          </li>
                          <li>
                            <button
                              className="btn-block language-select"
                              type="button"
                              name="en-gb">
                              <img
                                className="lazyload"
                                data-sizes="auto"
                                src={enGbFlag}
                                alt="English"
                                title="English"
                              />
                              English
                            </button>
                          </li>
                        </ul>
                      </div>
                      <input type="hidden" name="code" value="" />
                      <input
                        type="hidden"
                        name="redirect"
                        value="https://opencart.smartaddons.com/themes/so_emarket/index.php?route=common/home"
                      />
                    </form>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header-middle hidden-compact">
        <div className="container">
          <div className="row">
            <div className="navbar-logo col-lg-2 col-md-2 col-sm-12 col-xs-12">
              <div className="logo">
                <a href="/">
                    <img
                    src={Logo}
                    alt="MarketPlace"
                    className="logo"
                    />
                </a>
              </div>
            </div>

            <div className="main-menu col-lg-6 col-md-7">
              <div className="responsive megamenu-style-dev">
                <nav className="navbar-default">
                  <div className="container-megamenu horizontal">
                    
                    <div className="megamenu-wrapper">
                      <span id="remove-megamenu" className="fa fa-times"></span>

                      <div className="megamenu-pattern">
                        <div className="container">
                          <ul
                            className="megamenu"
                            data-transition="slide"
                            data-animationtime="500">
                            <li className="menu-layouts with-sub-menu hover nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <strong> Home </strong>
                              </a>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown">
                                <div
                                  className="sub-menu content"
                                  style={{ width: "720px" }}>
                                  <div className="row">
                                    <div className="col-sm-12">
                                      <div className="html item-layouts">
                                        <div className="row">
                                          <div className="col-lg-3 col-md-3">
                                            <ul>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/">
                                                  Home Layout 1
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout2/">
                                                  Home Layout 2
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout3/">
                                                  Home Layout 3
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout4/">
                                                  Home Layout 4
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout5/">
                                                  Home Layout 5
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout6/">
                                                  Home Layout 6
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout7/">
                                                  Home Layout 7
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout8/">
                                                  Home Layout 8
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout9/">
                                                  Home Layout 9
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-lg-3 col-md-3">
                                            <ul>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/">
                                                  Home Layout 10
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout2/">
                                                  Home Layout 11
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout3/">
                                                  Home Layout 12
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout4/">
                                                  Home Layout 13
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout5/">
                                                  Home Layout 14
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout6/">
                                                  Home Layout 15
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout7/">
                                                  Home Layout 16
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout8/">
                                                  Home Layout 17
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout9/">
                                                  Home Layout 18
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-lg-3 col-md-3">
                                            <ul>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/">
                                                  Home Layout 19
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout2/">
                                                  Home Layout 20
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout3/">
                                                  Home Layout 21
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout4/">
                                                  Home Layout 22
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout5/">
                                                  Home Layout 23
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout6/">
                                                  Home Layout 24
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout7/">
                                                  Home Layout 25
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout8/">
                                                  Home Layout 26
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout9/">
                                                  Home Layout 27
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-lg-3 col-md-3">
                                            <ul>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/">
                                                  Home Layout 28
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout2/">
                                                  Home Layout 29
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout3/">
                                                  Home Layout 30
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout4/">
                                                  Home Layout 31
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout5/">
                                                  Home Layout 32
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout6/">
                                                  Home Layout 33
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout7/">
                                                  Home Layout 34
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout8/">
                                                  Home Layout 35
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout9/">
                                                  Home Layout 9
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="index.php?lang=ar-ar">
                                                  Home Layout RTL
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </ul>
                            </li>
                            <li className="menu-layouts with-sub-menu hover nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <strong> Pages </strong>
                              </a>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown">
                                <div
                                  className="sub-menu content"
                                  style={{ width: "720px" }}>
                                  <div className="row">
                                    <div className="col-sm-12">
                                      <div className="html item-layouts">
                                        <div className="row">
                                          <div className="col-lg-3 col-md-3">
                                            <ul className="shoppage list-inline row">
                                              <li>
                                                <a
                                                  className="dropdown-item title-shoppage"
                                                  href="#">
                                                  Listing Page
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout2/">
                                                  Ajax shop
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout3/">
                                                  Sidebar Left
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout4/">
                                                  Sidebar Right
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout5/">
                                                  Without Sidebar
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout6/">
                                                  Category Features
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout7/">
                                                  Refine Search More
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout8/">
                                                  Thumb Gallery
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout9/">
                                                  Grid/List type
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout9/">
                                                  Quickview
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout9/">
                                                  Countdown of special offer
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout9/">
                                                  Color Swatches
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-lg-3 col-md-3">
                                            <ul className="shoppage list-inline row">
                                              <li>
                                                <a
                                                  className="dropdown-item title-shoppage"
                                                  href="#">
                                                  DETAIL PAGE
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout2/">
                                                  Sidebar Left
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout3/">
                                                  Sidebar Right
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout4/">
                                                  Without Sidebar
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout5/">
                                                  Gallery Bottom
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout6/">
                                                  Gallery Left
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout7/">
                                                  Gallery Grid
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout8/">
                                                  Gallery Slider
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout9/">
                                                  Countdown of special offer
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout9/">
                                                  Custom Tabs
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout9/">
                                                  Shiping Tabs
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout9/">
                                                  Videos
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-lg-3 col-md-3">
                                            <ul className="shoppage list-inline row">
                                              <li>
                                                <a
                                                  className="dropdown-item title-shoppage"
                                                  href="#">
                                                  Other Pages
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout2/">
                                                  About Us
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout3/">
                                                  Services
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout4/">
                                                  FAQs
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout5/">
                                                  Contact Us
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout6/">
                                                  Support 24/7 page
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout7/">
                                                  Typography
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout8/">
                                                  Photo Gallery
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout9/">
                                                  Site Map
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="https://opencart.smartaddons.com/themes/so_emarket/layout9/">
                                                  Page 404
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-md-6 col-lg-3 col-md-3">
                                            <ul className="shoppage list-inline row">
                                              <li>
                                                <a
                                                  className="dropdown-item title-shoppage"
                                                  href="index.php?route=information/information&amp;information_id=8"></a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="index.php?route=extension/custom/bestseller">
                                                  Coming Soon
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="index.php?route=extension/custom/newarrivals">
                                                  New Arrivals
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="index.php?route=extension/custom/mostrate">
                                                  Most Rated
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="index.php?route=extension/custom/featured">
                                                  Trending Items
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  className="dropdown-item"
                                                  href="index.php?route=extension/custom/featured">
                                                  Best seller
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </ul>
                            </li>
                            <li className="blog-item nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <strong>
                                  <img
                                    className="lazyload"
                                    data-sizes="auto"
                                    src={Hoticon}
                                    alt="hot-icon"
                                  />
                                  Blog
                                </strong>
                              </a>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown">
                                <div
                                  className="sub-menu content"
                                  style={{ width: "720px" }}>
                                  <div className="row">
                                    <div className="col-sm-12">
                                      <div className="html item-layouts">
                                        <div className="row">
                                          <div className="col-md-2 col-sm-12">
                                            <ul className="shoppage list-inline row">
                                              <li>
                                                <a
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  <img
                                                    src="image/catalog/menu/feature/blog-col1.png"
                                                    alt="layout"
                                                  />
                                                  <span>BLOG 1 COLUMN</span>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-md-2 col-sm-12">
                                            <ul className="shoppage list-inline row">
                                              <li>
                                                <a
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  <img
                                                    src="image/catalog/menu/feature/blog-col1.png"
                                                    alt="layout"
                                                  />
                                                  <span>BLOG 2 COLUMN</span>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-md-2 col-sm-12">
                                            <ul className="shoppage list-inline row">
                                              <li>
                                                <a
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  <img
                                                    src="image/catalog/menu/feature/blog-col1.png"
                                                    alt="layout"
                                                  />
                                                  <span>BLOG 3 COLUMN</span>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-md-2 col-sm-12">
                                            <ul className="shoppage list-inline row">
                                              <li>
                                                <a
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  <img
                                                    src="image/catalog/menu/feature/blog-col1.png"
                                                    alt="layout"
                                                  />
                                                  <span>BLOG 4 COLUMN</span>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-md-2 col-sm-12">
                                            <ul className="shoppage list-inline row">
                                              <li>
                                                <a
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  <img
                                                    src="image/catalog/menu/feature/blog-col1.png"
                                                    alt="layout"
                                                  />
                                                  <span>BLOG LIST COLUMN</span>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="clearfix"></div>
                                          <div className="col-md-2 col-sm-12">
                                            <ul className="shoppage list-inline row">
                                              <li>
                                                <a
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  <img
                                                    src="image/catalog/menu/feature/blog-col1.png"
                                                    alt="layout"
                                                  />
                                                  <span>DEFAULT</span>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-md-2 col-sm-12">
                                            <ul className="shoppage list-inline row">
                                              <li>
                                                <a
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  <img
                                                    src="image/catalog/menu/feature/blog-col1.png"
                                                    alt="layout"
                                                  />
                                                  <span>PAGE DETAILS 1</span>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-md-2 col-sm-12">
                                            <ul className="shoppage list-inline row">
                                              <li>
                                                <a
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  <img
                                                    src="image/catalog/menu/feature/blog-col1.png"
                                                    alt="layout"
                                                  />
                                                  <span>PAGE DETAILS 2</span>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-md-2 col-sm-12">
                                            <ul className="shoppage list-inline row">
                                              <li>
                                                <a
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  <img
                                                    src="image/catalog/menu/feature/blog-col1.png"
                                                    alt="layout"
                                                  />
                                                  <span>PAGE DETAILS 3</span>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-md-2 col-sm-12">
                                            <ul className="shoppage list-inline row">
                                              <li>
                                                <a
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  <img
                                                    src="image/catalog/menu/feature/blog-col1.png"
                                                    alt="layout"
                                                  />
                                                  <span>PAGE DETAILS 4</span>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-md-2 col-sm-12">
                                            <ul className="shoppage list-inline row">
                                              <li>
                                                <a
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  <img
                                                    src="image/catalog/menu/feature/blog-col1.png"
                                                    alt="layout"
                                                  />
                                                  <span>PAGE DETAILS 5</span>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </ul>
                            </li>
                            <li className="item-style2 with-sub-menu nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <strong>Shop</strong>
                              </a>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown">
                                <div
                                  className="sub-menu content"
                                  style={{ width: "700px" }}>
                                  <div className="row">
                                    <div className="col-sm-12">
                                      <div className="html categories">
                                        <div className="row">
                                          <div className="col-sm-3 static-menu">
                                            <ul className="shoppage list-inline row">
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item title-shoppage">
                                                  smartphone
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Apple
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Dell
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Esdipiscing
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Scanners
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Toshiba
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Sony
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-sm-3 static-menu">
                                            <ul className="shoppage list-inline row">
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item title-shoppage">
                                                  electronics
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Asdipiscing
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Web Cameras
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Diam sit
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Labore et
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Monitors
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Scanners
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-sm-3 static-menu">
                                            <ul className="shoppage list-inline row">
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item title-shoppage">
                                                  towels <br /> cloud
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Sofa & chairs
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Furniture & Decors
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Sound & Life
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Qunge genga
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Lamp & Lighting
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Lamp & Lighting
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-sm-3 static-menu">
                                            <ul className="shoppage list-inline row">
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item title-shoppage">
                                                  Collections
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Smartphone
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Fashion
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Appliances
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Fashion
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Furniture & Decor
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Furniture & Decor
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="border"></div>
                                <div className="row">
                                  <div className="col-sm-12">
                                    <div className="html item-banner">
                                      <div className="img-banner-w row">
                                        <div className="col-sm-3 static-menu img-banner">
                                          <ul className="shoppage list-inline row">
                                            <li>
                                              <a href="#">
                                                <img
                                                  src="image/catalog/menu/megabanner/image-5.jpg"
                                                  alt="banner"
                                                />
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="col-sm-3 static-menu img-banner">
                                          <ul className="shoppage list-inline row">
                                            <li>
                                              <a href="#">
                                                <img
                                                  src="image/catalog/menu/megabanner/image-5.jpg"
                                                  alt="banner"
                                                />
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </ul>
                            </li>
                            <li className="item-style2 with-sub-menu nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <strong>
                                  <img
                                    className="lazyload"
                                    data-sizes="auto"
                                    src={Newicon}
                                    alt="new-icon"
                                  />
                                  Collections
                                </strong>
                              </a>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown">
                                <div
                                  className="sub-menu content"
                                  style={{ width: "700px" }}>
                                  <div className="row">
                                    <div className="col-sm-12">
                                      <div className="html categories">
                                        <div className="row">
                                          <div className="col-sm-3 static-menu">
                                            <ul className="shoppage list-inline row">
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item title-shoppage">
                                                  towels cloud
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Apple
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Dell
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Esdipiscing
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Scanners
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Toshiba
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Sony
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-sm-3 static-menu">
                                            <ul className="shoppage list-inline row">
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item title-shoppage">
                                                  furniture
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Asdipiscing
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Web Cameras
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Diam sit
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Labore et
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Monitors
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Scanners
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-sm-3 static-menu">
                                            <ul className="shoppage list-inline row">
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item title-shoppage">
                                                  smartphone
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Sofa & chairs
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Furniture & Decors
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Sound & Life
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Qunge genga
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Lamp & Lighting
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Lamp & Lighting
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-sm-3 static-menu">
                                            <ul className="shoppage list-inline row">
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item title-shoppage">
                                                  Collections
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Smartphone
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Fashion
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Appliances
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Fashion
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Furniture & Decor
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Furniture & Decor
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </ul>
                            </li>
                            <li className="item-style2 with-sub-menu nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <strong> Marketplace </strong>
                              </a>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown">
                                <div
                                  className="sub-menu content"
                                  style={{ width: "700px" }}>
                                  <div className="row">
                                    <div className="col-sm-12">
                                      <div className="html categories">
                                        <div className="row">
                                          <div className="col-sm-3 static-menu">
                                            <ul className="shoppage list-inline row">
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item ">
                                                  Marketplace from Webkul
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  onclick="window.location"
                                                  href="index.php?route=extension/simple_blog/article&amp;simple_blog_category_id=1&amp;blogview=blog-grid"
                                                  className="dropdown-item">
                                                  Marketplace from Purpletree
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <div className="middle-right col-lg-4 col-md-3 col-sm-6 col-xs-8">
              <div className="signin-w font-title hidden-sm hidden-xs">
                <ul className="signin-link">
                  <li className="log login me-1">
                    <i className="fa fa-lock"></i>
                    <a
                      className="link-lg me-1"
                      href="/login">
                      Login
                    </a>
                    or
                    <a href="/register" className="ms-1">
                      Register
                    </a>
                  </li>

                  <li className="ms-1">
                    <a href="#">
                      <i className="fa fa-phone-square"></i>Hotline (+123)4 567
                      890
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-4 px-5 pb-4">
        <div className="col-2-5">
            <button className="header-btn">
            <i className="fa fa-bars"></i>
            <div className="d-inline-block px-3">ALL CATEGORIES</div>
            <i className="fa fa-angle-down"></i>
            </button>
        </div>
        <div className="col-5-5 cat">
            <div className="input-group">
            <button
                className="cat-btn btn-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                All Category
            </button>
            <ul className="dropdown-menu">
                <li>
                <a className="dropdown-item" href="#">
                    Action before
                </a>
                </li>
                <li>
                <a className="dropdown-item" href="#">
                    Another action before
                </a>
                </li>
                <li>
                <a className="dropdown-item" href="#">
                    Something else here
                </a>
                </li>
                <li>
                <hr className="dropdown-divider" />
                </li>
                <li>
                <a className="dropdown-item" href="#">
                    Separated link
                </a>
                </li>
            </ul>
            <input
                type="text"
                className="form-control sear"
                aria-label="Text input with 2 dropdown buttons"
                placeholder="Search"
            />
            <button className="px-5 header-btn">
                <i className="fa fa-search"></i>
            </button>
            </div>
        </div>
        <div className="col-4 text-end">
            <div className="d-inline-block mx-4">
            <i className="fa fa-refresh fa-2x"></i>
            </div>
            <div className="d-inline-block mx-4">
            <i className="fa fa-heart fa-2x"></i>
            </div>
            <div className="d-inline-block mx-4 position-relative shopping-bag">
            <i className="fa fa-shopping-bag fa-lg"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-white text-dark">
                0
            </span>
            </div>
            <div className="d-inline-block fw-bold">MY CART - $0.00</div>
        </div>
        </div>
    
    </header>
  );
};

export default Header;