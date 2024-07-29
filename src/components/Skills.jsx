import React, { useState } from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactJs from '../assets/react.png';
import NextJs from '../assets/nextjs.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Python from '../assets/python.png';
import FastAPI from '../assets/fastapi.png';
import Flask from '../assets/flask.png';
import Langchain from '../assets/langchain.png'
import OpenAI from '../assets/openai.png'
import Pandas from '../assets/pandas.png'
import NumPy from '../assets/numpy.png'
import ScikitLearn from '../assets/scikitlearn.png'
import MatplotLib from '../assets/matplotlib.png'
import PyTorch from '../assets/pytorch.png'
import TensorFlow from '../assets/tensorflow.png'
import Mongo from '../assets/mongo.png';
import PostgreSQL from '../assets/postgresql.png'
import Redis from '../assets/redis.png'
import Postman from '../assets/postman.png'
import RestAPI from '../assets/restapi.png'
import GraphQL from '../assets/graphql.png'
import WebSocket from '../assets/websocket.png'
import Firebase from '../assets/firebase.png'
import Docker from '../assets/docker.png';
import Kubernetes from '../assets/kubernetes.png';
import GitHubActions from '../assets/github-actions.png';
import Jenkins from '../assets/jenkins.png';
import CICD from '../assets/cicd.png';
import Kafka from '../assets/kafka.png'
import Airflow from '../assets/airflow.png'
import Terraform from '../assets/terraform.png'
import Ansible from '../assets/ansible.png'
import AWS from '../assets/aws.png';
import Openshift from '../assets/openshift.png';
import Prometheus from '../assets/prometheus.png'
import Grafana from '../assets/grafana.png'
import Elastic from '../assets/elastic.png'
import Logstash from '../assets/logstash.png'
import Kibana from '../assets/kibana.png'


const skillsData = [
    { img: HTML, name: 'HTML' },
    { img: CSS, name: 'CSS' },
    { img: JavaScript, name: 'JavaScript' },
    { img: ReactJs, name: 'React' },
    { img: NextJs, name: 'NextJs' },
    { img: Tailwind, name: 'Tailwind' },
    { img: Python, name: 'Python' },
    { img: FastAPI, name: 'FastAPI' },
    { img: Flask, name: 'Flask' },
    { img: Langchain, name: 'Langchain' },
    { img: OpenAI, name: 'OpenAI' },
    { img: Pandas, name: 'Pandas' },
    { img: NumPy, name: 'NumPy' },
    { img: ScikitLearn, name: 'ScikitLearn' },
    { img: MatplotLib, name: 'MatplotLib' },
    { img: PyTorch, name: 'PyTorch' },
    { img: TensorFlow, name: 'TensorFlow' },
    { img: GitHub, name: 'GitHub' },
    { img: Mongo, name: 'MongoDB' },
    { img: PostgreSQL, name: 'PostgreSQL' },
    { img: Redis, name: 'Redis' },
    { img: Postman, name: 'Postman' },
    { img: RestAPI, name: 'RestAPI' },
    { img: GraphQL, name: 'GraphQL' },
    { img: WebSocket, name: 'WebSocket' },
    { img: Firebase, name: 'Firebase' },
    { img: Docker, name: 'Docker' },
    { img: Kubernetes, name: 'Kubernetes' },
    { img: GitHubActions, name: 'GitHub Actions' },
    { img: Jenkins, name: 'Jenkins' },
    { img: CICD, name: 'CI/CD' },
    { img: Kafka, name: 'Kafka' },
    { img: Airflow, name: 'Airflow' },
    { img: Terraform, name: 'Terraform' },
    { img: Ansible, name: 'Ansible' },
    { img: AWS, name: 'AWS' },
    { img: Openshift, name: 'Openshift' },
    { img: Prometheus, name: 'Prometheus' },
    { img: Grafana, name: 'Grafana' },
    { img: Elastic, name: 'Elastic' },
    { img: Logstash, name: 'Logstash' },
    { img: Kibana, name: 'Kibana' },
];

const paginate = (array, itemsPerPage) => {
    return array.reduce((acc, curr, index) => {
        const pageIndex = Math.floor(index / itemsPerPage);
        if (!acc[pageIndex]) {
        acc[pageIndex] = [];
        }
        acc[pageIndex].push(curr);
        return acc;
    }, []);
};

const Skills = () => {
    const itemsPerPage = {
        base: 6, // For mobile: 1 item per row, 4 rows per page
        sm: 6, // For tablet: 2 items per row, 2 rows per page
        lg: 8 // For desktop: 4 items per row, 2 rows per page
        };
    const [currentPage, setCurrentPage] = useState(0);
    const paginatedSkillsBase = paginate(skillsData, itemsPerPage.base);
    const paginatedSkillsSm = paginate(skillsData, itemsPerPage.sm);
    const paginatedSkillsLg = paginate(skillsData, itemsPerPage.lg);

    const paginatedSkills = window.innerWidth >= 1024 
        ? paginatedSkillsLg 
        : window.innerWidth >= 640 
        ? paginatedSkillsSm 
        : paginatedSkillsBase;

    const handleNext = () => {
        if (currentPage < paginatedSkills.length - 1) {
        setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
        }
    };
    return (
        <div name='skills' className='w-full flex items-center min-h-screen bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                <p className='text-2xl sm:text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4 sm:text-lg text-base'>These are the technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                {paginatedSkills[currentPage].map((skill, index) => (
                    <div key={index} className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-10 sm:w-20 mx-auto' src={skill.img} alt={`${skill.name} icon`} />
                    <p className='my-4 sm:text-lg'>{skill.name}</p>
                    </div>
                ))}
                </div>
                <div className='flex justify-between'>
                <button
                    onClick={handlePrev}
                    disabled={currentPage === 0}
                    className={`px-4 py-2 bg-pink-600 text-white rounded ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    disabled={currentPage === paginatedSkills.length - 1}
                    className={`px-4 py-2 bg-pink-600 text-white rounded ${currentPage === paginatedSkills.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    Next
                </button>
                </div>
            </div>
        </div>
    );
};

export default Skills;
