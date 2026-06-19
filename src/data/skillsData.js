// Tech-icon chips for the Skills section.
// `icon` = simpleicons CDN url; `badge` = text fallback (no brand icon);
// `mono` = render the CDN icon through --logo-filter (monochrome brand marks).
const CDN = "https://cdn.simpleicons.org";

export const skillsData = [
  {
    titleKey: "sk_front",
    delay: 0,
    skills: [
      { icon: `${CDN}/angular/dd0031`, name: "Angular", sub: "v8 → v20" },
      { icon: `${CDN}/nx/143055`, name: "Nx", sub: "Monorepos" },
      { icon: `${CDN}/typescript/3178c6`, name: "TypeScript", sub: "Advanced" },
      { icon: `${CDN}/javascript/f7df1e`, name: "JavaScript", sub: "Advanced" },
      { icon: `${CDN}/html5/e34f26`, name: "HTML5", sub: "Advanced" },
      { icon: `${CDN}/css/1572b6`, name: "CSS3", sub: "Advanced" },
      { icon: `${CDN}/sass/cc6699`, name: "Sass", sub: "Advanced" },
      { icon: `${CDN}/tailwindcss/06b6d4`, name: "Tailwind", sub: "Intermediate" },
      { icon: `${CDN}/astro/ff5d01`, name: "Astro", sub: "SSR sites" },
      { icon: `${CDN}/nextdotjs/ffffff`, name: "Next.js", sub: "React SSR", mono: true },
      { icon: `${CDN}/greensock/0ae448`, name: "GSAP", sub: "Animation" },
      { icon: `${CDN}/react/61dafb`, name: "React", sub: "Basic" },
      { badge: "⧉", badgeGradient: true, name: "Micro-frontends", sub: "Experienced" },
    ],
  },
  {
    titleKey: "sk_tools",
    delay: 120,
    skills: [
      { icon: `${CDN}/git/f05032`, name: "Git / GitHub", sub: "Advanced" },
      { icon: `${CDN}/storybook/ff4785`, name: "Storybook", sub: "Advanced" },
      { icon: `${CDN}/jira/0052cc`, name: "Jira", sub: "Advanced" },
      { badge: "Az", badgeBg: "#0078d4", badgeMono: true, name: "Azure", sub: "Intermediate" },
      { icon: `${CDN}/jenkins/d24939`, name: "Jenkins", sub: "Intermediate" },
      { icon: `${CDN}/teamcity/000000`, name: "TeamCity", sub: "Intermediate", mono: true },
      { icon: `${CDN}/figma/f24e1e`, name: "Figma", sub: "Intermediate" },
      { badge: "J", badgeBg: "#8a4182", name: "Jasmine", sub: "Intermediate" },
      { icon: `${CDN}/cypress/69d3a7`, name: "Cypress", sub: "Basic" },
      { badge: "{ }", badgeGradient: true, name: "REST APIs", sub: "Intermediate" },
    ],
  },
  {
    titleKey: "sk_back",
    delay: 200,
    skills: [
      { icon: `${CDN}/anthropic/D97757`, name: "Claude / Claude Code", sub: "Daily driver" },
      { badge: "M", badgeGradient: true, badgeMono: true, name: "MCP", sub: "Tooling" },
      { icon: `${CDN}/nestjs/e0234e`, name: "NestJS", sub: "REST APIs" },
      { icon: `${CDN}/nodedotjs/5fa04e`, name: "Node.js", sub: "Backend" },
      { icon: `${CDN}/mongodb/47a248`, name: "MongoDB", sub: "Mongoose" },
      { icon: `${CDN}/cloudinary/3448c5`, name: "Cloudinary", sub: "Media" },
      { icon: `${CDN}/jsonwebtokens/ffffff`, name: "JWT / Auth", sub: "Passport", mono: true },
    ],
  },
];

export default skillsData;
