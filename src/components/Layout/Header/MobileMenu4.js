
"use client";
import React from "react";
import { Link } from "react-router-dom";
import OnepageMenuItemsThree from "./OnepageMenuItemsThree";
import MobileLogo from "../../../assets/images/resources/logo-1.png";

const MobileMenu4 = ({
  isSidebar,
  handleMobileMenu,
  handleSidebar,
  ...props
}) => {
  const {
    item1 = "Home",
    item2 = "Services",
    item3 = "Event",
    item4 = "Team",
    item5 = "Pricing",
    item6 = "Blog",
  } = props;

  return (
    <>
      {/* Mobile Menu */}
      <div className="mobile-nav__wrapper">
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={handleMobileMenu}
        />
        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={handleMobileMenu}
          >
            <i className="fa fa-times" />
          </span>
          <div className="logo-box">
            <Link to="/" aria-label="Logo">
              <img src={MobileLogo} alt="Logo" />
            </Link>
          </div>
          <div className="mobile-nav__container">
            <ul className="main-menu__list">
              <OnepageMenuItemsThree
                  menuItem1={item1 ? item1 : 'Home'}
                  menuItem2={item2 ? item2 : 'Services'}
                  menuItem3={item3 ? item3 : 'Event'}
                  menuItem4={item4 ? item4 : 'Team'}
                  menuItem5={item5 ? item5 : 'Pricing'}
                  menuItem6={item6 ? item6 : 'Blog'}
              />
            </ul>
          </div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope" />
              <a href="mailto:needhelp@eventflow.com">needhelp@eventflow.com</a>
            </li>
            <li>
              <i className="fa fa-phone-alt" />
              <a href="tel:666-888-0000">666 888 0000</a>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <Link to="#" className="fab fa-twitter" aria-label="Twitter" />
              <Link to="#" className="fab fa-facebook-square" aria-label="Facebook" />
              <Link to="#" className="fab fa-pinterest-p" aria-label="Pinterest" />
              <Link to="#" className="fab fa-instagram" aria-label="Instagram" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="nav-overlay"
        style={{ display: isSidebar ? "block" : "none" }}
        onClick={handleSidebar}
      />
    </>
  );
};

export default MobileMenu4;
