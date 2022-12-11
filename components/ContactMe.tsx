import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);
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
        Contact
      </h3>

      <div>
        <h4 className="text-3xl font-semibold text-center pb-5">Let's Chat</h4>

        <div className="space-y-1">
          <div className="flex items-center space-x-2 justify-center">
            <PhoneIcon className="text-[#4A81E1] h-5 w-5 animate-pulse" />
            <p className="text-1xl">+917461020027</p>
          </div>

          <div className="flex items-center space-x-2 justify-center">
            <MapPinIcon className="text-[#4A81E1] h-5 w-5 animate-pulse" />
            <p className="text-1xl">Bhubaneswar, Orissa</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#4A81E1] h-5 w-5 animate-pulse" />
            <p className="text-1xl">work.abhisheklal@gmail.com</p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit m-auto"
          >
            <div className="flex space-x-2">
              <input
                {...register('name')}
                placeholder="Name"
                className="contactInput"
                type="text"
              />
              <input
                {...register('email')}
                placeholder="Email"
                className="contactInput"
                type="email"
              />
            </div>

            <input
              {...register('subject')}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />
            <textarea
              {...register('message')}
              placeholder="Message"
              className="contactInput"
            />

            <button
              type="submit"
              className="bg-[#4A81E1]/70 px-5 py-10 rounded-md text-black font-bold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactMe;
