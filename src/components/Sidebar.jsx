import logo from '../logo.svg'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../context'
import { social, links } from '../data'

export default function Sidebar() {
  const { closeSidebar, isSidebarOpen } = useGlobalContext()
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="sidebar-header">
        <img
          src={logo}
          alt="Company Logo"
          className="logo"
        />
        <button
          className="btn close-btn"
          onClick={closeSidebar}
        >
          <FaTimes />
        </button>
      </div>

      {/* Menu List | We have social array to construct this in React */}

      <ul className="links">
        {links.map(link => {
          const { id, url, text, icon } = link
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          )
        })}
      </ul>

      <ul className="social-links">
        {social.map(link => {
          const { id, url, icon } = link
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
