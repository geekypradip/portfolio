import React from 'react'

const Project = ({id, name, url, skills,descriptions,github,deploy,deployurl}) => {
    return (
        <div data-aos="fade-up" className=" col-12 col-lg-12 project-card">
            <div className="image-project">
                <div className={`img-pro ${id}`}></div>
            </div>
            <div className="project_details_holder">
                <div className="project_name_holder">

                    <a title={url} className="project-name" rel="noopener noreferrer" target="_blank" href={url}><h2>{name}</h2></a>
                { skills && <h3>{skills.map(skill => skill)}</h3> }
    
                </div>
                <div className="project_decs_holder">
                   {descriptions && <h4>{descriptions}</h4>}
                   <div className="deploy">
                   <a href={url} target="_blank"> 
                   <i className={github}/>
                   <div className="linkText">Github</div>
                   </a>
                   <a href={deployurl} target="_blank"> <i className={deploy}/>
                   <div className="linkText">web site</div>
                   </a>
                   </div>
                </div>
            </div>
            
        </div>
    )
}

export default Project
