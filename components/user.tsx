import { userObj } from '../pages/users'
const User:React.FC<{user:userObj}> = ({ user }) => {
    return (
        <>
            <h3> {user.name} </h3>
        </>
    )
}

export default User