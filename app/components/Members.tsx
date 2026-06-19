import React from 'react';
import Title from './Subtitle';
import Link from 'next/link';
import { SimpleHover } from './ui/simple-hover';

const Members = () => {

    const PI = [
        {
            name: "Dr. Tohid Didar",
            about: "Associate Professor, Mechanical Engineering",
            link: "https://experts.mcmaster.ca/display/didart",
            cover: "/tohid-didar-news-header-470x316.jpg",
            funFact: ""
        }
    ];

    const advisors = [
        {
            name: "Dr. Jonathan Bramson",
            about: "Vice-Dean, Faculty of Health Sciences",
            link: "https://experts.mcmaster.ca/display/bramsonj",
            cover: "/bramson-jonathan.jpg",
            funFact: ""
        }
    ];
    

    const pres = [
        {
            name: "Jiawen Ren",
            about: "Co-President | Honours Biochemistry Co-op (Year 3)",
            link: "",
            cover: "/Photos/2026/Jiawen.jpg",
            funFact: "I like to paint with Dollarama art supplies!"
        },
        {
            name: "Morgan Puusaari",
            about: "Co-President | Life Sciences (Year 3)",
            link: "",
            cover: "/Photos/2026/Morgan Puusaari Preferred.JPG",
            funFact: "Once I tripped on a banana peel"
        }
    ];

    const wetlab = [
        {
            name: "Kevin Wang",
            about: "Wet Lab Co-Lead | Honours Biochemistry  (Year 2)",
            link: "",
            cover: "/Photos/2026/Kevin Wang.JPG",
            funFact: "I went to the same highschool as Anakin Skywalker!"
        },
        {
            name: "Rinee Parikh",
            about: "Wet Lab Co-Lead | Honours Chemical Biology (Year 2)",
            link: "",
            cover: "/Photos/2026/Rinee Parikh preferred.jpg",
            funFact: "I'm learning the guitar!"
        },
        {
            name: "Catherine Luo",
            about: "Wet Lab Member | Integrated Biomedical Engineering and Health Sciences (Year 1)",
            link: "",
            cover: "/Photos/2026/Catherine Luo Preferred.jpg",
            funFact: "I have held a human heart before!"
        },
        {
            name: "Lucie Huang",
            about: "Wet Lab Member | Life Sciences Gateway Program (Year 1)",
            link: "",
            cover: "/Photos/2026/Lucie Huang Preferred.JPG",
            funFact: "I do archery"
        },
        {
            name: "Akash Madaram",
            about: "Wet Lab Member | Life Science (Year 1)",
            link: "",
            cover: "/Photos/2026/Akash.jpg",
            funFact: "I play the violin."
        },
        {
            name: "Thenuja Vipulananthan",
            about: "Wet Lab Member | Honours Biochemistry (Year 2)",
            link: "",
            cover: "/Photos/2026/Thenuja.JPG",
            funFact: "I love watching sunsets/sunrises!"
        }
    ];

    const drylab = [
        {
            name: "Agnes Kung",
            about: "Dry Lab Co-Lead | Biomedical and Mechanical Engineering (Year 2)",
            link: "",
            cover: "/Photos/2026/Agnes.JPG",
            funFact: "I am a fourth degree black belt in taekwondo"
        },
        {
            name: "Andrew Lian",
            about: "Dry Lab Co-Lead | Software and Biomedical Engineering (Year 2)",
            link: "",
            cover: "",
            funFact: "I have perfect pitch!"
        },
        {
            name: "Nilay Goyal",
            about: "Dry Lab Member | Software Engineering (Year 3)",
            link: "",
            cover: "/Photos/2026/Nilay.JPG",
            funFact: "I do not know biology"
        },
        {
            name: "Jasmeh Virk",
            about: "Dry Lab Member | iBioMed HESE (Year 2)",
            link: "",
            cover: "/Photos/2026/Jasmeh.jpg",
            funFact: "I have an EpiPen for grass..."
        },
        {
            name: "Pedram Tizghadam",
            about: "Dry Lab Member | Honours Biochemistry (Year 2)",
            link: "",
            cover: "/Photos/2026/Pedram.png",
            funFact: "I really like chicken nuggets"
        },
        {
            name: "Cynthia Duan",
            about: "Dry Lab Member | Honours Health Sciences Program (Year 3)",
            link: "",
            cover: "/Photos/2026/Cynthia.png",
            funFact: "I figure skate in my free time!"
        },
        {
            name: "Kathrine Mondshain",
            about: "Dry Lab Member | Honours Integrated Science Program, Biology Concentration (Year 2)",
            link: "",
            cover: "/Photos/2026/Kathrine.png",
            funFact: "I have a grandpa named Electron"
        }
    ];

    const hp = [
        {
            name: "Anh Bui",
            about: "Human Practices Co-Lead | Honours Arts & Science (Year 3)",
            link: "https://www.linkedin.com/in/anhbui05/",
            cover: "/Photos/Anh 2.jpg",
            funFact: "I broke my foot twice in first year"
        },
        {
            name: "Adelina Zhao",
            about: "Human Practices Co-Lead | Honours Biochemistry (Year 2)",
            link: "https://www.linkedin.com/in/adelina-zhao-9b40a72b4/",
            cover: "/Photos/2026/Adelina.jpg",
            funFact: "I can do a mediocore cartwheel"
        },
        {
            name: "Pooja Murali",
            about: "Human Practices, Entrepreneurship Member | iBioMed and HESE (Year 3)",
            link: "",
            cover: "",
            funFact: "I love Karaoke 🎤"
        },
        {
            name: "Hassan Hassan",
            about: "Human Practices Sci-Comm Member | Biology & Pharmacology Co-op (Year 3)",
            link: "www.linkedin.com/in/sritharanshankave",
            cover: "/Photos/Shankave Sritharan.jpg",
            funFact: "I’m on an a capella team!"
        },
        {
            name: "Avleen Dhaliwal",
            about: "Human Practices Sci-Comm Member | Honours Health Sciences (Year 3)",
            link: "",
            cover: "/Photos/2026/Avleen temp.jpg",
            funFact: "I eat a container of greek yogurt daily"
        }
    ];

    const outreach = [
        {
            name: "Shreya Subramanian",
            about: "Human Practices Outreach Co-Lead | Honours Molecular Biology and Genetics Research Specialization (Year 2)",
            link: "",
            cover: "/Photos/2026/Shreya Subramanian Preferred.JPG",
            funFact: "I've gone camping in 0 degree weather!"
        },
        {
            name: "Aarush Behal",
            about: "Human Practices Member | Life Sciences Gateway (Year 1)",
            link: "",
            cover: "/Photos/2026/Aarush.png",
            funFact: "I have a black belt in tae-kwon-do"
        },
        {
            name: "Nikhitha Marulappa",
            about: "Human Practices Member | Honours Biology (Year 2)",
            link: "",
            cover: "/Photos/2026/Nikhitha.JPG",
            funFact: "I am unfortunately a devoted Leafs fan"
        }
    ];

    const media = [
        {
            name: "Sophia Chau",
            about: "Media Lead | Honours Health Sciences Program, Core (Year 2)",
            link: "",
            cover: "/Photos/2026/Sophia Chau.JPG",
            funFact: "I like my water hot "
        },
        {
            name: "Chinyere Iro",
            about: "Media Lead | Honours Health Sciences Program, Core (Year 2)",
            link: "",
            cover: "/Photos/2026/Chichi preferred.JPG",
            funFact: "I enjoy dressmaking"
        },
        {
            name: "Veronica Grignano",
            about: "Media Member | Honours Health Sciences Program (Year 3)",
            link: "",
            cover: "/Photos/2026/Veronica.JPG",
            funFact: "I'm a member of a competitive a cappella team!"
        },
        {
            name: "Cici Liu",
            about: "Media Member | Honours Health Sciences Program (Year 1)",
            link: "",
            cover: "/Photos/2026/Cici Liu.JPG",
            funFact: "I have a pet rock"
        },
        {
            name: "Chloe Jeng",
            about: "Media Member | Honours Life Sciences (Year 1)",
            link: "",
            cover: "/Photos/2026/Chloe Jeng.jpeg",
            funFact: "I've been to a One Direction concert !"
        },
        {
            name: "Heidi Wang",
            about: "Media Team Member | Integrated Science (Year 2)",
            link: "",
            cover: "",
            funFact: "I can solve a rubiks cube"
        },
        {
            name: "Vee Le",
            about: "Media Member | Honours Biology Core (Year 2)",
            link: "",
            cover: "/Photos/2026/Vee Le.JPG",
            funFact: "I'm a very snacky person"
        },
    ];

    const finance = [
        {
            name: "Pasquale Del Balso",
            about: "Finance & Sponsorships Lead | Honours Bachelor of Health Sciences, Biomedical Discovery and Commercialization Program (Year 3)",
            link: "",
            cover: "/Photos/2026/Pasquale.JPG",
            funFact: "If I were stranded on an island and could only have one food for the rest of my life, it would be pizza."
        },
        {
            name: "Renee He",
            about: "Finance and Sponsorships Member | Biochemistry (Year 2)",
            link: "",
            cover: "/Photos/2026/Renee.JPG",
            funFact: "I eat froyo for the peanuts"
        },
        {
            name: "Sandra Lee",
            about: "Finance and Sponsorships Member | Integrated Biomedical Engineering and Health Sciences (iBioMed), Chemical Engineering (Year 3)",
            link: "",
            cover: "/Photos/2026/Sandra.JPG",
            funFact: "Cows are my favourite animal!"
        },
    ];

    const webDev = [
        {
            name: "Atul Rao",
            about: "Web Development Lead | Software Engineering (Year 3)",
            link: "",
            cover: "/Photos/2026/Atul Rao.jpg",
            funFact: "I still like maps"
        },
        {
            name: "Tyler Fong",
            about: "Web Development Member | IBEHS Electrical and Biomedical Engineering (Year 3)",
            link: "",
            cover: "/Photos/2026/Tyler Fong.JPG",
            funFact: "I know how to juggle"
        },
        {
            name: "Kurlan Beeharry",
            about: "Web Development Member | Software Engineering Co-op (Year 3)",
            link: "",
            cover: "/Photos/2026/Kurlan.jpg",
            funFact: "I come from Dodo bird land."
        },
        {
            name: "Emma Liu",
            about: "Web Development Member | Honours Health Sciences Program (Year 1)",
            link: "",
            cover: "/Photos/2026/Emma Liu Preferred.jpg",
            funFact: "My favourite lazy dessert to make is mango coconut sticky rice with ice cream ⸜(｡˃ ᵕ ˂ )⸝♡"
        },
    ];

    const renderTeamSection = (title: string, members: any[]) => (
        <>
            <Title text={title} className="mb-5" />
            <hr />
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 py-6 mb-10 gap-y-5">
                {members.map((member, index) => (
                    <Link href={member.link} key={index} className={member.link ? "cursor-pointer" : ""}>
                        {member.cover ? (
                            <SimpleHover imageUrl={member.cover} className="w-full">
                                <div className="space-y-5">
                                    <h1 className="text-2xl font-bold">{member.name}</h1>
                                    <p>{member.about}</p>
                                    {member.funFact && (
                                        <p className="text-sm italic text-white">Fun fact: {member.funFact}</p>
                                    )}
                                </div>
                            </SimpleHover>
                        ) : (
                            <div className="space-y-5 p-4 border border-mgem-indigo/40 rounded-lg bg-mgem-indigo/10">
                                <h1 className="text-2xl font-bold text-white">{member.name}</h1>
                                <p className="text-white/90">{member.about}</p>
                                {member.funFact && (
                                    <p className="text-sm italic text-white">Fun fact: {member.funFact}</p>
                                )}
                            </div>
                        )}
                    </Link>
                ))}
            </div>
        </>
    );

    return (
        <div className="py-20 sm:p-0 text-left px-4">
            <div className="site-page-hero mt-32">
                TEAM
            </div>
            
            {renderTeamSection("Principal Investigators", PI)}
            {renderTeamSection("Advisors", advisors)}
            {renderTeamSection("Co-Presidents", pres)}
            {renderTeamSection("Wet Lab", wetlab)}
            {renderTeamSection("Dry Lab", drylab)}
            {renderTeamSection("Human Practices", hp)}
            {renderTeamSection("Outreach and Collaborations", outreach)}
            {renderTeamSection("Media and Social Media", media)}
            {renderTeamSection("Finance", finance)}
            {renderTeamSection("Web Dev", webDev)}
        </div>
    );
}

export default Members;
