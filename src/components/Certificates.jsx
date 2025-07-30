import React, { useEffect, useState } from "react";
import styles from "./Styles/certificate.module.css";
import CountUp from "./UI/CountUp";
import Skills from "./UI/skillscertificates";
import Resume from "./UI/certificatecv";

function Certificates() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const certifications = [
    {
      title: "ServiceNow Certified System Administrator",
      provider: "ServiceNow",
      date: "June 2025",
      description:
        "Validates foundational knowledge of ServiceNow platform capabilities, administration, and configuration.",
      tags: [
        "ServiceNow",
        "System Administration",
        "ITSM",
        "Platform Fundamentals",
        "Flow Designer"
      ],
      credentialId: "SN-CSA-27213327",
      link: "https://www.credly.com/badges/c4e65311-d123-4bb2-a330-eb65e81e0433/public_url",
      image: "/assets/certificates/csa.png",
    },

    {
      title: "ServiceNow Certified Application Developer",
      provider: "ServiceNow",
      date: "July 2025",
      description:
         "Validates skills in building, customizing, and managing applications on the ServiceNow platform. Covers UI design, business logic, and lifecycle management.",
      tags: [
        
        "Application Development",
        "Custom Applications",
        "Platform Scripting",
        "UI Design",
      ],
      credentialId: "SN-CAD-27319619",
      link: "https://www.credly.com/badges/ae79a5e2-b373-455a-978a-a2f1cf3dd065/public_url", // Replace with actual URL
      image: "/assets/certificates/cad.png",
    },
    {
  title: "Java (Basic) Certificate",
  provider: "HackerRank",
  date: "Aug 2024",
  description:
    "Demonstrates understanding of Java fundamentals including data types, loops, conditionals, and object-oriented concepts.",
  tags: [
    "Java",
    "Programming",
    "OOP",
    "HackerRank",
    "Java Basics"
  ],
  credentialId: "HR-JAVA-164D4D2D85D4", // Replace with actual ID if available
  link: "https://www.hackerrank.com/certificates/164d4d2d85d4", // Replace with your actual certificate link
  image: "/assets/certificates/java.png"
},

    {
  title: "Python Essentials 1",
  provider: "Cisco Networking Academy",
  date: "Jan 2025",
  description:
    "Introduces the basics of Python programming including variables, data types, control structures, functions, and error handling.",
  tags: [
    "Python",
    "Cisco Networking Academy",
    "Programming",
    "Python Essentials",
    "Foundations"
  ],
  credentialId: "#NA", // Replace with actual ID if available
  link: "https://www.credly.com/badges/3b0ed34a-e92a-4f0e-8750-080be3c24fc6", // Replace with your actual certificate link
  image: "/assets/certificates/python.png"
},


{
  title: "Introduction to Cybersecurity",
  provider: "Cisco Networking Academy",
  date: "Jan 2025",
  description:
    "Covers the fundamentals of cybersecurity, including types of threats, attack vectors, and the importance of cybersecurity in the digital world.",
  tags: [
    "Cybersecurity",
    "Cisco Networking Academy",
    "Information Security",
    "Network Security",
    "Security Awareness"
  ],
  credentialId: "CNA-CYBER-47582910", // Replace with actual ID if available
  link: "https://www.credly.com/badges/2c47ebf6-29f6-4d6a-8bfa-f8e5e7019452", // Replace with your actual certificate link
  image: "/assets/certificates/cyber.png"
},


    {
  title: "HTML Certificate",
  provider: "SoloLearn",
  date: "March 2024",
  description:
    "Covers foundational concepts of HTML including structure, elements, forms, and semantic tags. Demonstrates ability to build basic web page layouts.",
  tags: [
    "HTML",
    "Web Development",
    "Frontend",
    "SoloLearn",
    "Markup Language"
  ],
  credentialId: " CC-EITUYME0", // Replace with your actual ID if any
  link: "https://www.sololearn.com/certificates/CC-EITUYME0", // Replace with your actual link
  image: "/assets/certificates/html.png"
},

  {
  title: "CSS3 Course Completion",
  provider: "Infosys Springboard",
  date: "June 2025",
  description:
    "Covers core concepts of CSS3 including selectors, box model, layout techniques, transitions, and animations. Enables styling of responsive and interactive web pages.",
  tags: [
    "CSS3",
    "Web Design",
    "Responsive Design",
    "Frontend Development",
    "Infosys Springboard"
  ],
  credentialId: "#NA", // Replace with actual ID if available
  link: "https://verify.onwingspan.com", // Replace with actual certificate link
  image: "/assets/certificates/css.png"
},
{
  title: "JavaScript Course Completion",
  provider: "Infosys Springboard",
  date: "June 2025",
  description:
    "Covers JavaScript fundamentals including variables, functions, DOM manipulation, and event handling. Builds a strong foundation for dynamic and interactive web development.",
  tags: [
    "JavaScript",
    "Web Development",
    "Frontend",
    "Infosys Springboard",
    "Programming Basics"
  ],
  credentialId: "#NA", // Replace with actual ID if available
  link: "https://verify.onwingspan.com", // Replace with actual certificate link
  image: "/assets/certificates/javascript.png"
},
{
  title: "Web Development Course Completion",
  provider: "Eduskills",
  date: "May 2025",
  description:
    "Covers full-stack web development basics to build responsive and interactive web applications.",
  tags: [
    "Web Development",
    "Frontend",
    "Backend",
    "Full Stack",
    "Eduskills"
  ],
  credentialId: "EDU-WD-88d1fe8a924597a1cb177ea2850a9a86", // Replace with actual ID if available
   // Replace with actual certificate link
  image: "/assets/certificates/web.png"
}



  ];

  return (
    <div className={styles.certificatecontainer}>
      {/* Hero Section */}
      <div className={styles.herocontainer}>
        <h1 className={styles.heading}>Professional Certificates</h1>
        <p className={styles.description}>
          A showcase of my professional certifications and continuous learning
          journey in technology
        </p>
      </div>

      {/* Certificates count */}
      <div className={styles.countcertificates}>
        <p>
          🎓 Number Of Certificates:{" "}
          <span>
            <CountUp end={9} />
          </span>
        </p>
      </div>

      {/* Skill count */}
      <div className={styles.countskills}>
        <p>
          🧠 Number Of Skills:{" "}
          <span>
            <CountUp end={18} />
          </span>
        </p>
      </div>

      {/* Certificates*/}

      <div className={styles.certificates}>
        <h1 className={styles.head}>CERTIFICATES</h1>

        <div className={styles.certcontainer}>
          {certifications.map((cert, index) => (
            <div key={index} className={styles.certcard}>
              <img
                src={cert.image}
                alt={cert.title}
                onClick={() => {
                  setCurrentImage(cert.image);
                  setModalOpen(true);
                }}
                className={styles.certificateImage}
              />

              <div className={styles.certcontent}>
                <h3>{cert.title}</h3>
                <div className={styles.certproviderdate}>
                  <span>{cert.provider}</span>
                  <span>📅{cert.date}</span>
                </div>
                <p>{cert.description}</p>
                <div className={styles.certtags}>
                  {cert.tags.map((tag, i) => (
                    <span key={i} className={styles.certtag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.certid}>
                  Credential ID: {cert.credentialId}
                </div>

                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  Verify Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setModalOpen(false)}
        >
          <span className={styles.closeModal}>&times;</span>
          <img
            src={currentImage}
            alt="Enlarged Certificate"
            className={styles.modalImage}
          />
        </div>
      )}
     
     {/** Contact me */}

     <div className={styles.endsec}>
      <h2>Continuous Learning Journey </h2>
      <p>I believe in lifelong learning and staying current with the latest technologies. These certifications represent my commitment to professional development and expertise.</p>
      <div className={styles.miniendsec}>
        <a href="/skills" className={styles.cerskills}><Skills></Skills></a>
        <a href='/assets/AdithyaResume.pdf' download="Resume.pdf" className={styles.cerresume}><Resume></Resume></a>
      </div>
       
     </div>



    </div>
  );
}

export default Certificates;
