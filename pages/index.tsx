import Link from 'next/link'
import { useRouter } from 'next/router'

function Home () {
    const router = useRouter()
    const onHandleClick  = () => {
        console.log('placing order')
        router.replace('/product')
    }
    return (
        <div>
            <h1>Home</h1>
            <Link href='/product'>
                Product
            </Link>
        <button onClick={onHandleClick}>Place Order</button>

        </div>

    )
}

export default Home