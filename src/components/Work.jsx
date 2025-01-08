
/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project1.png",
    title: "ChatGPT v4.5",
    tags: ["API","AI","Appwrite", "Interactivity",],
    projectLink: "",
    productionLink: ""
  },
  {
    imgSrc: "/images/project2.png",
    title: "Space Tourism website",
    tags: ["System Design", "Three js", "Web Design", "GSAP", "Interactivity"],
    projectLink: "https://github.com/Anasmoner2022/spaceTourism",
    productionLink: "",
    stage: "in-progress"
  },
  {
    imgSrc: "/images/project3.png",
    title: "SaaS Landing page",
    tags: ["Saas", "TypeScript", "Web Design", "Framer Motion"],
    projectLink: "https://github.com",
    productionLink: "",
    stage: "in-progress"

  },
  {
    imgSrc: "/images/project4.png",
    title: "E-commerce Dashboard",
    tags: ["Web-design", "Development", "MERN", "UI/UX",],
    projectLink: "https://github.com",
    productionLink: "https://www.linkedin.com/feed/update/urn:li:activity:7279487859269455872/",
    stage: "in-progress"

  },
  {
    imgSrc: "/images/project5.png",
    title: "Event Management Platform",
    tags: ["Development","BaaS", "Interactivity"],
    projectLink: "https://github.com/web-hawks/evento",
    productionLink: "",
    stage: "in-progress"

  },
  {
    imgSrc: "/images/project6.png",
    title: "Zentry Clone",
    tags: ["GSAP", "Animation", "Web Design", "Interactivity"],
    projectLink: "",
    productionLink: "",
    stage: "in-progress"

  },
];




const Work = () => {
  return (
    <section id="work" className="section">
        <div className="container">

        <h2 className="headline-2 reveal-up mb-8">My Portfolio Highlights</h2>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-x-4 gap-y-5">
                {works.map(({imgSrc,title,tags,projectLink,productionLink, stage}, key)=>(
                    <ProjectCard 
                     key={key} 
                     imgSrc={imgSrc} 
                     title={title} 
                     tags={tags} 
                     projectLink={projectLink}
                     productionLink={productionLink}
                     stage={stage}
                    classes="reveal-up" />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work