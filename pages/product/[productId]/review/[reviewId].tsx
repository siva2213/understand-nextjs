import { useRouter } from 'next/router'
function Review() {
    const router = useRouter()
    const {reviewId, productId} = router.query
    return (
        <>
            <h1> Details about product - {productId} Review - {reviewId}</h1>
        </>
    )
}

export default Review