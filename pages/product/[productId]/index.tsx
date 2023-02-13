import { useRouter } from 'next/router'
function ProductDetails() {
    const router = useRouter()
    console.log(router.query, 'query')
    const productId = router.query.productId
    return (
        <>
            <h1> Details about product - {productId}</h1>
        </>
    )
}

export default ProductDetails