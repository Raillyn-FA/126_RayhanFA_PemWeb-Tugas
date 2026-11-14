import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import Modal from "./components/Modal";
import ProductForm from "./components/ProductForm";
import DeleteConfirm from "./components/DeleteConfirm";
import { initialProducts } from "./data/initialProducts";

export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");
  
  const [modal, setModal] = useState(null);

  const keyword = search.trim().toLowerCase();
  const visibleProducts = products.filter((p) =>
    p.name.toLowerCase().includes(keyword)
  );

  const closeModal = () => setModal(null);

  function handleAdd(data) {
    const nextId = products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
    setProducts([...products, { id: nextId, ...data }]);
    closeModal();
  }

  function handleEdit(data) {
    setProducts(
      products.map((p) => (p.id === modal.product.id ? { ...p, ...data } : p))
    );
    closeModal();
  }

  function handleDelete() {
    setProducts(products.filter((p) => p.id !== modal.product.id));
    closeModal();
  }

  return (
    <main className="page">
      <Header onAdd={() => setModal({ type: "add" })} />

      <SearchBar value={search} onChange={setSearch} total={products.length} />

      <ProductList
        products={visibleProducts}
        onEdit={(product) => setModal({ type: "edit", product })}
        onDelete={(product) => setModal({ type: "delete", product })}
      />

      <p className="footer-note">
        Menampilkan {visibleProducts.length} dari {products.length} produk
      </p>

      {modal?.type === "add" && (
        <Modal
          title="Tambah Produk"
          description="Masukkan informasi produk baru."
          onClose={closeModal}
        >
          <ProductForm product={null} onSubmit={handleAdd} onCancel={closeModal} />
        </Modal>
      )}

      {modal?.type === "edit" && (
        <Modal
          title="Edit Produk"
          description="Perbarui informasi produk yang dipilih."
          onClose={closeModal}
        >
          <ProductForm
            product={modal.product}
            onSubmit={handleEdit}
            onCancel={closeModal}
          />
        </Modal>
      )}

      {modal?.type === "delete" && (
        <Modal onClose={closeModal}>
          <DeleteConfirm
            product={modal.product}
            onConfirm={handleDelete}
            onCancel={closeModal}
          />
        </Modal>
      )}
    </main>
  );
}
