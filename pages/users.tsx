import User from '../components/user'
export type userObj = {
    id: number;
    name: string;
}
const UserList:React.FC<{users:[]}> = ({ users }) => {
    console.log(users, 'users')
    return (
        <>
            <h1> User List </h1>
            {users.map((user:userObj) => {
                return (
                    <div key={user.id} >
                        <User user={user}/>
                    </div>
                )
            })}
        </>
    )
}

export default UserList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return {
        props: {
            users: data
        }
    }
}