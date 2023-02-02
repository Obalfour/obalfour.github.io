import React from "react";

export const Contact = (props) => {
  return (
    <div>
      <div id="contact" className="text-center">
      <div className="container">
        <div className="col-md-12">
          <h2><span>GET IN TOUCH</span></h2>
          </div></div>
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.email : "/"}>
                      <i className="fa fa-envelope"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.medium : "/"}>
                      <i className="fa fa-medium"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.github : "/"}>
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.linkedin : "/"}>
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
