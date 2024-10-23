import { useGlobalContext } from '../context'
import { FaBars } from 'react-icons/fa'

export default function Home() {
  const { test, updateTestString } = useGlobalContext()

  return (
    <main>
      {/* <button className="sidebar-toggle">
        <FaBars />
      </button> */}
      <button className="btn">open modal</button>
    </main>
  )
}
