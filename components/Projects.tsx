import React from 'react';
import { motion } from 'framer-motion';
type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#4A81E1]/40">
        {projects.map((project) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-24 h-screen">
            <motion.img
            initial={{
              y: -300,
              opacity: 0
            }}

            transition={{
              duration: 1.2
            }}
            whileInView={{opacity: 1, y:0}}
            viewport={{once: true}}
              src="https://assets-global.website-files.com/5e39e095596498a8b9624af1/5ffca6e3e0d8ad9231cc2af6_Portfolio-course---final-p-800.png"
              alt=""

            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                Portfolio Website
              </h4>

              <p className='text-lg text-center md:text-left'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                cumque natus animi possimus doloremque? Non ea repudiandae
                inventore exercitationem itaque doloremque quas illo nostrum
                voluptatum, aspernatur, incidunt esse similique consequuntur.
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
