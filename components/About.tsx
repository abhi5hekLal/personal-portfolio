import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function About({}: Props) {
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
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src="https://github.githubassets.com/images/modules/site/home-campaign/astrocat.png"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          A <span className="underline decoration-[#4A81E1]/50">little</span>{' '}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam earum
          facere ratione, minus dolore assumenda quasi ipsam modi itaque eaque
          id deserunt, amet culpa illum unde laborum ducimus ut. Repellat. Error
          quo quae, blanditiis non nemo, provident id, quidem eum in corporis
          velit eaque veritatis ipsam at obcaecati voluptate? Voluptatem itaque
          dignissimos aspernatur saepe hic minus ut fugit veniam corrupti. Vitae
          doloribus earum harum impedit accusamus voluptates distinctio saepe
          repudiandae, laboriosam ipsa pariatur optio. Maiores sunt voluptate
          officia optio voluptatem velit harum debitis iusto cupiditate, rem
          excepturi provident ipsam quia.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
