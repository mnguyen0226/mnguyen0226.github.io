/* eslint linebreak-style: ["error", "windows"] */

import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../data/research.md');

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Research = () => (
  <Main
    title="About"
    description="Learn about Minh T. Nguyen"
  >
    <article className="post markdown" id="research">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/research">Research & Experience</Link></h2>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);

export default Research;
