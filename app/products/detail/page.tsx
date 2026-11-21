import type { ComponentProps } from "react"
import ProductDetailPage from "../../../src/components/pages/ProductDetailPage"

export default function Page(
    props: ComponentProps<typeof ProductDetailPage>,
) {
    return <ProductDetailPage {...props} />
}
