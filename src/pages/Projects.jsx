import Card from "../components/Card"
import projectData from "../data/projects.json"

const Projects = () => {
  return (
    <>
      <div className="row g-5">
        {projectData.map(project => {
          return (
            <div className="col-sm-4 align-self-stretch mb-4" key={project.slug}>
              <Card
                name={project.name}
                slug={project.slug}
                img={project.img}
                desc={project.description}
                tech={project.technologies}
                link={project.deployed}
                repo={project.repository}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Projects