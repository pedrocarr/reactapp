import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <a href="https://www.linkedin.com/in/pedro-car/"
        className="Linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/pedrocarr"
        className="Github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

    </div>
  );
}