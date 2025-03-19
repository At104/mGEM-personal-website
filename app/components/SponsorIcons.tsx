import Title from "./Subtitle";
import { HoverEffect } from "./ui/card-hover-effect";

export function SponsorIcons() {
  return (
    <>
        <Title text= "mRNA Sponsor" className = "underline underline-offset-2 maroon-decoration"/>
        <div className="max-w-7xl mx-auto px-8">
          <HoverEffect items={mRNA} />
        </div>
        <hr/>
        <Title text= "DNA Sponsors" className = "underline underline-offset-2 maroon-decoration"/>
        <div className="max-w-7xl mx-auto px-8 mb-10">
          <HoverEffect items={DNA} />
        </div>
        <hr/>
        <Title text= "Promoter Sponsors" className = "underline underline-offset-2 maroon-decoration"/>
        <div className="max-w-7xl mx-auto px-8">
          <HoverEffect items={promoter} />
        </div>
    </>
  );
}
export const mRNA = [
  {
    link: "https://healthsci.mcmaster.ca/",
    icon: "https://live.staticflickr.com/3064/3041873734_9d16d5d3ca_b.jpg",
    description: "McMaster's Faculty of Health Sciences works to cultivate crucial skills and interdisciplinary knowledge in health, wellness and illness. Paul O'Byrne is the Dean and Vice-President of the Faculty of Health Sciences. Dr. O'Byrne has authoured over 550 peer-reviewed articles as a practicing respirologist and has recently been appointed as an Officer of the Order of Canada for his global impact on the concept and treatment of asthma. "
  },
  {
  link: "https://oicr.on.ca/",
  icon: "https://media.licdn.com/dms/image/v2/C4E0BAQERxrQ46Gllaw/company-logo_200_200/company-logo_200_200/0/1630592770623/ontario_institute_for_cancer_research_logo?e=2147483647&v=beta&t=UGo8Qb0D4x_TdaSCl7ncQpzPPmX4yEWEmVjonKlXxD8",
  description: "The Ontario Institute for Cancer Research (OICR) is a globally recognized research organization dedicated to advancing cancer research and accelerating the development of innovative cancer treatments. Based in Toronto, OICR collaborates with scientists, clinicians, and patients to translate groundbreaking discoveries into clinical practice. Their efforts focus on personalized cancer therapies, cutting-edge genomics, and novel diagnostic tools that improve patient outcomes. OICR’s work is supported by the Government of Ontario, and the institute plays a key role in fostering partnerships with academic, clinical, and industrial leaders in the fight against cancer."
  }
];

export const promoter = [
  
  {
    link: "https://biochem.healthsci.mcmaster.ca/",
    icon: "https://ecampusontario.pressbooks.pub/app/uploads/sites/772/2021/07/mcm-hs-biocm_stack-col_jpg-217x300.jpg",
    description: "The Department of Biochemistry and Biomedical Sciences (BBS) is one of the most research-intensive departments at McMaster University and among the best anywhere in North America. Our faculty members run internationally competitive research programs with intensity and impact. We provide health science training and education to over 600 graduate and undergraduate students. Our undergraduate program in Biochemistry introduces students to fundamental concepts that underpin modern biomedical research and innovation. Students get to apply this knowledge firsthand through real-world laboratory research experiences that prepare them for fulfilling careers and graduate opportunities. Our Biomedical Discovery and Commercialization program is among the first of its kind – a combined undergraduate and graduate program designed for students with a passion for research and a desire to learn how new discoveries are commercialized in today’s innovation-based economy. Our research programs are supported by leading-edge core facilities and specialized infrastructure to address the most pressing problems in biomedical research. Many of our faculty members and trainees are affiliated with research institutes that centralize activities around core themes, including the Cancer Research Institute, the Institute for Infectious Disease Research, and the Farncombe Family Digestive Health Research Institute"
  },
  {
    link: "https://science.mcmaster.ca/",
    icon: "https://science.mcmaster.ca/app/uploads/2022/11/mcm-sci-logo.png",
    description: "The Faculty of Science is the largest faculty at McMaster Univeristy, with over 6,600 students working to explore the boundaries of science within the life sciences, the physical sciences, and the mathematical/computational sciences. Maureen MacDonald is the Dean of Science and the first woman to serve in the role. Dr. MacDonald is a professor in the Department of Kinesiology and a highly respected researcher in cardiovascular health, exercise physiology, spinal cord injury, and health and aging."
  },
  {
    link: "https://smokespoutinerie.com/store/smokes-poutinerie-westdale/",
    icon: "https://downtownkelowna.com/wp-content/uploads/2021/07/Smokes-Poutinerie-Kelowna-Food-Truck.png",
    description: "Smoke's poutinerie is Canada's largest poutine franchise, and a popular restaurant amongst McMaster students (it remains open until 4am!). Our local Westdale location will support the team this iGEM season through providing discounts and gift cards for multiple mGEM workshops and events."
  },
  {
    link: "https://msumcmaster.ca/",
    icon: "https://msumcmaster.ca/app/themes/msu-child/images/MSU.png",
    description: "The McMaster Students Union (MSU) is the largest group on campus representing approximately 27,000 undergraduate students. The MSU serves students through political representation and the enhancement of student affairs. As an MSU-ratified club, McMaster iGEM receives MSU funding, access to meeting rooms, and printing services through the MSU Underground. "
  },
  {
    link: "https://www.bhssmcmaster.org/home",
    icon: "https://static.wixstatic.com/media/9b835e_f6cbc523732a4085ae868831d95a4c13~mv2.jpg/v1/fit/w_2500,h_1330,al_c/9b835e_f6cbc523732a4085ae868831d95a4c13~mv2.jpg",
    description: "The Bachelor of Health Sciences Society, or BHSS, is an organization representing the students of the (Honours) Bachelor of Health Sciences program at McMaster University. They serve to promote unity, collaboration, and participation within the BHSc Program, enhancing the university experience by offering educational and extracurricular opportunities to students. "
  },
];

export const DNA = [
  {
    link: "https://president.mcmaster.ca/",
    icon: "https://static.wixstatic.com/media/497ad0_ef1502ca85ba4730b6a10b887e23f705~mv2.jpg/v1/fill/w_279,h_155,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/office-of-president-logo1.jpg",
    description: "David Farrar is the President and Vice-Chancellor of McMaster University, having served in the role since 2019, and a faculty member of the Department of Chemistry and Chemical Biology. Dr. Farrar leads work on McMaster's strategic plan and focusses on initiatives relating to campus operations, strengthening an ecosystem of innovation and commercialization, furthering digital learning, and supporting an inclusive environment committed to Truth and Reconciliation."
  },
  {
    link: "https://omniabio.com/",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpZS0JdUelSsJy2138kVULkGxtJsSaxjTl0A&s",
    description: "Defined by our collaborative and innovation-first culture, OmniaBio is a leader in cell and gene therapy (CGT) manufacturing. With deep technical expertise and experience seated within a thriving CGT ecosystem, we accelerate progress through the entire product lifecycle – from development through to clinical and ultimately commercial manufacture and launch." 
  }, 
  {
    link: "https://www.eng.mcmaster.ca/", 
    icon: "https://www.eng.mcmaster.ca//app/uploads/2024/02/eng-mcmaster.jpg", 
    description: "The Faculty of Engineering at McMaster University is renowned for its innovative approach to education and research, serving over 6,500 students across various engineering disciplines. The faculty offers comprehensive undergraduate and graduate programs in fields such as Chemical, Civil, Electrical, Mechanical, Software, and Materials Engineering. With a strong commitment to experiential learning, students benefit from hands-on opportunities through co-op programs, internships, and collaborative projects. Dr. Heather Sheardown serves as the Dean of Engineering, with expertise in biomaterials, tissue engineering, mathematical modeling of physiologic processes, and ophthalmic drug delivery."
    
  }
];
