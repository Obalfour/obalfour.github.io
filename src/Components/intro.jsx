import React from "react";

export const Intro = (props) => {
  return (
    <div id="intro">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="intro-text">
              <h3>Hello! My name is</h3>
              <h1>{props.data ? props.data.name : "loading..."}</h1>
              <h2>{props.data ? props.data.description : "loading..."}</h2>
              <p>I'm a <b className="intro-work">{props.data ? props.data.work : "loading..."}</b> from {props.data ? props.data.city : "loading..."}. {props.data ? props.data.interest : "loading..."}</p>
              <a href="https://drive.google.com/file/d/1b7JBKeBbPL6lGRKcPtpbdF7uyS_1IdA6/view" className="btn btn-intro">Download Resume <i className="fa fa-download"></i></a>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/intro-image.png" className="img-responsive" alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
