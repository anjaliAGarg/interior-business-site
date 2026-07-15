import siteContent from '../content/siteContent.json'

export default function Projects() {
  const { projects } = siteContent

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">{projects.title}</h2>
        <div className="gallery">
          {projects.items.map((project, index) => (
            <div key={`${project.title}-${index}`} className="gallery-item">
              <img src={project.image} alt={project.title} />
              <div className="gallery-item-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
