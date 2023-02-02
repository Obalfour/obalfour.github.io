import React from "react";

export const Projects = (props) => {
  return (
    <div id="projects" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title aos-init aos-animate" data-aos="fade-right" data-aos-duration={500}>
          <h2>Data visualization</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (   
                <div key={`${d.title}-${i}`} className="col-md-4 project">
                    {" "}
                    <a href={d.link}>
                    <div className="card-with-shadow">
                        <img src={d.image} className="img-responsive" alt={d.title} />
                        <h4>{d.title}</h4>
                    </div>
                    </a>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};