import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { GiSkills } from "react-icons/gi";
import { skillsData } from "./utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import "./style.scss";
import { Line } from "rc-progress";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent headerText="Habilidades" icon={<GiSkills size={40} />} />

      <div className="skills__content-wrapper">
        {skillsData.map((item) => (
          <div
            key={item.label}
            className="skills__content-wrapper__inner-content"
          >
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {item.label}
              </h3>
              <div>
                {item.data.map((skillItem) => (
                  <AnimateKeyframes
                    key={skillItem.skillName}
                    play
                    duration={1}
                    keyframes={["opacity: 0", "opacity: 1"]}
                    iterationCount="1"
                  >
                    <div className="progressbar-wrapper">
                      <p>{skillItem.skillName}</p>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth="3"
                        strokeColor="var(--yt-main-color)"
                        trailWidth="3"
                        strokeLinecap="round"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
