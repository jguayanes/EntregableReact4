import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { emptyFormValues } from "../shared/resetValues";

const UserForm = ({
  createUser,
  isShowModal,
  setIsShowModal, 
  updateUser, 
  isUserUpdate,
  setIsUserUpdate}) => {

const {
  handleSubmit, 
  register,
  reset, 
} = useForm();

const submit = (data) => {
  if (isUserUpdate){
    updateUser(data, reset);
  } else {
    createUser(data, reset);
  }
}
const handleClickCloseModal = () =>{
    setIsShowModal(false)
    reset(emptyFormValues)
    setIsUserUpdate(null)
};

useEffect(() =>{
  if (isUserUpdate){
    reset(isUserUpdate)
  }
}, [isUserUpdate])

  return (
    <section className={
      `fixed bg-black/60 top-0 bottom-0 left-0 right-0 flex justify-center items-center transition-[opacity_transform] duration-200 ${
        isShowModal
          ? "visible opacity-100 scale-200"
          : "invisible opacity-0 scale-0"
      }`
    }>
      <form onSubmit={handleSubmit(submit)} className="bg-white grid gap-4 p-5 rounded-md relative w-[319px] h-[531px]">
        <button onClick={handleClickCloseModal} type="button" className="text-black absolute top-2 right-3 text-lg font-bold">
          X 
        </button>
        <h2 className="font-bold text-2xl p-2">{isUserUpdate ? "Actualizar usuario" : "Nuevo usuario"}</h2>
        <div className="grid"> 
          <label htmlFor="first_name">Nombres</label>
          <input className="outline-none border-[1px] border-black p-1" id="first_name" type="text" {...register("first_name")} />
        </div>
        <div className="grid">
          <label htmlFor="last_name">Apellidos</label>
          <input  className="outline-none border-[1px] border-black p-1" id="last_name" type="text" {...register("last_name")}/>
        </div>
        <div className="grid">
          <label htmlFor="email"> Email</label>
          <input  className="outline-none border-[1px] border-black p-1" id="email" type="text" {...register("email")}/>
        </div>
        <div className="grid">
          <label htmlFor="password">Contraseña</label>
          <input className="outline-none border-[1px] border-black p-1" id="password" type="password" {...register("password")}/>
        </div>
        <div className="grid">
          <label htmlFor="birthday">Fecha de cumpleaños</label>
          <input  className="outline-none border-[1px] border-black p-1" id="birthday" type="date" {...register("birthday")}/>
        </div>
        <button className="bg-[#555A88] text-white p-2">
        {isUserUpdate ? "Guardar cambios" : "Agregar nuevo usuario"}
        </button>
      </form>
    </section>
  )
}

export default UserForm