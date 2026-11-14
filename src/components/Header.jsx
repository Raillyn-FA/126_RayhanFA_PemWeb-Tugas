export default function Header({ onAdd }) {
  return (
    <header className="header">
      <div>
        <h1>Manajemen Produk</h1>
        <p className="subtitle">Kelola daftar produk dan harga dalam satu tempat.</p>
      </div>
      <button className="btn btn-primary" onClick={onAdd}>
        + Tambah Produk
      </button>
    </header>
  );
}
