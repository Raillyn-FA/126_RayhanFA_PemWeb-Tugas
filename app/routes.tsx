import { useState } from "react"
import { Route, Routes } from "react-router"
import RootPage from "./page"
import ProductsPage from "./products/page"
import ProductDetailPage from "./products/detail/page"
import SettingsPage from "./settings/page"
import NotFoundPage from "./not-found/page"
import PageLayout from "../src/components/templates/PageLayout"
import { initialProducts } from "../src/data/product/initial-products"
import type { Product, ProductValues } from "../src/types/product"
import type { ViewMode } from "../src/types/view-mode"

export default function AppRoutes() {
    // State bersama berada di atas semua halaman yang memakainya.
    const [products, setProducts] = useState<Product[]>(initialProducts)
    const [viewMode, setViewMode] = useState<ViewMode>("grid")

    function addProduct(values: ProductValues) {
        setProducts((current) => {
            const nextId =
                current.reduce((max, product) => Math.max(max, product.id), 0) +
                1
            return [...current, { id: nextId, ...values }]
        })
    }

    function editProduct(id: number, values: ProductValues) {
        setProducts((current) =>
            current.map((product) =>
                product.id === id ? { ...product, ...values } : product,
            ),
        )
    }

    function deleteProduct(id: number) {
        setProducts((current) => current.filter((product) => product.id !== id))
    }

    return (
        <Routes>
            <Route element={<PageLayout />}>
                <Route index element={<RootPage />} />
                <Route
                    path="products"
                    element={
                        <ProductsPage
                            products={products}
                            viewMode={viewMode}
                            onAdd={addProduct}
                            onEdit={editProduct}
                            onDelete={deleteProduct}
                        />
                    }
                />
                <Route
                    path="products/:id"
                    element={<ProductDetailPage products={products} />}
                />
                <Route
                    path="settings"
                    element={
                        <SettingsPage
                            viewMode={viewMode}
                            onChange={setViewMode}
                        />
                    }
                />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}
