import React from "react";

import "./header.styles.scss";

const Header = () => {
  return (
    <section className="header">
      <h3 className="title">
        Westenberg <br /> <span>.portfolio</span>
      </h3>
      <div className="btn">
        <a href="https://wa.me/0683175119">Contact</a>
        <i className="fa fa-whatsapp"></i>
      </div>
    </section>
  );
};

export default Header;
