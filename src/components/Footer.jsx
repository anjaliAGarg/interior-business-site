import siteContent from '../content/siteContent.json'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { brand, footer } = siteContent

  return (
    <footer>
      <div className="container">
        <p>&copy; {currentYear} {brand.name}. All rights reserved.</p>
        <p>
          {footer.links.map((link, index) => (
            <span key={link.href}>
              {index > 0 ? ' | ' : ''}
              <a href={link.href}>{link.label}</a>
            </span>
          ))}
        </p>
        <p>{footer.socialTitle}</p>
        <p style={{ fontSize: '1.5rem' }}>
          {footer.socialLinks.map(link => (
            <a key={link.label} href={link.href} style={{ marginRight: '15px' }}>{link.icon}</a>
          ))}
        </p>
      </div>
    </footer>
  )
}
