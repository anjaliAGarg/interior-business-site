import siteContent from '../content/siteContent.json'
import logo from '../assets/jmd-logo.svg'

export default function Header({ onContactClick }) {
  const { header, brand } = siteContent

  return (
    <header>
      <nav className="container">
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={logo} alt={`${brand.name} logo`} style={{ height: '42px', width: 'auto' }} />
        </div>
        <ul>
          {header.navItems.map(item => (
            <li key={item.href}><a href={item.href}>{item.label}</a></li>
          ))}
          <li><button onClick={onContactClick} className="btn" style={{ fontSize: '0.9rem', padding: '8px 20px' }}>{header.ctaLabel}</button></li>
        </ul>
      </nav>
    </header>
  )
}
