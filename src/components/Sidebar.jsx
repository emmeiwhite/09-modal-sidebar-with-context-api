import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../context'

export default function Sidebar() {
  const { closeSidebar, isSidebarOpen } = useGlobalContext()
  return (
    <div className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <button
        className="btn close-btn"
        onClick={closeSidebar}
      >
        <FaTimes />
      </button>
      <h1>Sidebar!!!</h1>
    </div>
  )
}
