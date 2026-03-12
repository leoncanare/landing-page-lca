import React from "react";
// import CV from "../../assets/docs/cv-leon_cantalapiedra_arellano-2024-es.pdf";
import "./headerbtns.css";

import { GiTalk } from "react-icons/gi";
// import { HiDocumentDownload } from "react-icons/hi";

const headBtns = () => {
  return (
    <div className="header__buttons">
      {/* <a href={CV} download className="btn1">
        C.Vitae
        <HiDocumentDownload className="icon-btn" />
      </a> */}
      <a href="#contact" className="btn1">
        Let's talk!
        <GiTalk className="icon-btn" />
      </a>
    </div>
  );
};

export default headBtns;
