// /* eslint linebreak-style: ["error", "windows"] */
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
        I&apos;m a Senior at <a href="https://vt.edu/">Virginia Tech</a> majoring in Computer Engineer with a focus in Machine Learning and minoring in Computer Science. I&apos;m an Industry Relations Chair at <a href="https://www.ieee.vt.edu/">IEEE@VT</a>, and a researcher at both <a href="https://ai.ece.vt.edu/">A3 Lab</a> and <a href="https://www.trecvt.org/">TREC Lab</a> at Virginia Tech. Before A3 Lab and TREC Lab, I was
        at <a href="https://shield.ai/">Shield AI (Heron Systems)</a>
        , <a href="https://eng.vt.edu/student-teams/hevt.html">HEVT@VT</a>
        , <a href="https://www.wm.edu/as/data-science/researchlabs/geolab/what_we_do/index.php">GeoLab@WM</a>
        , <a href="https://wireless.vt.edu/">Wireless@VT</a>
        , <a href="https://gobblerconnect.vt.edu/organization/TRE">TRE@VT</a>
        , and <a href="https://ece.vt.edu/undergrad/courses/2804.html">TA-ECE@VT</a>.
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
