import React, { Children } from "react";
import { projectDepolyBar } from "../../profile";

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
  list,
}) => {
  return (
    <div
      data-aos={list ? "fade-up" : ""}
      data-aos-once="true"
      className={`col-12 col-lg-${list ? 12 : 5} project-card`}
    >
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
          {skills && (
            <h3
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {Children.toArray(skills?.fa?.map((skill) => skill))}

              {Children.toArray(
                skills?.svg?.map((skill) => (
                  <span
                    style={{
                      marginLeft: "10px",
                      display: "flex",
                    }}
                  >
                    <skill.ele
                      width={"30px"}
                      height={"25px"}
                      color={skill.color}
                      intractable={false}
                    />
                  </span>
                ))
              )}
            </h3>
          )}
          <div className="deploy">
            {url && (
              <a href={url} target="_blank" rel="noreferrer">
                <i className={projectDepolyBar.github} />
                <label className="linkText">Source code</label>
              </a>
            )}
            {deployurl && (
              <a href={deployurl} target="_blank" rel="noreferrer">
                <i className={projectDepolyBar.deploy} />
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
