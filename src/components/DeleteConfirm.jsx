import { formatPrice } from "../utils/formatPrice";

export default function DeleteConfirm({ product, onConfirm, onCancel }) {
  return (
    <div className="delete-box">
      <div className="delete-icon">🗑</div>
      <h2 className="modal-title center">Hapus Produk?</h2>
      <p className="modal-desc center">Produk yang dihapus tidak dapat dikembalikan.</p>

      <div className="delete-summary">
        <span className="card-id">ID: {product.id}</span>
        <strong>{product.name}</strong>
        <span className="card-price">{formatPrice(product.price)}</span>
      </div>

      <div className="modal-actions">
        <button className="btn btn-outline" onClick={onCancel}>Batal</button>
        <button className="btn btn-danger" onClick={onConfirm}>Hapus Produk</button>
      </div>
    </div>
  );
}
