import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
              py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
              lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
              xs:text-dark xs:dark:text-light xs:font-bold
              "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">Skills</h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
              p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2
              "
          whileHover={{ scale: 1.05 }}
        >
          web
        </motion.div>

        {/* Languages */}
        <Skill name="Go" x="0vw" y="-10vw" />
        <Skill name="TypeScript" x="-15vw" y="-18vw" />
        <Skill name="PHP" x="10vw" y="-20vw" />

        {/* Front-end */}
        <Skill name="React" x="-15vw" y="0vw" />
        <Skill name="NextJS" x="-35vw" y="0vw" />
        <Skill name="Vue" x="-25vw" y="8vw" />
        <Skill name="Tailwind" x="-25vw" y="-8vw" />

        {/* Back-end */}
        <Skill name="REST" x="15vw" y="0vw" />
        <Skill name="GraphQL" x="25vw" y="-10vw" />
        <Skill name="Node.js" x="30vw" y="0vw" />

        {/* Database */}
        <Skill name="PostgreSQL" x="10vw" y="10vw" />
        <Skill name="MySQL" x="15vw" y="20vw" />
        <Skill name="NoSQL" x="30vw" y="10vw" />

        {/* Infrastructure */}
        <Skill name="AWS" x="-10vw" y="10vw" />
        <Skill name="Terraform" x="-25vw" y="18vw" />
        <Skill name="Docker" x="-5vw" y="20vw" />
      </div>
    </>
  )
}

export default Skills
