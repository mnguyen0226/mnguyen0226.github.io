/* eslint linebreak-style: ["error", "windows"] */

import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';
import Presume from '../components/Resume/PersonalResume';

import courses from '../data/resume/courses';
import { skills, categories } from '../data/resume/skills';

const sections = [
  'Resumé',
  'References',
  'Courses',
  'Skills',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Minh Nguyen's Resumé."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resumé, References, Courses, & Skills</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Presume />
      <References />
      <Courses data={courses} />
      <Skills skills={skills} categories={categories} />
    </article>
  </Main>
);

export default Resume;
