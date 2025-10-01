"use client";
import NeuralBackground from "@/components/neuralBg";
import Projects from "@/components/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const titles = ["Prakhar Bhatt", "Developer", "AI Explorer"];

export default function Home() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <NeuralBackground/>

      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-white/1 dark:bg-black/1 backdrop-blur-xs 
             text-black dark:text-white transition-all duration-300 px-8 py-8"
      >
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 max-w-6xl w-full">
          
          {/* Text Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.15 } }
            }}
            className="flex flex-col gap-4 max-w-xl text-center lg:text-left"
          >
            <motion.h1
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight"
            >
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-opacity duration-500">
                {titles[currentTitleIndex]}
              </span>
            </motion.h1>

            <motion.h2
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-300"
            >
              Creative Web Developer crafting modern, high-performance UIs.
            </motion.h2>

            <motion.p
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400"
            >
              I code, AI corrects. Perfect partnership!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#projects"
                className="px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
              >
                View My Work
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#contact"
                className="px-5 py-3 border border-gray-400 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="p-2 sm:p-4 flex justify-center w-[200px] sm:w-[260px] md:w-[320px] lg:w-[400px]"
          > 
            <Image
              src="/3.jpg"
              alt="Prakhar Bhatt"
              width={420}
              height={420}
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative min-h-[60vh] flex items-center justify-center bg-white/1 dark:bg-black/1 backdrop-blur-xs text-black dark:text-white px-6 py-16 overflow-hidden"
      >
        {/* Floating Gradient Blobs */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-10 -left-20 w-64 h-64 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full blur-3xl opacity-20"
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-3xl text-center lg:text-left bg-white/10 dark:bg-black/20 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m a creative web developer passionate about building modern,
            high‑performance interfaces with <strong>Next.js</strong> and{" "}
            <strong>Tailwind CSS</strong>. My focus is on crafting visually
            impactful, responsive designs that deliver exceptional user
            experiences.
          </p>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            From animated hero sections to advanced UI effects like
            glassmorphism and interactive components, I love pushing the
            boundaries of frontend design.
          </p>

          {/* Tech Icons Row */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6 opacity-90">
            {["Next.js", "Tailwind", "Framer Motion"].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-md text-sm shadow-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PROJECT SECTION  */}
      <section id="project" className="relative min-h-[60vh] flex items-center justify-center bg-white/1 dark:bg-black/1 backdrop-blur-xs text-black dark:text-white px-6 py-16 overflow-hidden">
        <Projects />
      </section>
    </>
  );
}