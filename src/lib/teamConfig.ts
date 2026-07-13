import type { Member } from "@/components/team/MemberCard";

export type TeamGroupKey =
  | "PI"
  | "advisor"
  | "pres"
  | "wetlab"
  | "drylab"
  | "hp"
  | "media"
  | "finance"
  | "webDev";

export const TEAM_GROUPS: {
  key: TeamGroupKey;
  label: string;
  eyebrow: string;
  color: string;
  bar: string;
  text: string;
}[] = [
  { key: "PI", label: "Principal Investigator", eyebrow: "Faculty", color: "#7A003C", bar: "bg-maroon", text: "text-maroon" },
  { key: "advisor", label: "Primary Advisor", eyebrow: "Faculty", color: "#9A1852", bar: "bg-maroon-light", text: "text-maroon" },
  { key: "pres", label: "Co-Presidents", eyebrow: "Leadership", color: "#7A003C", bar: "bg-maroon", text: "text-maroon" },
  { key: "wetlab", label: "Wet Lab", eyebrow: "Subteam", color: "#15A06B", bar: "bg-leaf", text: "text-leaf-deep" },
  { key: "drylab", label: "Dry Lab", eyebrow: "Subteam", color: "#17B6C9", bar: "bg-cyan", text: "text-cyan-deep" },
  { key: "hp", label: "Human Practices", eyebrow: "Subteam", color: "#F4B740", bar: "bg-amber", text: "text-amber-deep" },
  { key: "media", label: "Media", eyebrow: "Subteam", color: "#7B6EF6", bar: "bg-violet", text: "text-violet-deep" },
  { key: "finance", label: "Finance & Sponsorships", eyebrow: "Subteam", color: "#FF6B6B", bar: "bg-coral", text: "text-coral-deep" },
  { key: "webDev", label: "Web Development", eyebrow: "Subteam", color: "#0B7A50", bar: "bg-leaf-deep", text: "text-leaf-deep" },
];

export type TeamNode = {
  member: Member;
  groupKey: TeamGroupKey;
  groupLabel: string;
  groupEyebrow: string;
  color: string;
  bar: string;
  text: string;
  side: "left" | "right";
  index: number;
  y: number;
  leftX: number;
  rightX: number;
  isFirstInGroup: boolean;
};

export const ROW_HEIGHT = 220;
export const GROUP_GAP = 88;
export const HELIX_CENTER = 40;
export const HELIX_AMP = 24;

export function buildTeamNodes(data: Record<TeamGroupKey, Member[]>): TeamNode[] {
  const nodes: TeamNode[] = [];
  let y = GROUP_GAP;
  let globalIndex = 0;

  for (const group of TEAM_GROUPS) {
    const members = data[group.key] ?? [];
    members.forEach((member, i) => {
      const phase = globalIndex * 0.42;
      nodes.push({
        member,
        groupKey: group.key,
        groupLabel: group.label,
        groupEyebrow: group.eyebrow,
        color: group.color,
        bar: group.bar,
        text: group.text,
        side: globalIndex % 2 === 0 ? "left" : "right",
        index: globalIndex,
        y: y + ROW_HEIGHT / 2,
        leftX: HELIX_CENTER + Math.sin(phase) * HELIX_AMP,
        rightX: HELIX_CENTER + Math.sin(phase + Math.PI) * HELIX_AMP,
        isFirstInGroup: i === 0,
      });
      y += ROW_HEIGHT;
      globalIndex++;
    });
    y += GROUP_GAP * 0.5;
  }

  return nodes;
}

export function helixHeight(nodes: TeamNode[]) {
  if (!nodes.length) return 400;
  return nodes[nodes.length - 1].y + ROW_HEIGHT;
}
