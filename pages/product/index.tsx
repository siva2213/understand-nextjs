import Link from 'next/link'
function ProductDetails() {
    
   
    return (
        <>
        <div>
            <Link href='/' >
                Home
            </Link>
        </div>
        <Link href='/product/1'>
        <h1> Product Details 1</h1>
        </Link>
        <Link href='/product/2'>
        <h1> Product Details 2</h1></Link>
        <Link href='/product/3' replace>
        <h1> Product Details 3</h1>
        </Link>
            
        </>
    )
}

export default ProductDetails