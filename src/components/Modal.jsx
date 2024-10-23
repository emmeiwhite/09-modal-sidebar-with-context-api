import { FaTimes } from 'react-icons/fa'

export default function Modal() {
  return (
    <section className="modal-overlay">
      <div className="modal-container">
        <h2>The Modal Content goes here!</h2>
        <button className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </section>
  )
}
