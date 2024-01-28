import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

// const data = [
//   {
//     id: 1,
//     image: IMG1,
//     title: "FastPay",
//     info: "Fastpay help people to transfer money with smart way.",
//     github: "https://github.com",
//     demo: "https://github.com",
//   },
//   // {
//   //   id: 2,
//   //   image: IMG2,
//   //   title: "CryptoBase",
//   //   info: "Fastpay help people to transfer money with smart way.",
//   //   github: "https://github.com",
//   //   demo: "https://github.com",
//   // },
//   // {
//   //   id: 3,
//   //   image: IMG3,
//   //   title: "Developed Fiitness sports web",
//   //   info: "Fastpay help people to transfer money with smart way.",
//   //   github: "https://github.com",
//   //   demo: "https://github.com",
//   // },
//   // {
//   //   id: 4,
//   //   image: IMG4,
//   //   title: "SpringVale Dental Clinic",
//   //   info: "Fastpay help people to transfer money with smart way.",
//   //   github: "https://github.com",
//   //   demo: "https://github.com",
//   // },
//   // {
//   //   id: 5,
//   //   image: IMG5,
//   //   title: "University website",
//   //   info: "Fastpay help people to transfer money with smart way.",
//   //   github: "https://github.com",
//   //   demo: "https://github.com",
//   // },
//   // {
//   //   id: 6,
//   //   image: IMG6,
//   //   title: "This is my portfolio items",
//   //   info: "Fastpay help people to transfer money with smart way.",
//   //   github: "https://github.com",
//   //   demo: "https://github.com",
//   // },
// ];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="text-light">&lt; /My Recent Work &gt;</h5>
      <h2>Project</h2>
      <div className="container portfolio__container">
        <h3>
          Project: 1 Project Name: - <h2>Blood Bank management System </h2><br />
          Description: - Developed a comprehensive Blood Management System to
          gain practical experience in software development, database
          management, and project implementation. <br />
          Key Responsibilities: <br />
          * Developed a Blood Bank Management System as a major project,
          utilizing Java and MySQL. <br />
          * Designed and implemented a user-friendly console-based interface for
          administrators to manage Blood records. <br />
          * Utilized Java's core features to handle Blood bank data, such as
          adding, updating, and deleting records. <br />
          * Implemented basic authentication to secure the system and control
          access. <br />
          * Utilized MySQL for database management and data storage. <br />*
          Demonstrated understanding of database operations by handling Blood
          Bank data effectively.
          <br /> <br />


          <h2>Why would someone hire You?</h2><br /> Over the years, I have acquired relevant
        skills and experience, which I shall bring to your organization. I have
        also worked tirelessly on my communication abilities and teamwork
        skills, which I will put to use in my future career, which would be in
        your organization if I am selected for the position. I have given my
        100% effort in my past companies, and this has enabled me to recognize
        my capabilities and limitations. If I channelize them further, they will
        bring fruitful results to me and also to your esteemed organization.
        </h3> 
       <h3> </h3>
        {/* {data.map(({ id, image, title, github, demo, info }) => {
          return (
            // <
            <h6>Project: 1
            Project Name: - Blood Bank management System
            Description: - Developed a comprehensive Blood Management System to gain practical experience in software development, database management, and project implementation.
            Key Responsibilities:
            Developed a Blood Bank Management System as a major project, utilizing Java and MySQL.
            Designed and implemented a user-friendly console-based interface for administrators to manage Blood records.
            Utilized Java's core features to handle Blood bank data, such as adding, updating, and deleting records.
            Implemented basic authentication to secure the system and control access. 
            Utilized MySQL for database management and data storage. 
            Demonstrated understanding of database operations by handling Blood Bank data effectively.</h6>
          );
        })} */}
      </div>
    </section>
  );
};

export default Portfolio;
