import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full flex items-center min-h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 pt-20 sm:pt-0 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-2xl sm:text-4xl font-bold inline border-b-4 border-pink-600'
          >
            About
          </p>
        </div>
        <div className='py-4 sm:text-lg text-base'>
          <p>
            I offer a comprehensive range of services designed to meet diverse clients needs ranging from individuals and small-businesses all the way to large enterprise corporations across various domains, focusing on Python and backend development, TypeScript and frontend development, database management, system development, microservices, progressive web applications, distributed systems, and data analysis. My expertise enables me to deliver high-quality, efficient, and scalable solutions tailored to the specific requirements of each project.
          </p>
          <ul className='pt-4 list-none'>
            <li className='relative pl-8 mb-1'>
              <span className='absolute left-0 top-0 text-pink-600'>→</span>
              Build RESTful APIs and GraphQL APIs using FastAPI or Flask python frameworks.
            </li>
            <li className='relative pl-8 mb-1'>
              <span className='absolute left-0 top-0 text-pink-600'>→</span>
              Build full-stack applications integrating React with FastAPI or Flask backends, or full-stack Next.js applications.
            </li>
            <li className='relative pl-8 mb-1'>
              <span className='absolute left-0 top-0 text-pink-600'>→</span>
              Design, implement, and optimize relational databases using MySQL, PostgreSQL, and Microsoft SQL Server and NoSQL databases like MongoDB and Redis with scalability.
            </li>
            <li className='relative pl-8 mb-1'>
              <span className='absolute left-0 top-0 text-pink-600'>→</span>
              Develop high-performance asynchronous or synchronous applications with relevant frameworks.
            </li>
            <li className='relative pl-8 mb-1'>
              <span className='absolute left-0 top-0 text-pink-600'>→</span>
              Design and develop low-latency, high-scale microservices architecture for enterprise applications.
            </li>
            <li className='relative pl-8 mb-1'>
              <span className='absolute left-0 top-0 text-pink-600'>→</span>
              Develop type-safe SPAs (Single Page Applications) using React with Vite or Next.js.
            </li>
            <li className='relative pl-8 mb-1'>
              <span className='absolute left-0 top-0 text-pink-600'>→</span>
              Design and develop responsive, interactive user interfaces using TailwindCSS and other modern CSS frameworks.
            </li>
            <li className='relative pl-8 mb-1'>
              <span className='absolute left-0 top-0 text-pink-600'>→</span>
              Create comprehensive PWAs (Progressive Web Applications) that integrate frontend (React, Next.js) with backend (FastAPI, Flask) and databases.
            </li>
            <li className='relative pl-8 mb-1'>
              <span className='absolute left-0 top-0 text-pink-600'>→</span>
              Design and implement high-scale, real-time distributed event-driven systems using tools like Kafka and Webhooks.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;