import Link from 'next/link'
const ProductList: React.FC<{ products: any }> = ({ products }) => {
    return (
        <div>
            {products.map((product: any) => {
                return (
                    <div key={product.id}>
                        <h2>{product.id}. {product.title} - {product.price}</h2>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList

export async function getStaticProps() {
    console.log('generating/ regenerating')
    const response = await fetch('http://localhost:4000/products')
    const data = await response.json()
    return {
        props: {
            products: data.slice(0, 3)
        },
        revalidate: 10
    }
}