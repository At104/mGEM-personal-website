export type SponsorTierName = "Gold" | "Silver" | "Bronze";

export type Sponsor = {
  name: string;
  link: string;
  icon?: string;
  description: string;
};

export type SponsorTier = {
  tier: SponsorTierName;
  sponsors: Sponsor[];
};

export type SponsorBioTheme = {
  bioType: string;
  bioTag: string;
  blurb: string;
  section: string;
  grid: string;
  inverted: boolean;
  accent: string;
  accentSoft: string;
  accentText: string;
  pill: string;
  laneLabel: string;
  /** Metallic card surface */
  card: string;
  cardHover: string;
  logoFrame: string;
  metalSheen: string;
  linkText: string;
  headingHover: string;
};

export const sponsorTierMeta: Record<
  SponsorTierName,
  {
    label: string;
    subtitle: string;
    rank: string;
    bio: SponsorBioTheme;
  }
> = {
  Gold: {
    label: "Gold",
    subtitle: "Our leading partners for the season",
    rank: "1",
    bio: {
      bioType: "mRNA",
      bioTag: "5′ cap · poly-A tail · ORF",
      blurb: "Our top-tier partners — gold-standard support for the whole season.",
      section: "sponsor-section-gold bg-gradient-to-br from-[#F7F0D8] via-paper-warm to-[#EDE4BC] text-ink",
      grid: "bg-dots opacity-25",
      inverted: false,
      accent: "metal-bar-gold",
      accentSoft: "bg-gold/20",
      accentText: "text-gold-deep",
      pill: "metal-pill-gold",
      laneLabel: "transcript",
      card: "border border-gold/30 bg-paper-warm",
      cardHover: "hover:border-gold/50 hover:shadow-lg hover:shadow-gold/15",
      logoFrame: "metal-frame-gold",
      metalSheen: "text-gold-deep",
      linkText: "text-gold-deep/70 group-hover:text-gold-deep",
      headingHover: "group-hover:text-gold-deep",
    },
  },
  Silver: {
    label: "Silver",
    subtitle: "Major supporters who help us build each year",
    rank: "2",
    bio: {
      bioType: "DNA",
      bioTag: "template · double helix · insert",
      blurb: "Silver-tier backers — the structural support behind every build.",
      section: "sponsor-section-silver bg-gradient-to-br from-[#E8EDF1] via-[#F2F4F7] to-[#DDE4EA] text-ink",
      grid: "bg-dots opacity-25",
      inverted: false,
      accent: "metal-bar-silver",
      accentSoft: "bg-[#C0C0C0]/25",
      accentText: "text-[#5A5A5A]",
      pill: "metal-pill-silver",
      laneLabel: "plasmid",
      card: "border border-[#B8B8B8]/50 bg-paper-warm",
      cardHover: "hover:border-[#909090] hover:shadow-lg hover:shadow-black/5",
      logoFrame: "metal-frame-silver",
      metalSheen: "text-[#707070]",
      linkText: "text-[#707070] group-hover:text-[#404040]",
      headingHover: "group-hover:text-[#3D5A73]",
    },
  },
  Bronze: {
    label: "Bronze",
    subtitle: "Partners who kickstart our work",
    rank: "3",
    bio: {
      bioType: "Promoter",
      bioTag: "−35 box · −10 box · TSS",
      blurb: "Bronze partners — where our expression starts, upstream of everything else.",
      section: "sponsor-section-bronze bg-gradient-to-br from-[#F5E6D3] via-paper-warm to-[#EDD5B8] text-ink",
      grid: "bg-dots opacity-25",
      inverted: false,
      accent: "metal-bar-bronze",
      accentSoft: "bg-[#CD7F32]/15",
      accentText: "text-[#8B5A2B]",
      pill: "metal-pill-bronze",
      laneLabel: "upstream",
      card: "border border-[#CD7F32]/35 bg-paper-warm",
      cardHover: "hover:border-[#B87333] hover:shadow-lg hover:shadow-[#CD7F32]/15",
      logoFrame: "metal-frame-bronze",
      metalSheen: "text-[#8B5A2B]",
      linkText: "text-[#A0642B] group-hover:text-[#8B5A2B]",
      headingHover: "group-hover:text-[#8B5A2B]",
    },
  },
};

export const sponsorTiers: SponsorTier[] = [
  {
    tier: "Bronze Sponsors",
    tagline: "<$1K",
    badge: "bg-amber text-ink",
    tier: "Gold",
    sponsors: [
      {
        name: "Department of Biochemistry and Biomedical Sciences",
        link: "https://biochem.healthsci.mcmaster.ca/",
        icon: "https://ecampusontario.pressbooks.pub/app/uploads/sites/772/2021/07/mcm-hs-biocm_stack-col_jpg-217x300.jpg",
        description:
          "The Department of Biochemistry and Biomedical Sciences (BBS) is one of the most research-intensive departments at McMaster University and among the best anywhere in North America. Our faculty members run internationally competitive research programs with intensity and impact. We provide health science training and education to over 600 graduate and undergraduate students.",
      },
      {
        name: "McMaster Students Union",
        link: "https://msumcmaster.ca/",
        icon: "https://msumcmaster.ca/app/themes/msu-child/images/MSU.png",
        description:
          "The McMaster Students Union (MSU) is the largest group on campus representing approximately 27,000 undergraduate students. The MSU serves students through political representation and the enhancement of student affairs. As an MSU-ratified club, McMaster iGEM receives MSU funding, access to meeting rooms, and printing services through the MSU Underground.",
      },
    ],
  },
  {
    tier: "Silver Sponsors",
    tagline: ">$1K",
    badge: "bg-cyan text-ink",
    sponsors: [
      {
        name: "StokedBio",
        link: "https://stokedbio.com/",
        icon: "stokedBio.jpg",
        description:
          "Stoked Bio is a translational biotechnology company established to develop new candidates for resistant infectious diseases and cancers identified using a unique, biology-driven ai-assisted drug discovery and optimization platform created and implemented in the Stokes Lab at McMaster University.",
      },
      {
        name: "Office of the President, McMaster University",
        link: "https://president.mcmaster.ca/",
        icon: "https://static.wixstatic.com/media/497ad0_ef1502ca85ba4730b6a10b887e23f705~mv2.jpg/v1/fill/w_279,h_155,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/office-of-president-logo1.jpg",
          "McMaster's Faculty of Health Sciences cultivates interdisciplinary knowledge in health, wellness, and illness — supporting student-led research across the university.",
      },
      {
        name: "BMO",
        link: "https://www.bmo.com/",
        icon: "/BMO.png",
        description:
          "Bank of Montreal supports McMaster iGEM as a major partner, helping our team pursue ambitious synthetic biology research and outreach.",
      },
      {
        name: "MindFuel",
        link: "https://mindfuel.ca/",
        icon: "https://mindfuel.ca/wp-content/uploads/2019/02/logo-full-colour-408px.png",
        description:
          "MindFuel is a Canadian charity that builds STEM foundations and innovation skills in youth through hands-on programs, digital learning, and real-world problem solving.",
      },
    ],
  },
  {
    tier: "Silver",
    sponsors: [
      {
        name: "Stoked Bio",
        link: "https://stokedbio.com/",
        icon: "/stocked.png",
        description:
          "Stoked Bio is a McMaster spin-out biotech company using AI-driven drug discovery to develop novel anti-infectives and cancer therapeutics.",
      },
      {
        name: "Office of the Provost, McMaster University",
        link: "https://provost.mcmaster.ca/office-of-the-provost-2/",
        icon: "https://static.wixstatic.com/media/497ad0_ef1502ca85ba4730b6a10b887e23f705~mv2.jpg/v1/fill/w_279,h_155,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/office-of-president-logo1.jpg",
        description:
          "Maureen J. MacDonald is McMaster’s Provost and Academics Vice-President. As the university’s Chief Academic and Budgetary Officer, she work closely with colleagues across campus to champion academic excellence, strengthen student supports and grow McMaster’s research impact. Her role spans oversight of teaching and learning, faculty development, student experience, and strategic budgeting and planning.",
      },
      {
        name: "Vice-President, Research, McMaster University",
        link: "https://mira.mcmaster.ca/our-faculty/gianni-parise/",
        icon: "research+innovation.JPG",
        description:
          "Gianni Parise is Associate Dean of the Faculty of Science, Professor in the Department of Kinesiology and the Lab Lead at the Exercise Metabolism Research Group. A focus of Gianni’s laboratory involves revealing the mechanism(s) underlying the progressive loss of muscle mass associated with aging.",
      },
    ],
  },
  {
    tier: "Gold Sponsors",
    tagline: "<$2K",
    badge: "bg-maroon text-white",
    sponsors: [
      {
        name: "McMaster Faculty of Health Sciences",
        link: "https://healthsci.mcmaster.ca/",
        icon: "https://live.staticflickr.com/3064/3041873734_9d16d5d3ca_b.jpg",
        description:
          "McMaster's Faculty of Health Sciences works to cultivate crucial skills and interdisciplinary knowledge in health, wellness and illness. Paul O'Byrne is the Dean and Vice-President of the Faculty of Health Sciences. Dr. O'Byrne has authoured over 550 peer-reviewed articles as a practicing respirologist and has recently been appointed as an Officer of the Order of Canada for his global impact on the concept and treatment of asthma.",
      },
      {
        name: "Bank of Montreal (BMO)",
        link: "https://www.bmo.com/en-ca/main/personal/",
        icon: "bmo.png",
        description:
          "The Bank of Montreal, abbreviated as BMO, is a Canadian multinational investment bank and financial services company. The bank was founded in Montreal, Quebec, in 1817 as Montreal Bank, making it Canada's oldest bank. In 2023, the company’s seat in the Forbes Global 2000 was 84.",
        name: "Offices of the President, Provost, and Vice-President of Research",
        link: "https://www.mcmaster.ca/",
        icon: "https://static.wixstatic.com/media/497ad0_ef1502ca85ba4730b6a10b887e23f705~mv2.jpg/v1/fill/w_279,h_155,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/office-of-president-logo1.jpg",
        description:
          "McMaster's senior leadership — the Office of the President, Provost, and Vice-President of Research — backs our team with institutional support for student innovation.",
      },
    ],
  },
  {
    tier: "Bronze",
    sponsors: [
      {
        name: "Department of Biochemistry and Biomedical Sciences",
        link: "https://biochem.healthsci.mcmaster.ca/",
        icon: "https://ecampusontario.pressbooks.pub/app/uploads/sites/772/2021/07/mcm-hs-biocm_stack-col_jpg-217x300.jpg",
        description:
          "One of McMaster's most research-intensive departments, BBS provides training and lab access to hundreds of graduate and undergraduate students.",
      },
      {
        name: "McMaster Students Union",
        link: "https://msumcmaster.ca/",
        icon: "https://msumcmaster.ca/app/themes/msu-child/images/MSU.png",
        description:
          "The MSU represents ~27,000 undergraduate students. As an MSU-ratified club, McMaster iGEM receives funding, meeting space, and printing services.",
      },
    ],
  },
];
