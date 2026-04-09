import React from 'react';
import Title from './Subtitle';
import Link from 'next/link';
import { SimpleHover } from './ui/simple-hover';
import membersData from '../data/membersData.json';

type Member = {
    name: string;
    about: string;
    link: string;
    cover: string;
    funFact: string;
};

type MembersData = {
    PI: Member[];
    advisors: Member[];
    pres: Member[];
    wetlab: Member[];
    drylab: Member[];
    hp: Member[];
    media: Member[];
    finance: Member[];
    webDev: Member[];
};

const Members = () => {
    const normalizedData = (membersData as { default?: MembersData }).default ?? (membersData as MembersData);
    const data: MembersData = normalizedData;

    const renderTeamSection = (title: string, members: Member[] = []) => (
        <>
            <Title text={title} className="mb-5" />
            <hr />
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 py-6 mb-10 gap-y-5">
                {members.map((member, index) => (
                    <Link href={member.link} key={index} className={member.link ? "cursor-pointer" : ""}>
                        {member.cover ? (
                            <SimpleHover imageUrl={member.cover} className="w-full">
                                <div className="space-y-5 pr-2">
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
            
            {renderTeamSection("Principal Investigators", data.PI)}
            {renderTeamSection("Advisors", data.advisors)}
            {renderTeamSection("Co-Presidents", data.pres)}
            {renderTeamSection("Wet Lab", data.wetlab)}
            {renderTeamSection("Dry Lab", data.drylab)}
            {renderTeamSection("Human Practices", data.hp)}
            {renderTeamSection("Media and Social Media", data.media)}
            {renderTeamSection("Finance and Sponsorships", data.finance)}
            {renderTeamSection("Web Development", data.webDev)}
        </div>
    );
}

export default Members;
