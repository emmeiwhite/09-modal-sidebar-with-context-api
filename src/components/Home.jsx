import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context'

export default function Home() {
  const { openModal } = useGlobalContext()
  return (
    <main>
      <button
        className="btn"
        onClick={openModal}
      >
        open modal
      </button>
    </main>
  )
}
