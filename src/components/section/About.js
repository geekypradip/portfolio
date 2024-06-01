import React from "react";
import { ProfilePhotoPng } from "../../asset/";
import { about, section2title, skillsBar, social } from "../../profile";
import Skills from "../layouts/Skills";
const About = () => {
  return (
    <div id="about" className="effect2">
      <div data-aos="zoom-in-up" data-aos-once="true" className="row">
        <div
          className="col-12 d-none d-md-block offset-md-1 col-md-4 Photo"
          id="not-dark2"
          style={{ backgroundImage: `url(${ProfilePhotoPng})` }}
        ></div>
        <div className="col-12 offset-md-1 col-md-6 about">
          <div className="About-title-box">
            <h1 id="About" className="red-line">
              {section2title}{" "}
              {social.resume && (
                <a title="Download Resume" href={social.resume} download>
                  <i className="fas fa-download"></i>
                </a>
              )}
            </h1>
          </div>
          <p className="lead about-text">{about.paragraph}</p>
        </div>
      </div>
      <div id="Skills">
        <div className="row d-flex justify-content-center skills">
          {skillsBar.map((x) => (
            <Skills
              key={x.name}
              faClass={x.faClass}
              svg={x.svg}
              element={x.element}
              label={x.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
