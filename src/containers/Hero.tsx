'use client';

/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

import {
  SiMysql,
  SiDocker,
  SiSpringboot,
  SiNodedotjs,
  SiReact,
} from 'react-icons/si';

import DataProvider from '@/data/DataProvider';
import { containerVariants, itemVariants } from '@/utils/animation';

const TYPING_DELAY = 1600;

export default function Hero() {
  const { titlePrefix, titles, firstName, lastName } =
    new DataProvider().personalInfo;

  // ✔ Properly typed (string | number)[]
  const sequence: (string | number)[] = titles.flatMap((title) => [
    title,
    TYPING_DELAY,
    500,
  ]);

  return (
    <section className="min-h-500 relative mx-0 overflow-x-clip px-0 pt-5 text-white">
      <div className="mt-5 grid grid-cols-1 justify-items-center">
        <div className="flex flex-col items-center text-center">
          <h1 className="title-font text-2xl font-medium">Hello 👋 I'm</h1>

          <h1 className="mt-4 text-4xl text-lime-400">{`<${firstName}`}</h1>
          <h1 className="mt-4 text-4xl text-lime-400">{`${lastName}/>`}</h1>

          <h1 className="mt-4 max-w-md text-xl font-normal sm:text-2xl">
            <br /> {titlePrefix}{' '}
            <TypeAnimation
              sequence={sequence}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </h1>
        </div>

        <div className="max-w-lg relative">
          <Image
            height={547}
            width={511}
            quality={80}
            className="rounded object-cover object-center"
            alt="hero image"
            blurDataURL="/me_b.png"
            placeholder="blur"
            src="/me.png"
          />

          {/* Floating Tech Icons */}
          <motion.ul
            variants={containerVariants(0)}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
          >
            {/* MySQL */}
            <motion.li variants={itemVariants}>
              <div className="bg-b-dark absolute inline-flex -translate-y-72 translate-x-72 rounded-full p-6 shadow-2xl md:-translate-y-96 md:translate-x-96">
                <SiMysql className="md:w-18 md:h-18 h-10 w-10 text-sky-500" />
              </div>
            </motion.li>

            {/* Spring Boot */}
            <motion.li variants={itemVariants}>
              <div className="bg-b-dark absolute inline-flex -translate-y-80 translate-x-16 rounded-full p-4 shadow-xl md:p-6">
                <SiSpringboot className="md:w-18 md:h-18 h-10 w-10 text-green-500" />
              </div>
            </motion.li>

            {/* Docker */}
            <motion.li variants={itemVariants}>
              <div className="bg-b-dark absolute inline-flex -translate-y-20 translate-x-10 rounded-full p-4 shadow-lg">
                <SiDocker size={30} className="text-white" />
              </div>
            </motion.li>

            {/* React */}
            <motion.li variants={itemVariants}>
              <div className="bg-b-dark absolute inline-flex -translate-y-48 translate-x-0 rounded-full p-6 text-blue-600">
                <SiReact size={40} />
              </div>
            </motion.li>

            {/* Node.js */}
            <motion.li variants={itemVariants}>
              <div className="bg-b-dark absolute inline-flex -translate-y-44 translate-x-80 rounded-full p-4 text-green-600 shadow-xl md:translate-x-96">
                <SiNodedotjs size={50} />
              </div>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
