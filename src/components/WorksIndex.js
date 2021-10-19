import { Images } from "../images";

const worksList = [
  {
    name: "Lets watch",
    coverDes: "watchlist app server",
    tech: ["node.js", "apollo-server", "graphql", "postgresql", "knex", "jwt"],
    cover: Images.letswatch,
    descr:
      "Lets watch is a project me and my friends came upon while hanging out and watching movies. We've planned to make an app where we could keep our movies to watch as well as join private rooms where users would be able to show their propositions and vote for theirs choice.",
    screen: Images.frontend,
    links: [
      { label: "proof of work", a: "https://youtu.be/JkQ_5WtFOsM" },
      { label: "server repo", a: "https://github.com/Meekee135/lets_watch/tree/master/server" },
      { label: "frontend repo", a: "https://github.com/Meekee135/przednikoniec" },
      { label: "figma", a: "https://www.figma.com/file/acbtpddy3iwE0q6p6Q21y2/https:-letswatch.movie?node-id=0%3A1" },
    ],
  },
  {
    name: "FooBar",
    coverDes: "interactive beer bar",
    tech: ["react", "restDB", "charts", "forms"],
    cover: Images.foobar,
    descr:
      "Foobar is my third semester exam project at which teachers created a server responding with all current bar informations and our task was to create a order tablet view and a dashboard meant to be displayed on tv in a bar. I was responsible for creating a tablet. Our goal was to make a solution which will allow everyone by the tables to get beers in one order, because we like to raise a toast all together!",
    links: [
      { label: "tablet", a: "https://vigilant-yalow-44fc16.netlify.app" },
      { label: "dashboard", a: "https://vigilant-yalow-44fc16.netlify.app/dashboard" },
      { label: "github", a: "https://github.com/Meekee135/foobar_exam" },
    ],
  },
  {
    name: "Ezone",
    coverDes: "gaming incubator form",
    tech: ["gsap animations", "vite", "html", "css", "js"],
    cover: Images.ezone,
    descr: "Ezone is a inclubator for e-sport athletes, providing tips for improving one's skills. They've given us a task to make a user sign-up form.",
    links: [
      { label: "netlify", a: "https://hardcore-hawking-f6bdf8.netlify.app" },
      { label: "github", a: "https://github.com/Meekee135/ezone_form" },
    ],
  },
  {
    name: "Vibal",
    coverDes: "music for your vibe",
    tech: ["html", "css", "js", "google sheets", "fetch api"],
    cover: Images.vibal,
    descr:
      "Vibal is a project from early in my education. The task was to leverage google sheets as api to dynamically change data on a website. I've created a spreadsheet with support of my friends while having a listening session at which we have been talking about emotions in every ongoing song and putting points to each one. I was able to fetch the data and sort it based on user input in order to play/skip youtube links in new browser window.",
    links: [
      { label: "netlify", a: "https://eloquent-albattani-7da583.netlify.app" },
      { label: "github", a: "https://github.com/Meekee135/vibal" },
      { label: "spreadsheet", a: "https://docs.google.com/spreadsheets/d/14laJWNL5BWp1ZUZae8-uSRgV0UgrPqFAdkxd5a2bBf0/edit?usp=sharing" },
    ],
  },
  {
    name: "Hacked Hogwards",
    coverDes: "sorting table",
    tech: ["html", "css", "js"],
    cover: Images.hacked,
    descr:
      "Hacked Hogwards is another assignment in which I was asked to create sorting/filter/search table with fetched data. I've used display: contents; in order to achive subgrid effect as well as javascript properties on html elements to determine sort direction.",
    links: [
      { label: "netlify", a: "https://flamboyant-feynman-c55c4a.netlify.app" },
      { label: "github", a: "https://github.com/Meekee135/hogward_table" },
    ],
  },
];
export default worksList;
