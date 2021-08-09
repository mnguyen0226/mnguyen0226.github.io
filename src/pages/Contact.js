/* eslint linebreak-style: ["error", "windows"] */

import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Minh T. Nguyen via email @ mnguyen0226@vt.edu"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch! You can email me at:
        </p>
        <EmailLink />
        <br />
        <p>
          <i>
            For University Recruiter(s), Team Lead(s), or Company Representatives,
            if you are interested in hosting info sessions or events with IEEE@VT, please
            don`&apos;`t hesitate to message both <a href = "https://www.ieee.vt.edu/contact-us.html">IEEE@VT</a> or me via Linked In or Email :)
          </i>
        </p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
