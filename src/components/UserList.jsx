import UserCard from "./UserCard"

const UserList = ({users, deleteUser, handleClickUpdateUser }) => {
  return (
    <section className="grid items-center justify-center gap-8 p-5 md:grid md:grid-cols-3 ">
        {
            users.map((user) => (
                <UserCard key={user.id}
                user={user}
                deleteUser={deleteUser}
                handleClickUpdateUser={handleClickUpdateUser}
                />
            ))
        }
    </section>
  )
}

export default UserList