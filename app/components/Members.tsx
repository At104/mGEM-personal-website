import React from 'react';
import Title from './Subtitle';
import Link from 'next/link';
import { DirectionAwareHover } from './ui/direction-aware-hover';

const Members = () => {

    const advisors = [
        {
            name: "Dr. Jonathan Bramson",
            about: "Vice-Dean, Faculty of Health Sciences",
            link: "https://experts.mcmaster.ca/display/bramsonj ",
            cover: "/bramson-jonathan.jpg",
        }

    ];
    const PI = [
        {
            name: "Dr. Tohid Didar",
            about: "Associate Professor, Mechanical Engineering",
            link: "https://experts.mcmaster.ca/display/didart",
            cover: "/tohid-didar-news-header-470x316.jpg",
        }

    ];

    const pres = [
        {
            name: "Andrew Chami",
            about: "Co-President 2024 | Health Science (Honours)",
            link: "https://www.linkedin.com/in/andrew-chami/",
            cover: "/Andrew_Chami.JPG",
        },
        {
            name: "Chantel Luo",
            about: "Co-President 2024 | Biomedical and Chemical Engineering, Level 3",
            link: "https://www.linkedin.com/in/chantal-luo/",
            cover: "/Chantel_Luo.JPG",
        }

    ];

    const wetlab = [
        {
            name: "Derin Sayin",
            about: "Wet Lab Lead | Biochemistry, Level 2",
            link: "https://www.linkedin.com/in/derin-sayin-733412261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            cover: "/Derin_Sayin.jpg",
        },
        {
            name: "Kevin",
            about: "Wet Lab Lead | Life Sciences, Level 3",
            link: "https://www.linkedin.com/in/derin-sayin-733412261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            cover: "/Kevin.JPG",
        },
        {
            name: "Abby Benyair",
            about: "Wet Lab Member | Materials and Biomedical Engineering, Level 3",
            link: "http://www.linkedin.com/in/abby-benyair-91516b1b4",
            cover: "/Abby_Benyair.JPG",
        },
        {
            name: "Jiawen Ren",
            about: "Wet Lab Member | Life Sciences, Level 1",
            link: "https://www.linkedin.com/in/jiawen-ren-b878a2300/",
            cover: "/Jiawen_Ren.JPG",
        },
        {
            name: "Jacob Stotland",
            about: "Wet Lab Member | Arts and Science, Level 1",
            link: "",
            cover: "/Jacob_Stotland.JPG",
        },
        {
            name: "Rubani Suri",
            about: "Wet Lab Member | Health Sciences, Level 2",
            link: "http://www.linkedin.com/in/rubani-suri",
            cover: "/Rubani.jpg",
        },
        {
            name: "Isabella",
            about: "Wet Lab Senior Member | Molecular Biology and Genetics, Level 2",
            link: "https://www.linkedin.com/in/isabellavalentini?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            cover: "/Isabella.jpg",
        },
        {
            name: "Alice Pao",
            about: "Wet Lab Senior Member | Biochemistry, Level 3",
            link: "https://www.linkedin.com/in/alice-pao03?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            cover: "/Alice_Pao.jpg",
        },
        {
            name: "Haram",
            about: "Wet Lab Member | Health Sciences, Level 3",
            link: "https://www.linkedin.com/in/haram-akram-abb098265/",
            cover: "/Haram.jpg",
        }

    ];

    const drylab = [
        {
            name: "Alesha Singh",
            about: "Dry Lab Lead | Health Science (Honours)",
            link: "",
            cover: "/Alesha_Singh.jpg",
        },
        {
            name: "Franky Liu",
            about: "Dry Lab Lead | Health, Engineering Science, and Entrepreneurship (HESE), Level III",
            link: "https://www.linkedin.com/in/franky-liu-2a78601a4/",
            cover: "/Franky_Liu.jpg",
        },
        {
            name: "Marco Tan",
            about: "Dry Lab Member | Mechatronics and Biomedical Engineering, Level 3",
            link: "https://www.linkedin.com/in/marcotan04/",
            cover: "/Marco_Tan.jpg",
        },
        {
            name: "Morgan Puusaari",
            about: "Dry Lab Member | Life Sciences, Level 1",
            link: "",
            cover: "/Morgan_Puusaari.jpg",
        },
        {
            name: "Cynthia",
            about: "Dry Lab Member | Health Sciences, Level I",
            link: "",
            cover: "/Cynthia.jpg",
        },
        {
            name: "Navid",
            about: "Dry Lab Member | Health Sciences, Level 1",
            link: "",
            cover: "/Navid.jpg",
        },
        {
            name: "Jonathan Guan",
            about: "Dry Lab Member | Health Sciences, Level II",
            link: "",
            cover: "/Jonathan_Guan.jpg",
        }
    ];

    const hp = [
        {
            name: "Helen Peng",
            about: "HP Lead | Health Science, Engineering Science, and Entrepreneurship",
            link: "https://www.linkedin.com/in/helen-peng-0069a61b4",
            cover: "/Helen_Peng.jpg",
        },
        {
            name: "Anjana Sudharshan",
            about: "HP Lead | Honours Life Sciences",
            link: "http://www.linkedin.com/in/anjana-sud",
            cover: "/Anjana_Sudharshan.jpg",
        },
        {
            name: "Michelle Giang",
            about: "Outreach | Honours Biochemistry,  Level 3",
            link: "https://www.linkedin.com/in/marcotan04/",
            cover: "/Michelle_Giang.jpg",
        },
        {
            name: "Bohdan Mozharivsky ",
            about: "Entrepreneurship | Health Science, Engineering Science, and Entrepreneurship",
            link: "http://www.linkedin.com/in/bohdan-mozharivsky-481b9a245",
            cover: "/Bohdan.jpg",
        },
        {
            name: "Hassan Hassan",
            about: "Scicomm (Science Communication) | Honours Life Sciences",
            link: "https://www.linkedin.com/in/hassan-hassan-aa0524184/",
            cover: "/Hassan_Hassan.JPG",
        },
        {
            name: "Anh Bui",
            about: "Outreach | Honours Arts & Science",
            link: "https://www.linkedin.com/in/anhbui05/",
            cover: "/Anh_Bui.jpg",
        },
        {
            name: "Zoha",
            about: "Scicomm (Science Communication) | Honours Justice, Political Philosophy and Law",
            link: "",
            cover: "",
        }
    ];

    const admin = [
        {
            name: "Ashley Qian",
            about: "Project Manager Co-Lead | Health Science (Honours)",
            link: "https://www.linkedin.com/in/ashley-qian-624043217/",
            cover: "/Ashley_Qian.jpg",
        },
        {
            name: "Mahnoor Moin",
            about: "Project Manager Co-Lead | Health Science (Honours)",
            link: "https://www.linkedin.com/in/mahnoor-moin-8a5554196/",
            cover: "/Mahnoor_Moin.jpg",
        },
        {
            name: "Mya George",
            about: "Finance and Sponsorship Co-Lead |Graduate of Health Science (Honours), Child Health Specialization Incoming Masters of Arts Student, Health and Aging  ",
            link: "https://www.linkedin.com/in/mya-george-160a8b1a9/",
            cover: "/Mya_George.jpg",
        },
        {
            name: "Myra Godara",
            about: "Honours Biochemistry III | Finance and Sponsorship Co-Lead",
            link: "https://www.linkedin.com/in/myragodara/",
            cover: "/Myra_Godara.jpg",
        }
    ];

    const webDev = [
        {
            name: "Vanessa Lai",
            about: "Web Dev Lead | Software Engineering, Level 3",
            link: "https://www.linkedin.com/in/vanessa-lai",
            cover: "/Vanessa.JPG",
        }
    ];

    const media = [
        {
            name: "Jessie Liu",
            about: "Design Lead | Honours Biochemistry III",
            link: "",
            cover: "/Jessie_Liu.jpg",
        },
        {
            name: "Rand Al-Wazzan",
            about: "Social Media Lead | Honours Environmental Sciences, level 4",
            link: "http://www.linkedin.com/in/rand-al-wazzan-9784bb204",
            cover: "/Rand.jpg",
        },
        {
            name: "Kaia Seet",
            about: "Creative Designer | Electrical and Biomedical Engineering, Level II ",
            link: "http://www.linkedin.com/in/kaiaseet",
            cover: "/Kaia_Seet.JPG",
        },
        {
            name: "Melody",
            about: "Graphic Designer | Honours Biochemistry III",
            link: "https://www.linkedin.com/in/melody-ding/",
            cover: "/Melody.jpg",
        }
    ];
    

    return (
        <div className="py-20 sm:p-0 text-left px-4">
            <div className="text-4xl font-bold mt-32">
                TEAM
            </div>
            
            <Title text="Principal Investigators" className="mb-5" />
            <hr></hr>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 py-6 mb-10 gap-y-5">
                {PI.map((member, index) => (
                    <Link href={member.link} key={index}>
                        <DirectionAwareHover imageUrl={member.cover} className="w-full cursor-pointer">
                            <div className="space-y-5">
                                <h1 className="text-2xl font-bold">{member.name}</h1>
                                <p>{member.about}</p>
                            </div>
                        </DirectionAwareHover>
                    </Link>
                ))}
            </div> 
            <Title text="Advisors" className="mb-5" />
            <hr></hr>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 py-6 mb-10 gap-y-5">
                {advisors.map((member, index) => (
                    <Link href={member.link} key={index}>
                        <DirectionAwareHover imageUrl={member.cover} className="w-full cursor-pointer">
                            <div className="space-y-5">
                                <h1 className="text-2xl font-bold">{member.name}</h1>
                                <p>{member.about}</p>
                            </div>
                        </DirectionAwareHover>
                    </Link>
                ))}
            </div>  
            <Title text="Co-Pres" className="mb-5" />
            <hr></hr>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 py-6 mb-10 gap-y-5">
                {pres.map((member, index) => (
                    <Link href={member.link} key={index}>
                        <DirectionAwareHover imageUrl={member.cover} className="w-full cursor-pointer">
                            <div className="space-y-5">
                                <h1 className="text-2xl font-bold">{member.name}</h1>
                                <p>{member.about}</p>
                            </div>
                        </DirectionAwareHover>
                    </Link>
                ))}
            </div>            
            <Title text="Wet Lab" className="mb-5" />
            <hr></hr>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 py-6 mb-10 gap-y-5">
                {wetlab.map((member, index) => (
                    <Link href={member.link} key={index}>
                        <DirectionAwareHover imageUrl={member.cover} className="w-full cursor-pointer">
                            <div className="space-y-5">
                                <h1 className="text-2xl font-bold">{member.name}</h1>
                                <p>{member.about}</p>
                            </div>
                        </DirectionAwareHover>
                    </Link>
                ))}
            </div>

            <Title text="Dry Lab" className="mb-5" />
            <hr></hr>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 py-6 mb-10 gap-y-5">
                {drylab.map((member, index) => (
                    <Link href={member.link} key={index}>
                        <DirectionAwareHover imageUrl={member.cover} className="w-full cursor-pointer">
                            <div className="space-y-5">
                                <h1 className="text-2xl font-bold">{member.name}</h1>
                                <p>{member.about}</p>
                            </div>
                        </DirectionAwareHover>
                    </Link>
                ))}
            </div>

            <Title text="Human Practices" className="mb-5" />
            <hr></hr>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 py-6 mb-10 gap-y-5">
                {hp.map((member, index) => (
                    <Link href={member.link} key={index}>
                        <DirectionAwareHover imageUrl={member.cover} className="w-full cursor-pointer">
                            <div className="space-y-5">
                                <h1 className="text-2xl font-bold">{member.name}</h1>
                                <p>{member.about}</p>
                            </div>
                        </DirectionAwareHover>
                    </Link>
                ))}
            </div>

            <Title text="Web Dev" className="flex flex-col items-start justify-center mb-5" />
            <hr></hr>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 py-6 mb-10 gap-y-5">
                {webDev.map((member, index) => (
                    <Link href={member.link} key={index}>
                        <DirectionAwareHover imageUrl={member.cover} className="w-full space-y-5 cursor-pointer">
                            <div className="space-y-5">
                                <h1 className="text-2xl font-bold">{member.name}</h1>
                                <p>{member.about}</p>
                            </div>
                        </DirectionAwareHover>
                    </Link>
                ))}
            </div>

            <Title text="Media" className="mb-5" />
            <hr></hr>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 py-6 mb-10 gap-y-5">
                {media.map((member, index) => (
                    <Link href={member.link} key={index}>
                        <DirectionAwareHover imageUrl={member.cover} className="w-full cursor-pointer">
                            <div className="space-y-5">
                                <h1 className="text-2xl font-bold">{member.name}</h1>
                                <p>{member.about}</p>
                            </div>
                        </DirectionAwareHover>
                    </Link>
                ))}
            </div>

            <Title text="Administration" className="mb-5" />
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 py-6 mb-10 gap-y-5">
                {admin.map((member, index) => (
                    <Link href={member.link} key={index}>
                        <DirectionAwareHover imageUrl={member.cover} className="w-full cursor-pointer">
                            <div className="space-y-5">
                                <h1 className="text-2xl font-bold">{member.name}</h1>
                                <p>{member.about}</p>
                            </div>
                        </DirectionAwareHover>
                    </Link>
                ))}
            </div>

        </div>
    );
}

export default Members;
