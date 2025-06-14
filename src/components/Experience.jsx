import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import epamIcon from "../assets/tech/epam.png";

const experiences = [
  {
    date: "April-May 2025 - ",
    icon: epamIcon,
    iconBg: "#383E56",
    title: "AI Agents App",
    company_name: "Freelance Project",
    points: [ ],
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[90%] h-[90%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>

      <div className='mt-20'>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Projects.
        </h2>

        <div className='mt-10'>
          <h3 className='text-white text-[20px] font-bold'>
            🧠 AI Agents App – Intelligent Task Automation with Image Generation &
            Token Management 
            
          </h3>
          <p className='text-secondary text-[16px] font-semibold'>
            Stack: Next.js 14, TypeScript, Tailwind CSS, Node.js (Express),
            PostgreSQL, OpenAI API, Docker
          </p>
          <ul className='mt-5 list-disc ml-5 space-y-2'>
            <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
              Designed and developed a full-stack AI application enabling users to
              interact with autonomous AI agents for complex tasks, including
              multi-agent coordination, advanced image generation, and persistent
              chat memory.
            </li>
            <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
              Implemented secure, token-based access, rate-limited usage, and
              persistent output saving.
            </li>
            <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
              Built a robust backend API with Express.js, integrated OpenAI for
              LLM and image generation, and managed data persistence with
              PostgreSQL.
            </li>
            <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
              Developed admin tools for session and usage monitoring using
              PGAdmin.
            </li>
            <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
              Dockerized the application for streamlined deployment.
            </li>
          </ul>
        </div>

      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
