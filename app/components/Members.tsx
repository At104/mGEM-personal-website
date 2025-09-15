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
            name: "Franky Liu",
            about: "Co-President | Integrated Biomedical Engineering and Health Sciences (Year 3)",
            link: "https://www.linkedin.com/in/franky-liu-2a78601a4/",
            cover: "/Photos/Franky 1.jpg",
            funFact: "Hamsters are very fragile creatures... Don't ask me how I know"
        },
        {
            name: "Derin Sayin",
            about: "Co-President | Honours Biochemistry",
            link: "https://www.linkedin.com/in/derin-sayin-733412261",
            cover: "/Photos/Derin Sayin.jpeg",
            funFact: "I love sci-fi and fantasy"
        }
    ];

    const wetlab = [
        {
            name: "Jacob Stotland",
            about: "Wet Lab Co-Lead | Arts and Science (Year 2)",
            link: "",
            cover: "/Photos/Jacob 1.jpg",
            funFact: "I like transparent liquids"
        },
        {
            name: "Jiawen Ren",
            about: "Wet Lab Co-Lead | Biochemistry (Year 2)",
            link: "https://www.linkedin.com/in/jiawen-ren-b878a2300/",
            cover: "/Photos/Jiawen 1.jpg",
            funFact: "I love tiramisu"
        },
        {
            name: "Isabella Valentini",
            about: "Wet Lab Member | Biomedical Discovery and Commercialization (Year 3)",
            link: "http://linkedin.com/in/isabellavalentini",
            cover: "/Photos/Isabella Valentini.JPEG",
            funFact: "I've been to 4 concerts!"
        },
        {
            name: "Kevin Tan",
            about: "Wet Lab Member | Life Sciences (Year 4)",
            link: "",
            cover: "/Photos/Kevin Tan 2.png",
            funFact: "I have 2 bunnies"
        },
        {
            name: "Thenuja Vipulananthan",
            about: "Wet Lab Member | Life Sciences (Year 1)",
            link: "",
            cover: "/Photos/Thenuja.PNG",
            funFact: "I love dogs!"
        },
        {
            name: "Kevin Wang",
            about: "Wet Lab Member | Life Sciences (Year 1)",
            link: "www.linkedin.com/in/kevin-wang-789059245",
            cover: "/Photos/Kevin.jpg",
            funFact: "I like F1"
        },
        {
            name: "Synthia Xing",
            about: "Wet Lab Member | Psychology, Neuroscience, & Behaviour (Year 2)",
            link: "https://www.linkedin.com/in/synthia-xing-5a7146200/",
            cover: "/Photos/Synthia (preferred).jpg",
            funFact: "I experience music withdrawal"
        },
        {
            name: "Rubani Suri",
            about: "Wet Lab Member | Health Sciences (Year 3)",
            link: "www.linkedin.com/in/rubani-suri",
            cover: "/Photos/Rubani.jpg",
            funFact: "I've seen the Northern Lights!"
        },
        {
            name: "Thariksha Selvachandran",
            about: "Wet Lab Member | Honours Biochemistry (Year 3)",
            link: "https://www.linkedin.com/in/thariksha-selvachandran-b9491030b/",
            cover: "/Photos/Thariksha.jpg",
            funFact: "I am a nail tech!"
        },
        {
            name: "Haram",
            about: "Wet Lab Member | Health Sciences (Year 3)",
            link: "",
            cover: "/Photos/Haram.JPEG",
            funFact: "I am a henna artist!"
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
            about: "Human Practices Co-Lead | Arts & Science (Year 2)",
            link: "https://www.linkedin.com/in/anhbui05/",
            cover: "/Photos/Anh 2.jpg",
            funFact: "I love starry nights!"
        },
        {
            name: "Hassan Hassan",
            about: "Human Practices Co-Lead | Honours Life Sciences (Year 2)",
            link: "",
            cover: "/Photos/Hassan.JPEG",
            funFact: "I produce music!"
        },
        {
            name: "Adelina Zhao",
            about: "Human Practices | Honours Life Sciences (Year 1)",
            link: "https://www.linkedin.com/in/adelina-zhao-9b40a72b4/",
            cover: "/Photos/Adelina preferred_.jpg",
            funFact: "I like tiny little miniscule things"
        },
        {
            name: "Andrea Londono Rios",
            about: "Human Practices Sci-Comm | Honours Biology (Year 4)",
            link: "https://www.linkedin.com/in/andrealondo%C3%B1orios/",
            cover: "/Photos/Andrea Londono Rios.jpg",
            funFact: "One Direction will always remain my fav band"
        },
        {
            name: "Shankave Sritharan",
            about: "Human Practices Outreach | Honour Biochemistry (Year 3)",
            link: "www.linkedin.com/in/sritharanshankave",
            cover: "/Photos/Shankave Sritharan.jpg",
            funFact: "I can play the ukulele!"
        },
        {
            name: "Avleen Dhaliwal",
            about: "Human Practices Sci-Comm | Health Sciences (Year 2)",
            link: "",
            cover: "/Photos/Avleen.jpg",
            funFact: "I'm a lifeguard!"
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
            about: "Media Team Lead | Honours Health Sci Level I",
            link: "https://www.linkedin.com/in/chinyere-iro-784834289/",
            cover: "/Photos/Chinyere Iro 1.png",
            funFact: "I love emboirdery!"
        },
        {
            name: "Harvey Dang",
            about: "Media Team Member | Honours Earth and Environmental Science (Year 1)",
            link: "https://www.linkedin.com/in/harvey-dang-27716731b/",
            cover: "/Photos/Harvey Dang.jpg",
            funFact: "I love yogurt"
        },
        {
            name: "Fiona Encarnacion",
            about: "Media Team Member | Molecular Biology and Genetics (Research Specialization)",
            link: "www.linkedin.com/in/fiona-encarnacion",
            cover: "/Photos/Fiona.jpg",
            funFact: "I like bossa nova!"
        },
        {
            name: "Siya",
            about: "Social Media Lead | Honours Life Science (Year 3)",
            link: "",
            cover: "/Photos/Siya.JPG",
            funFact: "I love mint chocolate chip ice cream :)"
        }
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
            about: "Web Dev Lead | Software Engineering (Year 3)",
            link: "https://www.linkedin.com/in/atul5rao/",
            cover: "/Photos/Atul Rao.JPEG",
            funFact: "I like maps"
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
