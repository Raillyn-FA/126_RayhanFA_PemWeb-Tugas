import ProductCard from "./ProductCard";

export default function ProductList({ products, onEdit, onDelete }) {
  if (products.length === 0) {
    return <p className="empty">Tidak ada produk yang cocok. Coba kata kunci lain.</p>;
  }

  return (
    <div className="grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
