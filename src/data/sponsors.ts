export type SponsorTierName = "Platinum" | "Gold" | "Silver" | "Bronze";

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
  Platinum: {
    label: "Platinum",
    subtitle: "Our most distinguished partners",
    rank: "0",
    bio: {
      bioType: "CRISPR",
      bioTag: "guide RNA · Cas9 · PAM",
      blurb: "Platinum partners — the precision behind our most ambitious edits.",
      section: "sponsor-section-platinum bg-gradient-to-br from-[#DCF4F8] via-[#EEFBFD] to-[#C4EAF0] text-ink",
      grid: "bg-dots opacity-25",
      inverted: false,
      accent: "metal-bar-platinum",
      accentSoft: "bg-[#8DDCE6]/40",
      accentText: "text-[#146B7D]",
      pill: "metal-pill-platinum",
      laneLabel: "genome",
      card: "border border-[#2A96A8]/40 bg-paper-warm",
      cardHover: "hover:border-[#1F8FA3] hover:shadow-lg hover:shadow-[#5BC8D8]/25",
      logoFrame: "metal-frame-platinum",
      metalSheen: "text-[#178295]",
      linkText: "text-[#178295] group-hover:text-[#0E5C6E]",
      headingHover: "group-hover:text-[#0E5C6E]",
    },
  },
  Gold: {
    label: "Gold",
    subtitle: "Our leading partners this cycle",
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
    subtitle: "Our major supporters",
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
    tier: "Platinum",
    sponsors: [
      {
        name: "BMO",
        link: "https://www.bmo.com/",
        icon: "/photos/sponsors/bmo.png",
        description:
          "Bank of Montreal backs McMaster iGEM as a major partner, helping our team pursue ambitious synthetic biology research and outreach.",
      },
    ],
  },
  {
    tier: "Gold",
    sponsors: [
      {
        name: "McMaster Faculty of Health Sciences",
        link: "https://healthsci.mcmaster.ca/",
        icon: "https://live.staticflickr.com/3064/3041873734_9d16d5d3ca_b.jpg",
        description:
          "McMaster's Faculty of Health Sciences fosters interdisciplinary research in health, wellness, and illness across the university.",
      },
      {
        name: "MindFuel",
        link: "https://mindfuel.ca/",
        icon: "https://mindfuel.ca/wp-content/uploads/2019/02/logo-full-colour-408px.png",
        description:
          "MindFuel is a Canadian charity building STEM foundations in youth through hands-on programs and real-world problem solving.",
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
          "Stoked Bio is a McMaster spin-out using AI-driven drug discovery to develop novel anti-infectives and cancer therapeutics.",
      },
      {
        name: "Offices of the President, Provost, and Vice-President of Research",
        link: "https://www.mcmaster.ca/",
        icon: "https://static.wixstatic.com/media/497ad0_ef1502ca85ba4730b6a10b887e23f705~mv2.jpg/v1/fill/w_279,h_155,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/office-of-president-logo1.jpg",
        description:
          "Maureen MacDonald, McMaster's Provost and VP Academic, champions academic excellence and student support across campus."
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
          "One of McMaster's most research-intensive departments, BBS trains hundreds of graduate and undergraduate students each year.",
      },
      {
        name: "McMaster Students Union",
        link: "https://msumcmaster.ca/",
        icon: "https://msumcmaster.ca/app/themes/msu-child/images/MSU.png",
        description:
          "The MSU represents ~27,000 undergrads. As a ratified club, McMaster iGEM receives funding, meeting space, and printing services.",
      },
    ],
  },
];

export const iridiumSponsors: Sponsor[] = [
  {
    name: "Didar Lab",
    link: "https://didarlab.ca/",
    icon: "/photos/sponsors/didar.JPG",
    description:
      "They develop and commercialize technologies that keep populations healthy by preventing pathogen spread and providing diagnostics and therapeutics.",
  },
  {
    name: "Twist Bioscience",
    link: "https://www.twistbioscience.com/",
    icon: "/photos/sponsors/twist.png",
    description:
      "A public biotechnology company manufacturing synthetic DNA. Their DNA-based tools help researchers across disciplines make groundbreaking discoveries."
  },
  {
    name: "Bramson Lab",
    link: "https://cdcr.mcmaster.ca/research/",
    icon: "/photos/sponsors/cdcr.png",
    description:
      "Part of CDCR (Centre for Cancer Research), the lab develops methods to direct cancer patients' immune systems to attack their tumours.",
  },
  {
    name: "Housseinidoust Lab",
    link: "https://www.hosseinidoustlab.com/",
    icon: "/photos/sponsors/hosseinidoust.jpg",
    description:
      "Their research harnesses bacteriophages, viruses that infect bacteria, to build sustainable antimicrobial technologies where antibiotics fail.",
  },
  {
    name: "Integrated DNA Technologies (IDT)",
    link: "https://www.idtdna.com/page",
    icon: "/photos/sponsors/idt.png",
    description:
      "IDT is a global leader in custom nucleic acids, supplying high-quality DNA, RNA, and oligos for biotech, diagnostics, and pharma development."
  },
  {
    name: "GenScript",
    link: "https://www.genscript.com/",
    icon: "/photos/sponsors/genscript.svg",
    description:
      "GenScript Biotech accelerates biotech and healthcare innovation, providing services researchers need to develop groundbreaking treatments."
  },
];
