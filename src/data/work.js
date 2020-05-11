const cloudinaryImg = imageName =>
  `https://res.cloudinary.com/amarcloud/image/upload/v1588864114/portfolio/images/${imageName}.jpg`;

const cloudinarygif = imageName =>
  `https://res.cloudinary.com/amarcloud/image/upload/v1588954336/portfolio/images/${imageName}.gif`;

const code = [
  {
    title: 'Live COVID-19 Update',
    subtitle: 'React Native ',
    img: cloudinarygif('gif'),
    href: 'https://iaamar.github.io/live-covid/',
    github: 'https://github.com/iaamar/live-covid',
    more: ' Click on Preview 👇 to go live',
    techDetails: `
          React Native is an open - source mobile application framework created by Facebook.It is used to develop applications
          for Android, iOS, Web and UWP by enabling developers to use React along with native platform capabilities. 
          Api are used to fetch live data from offlicial website 
          `,
    tech: [
      'reactjs',
      'javascript',
      'html',
      'css',
      'node-js',
    ]
  },
  {
    
    title: 'Learn ',
    subtitle: 'Teaching App for Intellectually Disabled Children',
    img: cloudinarygif('learnapp'),
    href:'',
    github: 'https://github.com/iaamar/Learn',
    more:
      'Intellectually disabled children are weak in understanding environment thus this flutter app is created to teach disabled people / children using Text-to-Speech Api as user can hear speech in form of voice weather the selected option is wrong or right and hence learning happens. DEMO 👇',
    techDetails: `
      Google cloud Platform provides as wide variety of Api's on of which is Text to Speech API  is used and flutter for interface `,
    tech: ['Google Cloud', 'flutter']
  },
  {
    title: 'Teachable Machine',
    subtitle: 'Prototype of realtime vedio detection using Machine Learning',
    img: cloudinarygif('classifygif'),
    href: '',
    github: 'https://github.com/iaamar/realtime-vedio-classifier',
    more:
      ' Preview 👇',
    tech: ['reactjs','javascript','Python', 'html','css'],
    techDetails: `ML Model is build using Python , HTML CSS and javascript is used to build UI and functionality `
  },
  {
    title: 'Care +',
    subtitle: 'Health Care App & Web Application  for Predicting ECG using ML Technique (SVM) using IOT',
    img: cloudinaryImg(''),
    href: '',
    github: 'https://github.com/iaamar/Heart-rate-react-native',
    tech: ['html','css','Python','Firebasedb','javascript','reactjs','flutter'],
    more: ``,
    techDetails: `Heath Care depends on domin of IOT for data processing thus python was used to integrate IOT Devices and HTML CSS were used for UI and javascript for performing CRUD operations in Firebase Database . `
  },
    {
      title: 'Design Build',
      subtitle: 'Flutter Login UI',
      img: cloudinarygif('teddy'),
      href: '',
      github: 'https://github.com/iaamar/teddyloginui',
      more: 'DEMO 👇',
      techDetails: `Flare Flutter gives interactive animation packages to buid flutter app , following is an example`,
      tech: ['Flutter',]
    },
    {
      title: 'Travel App UI',
      subtitle: 'UI',
      img: cloudinarygif('travel'),
      href: '',
      github: 'https://github.com/iaamar/travelui',
      more: 'Preview 👇',
      techDetails: `Flare Flutter gives interactive animation packages to buid flutter app , following is an example`,
      tech: ['flutter']
    },
    
];

export { code };
