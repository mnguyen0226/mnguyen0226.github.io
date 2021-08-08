/* eslint linebreak-style: ["error", "windows"] */

import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/mnguyen0226',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/minh-t-nguyen-1a7690178/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:mnguyen0226@vt.edu',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
