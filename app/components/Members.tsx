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
            cover: "/Photos/2026/Morgan Puusaari Preferred.jpg",
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
            cover: "/Photos/2026/Lucie Huang Preferred.jpg",
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
            cover: "/Photos/2026/Thenuja.jpg",
            funFact: "I love watching sunsets/sunrises!"
        }
    ];

    const drylab = [
        {
            name: "Morgan Puusaari",
            about: "Dry Lab Co-Lead | Life Sciences (Year 2)",
            link: "www.linkedin.com/in/morgan-puusaari",
            cover: "/Photos/Morgan 1.jpg",
            funFact: "I like to laugh"
        },
        {
            name: "Navid Farkhondehpay",
            about: "Dry Lab Co-Lead | Honours Health Sciences (Year 2)",
            link: "",
            cover: "/Photos/Navid.jpg",
            funFact: "I grew a pineapple"
        },
        {
            name: "Nilay Goyal",
            about: "Dry Lab Member | Software Engineering (Year 2)",
            link: "https://www.linkedin.com/in/nilay-goyal/",
            cover: "/Photos/nilay_igem.jpg",
            funFact: "I don't know biology"
        },
        {
            name: "Andrew Lian",
            about: "Dry Lab Member | Integrated Biomedical Engineering and Health Sciences (Year 1)",
            link: "www.linkedin.com/in/andrew-lian",
            cover: "/Photos/Andrew 1.png",
            funFact: "I've hitch hiked and lived to tell the tale"
        },
        {
            name: "Agnes Kung",
            about: "Dry Lab Member | Integrated Biomedical Engineering and Health Sciences (Year 1)",
            link: "www.linkedin.com/in/agnes-kung",
            cover: "/Photos/Agnes Preferred.jpeg",
            funFact: "I can't do a cartwheel"
        },
        {
            name: "Cynthia Duan",
            about: "Dry Lab Member | Health Sciences (Year 2)",
            link: "",
            cover: "/Photos/Cynthia.jpg",
            funFact: "I used to figure skate"
        },
        {
            name: "Marco Tan",
            about: "Dry Lab Member | Mechatronics and Biomedical Engineering (Year 3)",
            link: "https://www.linkedin.com/in/marcotan04",
            cover: "/Photos/Marco Tan.jpg",
            funFact: "I'm under your floorboards"
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
            about: "Human Practices Sci-Comm | Honours Health Sciences (Year 3)",
            link: "",
            cover: "/Photos/2026/Avleen temp.jpg",
            funFact: "I eat a container of greek yogurt daily"
        },
        {
            name: "Kieran Wilson",
            about: "Human Practices Entrepreneurship | Heath Sciences (Year 1)",
            link: "",
            cover: "/Photos/Kieran.jpg",
            funFact: "I love basketball!"
        },
        {
            name: "Michelle Giang",
            about: "Human Practices Outreach | Honours Biochemistry (Year 3)",
            link: "https://www.linkedin.com/in/giangmichelle/",
            cover: "/Photos/Michelle Giang preferred.jpg",
            funFact: "I can't live without music and play alto saxophone, piano and guitar!"
        }
    ];

    const outreach = [
        {
            name: "Ashley Qian",
            about: "Outreach and Collaborations Lead | Health Sciences (Year 2)",
            link: "https://www.linkedin.com/in/ashley-qian-624043217/",
            cover: "/Photos/Ashley.JPG",
            funFact: "I can do magic"
        },
        {
            name: "Ajeen Kunalan",
            about: "Outreach and Collaborations Member | Medical and Biological Physics (Year 2)",
            link: "www.linkedin.com/in/ajeen-kunalan",
            cover: "/Photos/Ajeen 1.jpg",
            funFact: "I like running"
        },
        {
            name: "Chloe Van Belle",
            about: "Outreach and Collaborations Member | Molecular Biology & Genetics (Year 3)",
            link: "https://www.linkedin.com/in/chloe-van-belle-22160a250/",
            cover: "/Photos/Chloe.jpg",
            funFact: "I love Lone Star fajitas"
        },
        {
            name: "Giovanni Basso",
            about: "Outreach and Collaborations Member | Honours Biochemistry (Year 2)",
            link: "https://ca.linkedin.com/in/giovanni-basso-680845281",
            cover: "/Photos/Giovanni 2.jpg",
            funFact: "I have seen two total solar eclipses."
        },
        {
            name: "Shreya Subramanian",
            about: "Outreach and Collaborations Member | Life Sciences (year 1)",
            link: "www.linkedin.com/in/shreya-subramanian-6b10292aa",
            cover: "/Photos/Shreya Subramanian.jpg",
            funFact: "I like Pokemon!"
        },
        {
            name: "Kathy He",
            about: "Outreach and Collaborations Member | Honours Biochemistry (Year 2)",
            link: "",
            cover: "/Photos/Kathy prefered.jpg",
            funFact: "I love grass jelly :)"
        }
    ];

    const media = [
        {
            name: "Chinyere Iro",
            about: "Media Team Lead | Honours Health Sciences Program, Core (Year 2)",
            link: "https://www.linkedin.com/in/chinyere-iro-784834289/",
            cover: "/Photos/2026/Chichi Preferred.jpg",
            funFact: "I enjoy dressmaking"
        },
        {
            name: "Sophia Chau",
            about: "Media Lead | Honours Health Sciences Program, Core (Year 2)",
            link: "",
            cover: "/Photos/2026/Sophia Chau.jpg",
            funFact: "I like my water hot "
        },
        {
            name: "Veronica Grignano",
            about: "Media Team Member | Honours Health Sciences Program (Year 3)",
            link: "www.linkedin.com/in/fiona-encarnacion",
            cover: "/Photos/2026/veronica.jpg",
            funFact: "I'm a member of a competitive a cappella team!"
        },
        {
            name: "Cici Liu",
            about: "Media Team Member | Honours Health Sciences Program (Year 1)",
            link: "",
            cover: "/Photos/2026/Cici Liu.jpg",
            funFact: "I have a pet rock"
        },
        {
            name: "Chloe Jeng",
            about: "Media Team Member | Honours Life Sciences (Year 1)",
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
            about: "Media Team Member | Honours Biology Core (Year 2)",
            link: "",
            cover: "/Photos/2026/Vee Le.jpg",
            funFact: "I’m a very snacky person"
        },
        
    ];

    const finance = [
        {
            name: "Jose Daniel Feijoo Velasco",
            about: "Finance Lead | Honours Bachelor of Commerce (Year 3)",
            link: "http://linkedin.com/in/jose-daniel-feijoo-velasco",
            cover: "/Photos/Jose Daniel Feijoo.JPEG",
            funFact: "Racket sports enthusiast"
        },
        {
            name: "Myra Godara",
            about: "Finance Lead | Honours Biochemistry (Year 3)",
            link: "https://www.linkedin.com/in/myragodara/",
            cover: "/Photos/Myra 1.JPG",
            funFact: "I have a puppy named Mylo!"
        }
    ];

    const webDev = [

        {
            name: "Atul Rao",
            about: "Web Development Lead | Software Engineering (Year 3)",
            link: "https://www.linkedin.com/in/atul5rao/",
            cover: "/Photos/2026/Atul Rao.JPG",
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
            cover: "/Photos/2026/Kurlan.JPG",
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
                            <div className="space-y-5 p-4 border rounded-lg">
                                <h1 className="text-2xl font-bold">{member.name}</h1>
                                <p>{member.about}</p>
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
            <div className="text-4xl font-bold mt-32">
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
