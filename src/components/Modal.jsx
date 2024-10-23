import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../context'

export default function Modal() {
  const { isModalOpen, closeModal } = useGlobalContext()
  return (
    <section className={isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}>
      <div className="modal-container">
        <h2>💞 Imran Loves Rawdha! 💞 </h2>
        <p>💓💓💓💓💓💓💓💓💓💓💓💓💓💓💓💓💓💓💓💓💓💓💓💓💓💓💓💓💓💓</p>
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
