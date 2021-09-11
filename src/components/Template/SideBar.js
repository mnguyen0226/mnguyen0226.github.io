/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Minh T. Nguyen</h2>
        <p><a href="mailto:mnguyen0226@vt.edu">mnguyen0226@vt.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Minh Nguyen. I like learning and building things.
        I&apos;m a Senior at <a href="https://vt.edu/">Virginia Tech</a> majoring in Computer Engineer with a focus in <a href="https://ece.vt.edu/">Machine Learning</a> and minoring in <a href="https://cs.vt.edu/">Computer Science</a>. I&apos;m an Industry Relations Chair at <a href="https://www.ieee.vt.edu/">IEEE@VT</a>, Undergraduate Researcher at <a href="https://ai.ece.vt.edu/">A3 Lab</a> and <a href="https://www.trecvt.org/">TREC Lab</a> at Virginia Tech. In Summer 2021, I joined as Machine Learning Intern at <a href="https://heronsystems.com/">Heron Systems R&D</a>. Before Heron Systems R&D I was
        at <a href="https://eng.vt.edu/student-teams/hevt.html">HEVT@VT</a>
        , <a href="https://www.wm.edu/as/data-science/researchlabs/geolab/what_we_do/index.php">GeoLab@WM</a>
        , <a href="https://wireless.vt.edu/">Wireless@VT</a>
        , <a href="https://www.linkedin.com/company/teaching-robotics-and-engineering/about/">TRE@VT</a>
        , and <a href="https://www.linkedin.com/in/minh-t-nguyen-1a7690178/">UTA-ECE@VT</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Minh T. Nguyen <Link to="/">mnguyen0226.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
