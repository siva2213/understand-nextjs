import { useRouter } from 'next/router'
function Docs() {
    const router = useRouter()
    console.log(router.query, 'router')
    const { params = [] } = router.query
    console.log(params, 'params')
    return (
        <h1> Docs Home Page </h1>
    )
}

export default Docs