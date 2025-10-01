"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "AI Portfolio Website",
    description:
      "A modern portfolio built with Next.js, Tailwind, and Framer Motion. Features animated hero, morphing shapes, and AI-inspired visuals.",
    image: "/project1.png",
    link: "#"
  },
  {
    title: "Neural Network Visualizer",
    description:
      "Interactive canvas-based neural net simulation with animated nodes and connections, built for learning and fun.",
    image: "/project2.png",
    link: "#"
  },
  {
    title: "Creative UI Components",
    description:
      "A collection of reusable UI components: glassmorphism cards, animated gradients, and scroll progress bars.",
    image: "/project3.png",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section
      className="relative min-h-[60vh] flex flex-col items-center justify-center bg-white/1 dark:bg-black/1 backdrop-blur-xs text-black dark:text-white px-6 py-16 overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-bold mb-12 text-center"
      >
        My <span className="text-blue-600 dark:text-blue-400">Projects</span>
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white dark:bg-black/40 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition"
          >
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {project.description}
              </p>
              <a
                href={project.link}
                className="mt-2 inline-block px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition self-start"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}