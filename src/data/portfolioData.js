import IMG_LIB from "../assets/images/portfolio/personalized-components-library.PNG";
import IMG_BASES from "../assets/images/portfolio/angularBases.png";
import IMG_DIGIDEX from "../assets/images/portfolio/digidex.png";

const CDN = "https://cdn.simpleicons.org";

export const portfolioData = [
  {
    id: "library",
    img: IMG_LIB,
    title: "Personalized Components Library",
    icons: [
      `${CDN}/angular/dd0031`,
      `${CDN}/sass/cc6699`,
      `${CDN}/typescript/3178c6`,
      `${CDN}/html5/e34f26`,
    ],
    demo: "https://components-library-lca.netlify.app/",
    delay: 0,
  },
  {
    id: "bases",
    img: IMG_BASES,
    title: "Angular Bases",
    icons: [
      `${CDN}/angular/dd0031`,
      `${CDN}/sass/cc6699`,
      `${CDN}/typescript/3178c6`,
    ],
    demo: "https://angularbases-lcantare.netlify.app/",
    delay: 80,
  },
  {
    id: "digidex",
    img: IMG_DIGIDEX,
    title: "Digi-Dex",
    icons: [
      `${CDN}/javascript/f7df1e`,
      `${CDN}/html5/e34f26`,
      `${CDN}/css/1572b6`,
    ],
    demo: "https://digidex-lcantare.netlify.app/",
    delay: 160,
  },
];

export default portfolioData;
