export default function Videos() {
  const videos = [
    {
      id: 1,
      title: 'Modern Apartment Tour',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 2,
      title: 'Kitchen Renovation Process',
      url: 'https://www.youtube.com/embed/jNQXAC9IVRw'
    },
    {
      id: 3,
      title: 'Office Space Design',
      url: 'https://www.youtube.com/embed/9bZkp7q19f0'
    }
  ]

  return (
    <section className="section" id="videos">
      <div className="container">
        <h2 className="section-title">Project Videos</h2>
        <div className="gallery" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
          {videos.map(video => (
            <div key={video.id} style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <div className="video-container">
                <iframe
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 style={{ padding: '15px', textAlign: 'center', color: '#2c3e50' }}>{video.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
