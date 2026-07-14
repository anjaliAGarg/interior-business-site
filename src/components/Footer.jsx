export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="container">
        <p>&copy; {currentYear} JMD Interiorr. All rights reserved.</p>
        <p>
          <a href="#home">Home</a> | 
          <a href="#projects"> Projects</a> | 
          <a href="#contact"> Contact</a> | 
          <a href="#"> Privacy Policy</a>
        </p>
        <p>📱 Follow us on social media</p>
        <p style={{ fontSize: '1.5rem' }}>
          <a href="#" style={{ marginRight: '15px' }}>f</a>
          <a href="#" style={{ marginRight: '15px' }}>📷</a>
          <a href="#">🐦</a>
        </p>
      </div>
    </footer>
  )
}
