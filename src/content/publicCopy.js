// Review-ready public copy based on the current career source of truth.
// Keep private evidence notes, strategy, and unverified metrics out of this module.
export const homeCopy = {
  eyebrow: 'Design Technologist',
  title: 'I turn design ideas into working interfaces.',
  introduction: 'I’m Clifford Nelson. I design and build interactive prototypes, reusable components, and tools for designers, engineers, and content teams. My work spans web, mobile, and TV, with a focus on design systems and carrying design intent into working code.',
  workLink: 'Explore my work',
  resumeLink: 'View résumé',
};

export const aboutCopy = {
  eyebrow: 'About',
  title: 'I use code as a design medium.',
  introduction: 'I use it to explore an idea and refine how it looks, moves, and works.',
  paragraphs: [
    'At Netflix, I built research prototypes across TV, web, and mobile, and worked with designers to translate Figma components into React. At Warner Bros. Discovery, I created browser utilities for environment navigation and content review, alongside refinements to CMS interfaces.',
    'My work at Google, Uber, and Intuit includes creative prototypes, content tools, and collaboration across design, research, and engineering.',
    'I’m especially interested in design systems: reusable components, clear interaction patterns, and tools that help teams carry design intent into working software.',
  ],
};

export const selectedWorkCopy = 'These projects show how I move from a practical problem to a usable interface, with careful attention to the workflow behind it.';

export const contactCopy = {
  heading: 'Let’s build something useful.',
  sentence: 'Interested in working together on design systems, prototypes, or tools? Get in touch.',
};

export const featuredWork = [
  {
    slug: 'uber-eats-pics',
    title: 'Uber Eats image tool',
    subtitle: 'One photo. Multiple branded formats.',
    summary: 'I designed and engineered a browser tool that let Uber Eats restaurants turn one food photo into branded social images. Restaurants could adjust the framing and download their images; producers could configure campaign themes in Contentful. I owned the UI/UX and tool workflow, and implemented a visual designer’s styling mockup.',
    role: 'I owned the overall tool and workflow design, UI/UX, engineering, and Contentful configuration. A visual designer supplied a styling mockup that I implemented in code.',
    label: 'Professional tool',
    sections: [
      {
        heading: 'The problem',
        body: 'Restaurants had food photos but often needed a designer to turn them into branded social content. I built a browser tool that put image preparation in their hands and let producers configure campaign versions.',
      },
      {
        heading: 'Design decisions',
        body: 'One upload generated multiple social formats with crops and branding arranged for each output. Users could adjust framing and graphic colors, then export PNG or JPEG files individually or as a ZIP. Producers used Contentful to create themed versions with the same image workflow.',
      },
      {
        heading: 'Outcome',
        body: 'The tool went live for restaurants and Uber Eats producers. After my initial contract, I provided part-time support for a few months, then trained the incoming developer and handed over the tool.',
      },
    ],
  },
  {
    slug: 'write-click',
    title: 'Write Click',
    subtitle: 'Page content, ready for review.',
    summary: 'I designed and built a browser tool that brings page titles, descriptions, and social sharing metadata into one report, followed by images with their alt text. It grew from an image-review tool I started while at WBD, giving writers a way to check this content without searching through page code.',
    role: 'I began an image-focused inspector while at WBD, then expanded the idea into broader content review for writers.',
    label: 'Work in progress',
    sections: [
      {
        heading: 'The problem',
        body: 'Writers reviewed alt text by finding an image on a preview page, opening developer tools, and searching its markup. They repeated that process for each image, including images inside large carousels.',
      },
      {
        heading: 'Design and engineering',
        body: 'I started with image and alt-text review, then expanded the tool as I recognized the need to review page and social-sharing metadata too. A scan produces one report with page titles, descriptions, social-sharing metadata, and images with their alt text.',
      },
      {
        heading: 'A difficult edge case',
        body: 'Some images had not loaded yet. I made the scan move through pages and carousels to reveal them before collecting the report.',
      },
      {
        heading: 'Early response',
        body: 'I shared a couple of early copies with colleagues, and a couple of recipients were enthusiastic about using them.',
      },
    ],
  },
  {
    slug: 'laaw-life',
    title: 'LAAW.life',
    subtitle: 'A clearer view of the food-truck schedule.',
    summary: 'I put the brewery’s existing food-truck calendar on one easy-to-reach page. Employees told me they used that original version to check the schedule. I later added a readable Today card and remembered location preference, combining my own coding with substantial AI assistance while directing and refining the implementation.',
    role: 'I built the original page. For the recent update, I made the product and design decisions and directed an AI-assisted implementation.',
    label: 'Independent project · 2022',
    externalUrl: 'https://laaw.life',
    sections: [
      {
        heading: 'The original page',
        body: 'Finding the food-truck schedule meant navigating through the brewery’s website. I made a simple page that embedded its existing calendar. The page stayed unchanged for years, and brewery employees told me they used it to check the schedule.',
      },
      {
        heading: 'A recent update',
        body: 'The embedded calendar was hard to read on a phone, and I could not change its styling. I added a Today card so visitors could see the day’s schedule at a glance. The site also remembers a visitor’s location preference, so they do not have to scroll past other locations’ calendars.',
      },
      {
        heading: 'How I worked',
        body: 'I combined my own coding with substantial AI help for the recent update. I made the product and design decisions, directed the implementation, and refined it through back-and-forth about design intent.',
      },
    ],
  },
];

export const publicProfileLinks = {
  linkedin: 'https://www.linkedin.com/in/clifford-nelson-bba47459/',
};
