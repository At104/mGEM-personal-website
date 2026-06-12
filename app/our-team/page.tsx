import React from "react";
import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import TeamHelix from "../components/TeamHelix";
import type { Member } from "../components/MemberCard";
import membersData from "../data/membersData.json";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the investigators, leads, and members of mGEM — one node at a time on our DNA strand.",
};

type MembersData = Record<
  "PI" | "advisors" | "pres" | "wetlab" | "drylab" | "hp" | "media" | "finance" | "webDev",
  Member[]
>;

export default function OurTeam() {
  return (
    <>
      <PageHeader
        eyebrow="Our team"
        title="Every member, one strand"
        lede="Each glowing node on the strand is one team member. Scroll down to travel the helix — every stop opens that person's profile."
      />
      <TeamHelix data={membersData as MembersData} />
    </>
  );
}
