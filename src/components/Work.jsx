
/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-3.jpg",
    title: "SK eCommerce website",
    tags: ["API", "MVC", "Production", ""],
    projectLink: "https://github.com",
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "Free Stock photo app",
    tags: ["API", "SPA"],
    projectLink: "https://github.com",
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "Recipe app",
    tags: ["API", "Development"],
    projectLink: "https://github.com",
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "Real state website",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com",
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "eCommerce website",
    tags: ["eCommerce", "Development"],
    projectLink: "https://github.com",
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "vCard Personal portfolio",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com",
  },
];




const Work = () => {
  return (
    <section id="work" className="section">
        <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">My Portfolio Highlights</h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc,title,tags,projectLink}, key)=>(
                    <ProjectCard 
                     key={key} 
                     imgSrc={imgSrc} 
                     title={title} 
                     tags={tags} 
                     projectLink={projectLink}
                    classes="reveal-up" />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work