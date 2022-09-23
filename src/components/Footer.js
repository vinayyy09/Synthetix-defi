import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col-1">
          <h1><span className="blue">Synthetix</span></h1>
          <p>All Rights Reserved 2022.</p>
        </div>

        <div className="col">
          <h4>
            <span className="blue">Marketplace</span>
          </h4>
          <p>All NFTs</p>
          <p>Art</p>
          <p>Collectibles</p>
          <p>Virtual Worlds</p>
        </div>

        <div className="col">
          <h4>
            <span className="blue">My Account</span>
          </h4>
          <p>Profile</p>
          <p>Favorites</p>
          <p>Watchlist</p>
          <p>My Collections</p>
        </div>

        <div className="col">
          <h4>
            <span className="blue">Resources</span>
          </h4>
          <p>Help Center</p>
          <p>Platform Status</p>
          <p>Blog</p>
          <p>Newsletter</p>
        </div>

        <div className="col">
          <h4>
            <span className="blue">Company</span>
          </h4>
          <p>About</p>
          <p>Careers</p>
          <p>Ventures</p>
          <p>Grants</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
