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
    tier: "Gold",
    sponsors: [
      {
        name: "McMaster Faculty of Health Sciences",
        link: "https://healthsci.mcmaster.ca/",
        icon: "https://live.staticflickr.com/3064/3041873734_9d16d5d3ca_b.jpg",
        description:
          "McMaster's Faculty of Health Sciences cultivates interdisciplinary knowledge in health, wellness, and illness — supporting student-led research across the university.",
      },
      {
        name: "BMO",
        link: "https://www.bmo.com/",
        icon: "/photos/sponsors/bmo.png",
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
        icon: "/photos/sponsors/stocked.png",
        description:
          "Stoked Bio is a McMaster spin-out biotech company using AI-driven drug discovery to develop novel anti-infectives and cancer therapeutics.",
      },
      {
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
