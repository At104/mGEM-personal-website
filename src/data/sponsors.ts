export type Sponsor = {
  name: string;
  link: string;
  icon: string;
  description: string;
};

export type SponsorTier = {
  tier: string;
  tagline: string;
  badge: string;
  sponsors: Sponsor[];
};

export const sponsorTiers: SponsorTier[] = [
  {
    tier: "Bronze Sponsors",
    tagline: "<$1K",
    badge: "bg-amber text-ink",
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
        description:
          "David Farrar is the President and Vice-Chancellor of McMaster University, having served in the role since 2019, and a faculty member of the Department of Chemistry and Chemical Biology. Dr. Farrar leads work on McMaster's strategic plan and focusses on initiatives relating to campus operations, strengthening an ecosystem of innovation and commercialization, furthering digital learning, and supporting an inclusive environment committed to Truth and Reconciliation.",
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
      },
    ],
  },
];
