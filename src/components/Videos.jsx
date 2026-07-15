import siteContent from '../content/siteContent.json'

export default function Videos() {
  const { videos } = siteContent

  return (
    <section className="section" id="videos">
      <div className="container">
        <h2 className="section-title">{videos.title}</h2>
        <div className="gallery" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
          {videos.items.map((video, index) => (
            <div key={`${video.title}-${index}`} style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
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
