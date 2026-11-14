export default function SearchBar({ value, onChange, total }) {
  return (
    <div className="toolbar">
      <input
        className="search"
        type="text"
        placeholder="Cari nama produk..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span className="count">{total} produk</span>
    </div>
  );
}
