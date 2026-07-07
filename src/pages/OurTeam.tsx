import React from "react";
import { Helmet } from "react-helmet-async";
import PageHeader from "@/components/ui/PageHeader";
import TeamHelix from "@/components/team/TeamHelix";
import type { Member } from "@/components/team/MemberCard";
import membersData from "../data/membersData.json";

type MembersData = Record<
  "PI" | "advisors" | "pres" | "wetlab" | "drylab" | "hp" | "media" | "finance" | "webDev",
  Member[]
>;

export default function OurTeam() {
  return (
    <>
      <Helmet>
        <title>Our Team — McMaster iGEM</title>
        <meta name="description" content="Meet the investigators, leads, and members of mGEM — students from across McMaster faculties and subteams working together on synthetic biology." />
      </Helmet>
      <PageHeader
        eyebrow="Our team"
        title="Many faculties, one team"
        lede="Our members span programs across McMaster — engineering, life sciences, health sciences, commerce, and more — working together across Wet Lab, Dry Lab, Human Practices, Media, Finance, and Web Dev to bring each year's project to life."
      />
      <TeamHelix data={membersData as MembersData} />
    </>
  );
}
