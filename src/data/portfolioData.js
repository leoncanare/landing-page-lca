import VID_LAMINARRA from "../assets/videos/editorial-laminarra.webm";
import VID_SOLAR from "../assets/videos/mantenimiento-solar.webm";
import IMG_SHOT from "../assets/images/portfolio/screen-multi-shot.gif";
import IMG_LIB from "../assets/images/portfolio/personalized-components-library.PNG";

const CDN = "https://cdn.simpleicons.org";

export const portfolioData = [
  {
    id: "laminarra",
    video: VID_LAMINARRA,
    title: "Editorial Lamiñarra",
    domain: "laminarra.com",
    descKey: "pf_laminarra_desc",
    icons: [
      `${CDN}/astro/ff5d01`,
      `${CDN}/nestjs/e0234e`,
      `${CDN}/mongodb/47a248`,
      `${CDN}/cloudinary/3448c5`,
      `${CDN}/typescript/3178c6`,
    ],
    demo: "https://laminarra.com/",
    delay: 0,
  },
  {
    id: "solar",
    video: VID_SOLAR,
    title: "Mantenimiento Solar",
    domain: "mantenimientosolar.es",
    descKey: "pf_solar_desc",
    icons: [
      `${CDN}/html5/e34f26`,
      `${CDN}/javascript/f7df1e`,
      `${CDN}/bootstrap/7952b3`,
      `${CDN}/jquery/0769ad`,
      `${CDN}/lottiefiles/00ddb3`,
    ],
    demo: "https://mantenimientosolar.es",
    delay: 80,
  },
  {
    id: "screenshot",
    img: IMG_SHOT,
    title: "Screen Multi-Shot",
    descKey: "pf_shot_desc",
    icons: [
      `${CDN}/python/3776ab`,
      `${CDN}/claude/d97757`,
    ],
    demo: "https://github.com/leoncanare/screen-multi-shot",
    demoLabel: "GitHub ↗",
    delay: 160,
  },
  {
    id: "library",
    img: IMG_LIB,
    title: "Personalized Components Library",
    descKey: "pf_lib_desc",
    icons: [
      `${CDN}/angular/dd0031`,
      `${CDN}/sass/cc6699`,
      `${CDN}/typescript/3178c6`,
      `${CDN}/html5/e34f26`,
    ],
    demo: "https://components-library-lca.netlify.app/",
    delay: 240,
  },
];

export default portfolioData;
