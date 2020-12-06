import React from 'react';
import Icon from './Icon';

const cloudinaryImg = (imageName) =>
  `https://res.cloudinary.com/amarcloud/image/upload/v1588864114/portfolio/images/${imageName}.jpg`;

const SkillSection = ({ skills, skillType }) => (
  <div className="SkillSection" style={{ marginBottom: '2rem' }}>
    <h3 className="CodePiece-subheader">{skillType}:</h3>
    <div className="CodePiece-made-with-icons">
      {skills.map((icon) => (
        <Icon iconType={icon} />
      ))}
    </div>
  </div>
);

const About = ({ article, articleTimeout, close, handleOpenArticle }) => (
  <article
    id="about"
    style={{ display: 'none' }}
    className={`${article === 'about' ? 'active' : ''} ${
      articleTimeout ? 'timeout' : ''
    }`}
  >
    <h1 className="major"> About </h1>
    <div
      className="AboutImage"
      style={{ backgroundImage: `url("${cloudinaryImg('launchpad')}")` }}
    >
      {/* <img className="image main" src={cloudinaryImg('launchpad')} alt="" /> */}
    </div>
    <p>
      <span style={{ fontSize: '26px', marginRight: '.2rem' }}>👋</span> Hi My
      name is Amar Nagargoje .I am a Student by day and Technophile by, pretty much any time of the day. I am a Computer Science Student and I like building high quality mobile / web apps . I believe in bringing value to table
      {' . '}You could jump straight to my{' '}
      <a
        className="Code-major-link"
        target="_blank"
        href="https://drive.google.com/file/d/1jRGi7aW7JfG-hax5YdsjOgZlLHDY5o25/view?usp=sharing"
      >
        resume
      </a>{' '}
      or{' '}
      <a
        className="Code-major-link"
        href="javascript:;"
        onClick={() => handleOpenArticle('work')}
      >
        Projects
      </a>{' '}
      .
    </p>
    <h2 className="major">Skills:</h2>

    <SkillSection
      skills={[
        'Python',
        'typescript',
        'javascript',
        'html',
        'css',
        ,
        'Dart-Lang.',
        'UI-Design',
      ]}
      skillType="languages"
    />
    <h2 className="major">Experience:</h2>
    < h4 className="major" > 1. Ombre - Software Engineering Intern </h4>
    <a target='_blank' >Present 2020</a>
    <p> Technical Team support .
    </p>

    <h4 className="major">Virtual SDE Intern - JP Morgan </h4>
    <a
      target="_blank"
      href="https://drive.google.com/open?id=14I2FK3SYiVrb3NHZW2NY3wnmVgCEA7QB"
    >
      Click to View accomplishment
    </a>
    <p>
      Developed interface to visualize and analyze share price data for traders
      for actionable insights.- React ,Python Server Side Prog.<br></br>• How
      basic statistical measures are used to reveal patterns within the data.
      <br></br>• Recognize data characteristics, patterns, trends, deviations or
      inconsistencies, and potential outliers.<br></br>• Identify useful
      techniques for working with big data such as dimension reduction and
      feature selection methods.<br></br>
    </p>
    <h4 className="major">Team Lead: SIH2020</h4>
    <p>
      {' '}
      Lead team for solving Electric Vehicle Ecosystem problem for VMware Pvt .
      Ltd
    </p>

    <SkillSection
      skills={[
        'Node-js',
        'Android Studio',
        'React Native',
        'Angular',
        'Vue',
        'reactjs',
        'Flutter',
        'flask',
        'gatsby',
      ]}
      skillType="technology and frameworks"
    />
    <SkillSection
      skills={['firebasedb', 'mongodb', 'mysql']}
      skillType="Backend services"
    />
    <SkillSection
      skills={[
        'Advanced Data Science Professional',
        'AWS Fundamentals',
        'Deep Learning',
        'Machine Learning Specialization',
        'Python for Data science',
        'SQL',
        'Building Interactive Apps',
      ]}
      skillType="Technology Accomplishments"
    />

    <SkillSection
      skills={[
        'Ibm Watson Studio AI/ML',
        'Microsoft Azure',
        'Google Cloud',
        'windows',
        'linux',
        'git',
      ]}
      skillType="tools"
    />
    <a
      href="https://drive.google.com/open?id=18tvzfBue-pJkFrnA2GyPi-oQhha3EqwJ"
      target="_blank"
    >
      All accomplishments here
    </a>
    <p></p>

    {close}
  </article>
);

export default About;
