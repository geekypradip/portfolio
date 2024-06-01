import React, { Children } from "react";

const Project = ({
  id,
  name,
  url,
  skills,
  descriptions,
  github,
  deploy,
  deployurl,
  image,
}) => {
  return (
    <div data-aos="fade-up" className=" col-12 col-lg-12 project-card">
      <div className="image-project">
        <div
          className={`img-pro ${id}`}
          style={{ backgroundImage: `url(${image})`, cursor: "none" }}
        ></div>
      </div>
      <div className="project_details_holder">
        <div className="project_name_holder">
          <a
            title={url}
            className="project-name"
            rel="noopener noreferrer"
            target="_blank"
            href={url}
          >
            <h2>{name}</h2>
          </a>
        </div>
        <div className="project_decs_holder">
          {descriptions && <h4>{descriptions}</h4>}
          {skills && <h3>{Children.toArray(skills.map((skill) => skill))}</h3>}
          <div className="deploy">
            {url && (
              <a href={url} target="_blank" rel="noreferrer">
                <i className={github} />
                <label className="linkText">Source code</label>
              </a>
            )}
            {deployurl && (
              <a href={deployurl} target="_blank" rel="noreferrer">
                <i className={deploy} />
                <label className="linkText">Live demo</label>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
