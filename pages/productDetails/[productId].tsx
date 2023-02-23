import { useRouter } from 'next/router'///make sure fallback is true 

const Product: React.FC<{ product: any }> = ({ product }) => {
    console.log(product, 'product')
    const router = useRouter()
    if(router.isFallback) {
        return <div>Loading...</div>
    } //make sure fallback is true 
    return (
        <>
            <div>
                {product.title}
            </div>
            <hr />
            <div>{product.price}</div>
        </>
    )
}

export default Product

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {productId: '1'}
            }
        ], fallback: true //false, //true
    }
}

export async function getStaticProps(content: any) {
    const { params } = content
    console.log(params, 'params')
    const response = await fetch(`http://localhost:4000/products/${params.productId}`)
    const data = await response.json()
    /*if(!data.id) {
        return {
            notFound: true
        }
    }*/ //make sure fallback is true 
    return {
        props: {
            product: data
        },
        revalidate: 1
    }
}

