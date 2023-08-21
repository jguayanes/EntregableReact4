

const UserCard = ({user, deleteUser, handleClickUpdateUser }) => {
  return (
    <article className="p-9 grid gap-1 border-2 border-slate-200 sm:w-[381px] h-[260px]">
      <h2 className="font-semibold text-[18px]">{`${user.first_name } ${user.last_name}`}</h2>
      <hr />
      <div>
        <h3 className="text-slate-400/40 text-lg">Correo</h3>
        {user.email}
      </div>
      <div>
        <h3 className="text-slate-400/40 text-lg">Cumpleaños</h3>
        <div className="flex gap-2">
        <img src="/icon2.svg" alt="" />{user.birthday}
        </div>
      </div>
      <hr />
      <div className="flex gap-3 place-content-end">
      <button onClick={() => deleteUser(user.id)} className="bg-red-500 rounded-md w-[40px] h-[30px] grid items-center justify-center "> <img src="/icon3.svg" alt="" /> </button>
      <button onClick={() => handleClickUpdateUser(user)} className="bg-gray-400 rounded-md w-[40px] h-[30px] grid justify-center items-center "><img src="/icon1.svg" alt="" /></button>
      </div>
    </article>
  )
}

export default UserCard