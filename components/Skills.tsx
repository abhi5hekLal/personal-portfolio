import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="h-screen flex flex-col relative overflow-hidden text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <div className='grid grid-cols-4 gap-5'>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
      </div>
    </motion.div>
  );
}

export default Skills;
