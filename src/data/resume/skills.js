/* eslint linebreak-style: ["error", "windows"] */
// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Deep Learning',
    competency: 3,
    category: ['Machine Learning & Data Science', 'Research'],
  },
  {
    title: 'Github',
    competency: 3.5,
    category: ['Version Control'],
  },
  {
    title: 'Gitlab',
    competency: 2,
    category: ['Version Control'],
  },
  {
    title: 'Linux',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Bash',
    competency: 2.5,
    category: ['Languages'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Machine Learning & Data Science'],
  },
  {
    title: 'Pytorch',
    competency: 2.5,
    category: ['Machine Learning & Data Science'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 2,
    category: ['Machine Learning & Data Science'],
  },
  {
    title: 'Reinforcement Learning',
    competency: 1.5,
    category: ['Research', 'Machine Learning & Data Science'],
  },
  {
    title: 'Scikit-Learn, Pandas, Matplotlib & Jupyter Notebook',
    competency: 2,
    category: ['Machine Learning & Data Science'],
  },
  {
    title: 'Arduino',
    competency: 2.5,
    category: ['EE Tools'],
  },
  {
    title: 'Robotics',
    competency: 1,
    category: ['Research'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Machine Learning & Data Science', 'Languages'],
  },
  {
    title: 'Docker',
    competency: 1,
    category: ['Machine Learning & Data Science', 'Version Control'],
  },
  {
    title: 'C/C++',
    competency: 3.5,
    category: ['Languages', 'EE Tools'],
  },
  {
    title: 'Java',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Javascript',
    competency: 1.5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'React',
    competency: 1,
    category: ['Web Development'],
  },
  {
    title: 'HTML + CSS',
    competency: 1.5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Prolog',
    competency: 1,
    category: ['Languages', 'Machine Learning & Data Science'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'OpenCV',
    competency: 2.5,
    category: ['Machine Learning & Data Science'],
  },
  {
    title: 'LTSpice',
    competency: 2,
    category: ['EE Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
