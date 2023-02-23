// import { useRouter } from 'next/router'///make sure fallback is true 

const Post: React.FC<{ post: any }> = ({ post }) => {
    /*const router = useRouter()
    if(router.isFallback) {
        return <div>Loading...</div>
    }*///make sure fallback is true 
    return (
        <>
            <div>
                {post.title}
            </div>
            <hr />
            <div>{post.body}</div>
        </>
    )
}

export default Post

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {postId: '1'}
            },
            {
                params: {postId: '2'}
            },
            {
                params: {postId: '3'}
            }
        ], fallback: 'blocking' //false, //true
    }
}

export async function getStaticProps(content: any) {
    const { params } = content
    const response = await   fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()
    /*if(!data.id) {
        return {
            notFound: true
        }
    }*/ //make sure fallback is true 
    return {
        props: {
            post: data
        }
    }
}

