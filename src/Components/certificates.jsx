import React from "react";

export const Certificates = (props) => {
  return (
    <div id="certificates" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title aos-init aos-animate" data-aos="fade-right" data-aos-duration={500}>
          <h2>Certificates</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (   
                <div key={`${d.title}-${i}`} className="col-md-6 credential">
                    {" "}
                    <div className="col-md-3">
                        <img src={d.image} className="img-responsive" alt={d.title} />
                    </div>
                    <div className="col-md-9">
                        <h4>{d.title}</h4>
                        <h5>{d.organization}</h5>
                        <a href={d.link} className="btn">Show certificate</a>
                    </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
