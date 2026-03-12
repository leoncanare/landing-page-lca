import React from "react";
import "./portfolio.css";
import IMG from "../../assets/images/portfolio/dotsGif.gif";
import IMG1 from "../../assets/images/portfolio/angularBases.png";
import IMG2 from "../../assets/images/portfolio/counter.png";
import IMG3 from "../../assets/images/portfolio/digidex.png";
import IMG4 from "../../assets/images/portfolio/personalized-components-library.PNG";

import { FaEye } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiTypescript,
  SiAngular,
} from "react-icons/si";

const dataProyects = [
  {
    id: 1,
    image: IMG4,
    title: "Personalized Components Library",
    lenguages: [
      <SiAngular color="#b42833" />,
      " ",
      <SiSass color="#cc72a5" />,
      " ",
      <SiTypescript color="#1578bc" />,
      " ",
      <SiHtml5 color="#e24e28" />,
    ],
    demo: "https://components-library-lca.netlify.app/",
  },
  {
    id: 2,
    image: IMG1,
    title: "Angular Bases",
    lenguages: [
      // {id: 1, lng: <SiAngular color="#b42833" />},
      <SiAngular color="#b42833" />,
      <SiSass color="#cc72a5" />,
      <SiTypescript color="#1578bc" />,
      <SiHtml5 color="#e24e28" />,
    ],
    github:
      "https://github.com/leoncanare/FormacionFRONT/tree/main/BOSNITFormacion-NuevoItinerario/AngularF%26ReactiveP",
    demo: "https://angularbases-lcantare.netlify.app/",
  },
  {
    id: 3,
    image: IMG2,
    title: "Counter",
    lenguages: [
      <SiJavascript color="#ffca30" />,
      <SiHtml5 color="#e24e28" />,
      <SiCss3 color="#359ace" />,
    ],
    github:
      "https://github.com/leoncanare/FormacionFRONT/tree/main/BOSNITFormacion-NuevoItinerario/LanguageFundamentals%26BestPractices/counter",
    demo: "https://counter-lcantare.netlify.app/",
  },
  {
    id: 4,
    image: IMG3,
    title: "Digi-Dex",
    lenguages: [
      <SiJavascript color="#ffca30" />,
      <SiHtml5 color="#e24e28" />,
      <SiCss3 color="#359ace" />,
    ],
    github:
      "https://github.com/leoncanare/FormacionFRONT/tree/main/BOSNITFormacion-NuevoItinerario/LanguageFundamentals%26BestPractices/search-on-type",
    demo: "https://digidex-lcantare.netlify.app/",
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {dataProyects.map(({ id, image, title, lenguages, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-btns">
                <span className="portfolio__lenguages">{lenguages}</span>
                {github ? (
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <FiGithub />
                </a>
                ) : null }
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <FaEye />
                </a>
              </div>
            </article>
          );
        })}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG} alt="soon" />
          </div>
          <h3>More soon...</h3>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
