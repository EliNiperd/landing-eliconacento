"use client";

import Image from "next/image";
import { aboutMe, projects, skills } from "./lib/data";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "./components/Navbar";
import { motion, useScroll } from "framer-motion";
import type { Variants } from "framer-motion";

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scrollVariants: Variants = {
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    }
  }
  /*
  animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
  */
  return (
    <main className="container mx-auto max-w-4xl p-8 pt-24 antialiased">
      <Navbar />
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 53,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          background: "#ff0088",
        }}
      />
      {/* --- HERO SECTION --- */}
      <section
        id="hero"
        className="h-screen flex flex-col justify-center items-start"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-2"
        >
          {aboutMe.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mt-2"
        >
          {aboutMe.tagline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-md text-gray-400 max-w-xl mt-4"
        >
          {aboutMe.bio}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center gap-4 mt-8"
        >
          <a
            href="#projects"
            className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          >
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className="px-6 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Contacto
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="flex items-center gap-6 mt-12 text-2xl"
        >
          <a
            href={aboutMe.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href={aboutMe.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </section>

      {/* --- ABOUT ME & SKILLS SECTION --- */}
      <section id="about" className="py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.5, delay: 0.2 }}
          whileInView="onscreen"
          variants={scrollVariants}
          className="text-3xl font-bold mb-12 text-center"
        >
          Sobre Mí y Habilidades
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView="onscreen"
            variants={scrollVariants}
            className="md:col-span-1 flex justify-center"
          >
            <Image
              src="/profile-photo.jpg"
              alt="Foto de perfil de Eli con Acento"
              width={192}
              height={192}
              className="rounded-full object-cover w-48 h-48"
            />
          </motion.div>
          <div className="md:col-span-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.5, delay: 0.4 }}
              whileInView="onscreen"
              variants={scrollVariants}
              className="text-2xl font-semibold mb-4"
            >
              Tecnologías
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    // animate={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.5, delay: 0.6 }}
                    whileInView="onscreen"
                    variants={scrollVariants}
                    className="font-bold text-gray-400 capitalize mb-2 text-sm tracking-wider"
                  >
                    {category}
                  </motion.h4> 
                  {/* List of skills  //🔸🔹🔺💠 */}
                  <ul className="space-y-1 list-['🔹']"> 
                    {skillList.map((skill) => (
                      <motion.li
                        key={skill}
                        initial={{ opacity: 0, y: 20 }}
                        // animate={{ opacity: 1, y: 0 }}
                        // transition={{ duration: 0.5, delay: 0.8 }}
                        whileInView="onscreen"
                        variants={scrollVariants}
                        className="text-gray-300 "
                      >
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-24">
        <h2 className="text-3xl font-bold mb-16 text-center">
          Proyectos Destacados
        </h2>
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView="onscreen"
              variants={scrollVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
            >
           
              <div className={`md:order-${index % 2 === 0 ? "1" : "2"}`}>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                {/* <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300" /> */}
                <ul className="list-['🔹'] list-inside space-y-2 mb-4 text-gray-300">
                  {project.features.map((feature, fIndex) => (
                    <li key={fIndex}>{feature}</li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 mb-6">
                  <strong>Stack:</strong> {project.techStack}
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <FaGithub />
                    <span>Código</span>
                  </a>
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <span>Demo en Vivo</span>
                    </a>
                  )}
                </div>
              </div>
              <div className={`md:order-${index % 2 === 0 ? "2" : "1"}`}>
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                  <Image
                    src={project.imageUrl}
                    alt={`Imagen del proyecto ${project.title}`}
                    width={1280}
                    height={720}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 text-center">
        <h2 className="text-3xl font-bold mb-8">Contacto</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          ¿Tienes una idea o un proyecto en mente? ¡Hablemos! Puedes contactarme
          directamente a mi correo electrónico.
        </p>
        <a
          href="mailto:eli.rodriguez@gmail.com"
          className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors text-lg"
        >
          eli.rodriguez@gmail.com
        </a>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} {aboutMe.name}. Todos los derechos
          reservados.
        </p>
      </footer>
    </main>
  );
}
