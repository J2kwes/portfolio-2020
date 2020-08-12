import React, { Component } from "react";
import Slider from "react-slick";
import NextArrow from "../NextArrow/next-arrow.component";
import PrevArrow from "../PrevArrow/prev-arrow.component";
import { ReactComponent as Shape } from "./Path1.svg";

import "./about.styles.scss";

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideIndex: 1,
    };
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 200,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

    const { slideIndex } = this.state;

    return (
      <section className="about">
        <div className="card">
          <h4 className="card-title">Over mij</h4>
          <Slider {...settings}>
            <div className="slide">
              <p className="card-text">
                Naam: Joey Westenberg <br />
                Leeftijd: 19
              </p>
              <h4 className="card-title">Mijn skills</h4>
              <div className="icon-grid"></div>
            </div>

            <div className="slide">
              <p className="card-text">
                My name is Joey Westenberg <br /> I studied media development
                <br />
                at Mediacollege Amsterdam <br /> where i grduated with <br />
                honours in 2020... <br /> My focus as a developer goes <br />{" "}
                out to front-end. I'm looking
                <br />
                for new challenges
                <br />
                so i can improve my skills <br />
                (React, Vanilla JS, CSS/SCSS)
              </p>
            </div>

            <div className="slide">
              <p className="card-text">
                My name is test Westenberg <br /> I studied media development{" "}
                <br />
                at Mediacollege Amsterdam <br /> where i grduated with <br />{" "}
                honours in 2020...
              </p>
            </div>
          </Slider>
          <div className="slider-index">
            <p>{slideIndex}/3</p>
          </div>
        </div>
        <Shape />
        <img className="me" src={require("./me.png")} />
      </section>
    );
  }
}
