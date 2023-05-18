import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: {
  position: string
  company: string
  companyLink: string
  time: string
  address: string
  work: string
}) => {
  const ref = useRef(null)
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a href={companyLink} target="_blank" className="text-primary dark:text-primaryDark">
            @{company}
          </a>
        </h3>
        <span className="font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  )
}

const Experience = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-primary origin-top md:w-[2px] md:left-[30px] 
          xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Developer"
            company="LIFULL"
            companyLink="https://lifull.com/en/"
            time="April 2021 - March 2023"
            address="Tokyo, Japan"
            work="As a full-stack engineer, I have extensively worked on development across infrastructure, 
            backend, and frontend domains. In the infrastructure realm, 
            I achieved cost-cutting measures utilizing AWS and implemented batch processing. 
            On the backend, I developed robust and scalable REST APIs using Go and PostgreSQL. 
            Furthermore, on the frontend, I utilized React and Vue to provide diverse interfaces and user experiences."
          />

          <Details
            position="Software Developer, Freelance"
            company="habitat"
            companyLink="https://www.habitats.co.jp/"
            time="June 2022 - March 2023"
            address="Tokyo, Japan"
            work="Developed a customer dashboard for a hot tub reservation application using Go, 
            GraphQL, Datastore, and AppEngine, while automating the modification of past data 
            after adding new functions through batch implementation. 
            Implemented a sorting function based on the user's location using the Google Geolocation API 
            and created a refund function using Stripe."
          />

          <Details
            position="Product Manager, Freelance"
            company="moja"
            companyLink="https://mojajp.com/"
            time="April 2020 - May 2022"
            address="Tokyo, Japan"
            work="As the second employee of the company, 
            I collaborated with the founder to conceptualize and plan the product from scratch. 
            I played a crucial role in hiring engineers and overseeing the product's release. 
            Additionally, I led presentations for fundraising, securing funding of 135 million yen, 
            and contributed to the expansion of both the team and the product. 
            While primarily serving as a product manager, 
            I also actively participated in product development using Go and GraphQL."
          />

          <Details
            position="Product Manager"
            company="CyberAgent"
            companyLink="https://www.cyberagent.co.jp/en/"
            time="April 2017 - March 2021"
            address="Tokyo, Japan"
            work="
            Although I initially began my career in sales for a brief period, 
            I transitioned to the role of a product director, 
            collaborating closely with software developers to enhance our products. 
            As a non-engineering product manager, 
            my responsibilities encompassed ensuring the success of the product 
            by defining requirements and guiding software developers to effectively deliver value to our customers. 
            Throughout this journey, I cultivated my product analytical skills by utilizing SQL and 
            developed a system using JavaScript to streamline and automate our daily routines, 
            eliminating repetitive tasks."
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience
