import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#a" className="footer__logo">
        Akash Patil
      </a>
      <ul className="permalinks">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Technical Skill</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Interest </a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/akash-patil-409833269"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/rohitjadhav45">
          <AiOutlineGithub />
        </a>
        <a href="https://twitter.com">
          <BsTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Designed By Akash Patil</small>
      </div>
      <h2 >Conclusion</h2>
      <h3>
      conclusion, I bring a unique blend of skills and qualities that make me a
      valuable asset to any team or organization. My proficiency in front-end
      development is complemented by a genuine passion for creating visually
      appealing and user-friendly interfaces. Simultaneously, my expertise in
      Salesforce adds a layer of versatility, allowing me to contribute to
      projects that demand a comprehensive understanding of CRM solutions. What
      sets me apart is not only my technical proficiency but also my commitment
      to continuous learning. I thrive on challenges and have a proven track
      record of solving problems and delivering results. My adaptability to
      evolving technologies and my collaborative nature make me well-suited for
      dynamic work environments where innovation and teamwork are valued. I am
      not just seeking a job; I am eager to bring my skills, enthusiasm, and
      dedication to contribute meaningfully to a team that values both
      individual growth and collective success.
      </h3>
    </footer>
  );
};

export default Footer;
