import React from "react";
import "./experience.css";
import {
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiSass,
  SiCss3,
  SiHtml5,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiJenkins,
  SiGithub,
  SiStorybook,
  SiJasmine,
  SiCypress,
  SiNx,
  SiMicrosoftazure,
  SiFigma,
  SiTeamcity,
} from "react-icons/si";
import { FaGitAlt, FaJira } from "react-icons/fa";
import { TbApi, TbBrandVscode } from "react-icons/tb";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What I know</h5>
      <h2>My Skills</h2>
      <div className="container experience__container">
        {/* FRONTEND XP */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiAngular className="experience__details-icon" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">v.8 to v.18</small>
              </div>
            </article>
            <article className="experience__details">
              <SiNx className="experience__details-icon" />
              <div>
                <h4>Nx</h4>
                <small className="text-light">Monorepos</small>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandVscode className="experience__details-icon" />
              <div>
                <h4>Cursor / VSCode</h4>
                <small className="text-light">AI Dev</small>
              </div>
            </article>
            <article className="experience__details">
              <SiTypescript className="experience__details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiCss3 className="experience__details-icon" />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiSass className="experience__details-icon" />
              <div>
                <h4>SASS</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiBootstrap className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiReact className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <TbApi className="experience__details-icon" />
              <div>
                <h4>Micro Front-ends</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* TOOLS & INTEGRATION */}
        <div className="experience__backend">
          <h3>Tools & Integration</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaGitAlt className="experience__details-icon" />
              <div>
                <h4>Git</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiGithub className="experience__details-icon" />
              <div>
                <h4>Git/GitHub</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJenkins className="experience__details-icon" />
              <div>
                <h4>Jenkins</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiStorybook className="experience__details-icon" />
              <div>
                <h4>Storybook</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMicrosoftazure className="experience__details-icon" />
              <div>
                <h4>Azure</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaJira className="experience__details-icon" />
              <div>
                <h4>Jira</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiFigma className="experience__details-icon" />
              <div>
                <h4>Figma</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiTeamcity className="experience__details-icon" />
              <div>
                <h4>TeamCity</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJasmine className="experience__details-icon" />
              <div>
                <h4>Jasmine</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiCypress className="experience__details-icon" />
              <div>
                <h4>Cypress</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <TbApi className="experience__details-icon" />
              <div>
                <h4>API RESTful</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
