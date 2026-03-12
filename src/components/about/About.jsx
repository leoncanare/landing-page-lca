import React from "react";
import "./about.css";
import ME from "../../assets/images/profile/me-about.png";
import { FaUserGraduate, FaUniversity } from "react-icons/fa";
// import { MdGrade } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me-about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaUserGraduate className="about__icon" />
              <h5>Studies</h5>
              <small>Cross-platform application development</small>
            </article>
            <article className="about__card">
              <FaUniversity className="about__icon" />
              <h5>University</h5>
              <small>Universitat Oberta de Catalunya</small>
            </article>
            {/* <article className="about__card">
              <MdGrade className="about__icon" />
              <h5>Nivel</h5>
              <small>Junior</small>
            </article> */}
          </div>
          <div className="text">
            <p>
            Hello, my name is León, I am a Frontend developer specialized in Angular, 
            I am passionate about creating efficient and attractive user interfaces, 
            focusing on performance optimization and providing an intuitive, 
            functional and agile user experience.
            <br/><br/>
            I consider myself a creative and proactive person, 
            always with a constant focus on expanding and updating my skills as a developer 
            and committed to a job well done. 
            I enjoy working in a team and facing new challenges that allow me to grow professionally.
            <br/><br/>
            I am eager to contribute my experience, learn with my colleagues and be able to apply my 
            creativity to the projects that come my way.
          </p>
          </div>
          
          {/* <a href="#contact" className="btn btn-primary">
            ¡Hablemos!
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
