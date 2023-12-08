import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const onButtonClick = (file, name) => {
  fetch(file).then(response => {
      response.blob().then(blob => {
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = name;
          alink.click();
      })
  })
}

const ServiceCard = ({ index, title, icon, file, filename }) => (
   <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      onClick={() => onButtonClick(file, filename)}
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full yellow-blue-gradient p-[1px] rounded-[20px] shadow-card'>
      <div
        options={{ max: 45, scale: 1, speed: 450, }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img
          src={icon} alt='web-development' className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
   </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Á propos.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-justify text-[17px] max-w-3xl leading-[30px]'
      >
        Ayant obtenu mon Bachelor « Administrateur des Systèmes d’Administration » en suivant le parcours DevOps, je souhaite poursuivre l’aventure en Mastère « dev, Data & IA » avec comme le parcours « Développement & Big Data ». <br/>
        Mon alternance dans l’entreprise GRAPHCOM à Levallois-Perret où j'avais travaillé sur le développement de la gestion de restaurants avec la caisse et le site web qui permet au restaurateur de voir ses statistiques journalières et mensuelles. L’application est développée en C# et le site web avec ASP.NET Blazor. <br/>
        Ma rigueur et mon sens de l’analyse sont des qualités appréciables lors de mes activités. J’ai également le sens du service et la capacité de m’adapter aisément. Mes expériences m’ont permis de développer mes compétences en programmation et système informatique afin d’avoir cette double casquette. <br/>
        Je m'investis pleinement dans mon parcours et mets en pratique mes compétences. Je suis enthousiaste à l'idée de continuer à développer mes connaissances et à relever de nouveaux défis passionnants dans le monde de l'informatique.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
