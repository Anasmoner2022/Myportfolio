
/**
 * Components
 */
import SkillCard from "./SkillCard"

const skillItem = [
    {
        imgSrc : '/images/figma.svg',
        label: 'Figma',
        desc: 'Design tool'
    },
    {
        imgSrc : '/images/css3.svg',
        label: 'CSS',
        desc: 'User Interface'
    },
    {
        imgSrc : '/images/javascript.svg',
        label: 'JavaScript',
        desc: 'Interaction'
    },
    {
        imgSrc : '/images/nodejs.svg',
        label: 'NodeJS',
        desc: 'Web Server'
    },
    {
        imgSrc : '/images/expressjs.svg',
        label: 'ExpressJS',
        desc: 'Node Framework'
    },
    {
        imgSrc : '/images/mongodb.svg',
        label: 'MongoDB',
        desc: 'Database'
    },
    {
        imgSrc : '/images/react.svg',
        label: 'React',
        desc: 'Framework'
    },
    {
        imgSrc : '/images/tailwindcss.svg',
        label: 'TailwindCSS',
        desc: 'User Interface'
    },
    {
        imgSrc : '/images/git.svg',
        label: 'Git',
        desc: 'Version Control'
    },
    {
        imgSrc: '/images/go.svg',
        label: 'Go lang',
        desc: 'Backend Development'
    }
]


const Skill = () => {
  return (
      <section className="section">
        <div className="container">

            <h2 className="headline-2 reveal-up">
                Essential Tools I use
            </h2>

              <p className="reveal-up mb-8 mt-3 max-w-[50ch] text-zinc-400">
                Discover the powerful tools and technologies I use to create exceptional, high-performing websites & application.
            </p>

            <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-3">
                {skillItem.map(({imgSrc,label,desc},key)=>(
                    <SkillCard  
                     imgSrc={imgSrc} 
                     label={label} 
                     desc={desc} 
                     key={key}
                     classes="reveal-up" />
                ))
                }
            </div>
        </div>
      </section>
  )
}

export default Skill