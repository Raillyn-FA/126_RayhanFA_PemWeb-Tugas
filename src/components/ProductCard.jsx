import { formatPrice } from "../utils/formatPrice";

export default function ProductCard({ product, onEdit, onDelete }) {
  return (
    <article className="card">
      <span className="card-id">ID: {product.id}</span>
      <h2 className="card-name">{product.name}</h2>
      <p className="card-price">{formatPrice(product.price)}</p>
      <div className="card-actions">
        <button className="btn btn-outline" onClick={() => onEdit(product)}>
          Edit
        </button>
        <button className="btn btn-outline-danger" onClick={() => onDelete(product)}>
          Hapus
        </button>
      </div>
    </article>
  );
}
