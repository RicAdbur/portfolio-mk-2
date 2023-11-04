import Card from "../components/Card"
import projectData from "../data/projects.json"

const Projects = () => {
  return (
    <>
      <div className="row g-4">
        {projectData.map(project => {
          return (
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={project.slug}>
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