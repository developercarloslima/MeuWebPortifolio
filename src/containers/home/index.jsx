import React from "react";
import { ReactTyped } from "react-typed";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { SiWhatsapp } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Oi! Eu sou Carlos Lima,
          <br />
          <ReactTyped
            strings={[" Desenvolvedor Full Stack", "Engenheiro de Software!"]}
            typeSpeed={50}
            backSpeed={60}
            startDelay={100}
            backDelay={2000}
            loop
          />
        </h1>
      </div>

      <Animate
        play
        duration={1}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="home__contact-me">
          <a
            className="download"
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1zjEtt7XZ55w62EhctYYcFhMvaAnBGzWj/view?usp=sharing"
          >
            Baixar Currículo
          </a>

          <div>
            <a
              className="socialMedia"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/developercarloslima"
            >
              <FaGithub size={40} />
            </a>

            <a
              className="socialMedia"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/devcarloslima/"
            >
              <FaLinkedin size={40} />
            </a>

            <a
              className="socialMedia"
              target="_blank"
              rel="noopener noreferrer"
              href="https://w.app/developercarloslima"
            >
              <SiWhatsapp size={40} />
            </a>
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
