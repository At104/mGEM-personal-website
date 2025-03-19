import React from 'react';
import Title from './Subtitle';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const Testimonies = () => {
    const testimonies = [
        {
            quote: "Joining iGEM has been one of the best decisions I have made thus far in my academic career. It has been instrumental in my development as a scientist and as a person. It has provided me with skills that are setting me up for success in a variety of areas, all while connecting me with an inspiring group of people!",
            name: "Isabella Valentini",
            title: "Senior Wet Lab Member"
        },
        {
            quote: "My involvement in iGEM has been a transformative journey, not only enriching my academic endeavors but also cultivating a diverse skill set that extends beyond the confines of the laboratory. iGEM has positioned me for success in future academic and professional pursuits. The lessons learned and experiences gained will undoubtedly shape my trajectory as I continue to navigate my journey in science and beyond.",
            name: "Alice Pao",
            title: "Senior Wet Lab Member"
        },
        {
            quote: "My experience in iGEM has been nothing short of extraordinary. Unlike other iGEM teams that focus on recruiting only upper years and PhD students, iGEM McMaster takes a chance on the young and aspiring - we focus on teaching and mentoring the future scientists of our generation. The hope of iGEM is to take young scientists interested in synthetic biology and cultivate them into researchers that can go on to make an impact elsewhere. iGEM is not just a club at McMaster. It's a student led internationally known research team that impacts the field of synthetic biology along with the lives and future of those involved in the team.",
            name: "Amanda Densil",
            title: "Wet Lab Mentor"
        }

    ]
    return (
        <div className='mb-20'>
            <Title text="TESTIMONIES" className="flex flex-col items-start justify-center mb-5" />
            <InfiniteMovingCards items={testimonies}  ></InfiniteMovingCards>
        </div>
    );
}

export default Testimonies;

