import React from "react";
import { projects, section3Title } from "../../profile";
import Project from "../layouts/Project";

const Works = () => {
  return (
    <>
      <div data-aos="zoom-in-up" data-aos-once="true" className="third">
        <>
          <div className="pp-head-line mx-auto text-center">
            <h1 id="Projects" className="red-line pp-head">
              {section3Title}
            </h1>
          </div>
        </>
        <div className="row">
          {projects &&
            projects.map((x) => (
              <Project
                key={x.id}
                id={x.id}
                url={x.url}
                name={x.name}
                skills={x.skills}
                descriptions={x.descriptions}
                github={x.github}
                deploy={x.deploy}
                deployurl={x.deployurl}
                image={x.image}
              />
            ))}
        </div>
      </div>

      {/* <div className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{section4Title}</h1>
                    </div>
                </>
                <div className="row">
                    {miscellaneous && miscellaneous.map((x) =>
                    <Project key={x.id} id={x.id} url={x.url} name={x.name} />
                    )}
                </div>
            </div> */}
    </>
  );
};

export default Works;
