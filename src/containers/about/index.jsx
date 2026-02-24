import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Nome:",
    value: "Carlos Lima",
  },
  {
    label: "Endereço:",
    value: "Maceió, Alagoas, Brasil",
  },
  {
    label: "Email:",
    value: "developercarloslima@gmail.com",
  },
  {
    label: "Tel.:",
    value: "+55 8299178-2350",
  },
];

const jobSummary = `
  Sou desenvolvedor Fullstack com foco em Backend e arquitetura de sistemas, especializado na construção de APIs REST utilizando Java (Spring Boot) e Node.js com TypeScript. Tenho experiência prática com PostgreSQL, modelagem de dados, autenticação com JWT, versionamento com Git e boas práticas de desenvolvimento.

Atuo no desenvolvimento de aplicações web escaláveis, organizadas em camadas e orientadas a resolver problemas reais. Entre meus projetos, desenvolvi sistemas de gestão com controle financeiro e aplicações fullstack com persistência de dados, geração dinâmica de conteúdo estruturado e documentação de API com Swagger/OpenAPI.

Tenho interesse em aprofundar meus conhecimentos em engenharia de software, cloud computing, segurança de aplicações e arquitetura distribuída. Busco oportunidades como Desenvolvedor Júnior onde possa contribuir com código limpo, mentalidade analítica e evolução contínua
`;

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="Sobre mim"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>Desenvolvedor Full Stack</h3>
            <div className="about__summary">
              {jobSummary.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalInfoHeaderText">Informações Pessoais</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>

        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev color="var(--yt-main-color)" size={60} />
              </div>
              <div>
                <DiAndroid color="var(--yt-main-color)" size={60} />
              </div>
              <div>
                <FaDatabase color="var(--yt-main-color)" size={60} />
              </div>
              <div>
                <DiApple color="var(--yt-main-color)" size={60} />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
