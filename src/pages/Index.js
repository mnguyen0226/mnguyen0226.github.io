/* eslint linebreak-style: ["error", "windows"] */

import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Minh Nguyen's personal website. Virginia Tech Senior majoring in Computer Engineer with a focus in Machine Learning, "
    + 'Heron Systems R&D ML Intern, Industry Relations Chair at IEEE@VT, Undegraduate Research at A3 Lab and TREC Lab at Virginia Tech.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome to my personal site!</Link></h2>
          <p>
            P/S: One page resume, Linked In, and Github are not enough for me to express myself
            completely, so I put my journey and experience in here :)
          </p>
        </div>
      </header>
      <p> Greeting! Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resumé</Link>, {' '}
        <Link to="/stats">research/experience</Link>, {' '}
        <Link to="/leadership">leadership</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source code of my personal site is available <a href="https://github.com/mnguyen0226/mnguyen0226.github.io">here</a>.</p>
    </article>
  </Main>
);

export default Index;
