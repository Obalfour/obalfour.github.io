import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Intro } from "./components/intro";
import { Publications } from "./components/publications";
import { Projects } from "./components/projects";
import { Certificates } from "./components/certificates";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Intro data={landingPageData.Intro} />
      <Certificates data={landingPageData.Certificates} />
      <Projects data={landingPageData.Projects} />
      <Publications data={landingPageData.Publications} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
