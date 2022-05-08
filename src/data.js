export const educationData = [
  {
    school: "Platt College",
    copy: {
      description: "In 2014 I graduated from Platt College in San Diego, earning a <b>Bachelors Degree in Web Design</b>, and receiving the honor of valedictorian of my class with a <b>4.0 GPA</b>.",
      associates: {
        gpa: "4.0",
        title: "Associates Degree, Graphic Design",
        date: "2011–2012",
      },
      bachelors: {
        gpa: "4.0",
        title: "Bachelors Degree, Media Design",
        date: "2013–2014",
      },
    },
    courses: {
      associates: [
        "Fundamentals Illustration",
        "History of Typography",
        "Video editing",
        "3D modeling / rendering",
        "Print design",
        "Graphic composition",
      ],
      bachelors: [
        "Fundamentals of Web Design",
        "Web Campaign Implementation",
        "Design for Usability",
        "Responsive Web Design",
        "Programming for Designers",
        "Scripting for the Web",
        "Content Management Systems",
      ]

    }
  }
];

export const projectData = [
  {
    title: "Doodleverse",
    description: []
  },
  {
    title: "Uber Eats Pics",
    description: []
  },
  {
    title: "Windshield Wipers",
    description: []
  },
  {
    title: "Lights Out",
    description: []
  },
];

// import { Position } from './position';

export const resumeData = [

  {
    title: "Teaching Assistant",
    date: "2013–2014",
    employer: "Platt College",
    employerSecondary: null,
    jobDesc: "While attending Platt College full-time, in my Junior/Senior years, I also served as a Teachers Assistant in the lower level and upper level classes. Responsibilities include helping students with design and technical advise in the Adobe Creative Suite and Front-End Technologies.",
    list: [
      "Assist teachers in class size of more than 10 students",
      "Provide technical and design advice to students utilizing the Adobe Creative Suite and Front-End Technologies",
      "Maintain classroom functionality",
      "Take detailed attendance reports",
      "Tutor students after class hours",
    ],
    tags: [{title:"4.0 GPA",type:"education"}],
  },
  {
    title: "Interaction Designer",
    date: "2013-2014",
    employer: "CMS Code, Inc.",
    employerSecondary: null,
    jobDesc: "Utilize several CMS technologies to deliver web registration products to fundraising clients. Responsibilities include working directly with clients to define and deliver registration forms, donation forms, and web/marketing presence. Also served as Interaction Designer and Prototyper for company development project. Most notable accomplishment was taking an existing static donation form template and adding responsiveness to fit any size screen from small mobile to large desktop.",
    list: [
      "Environment: HTML/LESS/JavaScript/PHP/WordPress/BlackBaudCMS",
      "Work directly with clients, via phone and in person working sessions",
      "Writing and editing content",
      "Determining technical requirements",
      "Designing new web-page layouts",
      "Updating existing websites and web forms by adding responsive web design techniques",
      "Manage Source Control",
    ],
    tags: [{title:"Prototyping"}, {title:"WordPress",type:"cms"}]
  },
  {
    title: "Front-End Web Developer",
    date: "2014-2014",
    employer: "Gaslamp Media",
    employerSecondary: null,
    jobDesc: "Responsibilities include developing design compositions into production ready templates using CMS technologies such as WordPress and Drupal. As a side project I Designed & Developed a WordPress Plug-in that would calculate price of herbs from small amounts to bulk pricing.",
    list: [
      "Environment: HTML/LESS/JavaScript/PHP/WordPress",
      "Develop websites in a CMS, WordPress & Drupal, production environment.",
      "Utilizing web technologies, frameworks and skeleton themes to quickly produce unique CMS themes.",
      "Collaborate directly with clients, via phone and in person working sessions.",
      "UI/UX design mocks to prototypes and working products",
      "Design and implement new features and tools",
      "Optimize web applications to maximize speed and scale for clients",
    ],
    tags: [{title:"Grunt"}, {title:"LESS"}, {title:"WordPress",type:"cms"}],
  },
  {
    title: "Interaction Designer",
    date: "2014-2014",
    employer: "MOR Furniture for less",
    employerSecondary: null,
    jobDesc: "Responsibilities in this role include partnering with stakeholders to re-imagine and create new experiences for customer information gathering and employee education/training. In the several weeks in this role I delivered an internal Multi-Installation of WordPress CMS that severed as the foundation for MOR Xpress, an employee education platform & new concepts for customer credit approval processing that removed the burden of filing out multiple forms from the customer.",
    list: [
      "Environment: HTML/LESS/JavaScript/PHP/WordPress",
      "User Interface / User Experience Design & Development",
      "WordPress CMS, custom template",
      "Integration with established LDAP",
      "Wire-framing and interaction design",
    ],
    tags: [{title:"WordPress",type:"cms"}, {title:"HTML"}, {title:"PHP"}],
  },
  {
    title: "UI/UX Design Engineer",
    date: "2014-2015",
    employer: "IBM",
    employerSecondary: "Experis IT]",
    jobDesc: "Responsible for designing and implementing user interactions and the interface for the Military logistics platforms: Army BCS3 & Navy One-touch. Partner with client stakeholders to define and deliver critical features for equipment procurement and tracking. I was brought into this role to help with usability and design of already established solutions. Manipulated Java to define style classes of web elements and created those classes in a LESS pre processor.",
    list: [
      "Environment: HTML/LESS/JavaScript/Java",
      "User Interface / User Experience Design & Development",
      "Build reusable code and libraries",
      "Provide feedback about the technical feasibility and usability",
      "Collaborate with other team members and stakeholders",
    ],
    tags: [{title:"UX/UI"}, {title:"SCSS"}, {title:"JAVA"}],
  },
  {
    title: "Front-End Software Engineer",
    date: "2015-2016",
    employer: "Intuit Turbotax",
    employerSecondary: "Integrated Associates",
    jobDesc: "Responsible for delivering engaging responsive marketing content to help our customers understand the offerings and choose the right product for them through landing pages, product up-sells, A/B tests, via a wide range of front-end technologies.",
    list: [
      "Environment: HTML/LESS/JavaScript/Handlebars",
      "Convert wire-frames and mock-ups into prototype pages and applications.",
      "Partner effectively with all team members to deliver against commitments",
      "Contribute to early quality activities, including peer reviews of estimates, designs and code",
      "Resolve defects/bugs during QA testing, pre-production, production, and post-release patches",
      "Agile Development, SCRUM, and Extreme Programming methodologies like MOB Programming",
    ],
    tags: [{title:"Handlebars"}, {title:"SCSS"}],
  },
  {
    title: "Experience Design Prototyper",
    date: "2016–2017",
    employer: "Intuit Turbotax",
    employerSecondary: "Integrated Associates",
    jobDesc: "Experience Design (XD) Prototyping is the synthesis of design and development. In this role I’d partner with researchers, product managers and other designers to define and deliver new features, test new concepts and assist with final implementation. Details are critical as we’d iterate on complex interactions, animations and pixel-perfect visual designs.",
    list: [
      "Environment: HTML/LESS/JavaScript/PHP/AngularJS",
      "Explore new product concepts through delivery prototypes using the latest in front-end technologies including AngularJS, Google Material, and GSAP",
      "Engage with customers and learn quickly through iterative prototyping",
      "Advise, collaborate with, and synthesize feedback from designers and researchers",
      "Fulfill several project requests simultaneously while meeting tight deadlines",
      "Work with front-end engineers to ensure delivery of intended design",
    ],
    tags: [
      {title:"GSAP",type:"primary"},
      {title:"Angular",type:"primary"},
      {title:"UX/UI", type:"primary"},
      {title:"prototyping",type:"primary"},
      {title:"html", type:"secodary"},
      {title:"css", type:"secodary"},
      {title:"JS", type:"secodary"},
    ],
  },
  {
    title: "Senior Creative Developer",
    date: "2017-2017",
    employer: "AKQA",
    employerSecondary: "on-site with undisclosed client",
    jobDesc: "Working as a resource in Marketing and Communications for tech company in Sunnyvale/Cupertino. Developing direct mailers and .com experiences, based on design compositions. Pixel perfect rendering of experiences from design to delivery is key. Rapid turn around times.",
    list: [
      "Environment: HTML/SCSS/Handlebars",
      "Developing direct mailers and .com experiences",
      "Contribute to internal development tools",
    ],
    tags: [
      {title:"Pixel Perfect", type:"primary"},
      {title:"html", type:"secodary"},
      {title:"css", type:"secodary"},
      {title:"YAML", type:"secodary"},
    ],
  },
  {
    title: "Design Engineer",
    date: "2017-2018",
    employer: "Uber",
    employerSecondary: "TEK Systems",
    jobDesc: "  Collaborate closely with Design team to deliver engaging experiences using the latest in front-end technologies like React. Responsible for customer facing efforts such as the blog, about and FAQ pages. Design and build internal tools to make tedious and/or difficult tasks easy and efficient for non-technical content providers.",
    list: [
      "Environment: HTML/SCSS/JS/React",
      "Build internal tools to aid marketing efforts",
      "Integrate with Contentful CMS",
    ],
    tags: [
      {title:"Design Systems",type:"primary"},
      {title:"React",type:"primary"},
      {title:"UX/UI", type:"primary"},
      {title:"Tooling",type:"primary"},
      {title:"html", type:"secodary"},
      {title:"css", type:"secodary"},
      {title:"JS", type:"secodary"},
    ],
  },
  {
    title: "Creative Technologist / Prototyper",
    date: "2018-2019",
    employer: "Google",
    employerSecondary: "Synergis Creative",
    jobDesc: "Contribute to the 10 year vision of Google’s personality and brand. Generate prototypes to rapidly iterate through ideas in low to high-fidelity. Game design prototyping. Homepage prototyping for Doodles.",
    list: [
      "Contribute to Doodle team when available",
      "Create prototypes to quickly exploring Doodle and game concepts",
      "Motion Design, Game Design, UX Design",
      "Environments are ad-hoc, typically newest Angular + Material",
    ],
    tags: [
      {title:"GSAP",type:"primary"},
      {title:"Angular",type:"primary"},
      {title:"UX/UI", type:"primary"},
      {title:"prototyping",type:"primary"},
      {title:"html", type:"secodary"},
      {title:"css", type:"secodary"},
      {title:"JS", type:"secodary"},
    ],
  },
  {
    title: "Design Prototyper",
    date: "2019-2020",
    employer: "Netflix",
    employerSecondary: "First Professional Services",
    jobDesc: "Using web technologies to create hi-fidelity prototypes to simulate multiple environments for user testing, research and design feasibility. Contributing to core design systems and audience growth. Platform include but not limited to TV, web and mobile.",
    list: [
      "React, Redux, GSAP, PIXI",
      "Create prototypes to quickly exploring design concepts",
      "Motion Design, Game Design, UX Design",
      "Environments are ad-hoc, typically create-react-app plus internal design systems",
    ],
    tags: [
      {title:"React",type:"primary"},
      {title:"GSAP",type:"primary"},
      {title:"PIXI",type:"primary"},
      {title:"prototyping",type:"primary"},
      {title:"UX/UI", type:"primary"},
      {title:"html", type:"secodary"},
      {title:"css", type:"secodary"},
      {title:"JS", type:"secodary"},
      {title:"Motion/Interaction Design", type:"tertiary"},
    ]

  },
  {
    title: "Web Design",
    date: "2020-2021",
    employer: "Intuit Turbotax",
    employerSecondary: "PRO Unlimited",
    jobDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    list: [],
    tags: [
      {title:"html", type:"secodary"},
      {title:"css", type:"secodary"},
      {title:"Wordpress",type:"tertiary"},
    ],
  },
  {
    title: "Full Stack Design",
    date: "2021-PRESENT",
    employer: "Warner Brothers Discovery / HBO Max",
    employerSecondary: null,
    jobDesc: "Supporting the growth marketing department in driving the visual and technical success for the creative and visual execution of WarnerMedia’s digital and online marketing channels. Focused on coding and creating at the same time with the latest innovations in technology, HTML, CSS and beyond.",
    list: [],
    tags: [
      {title:"GSAP",type:"primary"},
      {title:"prototyping",type:"primary"},
      {title:"html", type:"secodary"},
      {title:"css", type:"secodary"},
      {title:"JS", type:"secodary"},
      {title:"Drupal",type:"tertiary"},
    ],
  },

  // {
  //   title: "title",
  //   date: "1",
  //   employer: "employee",
  //   jobDesc: "",
  //   list: ["",""],
  //   tags: ["",""],
  // },

];

export const headerTitles = 
  [
    {
      path: "/",
      phrase: "Hi there! I'm..."
    },
    {
      path: "/about",
      phrase: "Let's taco bout"
    },
    {
      path: "/resume",
      phrase: "Design Technologist"
    },
    {
      path: "/projects",
      phrase: "Made by"
    }
  ]
  

