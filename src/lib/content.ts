export const stats = [
  { value: "Gold", label: "Medalist, 2025 Undergrad Category", accent: "text-gold-light" },
  { value: "10+", numeric: 10, suffix: "+", label: "Years Established", accent: "text-white" },
  { value: "40+", numeric: 40, suffix: "+", label: "Active Members", accent: "text-cyan" },
  { value: "6", numeric: 6, suffix: "", label: "Interdisciplinary Subteams", accent: "text-coral" },
] as const;

export const igemIntro =
  "iGEM is a highly accomplished international synthetic biology competition aimed primarily at undergraduates, " +
  "with the involvement of students, professors, and various stakeholders. " +
  "Interdisciplinary teams specializing in Wet Lab, Dry Lab, and Human Practices collaborate to create novel " +
  "synthetic biology oriented projects that can be applied in the real world!";

export const missionIntro =
  "mGEM is McMaster University's award-winning synthetic biology research and design team. " +
  "Each year, with the involvement of students, professors, stakeholders, and the surrounding community, " +
  "we design and build a synthetic biology project to tackle real-world problems.";

export const heroTagline =
  "We are an interdisciplinary team of students working to create synthetic biology solutions to big problems.";

export const subteams = [
  {
    id: "wetlab",
    name: "Wet Lab",
    short: "Designs, builds, and tests biological systems in the lab.",
    image: "/photos/about-us/WLgroup.PNG",
    imageAlt: "Wet Lab group photo",
    bar: "bg-maroon",
    text: "text-maroon-deep",
    body:
      "Wet lab is a subcommittee of the iGEM team that is responsible for developing biological background for the project. " +
      "This team is responsible for completing background literature reviews for the project to provide a rationale and proof of concept. " +
      "The team is also responsible for developing and designing synthetic biological systems that will be designed on benchling and built/testing in the lab. " +
      "During the spring and summer term the wet lab team will work in the lab to make the project into reality, " +
      "generating data that will be used to validate the project design.",
    icon: "/photos/about-us/tube.png",
  },
  {
    id: "drylab",
    name: "Dry Lab",
    short: "Models systems mathematically and builds project hardware.",
    image: "/photos/about-us/DL.jpg",
    imageAlt: "Dry Lab members",
    bar: "bg-cyan",
    text: "text-cyan-deep",
    body:
      "Dry Lab is a subcommittee of the McMaster-Canada iGEM team that is responsible for developing mathematical models " +
      "to analyze data collected by the Wet Lab team, creating kinetic and related models to validate the system design, " +
      "and designing hardware components (i.e. the physical structure of the final system). " +
      "The DL team will also utilize a variety of softwares including SimBiology, Python, and Benchling, and hardware components. " +
      "Although experience in these programs is great, it is not required in order to apply. " +
      "Above all, DL values members that are dedicated and eager to learn.",
    icon: "/photos/about-us/glass.png",
  },
  {
    id: "hp",
    name: "Human Practices",
    short: "Explores real-world impact and ethical implications.",
    image: "/photos/about-us/HP1.jpg",
    imageAlt: "Human Practices members",
    bar: "bg-amber",
    text: "text-amber-deep",
    body:
      "The Human Practices Subcommittee explores the real-world application of our project and its social, economic, and environmental implications. " +
      "We actively reflect on the impact our project will have on the world and how the world — different perspectives, views, and considerations — impacts our project. " +
      "As the goal of our iGEM team is to tackle global challenges by using synthetic biology to solve problems, " +
      "HP strives to ensure this work is reflective, responsive, and responsible.",
    icon: "/photos/about-us/gears.png",
  },
  {
    id: "media",
    name: "Media",
    short: "Builds our brand and communicates science visually.",
    image: "/photos/about-us/Media.jpg",
    imageAlt: "Media team members",
    bar: "bg-violet",
    text: "text-violet-deep",
    body:
      "The Media Subcommittee is composed of the creatives of the team that focuses on building iGEM's brand and " +
      "creating the visuals to help communicate our project to the general public and at the iGEM jamboree competition. " +
      "Our Design members are responsible for creating and managing the brand for iGEM and managing major projects/deliveries. " +
      "Our social media are pivotal with increasing our outreach within our community and improve our communication with members.",
    icon: "/photos/about-us/video.png",
  },
  {
    id: "finance",
    name: "Finance & Sponsorship",
    short: "Secures the necessary funding and sponsorship.",
    image: "/photos/about-us/Sponsorship.jpg",
    imageAlt: "Admin team members",
    bar: "bg-coral",
    text: "text-coral-deep",
    body:
      "The Finance Subcommittee is dedicated to securing the necessary funding and sponsorships to enable our team's participation " +
      "in the iGEM Jamboree in Paris. This team focuses on identifying potential funding sources, developing sponsorship proposals, " +
      "and building relationships with sponsors and donors. Our responsibilities include budget planning, financial tracking, " +
      "and ensuring that our team has the resources needed to successfully complete our project. " +
      "The Finance Team plays a critical role in ensuring that our team can achieve its goals by effectively managing " +
      "financial resources and securing the support of key stakeholders.",
    icon: "/photos/about-us/plane.png",
  },
  {
    id: "webDev",
    name: "Web Dev",
    short: "Codes scientific progress into websites.",
    image: "/photos/about-us/webdev.jpg",
    imageAlt: "Web Dev lead",
    bar: "bg-coral",
    text: "text-coral-deep",
    body:
      "Our Web Dev members work towards the development of mGEM's personal website and the team's wiki for the competition " +
      "to document all of our findings in a clear and visually appealing way. " +
      "Aside from updating mGEM's personal wiki, their main role is to work together with the media team to plan a layout for the team's Wiki. " +
      "Throughout the project development process, they're responsible for keeping the website updated with new designs and information. " +
      "All of the other subteams' hard work is recorded on the website for transparency.",
    icon: "/photos/about-us/palette.png",
  },
] as const;

export const projects = {
  current: {
    year: "2025",
    title: "REACT - Renal Ease-of-use Assessment for Clinical Transplants",
    wiki: "https://2025.igem.wiki/mcmaster-canada/",
    video: "/Videos/React Promo Vid.mp4",
  },
  past: [
    {
      year: "2024",
      title: "Hermes Project",
      description:
        "Development of a biosensor system for real-time monitoring and analysis.",
      href: "https://2024.igem.wiki/mcmaster-canada/",
      video: "/Videos/Promo Video McMaster_Canada Final.mp4",
    },
    {
      year: "2023",
      title: "BacTrack",
      description:
        "Development of an ingestible biosensor for the in vivo characterization of gut metabolites related to " +
        "major depressive disorder through a CRISPR mediated reporting system.",
      href: "https://2023.igem.wiki/mcmaster-canada/",
      image: "/photos/projects/2023.png",
    },
    {
      year: "2022",
      title: "2022 Project",
      description:
        "Development of a colorimetric bacterial diagnostic for the characterization of gut metabolite markers for Major Depressive disorder.",
      href: "https://2022.igem.wiki/mcmaster-canada/",
      image: "/photos/projects/2022.png",
    },
    {
      year: "2023",
      title: "Publication",
      description:
        "Peer-reviewed HYPOTHESIS AND THEORY article published in Frontiers Systems Biology detailing the 2023 BacTrack project.",
      href: "https://www.frontiersin.org/articles/10.3389/fsysb.2023.1274184/full",
      image: "/photos/projects/publicationThumbnail.png",
      badge: "Peer-reviewed",
    },
  ],
} as const;



export const getInvolved = {
  intro:
    "Here at mGEM, we're more than just a research team; we're a dynamic community passionate about synthetic biology! " +
    "If you're interested in exploring the fascinating world of genetic engineering and interdisciplinary collaboration, " +
    "this is the place for you!",
  joinTeam: {
    title: "Join The Team",
    body:
      "We've wrapped up recruitment for the 2026 cycle and are excited to welcome our new team members. " +
      "If you're eager to join mGEM and contribute to groundbreaking research throughout the school year, " +
      "the applications for next year's cycle will open in the fall term. " +
      "Whether you're interested in Wet Lab, Dry Lab, Human Practices, or our Administrative subteams, " +
      "it's a remarkable opportunity to dive deep into the world of genetic engineering and make a real impact. " + "To stay the most updated on when our team applications open, follow us on Instagram @igemmcmaster.",
  },
  mailingListBlurb:
  "Subscribe to our mailing list to get the latest updates on workshops, opportunities, and all the exciting things we are working on!",
} as const;

export const testimonies = [
  {
    quote:
      "Joining iGEM has been one of the best decisions I have made thus far in my academic career. " +
      "It has been instrumental in my development as a scientist and as a person. " +
      "It has provided me with skills that are setting me up for success in a variety of areas, " +
      "all while connecting me with an inspiring group of people!",
    name: "Isabella Valentini",
    title: "Senior Wet Lab Member",
  },
  {
    quote:
      "My involvement in iGEM has been a transformative journey, not only enriching my academic endeavors " +
      "but also cultivating a diverse skill set that extends beyond the confines of the laboratory. " +
      "iGEM has positioned me for success in future academic and professional pursuits. " +
      "The lessons learned and experiences gained will undoubtedly shape my trajectory as I continue to navigate my journey in science and beyond.",
    name: "Alice Pao",
    title: "Senior Wet Lab Member",
  },
  {
    quote:
      "My experience in iGEM has been nothing short of extraordinary. " +
      "Unlike other iGEM teams that focus on recruiting only upper years and PhD students, " +
      "iGEM McMaster takes a chance on the young and aspiring - we focus on teaching and mentoring the future scientists of our generation. " +
      "The hope of iGEM is to take young scientists interested in synthetic biology and cultivate them into researchers that can go on to make an impact elsewhere. " +
      "iGEM is not just a club at McMaster. It's a student led internationally known research team that impacts the field of synthetic biology " +
      "along with the lives and future of those involved in the team.",
    name: "Amanda Densil",
    title: "Wet Lab Mentor",
  },
] as const;

export const sponsorsPitch = {
  thanks:
    "Thank you to all our sponsors that make mcmaster iGEM possible!",
  cta: "Interested in sponsorship or collaboration opportunities? Learn more about our sponsorship package by getting in touch with us.",
  email: "igem@mcmaster.ca",
} as const;

export const showcasePhotos = [
  { src: "/photos/home/2025jamboree.png", alt: "mGEM at the 2025 iGEM Jamboree", span: "md:col-span-2 md:row-span-2" },
  { src: "/photos/home/teamstatue.jpg", alt: "Team photo at the statue", span: "" },
  { src: "/photos/home/2025booth.jpg", alt: "mGEM at the 2026 booth", span: "" },
  { src: "/photos/home/social.jpeg", alt: "mGEM social event", span: "md:col-span-2" }
] as const;

export const socials = [
  { link: "mailto:igem@mcmaster.ca", label: "Email" },
  { link: "https://www.instagram.com/igemmcmaster/?hl=en", label: "Instagram" },
  { link: "https://www.linkedin.com/company/igem-mcmaster/", label: "LinkedIn" },
  { link: "https://teams.igem.org/5856", label: "iGEM Team Page" },
] as const;

export const landAcknowledgment =
  "McMaster iGEM recognizes and acknowledges that it is located on the traditional territories of the Mississauga and Haudenosaunee nations, " +
  "and within the lands protected by the \"Dish with One Spoon\" wampum agreement.";

export const communityInitiatives = [
  {
    eyebrow: "A 3-part animated series and storybook",
    title: "The Inquirer's Quest",
    image: "/photos/projects/inquirer1.JPG",
    images: [
      "/photos/projects/inquirer1.JPG",
      "/photos/projects/inquirer2.JPG",
      "/photos/projects/inquirer3.JPG",
    ],
    description:
      "At its heart, this initiative was about connection: between our team and our stakeholders, between complex biology and accessible storytelling, " +
      "and between research and the people it is meant to serve. " +
      "What began as data and stakeholder insights became landscapes, characters, and metaphors that carried meaning in ways numbers alone could not. " +
      "Our protagonist, the Inquirer, represents a chimera of all three of our research subteams. " +
      "However, the Inquirer is not alone in their journey. From exploring their community to the inner world of the body, " +
      "they're joined by a diverse cast of characters, just like the internal journal of our team being rooted in collaboration. " +
      "Just as important as the science itself was the process of giving it form, through illustration and animation that invited audiences " +
      "to not only learn but to feel the story unfolding. " +
      "What this project ultimately demonstrates is that science is not complete when the experiment ends or the prototype is built. " +
      "In that sense, The Inquirer's Quest is not just our story but is an invitation to see science as a journey that belongs to everyone. " +
      "This project was a quiet yet impactful return to our purpose, reminding us that good science is not only what we build but how we listen.",
  },
  {
    eyebrow: "Inspiring high school students",
    title: "Shad Canada Workshop",
    image: "/photos/projects/shad1.JPG",
    images: [
      "/photos/projects/shad2.JPG",
      "/photos/projects/shad3.JPG",
      "/photos/projects/shad4.JPG",
    ],
    description:
      "Last year, the McMaster iGEM team ran a workshop in partnership with SHAD McMaster, " +
      "a month-long live-in program hosted at universities across Canada for groups of about 60 students from across Canada. " +
      "In this workshop, students were introduced to 3 different aspects of iGEM and synthetic biology through hands-on activities " +
      "that promoted curiosity and a passion for science. " +
      "The students participated in a pipetting and plate streaking workshop with our wet lab team; " +
      "an ethics debate room with our human practices team; and a tutorial and digital escape room with our dry lab team. " +
      "By creating an opportunity for students to explore synthetic biology in an interactive and activity-based model, " +
      "we allowed students to explore their interest in science and foster a space to ask questions and learn. " +
      "At the end of the workshop all participants were given access to an anonymous feedback form where they could share their opinions and experience. " +
      "By allowing the students to share how they felt during the workshop and actively encouraging constructive feedback on how our team could improve, " +
      "we fostered two-way dialogue in which our team learned from our participants just as much as they learned from us.",
  },
  {
    eyebrow: "Officially publishing at iGEM",
    title: "Vector Review Article",
    image: "/photos/projects/vector1.JPG",
    images: [
      "/photos/projects/vector1.JPG",
      "/photos/projects/vector2.JPG",
    ],
    description:
      "In 2025, our team had the opportunity to contribute to Vector, an unofficial iGEM proceedings journal hosted by Maastricht University. " +
      "Vector is a unique platform created by and for iGEM teams, featuring original research, literature reviews, conceptual articles, and interviews. " +
      "Additionally, we were ranked as one of the Top 3 submissions, a testament to our scientific, creative and innovative contributions to Vector. " +
      "Our submission that year was a review on acute graft rejection, the medical challenge at the center of our 2025 iGEM project. " +
      "In our review, we explained how current diagnostic methods such as biopsies, serum creatinine testing, and donor-derived cell-free DNA assays " +
      "fall short because they are invasive, costly, slow, or difficult to access. " +
      "We chose this topic because it highlights both an urgent medical need and the broader question of who benefits from scientific progress. " +
      "By situating these scientific tools within the lived realities of patients and clinicians, we wanted to show that improving diagnostics " +
      "is not just a technical challenge, but also a matter of accessibility and fairness in healthcare. " +
      "Publishing in Vector was an important step in making our voices, as students, part of a wider scientific and social conversation.",
  },
  {
    eyebrow: "Integrating sustainability with efficiency",
    title: "Waste Tracking ",
    image: "/photos/projects/waste1.JPG",
    images: [
      "/photos/projects/waste1.JPG",
      "/photos/projects/waste2.JPG",
      "/photos/projects/waste3.JPG",
    ],
    description:
      "The UN Environmental Programme ranks plastic pollution as one of the top 10 global environmental challenges, " +
      "and lab research is one of its many significant contributors. " +
      "In light of this issue, mGEM's wet lab team undertook a unique waste tracking initiative. " +
      "During August of 2025, they tracked all the waste generated in the lab, and used the resulting data, along with their own reflections, " +
      "to create a comprehensive guide designed to help future iGEM teams reduce waste generated by their own lab process. " +
      "Ultimately, waste tracking data is underestimated due to various assumptions made in the tracking process, and inevitable human error. " +
      "Despite this, tracking lab waste is essential for increasing the transparency of lab practices that are often hidden to the public. " +
      "Reporting these numbers is an essential starting point for initiating large-scale efforts to reduce lab waste. " +
      "After completing the project, we found that actively tracking waste not only reduced overall material use but encouraged us " +
      "to prioritize environmental considerations during protocol design. " +
      "This shift in mindset made waste reduction an integral part of our routine, rather than an afterthought. " +
      "The integration of waste-tracking with lab protocols would not only improve efficiency but also further align our scientific practice " +
      "with the broader goal of creating more sustainable and responsible research methods.",
  },
  {
    eyebrow: "Skills farming for 6 weeks",
    title: "Health Innovation Bootcamp (HIB)",
    image: "/photos/projects/hib1.JPG",
    images: [
      "/photos/projects/hib1.JPG",
      "/photos/projects/hib2.JPG",
    ],
    description:
      "Hosted by The Clinic, McMaster's health innovation hub, this bootcamp was designed to provide young innovators with the building blocks of entrepreneurship. " +
      "Each of the six individual sessions focused on distilling specific concepts through means of immersive, project-focused education. " +
      "Our entrepreneurship team's experiences in the HIB informed the creation of our business plan in several ways: " +
      "our pitch deck was modelled after the structure presented in week 4 of HIB; " +
      "the need statement framework and problem validation skills taught in week 1 solidified our project direction; " +
      "and following HIB's conclusion, the entrepreneurship team hosted a workshop focused on delivering the most important tools to the rest of the mGEM team. " +
      "Beyond the research, interacting with clinicians and other stakeholders throughout this process highlighted the importance of the patient experience, " +
      "inspiring us to create an MVP with instructions to simulate what the patients would actually receive. " +
      "We sought to spread the nuanced understanding of creating a health innovation our team was left with to the McMaster undergraduate community. " +
      "We shared these learning lessons with undergraduate students across various fields at McMaster University through our Health Entrepreneurship Workshop.",
  },
] as const;
