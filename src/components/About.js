import React from 'react';
import Icon from './Icon';

const cloudinaryImg = imageName =>
  `https://res.cloudinary.com/amarcloud/image/upload/v1588864114/portfolio/images/${imageName}.jpg`;

const SkillSection = ({ skills, skillType }) => (
  <div className="SkillSection" style={{ marginBottom: '2rem' }}>
    <h3 className="CodePiece-subheader">{skillType}:</h3>
    <div className="CodePiece-made-with-icons">
      {skills.map(icon => (
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
      <span style={{ fontSize: '26px', marginRight: '.2rem' }}>👋</span> Hi
      My name is Amar Nagargoje .
    I am 20-Year-old Computer Science Student inspired by software products that connect communities , enhances creativity for human services & welfare
       {/* A full portfolio of my
      work can be found{' '}
      <a
        className="Code-major-link"
        href="javascript:;"
        onClick={() => handleOpenArticle('work')}
      >
        here
      </a> */}
      {' . '}You could jump straight to my{' '}
      <a
        className="Code-major-link"
        target="_blank"
        href = "https://drive.google.com/file/d/16jBYMRbF6hA0WpmQH338mLbXO3V9Xub8/view?usp=sharing"
      >
        resume
      </a>{' '}
      {/* or{' '}
      <a
        target="_blank"
        className="Code-major-link"
        href = "https://www.linkedin.com/in/amar-nagargoje/"
      >
        LinkedIn
      </a>{' '} */}
      or{' '}
      <a
        className="Code-major-link"
        href="javascript:;"
        onClick={() => handleOpenArticle('work')}
      >
        Projects
      </a>{' '}
      .
      <p>
        {' '}</p>
      {/* <iframe src="https://api.linkedin.com/v2/shares/1234?projection=(id,urn:li:person:-f_Ut43FoQ)" height="200" width="300" frameborder="0" allowfullscreen="" title="Embedded post"></iframe> */}

    </p>
    <h2 className="major">Experience:</h2>
    <h4 className="major" >1. JPMorgan Chase & Co</h4>
    <h4 className="major" > Virtual SDE Program</h4>
    
    <a target='_blank' href='https://drive.google.com/open?id=14I2FK3SYiVrb3NHZW2NY3wnmVgCEA7QB'>Click to View accomplishment</a>
    < p > For this project, a trader from the equities team has requested to add functionality to their dashboard to allow them to input specific information so they can monitor a new trading strategy.

    In order to do this task, I had to set up system so as the interface with the relevant financial data feed and then present this in a way that allows the traders to visualize and analyze this data in real time to deliver actionable insights.

    </p>
    <h4 className="major" >2. Team Lead: SIH2020</h4>
    < p > Lead team and Selected amongst 59 teams in Software + Hardware Edition
    for solving Electric Vehicle Ecosystem problem
    for VMware Pvt . Ltd
    </p>
    <h2 className="major">Skills:</h2>

    <SkillSection
      skills = {
        ['Python'
          ,'javascript', 'html', 'css', , 'Dart'
        ]
      }
      skillType="languages"
    />
    <SkillSection
      skills = {
        ['Node-js', 'reactjs', 'Flutter', 'flask','gatsby']
      }
      skillType="technology and frameworks"
    />
    < SkillSection
    skills = {
      ['firebasedb', 'mongodb','mysql' ]
    }
    skillType = "Backend services" /
      >
    <SkillSection
      skills = {
        ['Software Engineering Virtual Experience','Advanced Data Science Professional','AWS Fundamentals','Deep Learning - ONE FOURTH LABS','Machine Learning Specialization', 'Python for Data science', 'SQL', 'Building Interactive Apps']
      }
      skillType="Technology Accomplishments"
    />

    < SkillSection skills = {
      ['Ibm Watson Studio AI/ML', 'Microsoft Azure', 'Google Cloud', 'windows', 'linux', 'git',
      ]
    }
    skillType = "tools" / >
      <a href='https://drive.google.com/open?id=18tvzfBue-pJkFrnA2GyPi-oQhha3EqwJ' target='_blank'>All accomplishments here</a>
    {close}
  </article>
);

export default About;
