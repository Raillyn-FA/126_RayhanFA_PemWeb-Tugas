export default function Modal({ title, description, onClose, children }) {
  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Tutup">
          ×
        </button>
        {title && <h2 className="modal-title">{title}</h2>}
        {description && <p className="modal-desc">{description}</p>}
        {children}
      </div>
    </div>
  );
}
