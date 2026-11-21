import type { ComponentProps } from "react"
import ProductsPage from "../../src/components/pages/ProductsPage"

export default function Page(props: ComponentProps<typeof ProductsPage>) {
    return <ProductsPage {...props} />
}
