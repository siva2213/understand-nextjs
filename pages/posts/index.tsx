import Link from 'next/link'
const PostList: React.FC<{posts:any}> = ({ posts }) => {
    return (
        <div>
            {posts.map((post: any) => {
                return (
                    <div key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                            <h4>{post.id}. {post.title}</h4>
                        </Link>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}

export default PostList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return {
        props: {
            posts: data.slice(0, 3)
        }
    }
}