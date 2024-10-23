import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../context'

export default function Modal() {
  const value = useGlobalContext()
  return (
    <section className={value.isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}>
      <div className="modal-container">
        <h2>The Modal Content goes here!</h2>
        <button
          className="close-modal-btn"
          onClick={closeModal}
        >
          <FaTimes />
        </button>
      </div>
    </section>
  )
}
