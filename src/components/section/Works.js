import React from "react";
import { projects, section3Title } from "../../profile";
import Project from "../layouts/Project";
import ShowAllProjectsButton from "../layouts/ShowAllProjects";

const Works = ({ onExploreAllProjectsClick }) => {
  const [listView, setListView] = React.useState(true);
  return (
    <>
      <div data-aos="zoom-in-up" data-aos-once="true" className="third">
        <>
          <div className="pp-head-line mx-auto text-center d-flex align-items-center">
            <h1 id="Projects" className="red-line pp-head">
              {section3Title}
            </h1>
            <div>
              <button
                type="button"
                className="btn btn-outline-danger btn-sm mx-5 "
                onClick={() => setListView((prev) => !prev)}
              >
                {listView ? (
                  <i className="fas fa-grip-lines"></i>
                ) : (
                  <i className="fas fa-grip-vertical"></i>
                )}
              </button>
            </div>
          </div>
        </>
        <div className="row">
          {projects &&
            projects.map((x) => (
              <Project
                list={listView}
                key={x.id}
                id={x.id}
                url={x.url}
                name={x.name}
                skills={x.skills}
                descriptions={x.descriptions}
                deployurl={x.deployurl}
                image={x.image}
              />
            ))}
        </div>

        <ShowAllProjectsButton onClick={onExploreAllProjectsClick} />
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
