import React from "react";
import "./services.css";
import BOS from "../../assets/images/logos/bosonit-letters-logo.png";
import AEG from "../../assets/images/logos/aegon-logo.png";
import UNIR from "../../assets/images/logos/unir-logo.png";
import { FaDotCircle, FaJira } from "react-icons/fa";
import {
  SiAngular,
  SiTypescript,
  SiSass,
  SiStorybook,
  SiMicrosoftazure,
  SiNx,
  SiJest,
} from "react-icons/si";

const Services = () => {
  return (
    <section id="services">
      <h5>Work Timeline</h5>
      <h2>Experience</h2>
      <div className="container services__container">
        {/* UNIR - Current */}
        <article className="service">
          <div className="service__head">
            <div className="service__head-logo">
              <img src={UNIR} alt="UNIR logo" />
            </div>
            <div className="service__head-text">
              <h3>[ UNIR - Architecture Department ] Frontend Developer</h3>
              <h5><b>Currently working</b></h5>
            </div>
          </div>
          <ul className="service__list">
            <div className="service__list-description">
              <h3>AI-powered tools for the university's teaching department. PACO: VSCode extension for AI-assisted code generation connected to component documentation.</h3>
            </div>
            <li>
              <FaDotCircle className="service__list-icon" />
              <p>AI tools generating content for teaching department.</p>
            </li>
            <li>
              <FaDotCircle className="service__list-icon" />
              <p>PACO: VSCode extension - AI code generator with component docs integration.</p>
            </li>
            <li>
              <FaDotCircle className="service__list-icon" />
              <p>Monorepo architecture with Nx and Angular 18/20.</p>
            </li>
          </ul>
          <h3 className="service__inside-title">Outstanding skills:</h3>
          <ul className="service__apatitude-list">
            <li className="service__apatitude">
              <SiAngular className="service__aptittude-icon" />
              Angular 18/20
            </li>
            <li className="service__apatitude">
              <SiNx className="service__aptittude-icon" />
              Nx
            </li>
            <li className="service__apatitude">
              <SiTypescript className="service__aptittude-icon" />
              TypeScript
            </li>
            <li className="service__apatitude">
              <SiStorybook className="service__aptittude-icon" />
              Storybook
            </li>
            <li className="service__apatitude">
              <SiJest className="service__aptittude-icon" />
              Jest
            </li>
            <li className="service__apatitude">
              <FaJira className="service__aptittude-icon" />
              Jira
            </li>
            <li className="service__apatitude">
              <SiMicrosoftazure className="service__aptittude-icon" />
              Azure
            </li>
          </ul>
        </article>
        {/* BOSONIT - MICAELA */}
        <article className="service">
        <div className="service__head">
            <div className="service__head-logo">
              <img className="bosonit-logo" src={BOS} alt="logo" />
            </div>
            <div className="service__head-text">
              <h3>[ MICAELA - Gob España (SGD) ] Frontend Developer</h3>
              <h5><b>Jul. 2022 - Sept. 2024</b></h5>
            </div>
          </div>
          <ul className="service__list">
          <div className="service__list-description">
            <h3>Development of the public website of the MICAELA project, a scientific and energy platform for the Spanish Government.</h3>
          </div>
            <li>
              <FaDotCircle className="service__list-icon" />
              <p>Development of a project from scratch in ANGULAR v17</p>
            </li>
            <li>
              <FaDotCircle className="service__list-icon" />
              <p>Development and maintenance of microfrontends.</p>
            </li>
            <li>
              <FaDotCircle className="service__list-icon" />
              <p>Development of component library with STORYBOOK.</p>
            </li>
          </ul>
          <h3 className="service__inside-title">Outstanding skills:</h3>
          <ul className="service__apatitude-list">
            <li className="service__apatitude">
              <SiAngular className="service__aptittude-icon" />
              Angular v17
            </li>
            <li className="service__apatitude">
              <SiTypescript className="service__aptittude-icon" />
              TypeScript
            </li>
            <li className="service__apatitude">
              <SiStorybook className="service__aptittude-icon" />
              Storybook
            </li>
          </ul>
        </article>
        {/* AEGON */}
        <article className="service">
          <div className="service__head">
            <div className="service__head-logo">
              <img src={AEG} alt="logo" />
            </div>
            <div className="service__head-text">
              <h3>[ AEGON - Private Area (Insurance) ] Frontend Developer</h3>
              <h5><b>Nov. 2022 - Jan. 2024</b></h5>
            </div>
          </div>
          <ul className="service__list">
          <div className="service__list-description">
            <h3>Web application for the customer area of Aegon Spain insurance and management of a customized component library.</h3>
          </div>
            <li>
              <FaDotCircle className="service__list-icon" />
              <p>Development and maintenance of the web in ANGULAR v8 and v17.</p>
            </li>
            <li>
              <FaDotCircle className="service__list-icon" />
              <p>Development and maintenance of web microfrontends.</p>
            </li>
            <li>
              <FaDotCircle className="service__list-icon" />
              <p>Development of component library with STORYBOOK.</p>
            </li>
          </ul>
          <h3 className="service__inside-title">Outstanding skills:</h3>
          <ul className="service__apatitude-list">
            <li className="service__apatitude">
              <SiAngular className="service__aptittude-icon" />
              Angular v8 / v17
            </li>
            <li className="service__apatitude">
              <SiTypescript className="service__aptittude-icon" />
              TypeScript
            </li>
            <li className="service__apatitude">
              <SiStorybook  className="service__aptittude-icon" />
              Storybook
            </li>
            <li className="service__apatitude">
              <SiSass className="service__aptittude-icon" />
              Sass
            </li>
            <li className="service__apatitude">
              <FaJira className="service__aptittude-icon" />
              Jira
            </li>
          </ul>
        </article>
        {/* STAFF-IT */}
        <article className="service">
        <div className="service__head">
            <div className="service__head-logo">
              <img className="bosonit-logo" src={BOS} alt="logo" />
            </div>
            <div className="service__head-text">
              <h3>[ Staff-IT - Internal Project (ERP) ] Frontend Developer</h3>
              <h5><b>Mar. 2022 - Oct. 2022</b></h5>
            </div>
          </div>
          <ul className="service__list">
          <div className="service__list-description">
            <h3>Staff-IT (Internal project) Web application/product for the management of the company's own employees and clients.</h3>
          </div>
            <li>
              <FaDotCircle className="service__list-icon" />
              <p>Development of new functionalities and maintenance in ANGULAR v12.</p>
            </li>
            <li>
              <FaDotCircle className="service__list-icon" />
              <p>Integration between web application modules.</p>
            </li>
            <li>
              <FaDotCircle className="service__list-icon" />
              <p>Code maintenance focused on ANGULAR hexagonal architecture.</p>
            </li>
          </ul>
          <h3 className="service__inside-title">Outstanding skills:</h3>
          <ul className="service__apatitude-list">
            <li className="service__apatitude">
              <SiAngular className="service__aptittude-icon" />
              Angular v12
            </li>
            <li className="service__apatitude">
              <SiTypescript className="service__aptittude-icon" />
              TypeScript
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
