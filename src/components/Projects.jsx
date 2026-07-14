export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Modern Living Room',
      image: 'https://via.placeholder.com/400x300?text=Living+Room+Design',
      description: 'Elegant modern design with warm tones'
    },
    {
      id: 2,
      title: 'Minimalist Kitchen',
      image: 'https://via.placeholder.com/400x300?text=Kitchen+Design',
      description: 'Sleek and functional kitchen space'
    },
    {
      id: 3,
      title: 'Luxury Bedroom',
      image: 'https://via.placeholder.com/400x300?text=Bedroom+Design',
      description: 'Serene bedroom with premium finishes'
    },
    {
      id: 4,
      title: 'Office Space',
      image: 'https://via.placeholder.com/400x300?text=Office+Design',
      description: 'Professional office environment'
    },
    {
      id: 5,
      title: 'Contemporary Bathroom',
      image: 'https://via.placeholder.com/400x300?text=Bathroom+Design',
      description: 'Modern bathroom with spa-like feel'
    },
    {
      id: 6,
      title: 'Retail Store',
      image: 'https://via.placeholder.com/400x300?text=Retail+Design',
      description: 'Inviting retail space design'
    }
  ]

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Our Projects</h2>
        <div className="gallery">
          {projects.map(project => (
            <div key={project.id} className="gallery-item">
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
