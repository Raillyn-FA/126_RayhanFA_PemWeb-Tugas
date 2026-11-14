import { useState } from "react";

export default function ProductForm({ product, onSubmit, onCancel }) {
  const isEdit = product !== null;
  const [name, setName] = useState(isEdit ? product.name : "");
  const [price, setPrice] = useState(isEdit ? String(product.price) : "");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const priceNumber = Number(price);

    if (name.trim() === "") {
      setError("Nama produk tidak boleh kosong.");
      return;
    }
    if (!Number.isFinite(priceNumber) || priceNumber <= 0) {
      setError("Harga harus lebih dari 0.");
      return;
    }

    onSubmit({ name: name.trim(), price: priceNumber });
  }

  return (
    <form onSubmit={handleSubmit}>
      {isEdit && <p className="card-id">ID: {product.id}</p>}

      <label className="label" htmlFor="name">Nama Produk</label>
      <input
        id="name"
        className="input"
        placeholder="Contoh: Pulpen"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label className="label" htmlFor="price">Harga (Rp)</label>
      <input
        id="price"
        className="input"
        type="number"
        placeholder="Contoh: 5000"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      {error ? (
        <p className="hint hint-error">{error}</p>
      ) : (
        <p className="hint">Harga harus lebih dari 0.</p>
      )}

      <div className="modal-actions">
        <button type="button" className="btn btn-outline" onClick={onCancel}>
          Batal
        </button>
        <button type="submit" className="btn btn-primary">
          {isEdit ? "Simpan Perubahan" : "Simpan Produk"}
        </button>
      </div>
    </form>
  );
}
