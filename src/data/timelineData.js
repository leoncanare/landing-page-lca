import UNIR from "../assets/images/logos/unir-logo.png";
import AEGON from "../assets/images/logos/aegon-logo.png";
import BOSONIT from "../assets/images/logos/bosonit-letters-logo.png";

// Work timeline entries (most recent first).
// Text fields are i18n keys; `tech` tags are literal (not translated).
export const timelineData = [
  {
    id: "unir",
    logo: UNIR,
    logoHeight: 30,
    logoPad: 16,
    roleKey: "ex1_role",
    dateKey: "ex1_date",
    descKey: "ex1_desc",
    bulletKeys: ["ex1_b1", "ex1_b2", "ex1_b3"],
    tech: ["Angular 18/20", "Nx", "TypeScript", "Storybook", "Azure · Jira"],
    current: true,
  },
  {
    id: "micaela",
    logo: BOSONIT,
    logoHeight: 24,
    logoPad: 16,
    roleKey: "ex2_role",
    dateKey: "ex2_date",
    descKey: "ex2_desc",
    bulletKeys: ["ex2_b1", "ex2_b2", "ex2_b3"],
    tech: ["Angular v17", "TypeScript", "Storybook"],
  },
  {
    id: "aegon",
    logo: AEGON,
    logoHeight: 27,
    logoPad: 18,
    roleKey: "ex3_role",
    dateKey: "ex3_date",
    descKey: "ex3_desc",
    bulletKeys: ["ex3_b1", "ex3_b2", "ex3_b3"],
    tech: ["Angular v8 / v17", "TypeScript", "Storybook · Sass"],
  },
  {
    id: "staffit",
    logo: BOSONIT,
    logoHeight: 24,
    logoPad: 16,
    roleKey: "ex4_role",
    dateKey: "ex4_date",
    descKey: "ex4_desc",
    bulletKeys: ["ex4_b1", "ex4_b2", "ex4_b3"],
    tech: ["Angular v12", "TypeScript"],
  },
];

export default timelineData;
