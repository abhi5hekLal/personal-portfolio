// make the summary section scrollable
import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:-w[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden' >
      <motion.img
        initial={{
          y: -200,
          opacity: 0,
        }}
        transition={{ duration: .8 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://img.freepik.com/free-vector/meta-logo-file-social-media-icon-vector-3-november-2021-bangkok-thailand_53876-157873.jpg?w=740&t=st=1667474592~exp=1667475192~hmac=a18b41448bf89dd7e1a6ec870a0aff08a4f2b902fdba886edaebb9f9ed8d551c"
        alt="Logo"
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Intern</h4>
        <p className='font-bold text-2xl mt-1'>Google</p>
        <div className='flex space-x-2 my-2'>
          {/* Tech Used */}
          {/* Tech Used */}
          {/* Tech Used */}
          {/* Tech Used */}
        </div>

        <p className='uppercase py-5 text-gray-300'>Start date -- End Date</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
